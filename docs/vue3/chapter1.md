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
