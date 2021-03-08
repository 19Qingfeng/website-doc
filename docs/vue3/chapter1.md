# ref & reactive

::: tip
`ref`和`reactive`这两者在`vue3`中都是用来将数据进行响应式的`api`。
`ref`通常用于基本数据类型的响应式。
`reactive`通常用于复制数据类型的响应式。
:::

## ref

```js
import { ref } from "vue";
const count = ref(0);
```

## reactive

```js
import { reactive } from "vue";
const countData = reactive({
  count: 1,
  total: 10,
});
```

## 区别

### 用法

- `ref`在函数中需要使用`value`属性操作，而`reactive`不需要。

- `reactive`直接结构后，结构后的对象就是非响应式的数据了。需要额外对于`reactive`的数据进行调用`toRefs()`方法后在进行结构才能保持响应式对象。

::: tip
`reactive`直接结构后，解构后的对象就是非响应式的数据了。需要额外对于`reactive`的数据进行调用`toRefs()`方法后在进行结构才能保持响应式对象。

同理，`props`传入的对象具有和`reactive`对象相同的使用方式，对于`props`整体对象来说和`reactive`同样是响应式的，但是拆分开来或者解构之后就并非响应式，同样需要使用`toRefs`对象进行调用后才可以单独使用才可以达到和父元素传递属性响应式。
:::

比如：

```js
import { reactive, toRefs, computed } from "vue";
const data: DataProps = reactive({
  count: 0,
  increase: () => {
    data.count++;
  },
  double: computed(() => {
    return data.count * 2;
  }),
});
// 调用了toRefs后结构的refData中每一项才是响应式的
// toRefs方法就相当于对于reactive的对象中的每一项进行调用ref方法
const refData = toRefs(data);
return {
  ...refData,
};
```

他俩的区别就好比这段 js 代码进行区别:

- ref

```js
let x = 0; // 响应式对象
let y = 0; // 响应式

function updateValue() {
  x = 10; // 更新原本x的值
  y = 10; // 更新原本y的值
}
```

- reactive

```js
const object = {
  x: 0,
  y: 0,
};

function updateValue() {
  object.x = 10; // 更新object中x的值
  object.y = 10; // 更新object中y的值
}
```

> 所以通过这段代码看出来，如果使用解构`reactive`对象，或者`a=object.x`，那么相当于重新生成了一个新的值，原本`object`中的属性改变就和新的值没有任何关系了，故而也不是响应式对象了。

## 使用

::: tip
`vue3`中关于`ref`和`reactive`这两种方式，

既可以对于基本类型使用`ref`，原始类型使用`reactive`，但是解构时候记得使用`toRefs`方法保证`reactive`响应式。

当然也可以全部使用`reactive`，也配合需要`toRefs`方法。

这种没有强制规则，根据自己的编程习惯选择方法。

https://juejin.cn/post/6860349065742745613#heading-5
:::

> ref 在源代码中其实使用的是 reactive 的代码。所以其实它两确实是可以混用的。

> 其实它两看成 js 中的 原始类型（ref）和引用类型 （reacitve），**reacitve 而且是不能接受一个原始类型作为参数的。**所以这两个不同的 API 其实创造了两种使用的语境。

![企业微信截图_906e74f6-c4ae-4d70-93f6-38dac6a7a012.png](https://i.loli.net/2021/03/04/87yhXMVPErBsDnf.png)

> 额外注意下，`composition Api`中不存在 `created`和`beforeCreated`这两个生命周期，因为`setup`函数的周期和这两个函数的周期特别相近，所以直接写在`setup`中就可以了。

> onUpdated 在页面数据变化之后就会触发，比如事件触发数据改变页面渲染，或者`onMounted`中改变数据导致页面刷新也会触发。
> **页面数据刷新改变**，首次渲染不会触发`onUpdated`，所以`created`中`setup`中都不会触发的。

> vue3 额外增加了两个生命周期，`onRenderTracked`和`onRenderTriggered`用于调试，接受一个参数，这个参数可以查看关于数据改变产生渲染的数据详情。

## `toRef`和`toRefs`

### toRef

::: tip
简单理解`toRef`就是对于对象属性的引用，`const result = toRef(target,key)`之后`result`的修改就会映射到`target`中`key`的修改。
此时，如果`target`是响应式对象，那么修改`result`后`target`的`key`改变那么就会更新页面，如果`target`并不是响应式对象，那么修改`result`仅仅只会改变`target`的`key`值，页面并不会刷新。(原本对象是非响应式)

> `const result = toRef(object,key)`方法，生成引用。实质上修改`result.value`也就是修改`object[key]`的值。

:::

`toRef()` 是一个函数，返回一个 `ToRef` 对象。使用语法是
`const result = toRef(target, "key");`

- ToRef 对象并不是 Ref 对象；我们通过 ref() 函数创建的对象一定是响应式的数据，数据被修改了，会直接反应在页面上。

- ToRef 对象不一定是响应式的数据，这个要看 target 的数据是否是响应式的。

- target 如果是响应式对象（reactive 或者 ref 创建的对象）的话，那么 result 也是响应式对象。

* toRef() 函数是对 target 的一种映射；result 的内容修改的时候，target 也会被修改；反过来也是一样的，target 被修改了，result 内容也会被修改。

- **对于`reactive object`上并不存在的属性，调用`toRef(object,key)`生成的属性才会是响应式的，`toRefs(obj)`仅仅会将`reactive obj`中已有的属性进行响应式劫持。**

这个用法同样可以在`props`中使用。当解构`props`时，由于有一些属性并没有传递初始值。所以调用`toRefs`解构可能会导致丧失响应式。

使用`toRef`可以很好的解决这个问题。

> `toRef` will return a usable ref even if the source property doesn't currently exist. This makes it especially useful when working with optional props, which wouldn't be picked up by toRefs.(vue3 文档)
> 即使原本属性上不存在`toRef(obj,key)`的`key`，`toRef(obj.key)`也会返回一个可用的的`ref`对象。（尤其在没有传入初始化值的`props`中）

比如:

```js
/* toRefs */
const obj = reactive({ name: "wanghaoyu" });
const toRefsObj = toRefs(obj);
const age = toRefObj.age; // 原本obj上并不存在age 并不会创建新的响应式属性
age.value = 10; // 此时并不会触发页面更新

/* toRef */
const obj = reactive({ name: "wanghaoyu" });
const toRefObj = toRef(obj, "age");
const age = toRefObj.age; // 原本obj上并不存在age,
// 但是调用toRef(obj,a)会在obj上创建一个新的响应式属性
age.value = 10; // 此时会触发页面更新 引用`toRef`也会处理原本对象上不存在的key
```

::: details

```vue
<template>
  <p>{{ a }} <button @click="changeA">changeA</button></p>
  <p>{{ objRef }} <button @click="change">change</button></p>
  <p>
    {{ reactiveRef }} <button @click="changeReactive">changeReactive</button>
  </p>
</template>
<script lang="ts">
import { toRef, reactive, ref } from "vue";

export default {
  setup() {
    //普通对象
    const obj = { name: "zhangsan", age: 12 };
    const objRef = toRef(obj, "name");
    //响应式对象
    const a = ref("hello");
    //响应式对象
    const reactiveObj = reactive({ name: "Willim", age: 6 });
    const reactiveRef = toRef(reactiveObj, "name");
    const changeA = function() {
      //会响应到页面上
      a.value = "Vue 3.0";
    };
    const change = function() {
      //会影响 obj 的值，但是不会响应到页面上
      objRef.value = "lisi";
      console.log(obj);
    };
    const changeReactive = function() {
      //会影响 reactiveObj 的值，但是不会响应到页面上
      reactiveRef.value = "lisi";
      console.log(reactiveObj);
    };
    return {
      objRef,
      reactiveRef,
      change,
      changeReactive,
      a,
      changeA,
    };
  },
};
</script>
```

点击 changeA 会立即响应到页面上；点击 change 并不会立即响应到页面；当我们点击 changeReactive 按钮的时候由于改变了响应式的数据，所以会导致 update 页面上的数据，所以 zhangsan 和 Willim 都被更新。

::: tip
需要注意的是,当页面上触发更新的时候(响应式数据改变更新页面)，此时如果非响应式数据值已经发生了改变，那么也会同步刷新(计算)非响应数据在页面上的值。

但是如果仅仅是非响应式数据改变是不会更新页面的，只有响应式改变才会顺道刷新页面，更新非响应式已经改变了的值。
:::

### toRefs

`toRefs()` 函数与 `toRef()` 很相似。`toRef()` 剥离的是对象的某个属性，`toRefs()` 剥离的是对象的所有属性，返回一个新对象。

- toRefs() 函数用法是 `const result = toRefs(target);` target 的每个属性都会被转换为 ToRef 对象。

- 同 toRef() 一样，如果原始数据 target 具有响应式的，那么 result 也是响应式；如果 target 是普通对象，那么 result 也是普通对象，不具有响应式。

- 由于 toRefs() 函数返回的是一个对象，对象每个属性都是 ToRef 对象。我们知道 ... 解构对象是浅拷贝，所以使用 toRefs() 函数，我们可以对响应式的数据进行解构

## 源码

我们来看看`toRef`的源码就能理解`toRef`和`ref`的区别了。(`toRefs`本质上是对`reactive`对象上所有的属性进行`toRef`，也会说)。

### `toRef`

```js

class ObjectRefImpl {
    constructor(_object, _key) {
        // object 记录引用
        this._object = _object;
        this._key = _key;
        this.__v_isRef = true;
    }
    get value() {
        // 访问引用对象的属性
        return this._object[this._key];
    }
    set value(newVal) {
        // 修改引用的值
        this._object[this._key] = newVal;
    }
}

function toRef(object, key) {
    return isRef(object[key])
        ? object[key]
        : new ObjectRefImpl(object, key);
}

...


```

通过上述代码我们可以看到，对于`toRef`这个方法，如果传递的`object[key]`已经是响应式`ref`对象那么直接返回。如果`obj[key]`并不是一个响应式，那么会调用`new ObjectRefImpl`方法创建一个新的对象进行返回。

这个新的对象`ObjectRefImpl`基于这个类进行创建。内部很简单，主要来看`value`属性的`get`和`set`方法。

当访问返回对象的`value`属性时触发`get`，实质内部访问了`toRef(object,key)`中传入的`object[key]`的值，当调用`set`方法时，实质上等于修改了`toRef(object,key)`方法中`object[key]`---`object[key]=newValue`，修改了原本响应式对象上的值。

> 所以才说`toRef`方法实质上是对于传入对象的引用。

同时也可以看到`toRef`对于原本`Object`上不存在的属性也会创建对应的`key`(当调用`set value`时，会在原本`reactive object`中创建一个新的属性。因为 Vue3 使用 Proxy 监听的是整个对象，所以对于`object`新增的属性确保了响应式。)

### `toRefs`

```js
function toRefs(object) {
  if (!isProxy(object)) {
    console.warn(
      `toRefs() expects a reactive object but received a plain one.`
    );
  }
  const ret = isArray(object) ? new Array(object.length) : {};
  for (const key in object) {
    ret[key] = toRef(object, key);
  }
  return ret;
}
```

可以看到`toRefs`源码，传入一个`Object`。首先检查这个`obj`是否是一个响应式对象，如果对于一个响应式对象调用`toRefs`方法会打出一行警告。

其实内部也就是对于`object`每一个`key`进行`toRef`属性的调用。

`toRefs`对于`reactive object`中不存在的属性就不会变成响应式，
因为`toRefs`本质上是对于`object`属性的遍历，如果不存在那么就不会创建。

> toRef will return a usable ref even if the source property doesn't currently exist. This makes it especially useful when working with optional props, which wouldn't be picked up by toRefs.
