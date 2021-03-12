# 属性

> 罗列一些比较新的，或者偶尔知道的`css`技巧和属性。

## object-fit

[object-fit](https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-fit)

`object-fit` `CSS` 属性指定可替换元素的内容应该如何适应到其使用的高度和宽度确定的框。

比如用于`img`标签，`img`标签中的图片就可以认为是可替换元素的内容，框就是可以理解为`img`标签的大小。

`object-fit`属性用于`img`标签的话，简单来说就是`img`标签中的元素(图片内容)如何在`img`标签框中进行展示。

您可以通过使用 `object-position` 属性来切换被替换元素的内容对象在元素框内的对齐方式。

::: tip
`object-fit`属性是响应式的，会根据框大小变化而变化对应匹配内容。
:::