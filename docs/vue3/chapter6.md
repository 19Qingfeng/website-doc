# ref & mount

## ref 节点

`ref`对象如果同一个页面出现多个相同的`ref`节点标识，那么只会以最后一个`ref`的元素有效。同时一些`[ref].value.children`...属性。之前这个概念忘记了，复习下。

以及注意`ref`作用域，仅仅在当前组件有效，出了当前组件`ref`重复没有影响。

## mount 方法

`mount` 方法 返回根组件实例，

`const instance = app.mount('#app')`

**返回**`app`的根组件实例，比如`import app from './app.vue`

那么`instance`就是`app.vue`的根组件实例对象。

**app.mount(string|dom)**,会将`app`组件挂载在传入的`DOM元素(或者querySelect后的DOMString)`，并且将参数`DOM`对象的内容`innerHTML`替换成为根组件实例渲染后的的内容。

> 如果`mount`不传递参数，vue3-beta 版本返回的是 undefined。

返回的根组件实例可以通过`$el`属性访问，根组件实例挂载的`DOM`元素。(渲染后的 DOM 实例)，这样就可以通过`document.body.appendChild(app.mount(document.createElement('div').$el)))`进行渲染。

::: tip
需要注意的是`mount`传入的参数如果页面上有对应的`DOM`渲染，那么会直接挂载渲染到页面上。没有的同时也会挂载在传入的`DOM`元素中但是并不会在页面上渲染(因为页面上没有这个元素嘛)。
:::

id 为 app 的 DOM 元素的 innerHTML 内容将会被替换成为 app 根组件实例渲染后的内容,同时返回 app 根组件实例。(组件内容会被渲染到挂载元素上(以 DOM 形式渲染),返回根组件实例。)

instance.\$el 返回组件实例渲染的根 DOM 元素(并非挂载元素。而是组件的根组件 DOM 元素.)

::: warning
`app.mount(domEle)`返回返回的是 app 根组件实例,将 app 根组件实例挂载在了`domEle`上。和`domEle`的关系仅仅是将`domEle`的`innerHTML`进行替换为根组件。

`instance.$el`返回的是渲染后的根组件实例 DOM 元素(app),而非挂载的 DOM 元素(domEle)。

:::

::: tip
利用`createApp()`,`mount`,`$el`可以更优雅的做一些通过 JS 操作的组件，以及自定义指令的 DOM 选项。
:::

`$el`

> The root DOM element that the component instance is managing.

> For components using fragments, $el will be the placeholder DOM node that Vue uses to keep track of the component's position in the DOM. It is recommended to use template refs for direct access to DOM elements instead of relying on $el.

`mount`

- Arguments:

```
{Element | string} rootContainer
{boolean} isHydrate (optional)
```

Returns:

The root component instance
+Usage:

> The innerHTML of the provided DOM element will be replaced with the rendered template of the application root component.

- Example:

```html
<body>
  <div id="my-app"></div>
</body>
import { createApp } from 'vue' const app = createApp({}) // do some necessary
preparations app.mount('#my-app')
```
