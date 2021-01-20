# 计算元素距离 body 的偏移量

当我们需要获得元素距离 body 的距离时，但是又无法确定父元素是否存在定位元素时(大多数时候在组件开发中，并不清楚父节点是否存在定位)。此时需要实现类似 jqery 的 offset()方法：获得当前元素对于 body 的偏移量。

- 无法直接使用 offsetLeft/offsetTop 获取，因为并不确定父元素是否存在定位元素。
- 使用递归解决，累加偏移量 offset，当前 offsetParent 不为 body 时。
- 继续递归向上超着 offsetParent 累加 offset，直到遇到 body 元素停止。

```js
const getOffsetSize = function(Node: any, offset?: any): any {
  if (!offset) {
    offset = {
      x: 0,
      y: 0
    };
  }
  if (Node === document.body) return offset;
  offset.x = offset.x + Node.offsetLeft;
  offset.y = offset.y + Node.offsetTop;
  return getOffsetSize(Node.offsetParent, offset);
};
```

::: tip
注意:这里不可以使用 parentNode 上文已经讲过 offsetLeft/top 针对的是 HTMLElement.offsetParent 的偏移量而非 parentNode 的偏移量。
:::
