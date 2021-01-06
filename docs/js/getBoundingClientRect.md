# Element.getBoundingClientRect

Element.getBoundingClientRect() 方法返回元素的大小及其相对于**视口**的位置。

> element.getBoundingClientRect()返回的相对于视口左上角的位置。

**element.getBoundingClientRect()返回的 height 和 width 是针对元素可见区域的宽和高(具体尺寸根据 box-sizing 决定)，并不包含滚动条被隐藏的内容。**

::: tip
如果是标准盒子模型，元素的尺寸等于 width/height + padding + border-width 的总和。如果 box-sizing: border-box，元素的的尺寸等于 width/height。
:::

::: warning
该 API 返回的 DOMRect 对象在现代浏览器中可以被修改。而对于返回值为 DOMRectReadOnly 的旧版本，返回值并不能被修改
:::

```js
rectObject = object.getBoundingClientRect();
```

返回值是一个 DOMRect 对象，这个对象是由该元素的 getClientRects() 方法返回的一组矩形的集合，就是该元素的 CSS 边框大小。返回的结果是包含完整元素的最小矩形，并且拥有 left, top, right, bottom, x, y, width, 和 height 这几个以像素为单位的只读属性用于描述整个边框。除了 width 和 height 以外的属性是相对于视图窗口的左上角来计算的。（width 和 height 是当前元素显示的大小，并不计算元素滚动条被隐藏的高和宽）

当计算边界矩形时，会考虑视口区域（或其他可滚动元素）内的滚动操作，**也就是说，当滚动位置发生了改变，top 和 left 属性值就会随之立即发生变化（因此，它们的值是相对于视口的，而不是绝对的）**。如果你需要获得相对于整个网页左上角定位的属性值，那么只要给 top、left 属性值加上当前的滚动位置（通过 window.scrollX 和 window.scrollY），这样就可以获取与当前的滚动位置无关的值。

![](https://mdn.mozillademos.org/files/15087/rect.png)
