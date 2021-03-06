# HTML & CSS

## HTML 优化

- 减少`iframe`使用，额外添加了一个文档阻碍了父文档的过程。如果`iframe`没有加载完成父文档`load`事件也不会触发。

> 当然如果业务上一定要使用`iframe`，那么最好做一个延迟加载。不要一上来就加载，当父文档 load 事件加载完成后，拿到`iframe`元素再给他的 src 属性赋值。这样就不会阻塞父文档加载。

- 压缩空白符。

- 避免深层次的嵌套

> 去掉无意义的标签嵌套，节点越多生成 DOM 树占用的内存就会越高，遍历时就会越慢。

- 避免`table`布局。

> table 布局本身就有很多问题，不说灵活性，他造成的性能损耗非常大。

- 删除无效注释

- CSS & Javascript 尽量使用外链。

- 删除元素无效属性。

> 有一些属性不用填就是默认的，那么在多余写他的话也会增加解析时候消耗。

## CSS 优化

老生常淡，尽量使用高效率选择器。也就是 css 解析是从右向左进行解析的，比如

```css
.wrapper p {
}
```

> 这块代码有优先找到所有所有的 p 标签，然后再去查找.wrapper。

::: tip
这个优化点在 13 年已经被 google 已经被删除掉了，现代浏览器中这个问题已经不是最主要的原因了。
:::

- 降低 css 对阻塞的渲染。

- 利用`GPU`进行完成动画。(不进行回流和重绘直接进行符合的）

- 使用`contain`属性

> CSS contain 属性允许开发者声明当前元素和它的内容尽可能的独立于 DOM 树的其他部分。这使得浏览器在重新计算布局、样式、绘图、大小或这四项的组合时，只影响到有限的 DOM 区域，而不是整个页面，可以有效改善性能。

关于`contain`属性

看看下个`chapter`

+ 使用`font-display`
