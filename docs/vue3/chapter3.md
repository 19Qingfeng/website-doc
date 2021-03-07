# v-model

## 表单元素上使用 v-model

表单元素上的`v-model`使用相较于 2.x 没有大的变化,原理也是相同的。

## 自定义组件上使用 v-model

::: tip
3.0 版本中自定义组件中使用`v-model`需要两个步骤：

- 组件上使用 v-model 传递值。
- 默认子组件使用`modelValue`接受，然后通过组件内部触发`emit('update:modelValue',val)`进行更新父组件值。

:::

自定义组件上的`v-model`相较于 2.x 发生了本质上的变化，**同时移除了 2.x 的 sync 修饰符使用 v-model 进行了代替**。

[v-model3.0 文档](https://vue3js.cn/docs/zh/guide/migration/v-model.html#%E6%A6%82%E8%A7%88)

- 非兼容：用于自定义组件时，v-model prop 和事件默认名称已更改：
- prop：value -> modelValue；
- event：input -> update:modelValue；
- 非兼容：v-bind 的 .sync 修饰符和组件的 model 选项已移除，可用 v-model 作为代替；
- 新增：现在可以在同一个组件上使用多个 v-model 进行双向绑定；
- 新增：现在可以自定义 v-model 修饰符。

### v-model 原理

在 3.x 中，**自定义组件上的 v-model 相当于传递了 `modelValue prop` 并接收抛出的 `update:modelValue` 事件：**

```html
<ChildComponent v-model="pageTitle" />

<!-- 简写: -->

<ChildComponent
  :modelValue="pageTitle"
  @update:modelValue="pageTitle = $event"
/>
```

### v-model 参数

若需要更改 model 名称，而不是更改组件内的 model 选项，那么现在我们可以将一个 argument 传递给 model：

```html
<ChildComponent v-model:title="pageTitle" />

<!-- 简写: -->

<ChildComponent :title="pageTitle" @update:title="pageTitle = $event" />
```

### 使用多个 v-model

这也可以作为 .sync 修饰符的替代，而且允许我们在自定义组件上使用多个 v-model。

```html
<ChildComponent v-model:title="pageTitle" v-model:content="pageContent" />

<!-- 简写： -->

<ChildComponent
  :title="pageTitle"
  @update:title="pageTitle = $event"
  :content="pageContent"
  @update:content="pageContent = $event"
/>
```

### v-model 修饰符

除了像 .trim 这样的 2.x 硬编码的 v-model 修饰符外，现在 3.x 还**支持自定义修饰符**：

```html
<ChildComponent v-model.capitalize="pageTitle" />
```
