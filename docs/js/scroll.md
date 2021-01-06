# scroll 相关属性

## Element.scroll()

> scroll() 方法是用于在给定的元素中滚动到某个特定坐标的 Element 接口。

- x-coord 是指在元素左上方区域横轴方向上想要显示的像素。
- y-coord 是指在元素左上方区域纵轴方向上想要显示的像素。

* or -

options 是一个 ScrollToOptions 的字典。
例子

```js
// 在元素上方显示1000像素
element.scroll(0, 1000);
```

使用 options:

```js
element.scroll({
  top: 100,
  left: 100,
  behavior: "smooth",
});
```

**Element.scrollHeight 这个只读属性是一个元素内容高度的度量，包括由于溢出导致的视图中不可见内容。**

> scrollHeight 的值等于该元素在不使用滚动条的情况下为了适应视口中所用内容所需的最小高度。 没有垂直滚动条的情况下，scrollHeight 值与元素视图填充所有内容所需要的最小值 clientHeight 相同。包括元素的 padding，但不包括元素的 border 和 margin。scrollHeight 也包括 ::before 和 ::after 这样的伪元素。

**Element.scrollWidth 这个只读属性是一个元素内容宽度的度量，包括由于溢出导致的视图中不可见内容。**

> scrollWidth 值等于元素在不使用水平滚动条的情况下适合视口中的所有内容所需的最小宽度。 宽度的测量方式与 clientWidth 相同：它包含元素的内边距，但不包括边框，外边距或垂直滚动条（如果存在）。 它还可以包括伪元素的宽度，例如::before 或::after。 如果元素的内容可以适合而不需要水平滚动条，则其 scrollWidth 等于 clientWidth

::: danger
针对 scrollLeft 和 scrollTop 只有元素具有该属性，window 和 document 都没有。
返回文档/页面水平方向滚动的像素值-使用 window.scrollX/scrollY。
:::

## Element.scrollLeft

Element.scrollLeft 属性可以读取或设置元素滚动条到元素左边的距离。

::: tip
注意如果这个元素的内容排列方向（direction） 是 rtl (right-to-left) ，那么滚动条会位于最右侧（内容开始处），并且 scrollLeft 值为 0。此时，当你从右到左拖动滚动条时，scrollLeft 会从 0 变为负数。
:::

::: details

```js
//获取滚动条到元素左边的距离
const sLeft = element.scrollLeft;
```

sLeft 是一个整数，代表元素滚动条距离元素左边多少像素。

```js
//设置滚动条滚动了多少像素
element.scrollLeft = 10;
```

:::

::: tip
scrollLeft 可以是任意整数，然而：

如果元素不能滚动（比如：元素没有溢出），那么 scrollLeft 的值是 0。
如果给 scrollLeft 设置的值小于 0，那么 scrollLeft 的值将变为 0。
如果给 scrollLeft 设置的值大于元素内容最大宽度，那么 scrollLeft 的值将被设为元素最大宽度。
:::

## Element.scrollTop

Element.scrollTop 属性可以获取或设置一个元素的内容垂直滚动的像素数。

一个元素的 scrollTop 值是这个元素的内容顶部（卷起来的）到它的视口可见内容（的顶部）的距离的度量。当一个元素的内容没有产生垂直方向的滚动条，那么它的 scrollTop 值为 0。

::: details

```js
// 获得滚动的像素数
const intElemScrollTop = someElement.scrollTop;
```

运行此代码后， intElemScrollTop 是一个整数，即 element 的内容向上滚动的像素数。

```
// 设置滚动的距离
element.scrollTop = intValue;
```

:::

::: tip
scrollTop 可以被设置为任何整数值，同时注意：

如果一个元素不能被滚动（例如，它没有溢出，或者这个元素有一个"non-scrollable"属性）， scrollTop 将被设置为 0。
设置 scrollTop 的值小于 0，scrollTop 被设为 0
如果设置了超出这个容器可滚动的值, scrollTop 会被设为最大值。
:::

## 判断当前元素是否存在滚动条

> 出现滚动条便意味着元素空间将大于其内容显示区域，根据这个现象便可以得到判断是否出现滚动条的规则。

- el.scrollHeight > el.clientHeight
- el.scrollWidth > el.clientWidth

```js
export const hasScrolled = (element, direction) => {
  if (!element || element.nodeType !== 1) return;
  if (direction === "vertical") {
    return element.scrollHeight > element.clientHeight;
  } else if (direction === "horizontal") {
    return element.scrollWidth > element.clientWidth;
  }
};
```

// 判断是否存在滚动条
hasScrolled
