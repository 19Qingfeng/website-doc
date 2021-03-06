# 响应式对象

首先 Vue 中实现响应式对象在 2.X 中使用的是`Object.defineProperty`这个 API 去实现的。

3.0 中使用的是 ES6 的 Proxy 代理 api。

- Object.defineProperty
  该方法会直接在一个对象上定义一个新的属性，或者修改现有的属性，并返回这个对象。

`Object.defineProperty(obj,prop,descriptor)`

obj 为要修改的对象，prop 为要修改的属性，descriptor 是该对象上针对于 prop 的描述符。

[descriptor](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)有很多属性，具体可以查看文档。

Vue 中响应式原理对于 descriptor 的操作更多的是集中在 get 和 set 中，可以简单的认为一旦一个对象拥有了 get 和 set 就可以将该对象看作响应式对象。

Vue 中对于一个对象的观察者，响应式的创建是基于 Observer 这个类。

## Observer

```ts
export class Observer {
  value: any;
  dep: Dep;
  vmCount: number; // number of vms that have this object as root $data

  constructor(value: any) {
    this.value = value;
    this.dep = new Dep();
    this.vmCount = 0;
    // 相当于object.defineProperty(value,'__ob__',{ value:this , enumerable:false})
    // 保存__ob__当前实例对象 避免多次进行响应式对象处理
    // 思考1: 为什么不直接调用value.__ob__ = this 而需要使用def?
    def(value, "__ob__", this);
    if (Array.isArray(value)) {
      if (hasProto) {
        protoAugment(value, arrayMethods);
      } else {
        copyAugment(value, arrayMethods, arrayKeys);
      }
      this.observeArray(value);
    } else {
      this.walk(value);
    }
  }

  /**
   * Walk through all properties and convert them into
   * getter/setters. This method should only be called when
   * value type is Object.
   */
  walk(obj: Object) {
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
      // defineReactive是将对象变成响应式的
      defineReactive(obj, keys[i]);
    }
  }

  /**
   * Observe a list of Array items.
   * 遍历数组 将数组中的每个元素进行observe
   * observe最终处理成为defineReactive变成响应式对象
   */
  observeArray(items: Array<any>) {
    for (let i = 0, l = items.length; i < l; i++) {
      observe(items[i]);
    }
  }
}
```

- 解决思考 1

之所以使用了 def 因为 def()方法定义对象的值时，默认使用了`enumerable:false`不可枚举，所以当 value 是一个对象的时候，调用`walk(value)`方法的时候，传入了一个对象通过 Object,keys()取的时候因为是不可枚举所以取不到**ob**,如果使用`obj[key]=value`那么就可以取到了。

observe 方法

```ts
/**
 * 试图对于value进行观察
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
export function observe (value: any, asRootData: ?boolean): Observer | void {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  let ob: Observer | void
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value)
  }
  if (asRootData && ob) {
    ob.vmCount++
  }
  return ob
}
```

## defineReactive

Observer 类的 observe()方法最终对于对象上每个属性调用了 defineReactive 进行响应式处理。

```js
/**
 * Define a reactive property on an Object.
 */
export function defineReactive(
  obj: Object,
  key: string,
  val: any,
  customSetter?: ?Function,
  shallow?: boolean
) {
  const dep = new Dep();
  // 拿到所有标识符
  const property = Object.getOwnPropertyDescriptor(obj, key);

  // 不可配置对象直接return
  if (property && property.configurable === false) {
    return;
  }

  // cater for pre-defined getter/setters
  const getter = property && property.get;
  const setter = property && property.set;
  // 只有setter没有getter 并且传入了obj和key
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }
  // childOb 递归进行observe
  let childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    // getter依赖收集
    get: function reactiveGetter() {
      const value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value;
    },
    // setter派发更新
    set: function reactiveSetter(newVal) {
      const value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return;
      }
      /* eslint-enable no-self-compare */
      if (process.env.NODE_ENV !== "production" && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) return;
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    },
  });
}
```
