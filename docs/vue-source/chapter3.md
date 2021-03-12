# Vue3 reactive 源码

## reactive 源码解析

### reactive

```ts
export function reactive<T extends object>(target: T): UnwrapNestedRefs<T>;
export function reactive(target: object) {
  // if trying to observe a readonly proxy, return the readonly version.
  // reactive 不处理 已经处理过的 对象
  if (target && (target as Target)[ReactiveFlags.IS_READONLY]) {
    return target;
  }
  // proxy对象 -- createReactiveObject
  return createReactiveObject(
    target,
    false,
    mutableHandlers,
    mutableCollectionHandlers
  );
}
```

先来看看`reactive`定义的方法。

首先对于`vue`将普通对象转化为响应式对象的过程中，会在生成的响应式对象中挂在一些属性`ReactiveFlags.IS_READONLY`标示已经被`reactive`函数或者其他类型`reactive`处理过了。

`reactive`核心方法就是`createReactiveObject`

- `target` 原始对象

- `false` 是否是 readonly 处理

- `mutableHandlers` 对于`object | array`类型的处理。

- `mutableCollectionHandlers`对于`Map | Set | WeakMap | WeakSet`响应式对象的处理方法。

`createReactiveObject`返回的就是一个 ES6 的`proxy`的值。通过各种陷阱进行代理从而达成响应式。

`mutableHandlers`和`mutableCollectionHandlers`就是`Proxy`对象的代理(陷阱)函数定义。

### createReactiveObject

```ts
function createReactiveObject(
  target: Target,
  isReadonly: boolean,
  baseHandlers: ProxyHandler<any>,
  collectionHandlers: ProxyHandler<any>
) {
  if (!isObject(target)) {
    if (__DEV__) {
      console.warn(`value cannot be made reactive: ${String(target)}`);
    }
    return target;
  }
  // target is already a Proxy, return it.
  // exception: calling readonly() on a reactive object
  // 判断已经是是否是proxy对象

  // 可以继续执行不return的情况只有两种情况
  // 1. 非reactive 的对象
  // 2. 是reactive 但是进行处理的函数是isReadonly函数
  if (
    target[ReactiveFlags.RAW] &&
    !(isReadonly && target[ReactiveFlags.IS_REACTIVE])
  ) {
    return target;
  }
  // target already has corresponding Proxy
  const proxyMap = isReadonly ? readonlyMap : reactiveMap;
  const existingProxy = proxyMap.get(target);
  if (existingProxy) {
    return existingProxy;
  }
  // only a whitelist of value types can be observed.
  const targetType = getTargetType(target); // 普通obj返回1 map set weakset weakmap返回2
  if (targetType === TargetType.INVALID) {
    return target;
  }
  const proxy = new Proxy(
    target,
    targetType === TargetType.COLLECTION ? collectionHandlers : baseHandlers
  );
  proxyMap.set(target, proxy);
  return proxy;
}
```

方法前边的`if`判断基本就是使用对于`obj`是否需要进行`reactive`进行判断的。

```ts
export const toRawType = (value: unknown): string => {
  // extract "RawType" from strings like "[object RawType]"
  return toTypeString(value).slice(8, -1);
};
```

`getTargetType`方法中通过`Object.prototype.toString.call(target).slice(8, -1)`截取`target`类型通过类型判断

```ts
const proxy = new Proxy(
  target,
  targetType === TargetType.COLLECTION ? collectionHandlers : baseHandlers
);
```

如果是`Set | Map | WeakSet | WeakMap`就会调用`collectionHandlers`。

普通`object | Array`进行`proxy`处理的时候调用`baseHandlers`。

通过`proxyMap.set(target, proxy)`保存同一个对象已经生成过的`proxy`对象，当以后再次对同一个对象进行`proxy`时并不会重新处理而是直接取出。

最终`return proxy`这个响应式对象。

所以我们主要来看看`baseHandlers`这个方法。(`baseHandlers`其实就是传入的`mutableHandlers`)

### mutableHandlers

在`src/baseHandle`中

```ts
export const mutableHandlers: ProxyHandler<object> = {
  get,
  set,
  deleteProperty,
  has,
  ownKeys,
};
```

`mutableHandlers`这是它的定义函数，我们先来看看`get`的定义。

### createGetter

`const get = /*#__PURE__*/ createGetter()`

```ts
function createGetter(isReadonly = false, shallow = false) {
  return function get(target: Target, key: string | symbol, receiver: object) {
    if (key === ReactiveFlags.IS_REACTIVE) {
      return !isReadonly;
    } else if (key === ReactiveFlags.IS_READONLY) {
      return isReadonly;
    } else if (
      key === ReactiveFlags.RAW &&
      receiver === (isReadonly ? readonlyMap : reactiveMap).get(target)
    ) {
      return target;
    }

    const targetIsArray = isArray(target);

    if (!isReadonly && targetIsArray && hasOwn(arrayInstrumentations, key)) {
      return Reflect.get(arrayInstrumentations, key, receiver);
    }

    const res = Reflect.get(target, key, receiver);

    if (
      isSymbol(key)
        ? builtInSymbols.has(key as symbol)
        : isNonTrackableKeys(key)
    ) {
      return res;
    }

    if (!isReadonly) {
      // track作用很重要 响应式的收集
      // 当非readonly操作的时候 调用就会跟踪 类型为get 以及target(proxy对象)上的key
      // 当target.key改变的时候 模板就会重新渲染
      track(target, TrackOpTypes.GET, key);
    }

    if (shallow) {
      return res;
    }

    // 如果值是 ref对象
    if (isRef(res)) {
      // ref unwrapping - does not apply for Array + integer key.
      // 简单来说 对于reactvie对象中的ref 只要不是一个数组操作
      // 那么就返回 ref.value 如果是那么就返回ref
      const shouldUnwrap = !targetIsArray || !isIntegerKey(key);
      return shouldUnwrap ? res.value : res;
    }

    // 如果是一个reactive对象中还有一个普通对象
    // 那么对于reatvie中的普通对象的访问 仍然会把它变成一个reactive对象进行包裹
    if (isObject(res)) {
      // Convert returned value into a proxy as well. we do the isObject check
      // here to avoid invalid value warning. Also need to lazy access readonly
      // and reactive here to avoid circular dependency.
      return isReadonly ? readonly(res) : reactive(res);
    }

    return res;
  };
}
```

`createGet`方法就会返回`vue`中对于`reactive`对象进行的`get`陷阱。

首先来看看

#### 内置类型 key 判断

```ts
if (key === ReactiveFlags.IS_REACTIVE) {
  return !isReadonly;
} else if (key === ReactiveFlags.IS_READONLY) {
  return isReadonly;
} else if (
  key === ReactiveFlags.RAW &&
  receiver === (isReadonly ? readonlyMap : reactiveMap).get(target)
) {
  return target;
}
```

这段代码，对于判断是否是`readonly`以及是否是`key === ReactiveFlags.RAW`访问`proxy`对象上的`ReactiveFlags.RAW`时返回原本的`target`。

这里有一个小点，我们并没有在原本的`target`对象上挂载了一个`ReactiveFlags.RAW`的属性，而是通过`get`陷阱进行`key`的判断，如果`key === ReactiveFlags.RAW`那么就会返回原本的对象。

所以`new Proxy`并不会修改原始的属性对象。

#### indexOf,lastIndexOf,includes

```ts
const targetIsArray = isArray(target);

if (!isReadonly && targetIsArray && hasOwn(arrayInstrumentations, key)) {
  return Reflect.get(arrayInstrumentations, key, receiver);
}
```

这段代码对于`reactive`传入的对象是否是一个数组，如果是一个数组的话。那么它会对数组做检查，`hasOwn(arrayInstrumentations, key)`这个方法会对于数组属性(方法在`proxy`的`get`陷阱上也算做属性访问)进行检查。

```ts
const arrayInstrumentations: Record<string, Function> = {};
// instrument identity-sensitive Array methods to account for possible reactive
// values
(["includes", "indexOf", "lastIndexOf"] as const).forEach((key) => {
  const method = Array.prototype[key] as any;
  arrayInstrumentations[key] = function(this: unknown[], ...args: unknown[]) {
    const arr = toRaw(this);
    for (let i = 0, l = this.length; i < l; i++) {
      track(arr, TrackOpTypes.GET, i + "");
    }
    // we run the method using the original args first (which may be reactive)
    const res = method.apply(arr, args);
    if (res === -1 || res === false) {
      // if that didn't work, run it again using raw values.
      return method.apply(arr, args.map(toRaw));
    } else {
      return res;
    }
  };
});
```

:::tip

如果访问的是数组的`includes`,`indexOf`,`lastIndexOf`，`vue3`对于数组这三种`api`的访问进行了特殊的操作而进行了返回,数组的其他方式都是正常的`proxy`处理。

:::

#### track 追踪

之后如果不是上边一些特殊的`key`那么就会取到`proxy`对应的`key`值,进行操作。

`const res = Reflect.get(target, key, receiver)`

```ts
if (!isReadonly) {
  // track作用很重要 响应式的收集
  // 当非readonly操作的时候 调用就会跟踪 类型为get 以及target(proxy对象)上的key
  // 当target.key改变的时候 模板就会重新渲染
  track(target, TrackOpTypes.GET, key);
}
```

::: tip
`track`方法就是设置响应式跟踪，跟踪`target[key]`，类型是`get`。
:::

这里的`track`方法放到后边讲，简单来说就是现在我们调用操作的函数，依赖于对象`target`上的属性`key`。

就比如

```vue
<template>
  <div>{{ obj.name }}</div>
</template>

<script lang="ts">
import { defineComponent, obj } from "vue";

export default defineComponent({
  name: "",
  setup() {
    const obj = reactive({
      name: "1",
    });
    return {
      obj,
    };
  },
});
</script>
```

::: tip

当模版中调用`obj.name`时，因为它是一个`reactive`对象。所以会进行`proxy`对象中的`get`陷阱。此时就会进入`track(obj, TrackOpTypes.GET, name);`就会造成模板编译后的`render`函数就会追踪`obj`这个属性上`name`的变化的。

这就是`track`的作用。

> 注意`const result = reactive(obj)`对象的的改变是会影响原本 obj 的改变的。

> obj.name='1' // result.name 1

:::

#### isRef 判断

之后进入`isRef(res)`判断。

```ts
// 如果值是 ref对象
if (isRef(res)) {
  // ref unwrapping - does not apply for Array + integer key.
  // 简单来说 对于reactvie对象中的ref 只要不是一个数组元素操作 比如arr[0]
  // 那么就返回 ref.value 如果是那么就返回ref
  const shouldUnwrap = !targetIsArray || !isIntegerKey(key);
  return shouldUnwrap ? res.value : res;
}
```

判断需要`get`操作的值是否是`ref`对象。如果是`ref`对象，并且访问的并不是数组元素的下标(`int key`)操作那么返回`ref.value`，也就是`reactive`对象中的属性如果`value`是一个`ref`对象，那么调用`obj[key]`时直接返回`obj[key].value`。

否则是一个数组并且调用的是数组[下标]的操作，原封不动的返回。需要再次调用`.value`才能取到值。

最后

#### isObject 判断

```ts
// 如果是一个reactive对象中还有一个普通对象
// 那么对于reatvie中的普通对象的访问 仍然会把它变成一个reactive对象进行包裹
if (isObject(res)) {
  // Convert returned value into a proxy as well. we do the isObject check
  // here to avoid invalid value warning. Also need to lazy access readonly
  // and reactive here to avoid circular dependency.
  return isReadonly ? readonly(res) : reactive(res);
}
```

判断取到的值是否是一个`object`，如果对于`reactive`对象的属性，它的值仍然是一个对象，那么`vue`会再次对于这个对象进行`reactive`进行包装。

最终返回访问的`reactive[key]`的值`res`。
