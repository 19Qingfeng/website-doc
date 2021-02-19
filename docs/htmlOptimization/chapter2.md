# CSS contain

> contain 属性允许我们指定特定的 DOM 元素和它的子元素，让它们能够独立于整个 DOM 树结构之外。目的是能够让浏览器有能力只对部分元素进行重绘、重排，而不必每次都针对整个页面。

## 语法

```css
 {
  /* No layout containment. */
  contain: none;
  /* Turn on containment for layout, style, paint, and size. */
  contain: strict;
  /* Turn on containment for layout, style, and paint. */
  contain: content;
  /* Turn on size containment for an element. */
  contain: size;
  /* Turn on layout containment for an element. */
  contain: layout;
  /* Turn on style containment for an element. */
  contain: style;
  /* Turn on paint containment for an element. */
  contain: paint;
}
```

### contain: size

`contain: size:` 设定了 `contain: size` 的元素的渲染不会受到其子元素内容的影响。

> 简而言之比如子元素宽度增加，即使超出父元素`contain:size`也不会重绘。

假设我们有如下简单结构：

```html
<div class="container"></div>
.container { width: 300px; padding: 10px; border: 1px solid red; } p { border:
1px solid #333; margin: 5px; font-size: 14px; }
```

并且，借助 jQuery 实现每次点击容器添加一个 `<p>Coco</p>` 结构：

```js
$(".container").on("click", (e) => {
  $(".container").append("<p>Coco</p>");
});
```

那么会得到如下结果：

![containsize](https://user-images.githubusercontent.com/8554143/71319376-88825480-24d8-11ea-9fc5-8bad5f516913.gif)

可以看到，容器 .container 的高度是会随着元素的增加而增加的，这是正常的现象

此刻，我们给容器 .container 添加一个 `contain: size`，也就会出现上述说的：**设定了 `contain: size` 的元素的渲染不会受到其子元素内容的影响。**

```css
.container {
  width: 300px;
  padding: 10px;
  border: 1px solid red;
  +contain: size;
}
```

再看看会发生什么：

![size](https://user-images.githubusercontent.com/8554143/71319433-51f90980-24d9-11ea-8469-a5d3f8022028.gif)

正常而言，父元素的高度会因为子元素的增多而被撑高，而现在，子元素的变化不再影响父元素的样式布局，这就是 contain: size 的作用。

### contain: paint

contain: paint：设定了 contain: paint 的元素即是设定了布局限制，也就是说告知 User Agent，此元素的子元素不会在此元素的边界之外被展示，因此，如果元素不在屏幕上或以其他方式设定为不可见，则还可以保证其后代不可见不被渲染。

> This value turns on paint containment for the element. This ensures that the descendants of the containing box don’t display outside its bounds, so if an element is off-screen or otherwise not visible, its descendants are also guaranteed to be not visible.

这个稍微好理解一点，先来看第一个特性：

**设定了 `contain: paint` 的元素的子元素不会在此元素的边界之外被展示**

- 设定了 contain: paint 的元素的子元素不会在此元素的边界之外被展示
-

这个特点有点类似与 `overflow: hidden`，也就是明确告知用户代理，**子元素的内容不会超出元素的边界，所以超出部分无需渲染。**

简单示例，假设元素结构如下：

```html
<div class="container">
  <p>Coco</p>
</div>
.container { contain: paint; border: 1px solid red; } p{ left: -100px; }
```

我们来看看，设定了 contain: paint 与没设定时会发生什么：

![contain:paint](https://user-images.githubusercontent.com/8554143/71319975-06962980-24e0-11ea-9f8f-01e9feb94e82.gif)

**设定了 contain: paint 的元素在屏幕之外时不会渲染绘制**

通过使用 contain: paint， 如果元素处于屏幕外，那么用户代理就会忽略渲染这些元素，从而能更快的渲染其它内容。

### contain: layout

> `contain: layout`：设定了 contain: layout 的元素即是设定了布局限制，也就是说告知 User Agent，此元素内部的样式变化不会引起元素外部的样式变化，反之亦然。

This value turns on layout containment for the element. This ensures that the containing box is totally opaque for layout purposes; nothing outside can affect its internal layout, and vice versa.

启用 contain: layout **可以潜在地将每一帧需要渲染的元素数量减少到少数，而不是重新渲染整个文档，从而为浏览器节省了大量不必要的工作，并显着提高了性能。**

使用 `contain：layout`，开发人员可以指定对该元素任何后代的任何更改都不会影响任何外部元素的布局，反之亦然。

因此，浏览器仅计算内部元素的位置（如果对其进行了修改），而其余 DOM 保持不变。因此，这意味着帧渲染管道中的布局过程将加快。
