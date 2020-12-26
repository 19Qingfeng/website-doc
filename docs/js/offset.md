# offset相关属性

## offset介绍

### event.offsetX/Y

> MouseEvent 接口的只读属性 offsetX 规定了事件对象与目标节点的内填充边（padding edge）在 X 轴方向上的偏移量。

相对于触发元素左上角的 X 轴偏移量。
::: tip
注意是触发元素也就是 e.target，额外小心如果事件对象中存在子元素当移动到子元素内时，e.offsetX/Y 此时相对于子元素的左上角偏移量。
:::

### offsetWidth/offsetHeight

> HTMLElement.offsetWidth 是一个只读属性，返回一个元素的布局宽度。

`dom.offsetWidth/offsetHeight`返回的是当前元素的 border+padding+width/height。(width/height默认包含滚动条宽高)

<br>

![png](https://developer.mozilla.org/@api/deki/files/186/=Dimensions-offset.png)

### offsetLeft/offsetTop

> HTMLElement.offsetLeft 是一个只读属性，返回当前元素左上角相对于 HTMLElement.offsetParent 节点的左边界偏移的像素值。

::: tip
注意返回的是相对于 HTMLElement.offsetParent 节点左边边界的偏移量。
:::

##### 何为 HTMLElement.offsetParent

> HTMLElement.offsetParent 是一个只读属性，返回一个指向最近的（指包含层级上的最近）包含该元素的定位元素或者最近的 table,td,th,body 元素。当元素的 style.display 设置为 "none" 时，offsetParent 返回 null。offsetParent 很有用，因为 offsetTop 和 offsetLeft 都是相对于其内边距边界的。 - MDN

讲讲人话，当前元素的组件节点如果不存在任何 table,td,th 以及 position 属性为 relative,absolute 等为定位元素时,offsetLeft/offsetTop 返回的是距离 body 左上角的偏移量。

当祖先元素中有定位元素时，元素的 offsetLeft/offsetTop 的值等于它的左边框左侧到它的 offsetParent 元素左边框的距离。

## demo

::: details 点击查看代码

```js
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Magnifier</title>
  <style>
    * {
      padding: 0;
      margin: 0;
    }

    .box-wrapper {
      position: relative;
      display: inline-block;
      padding: 20px;
      background: rgba(0, 255, 255, 1);
      margin: 200px;
    }

    .small-box {
      margin: 200px;
      height: 200px;
      width: 360px;
      background-image: url('./assets/gmi.png');
      background-size: cover;
    }

    .test-wrapper {
      padding: 20px;
    }
  </style>
</head>

<body>
  <div class="box-wrapper">
    <div class="test-wrapper">
      <div class="small-box">
      </div>
    </div>
  </div>
</body>
<script>
  function getOffset(Node, offset) {
    if (!offset) {
      offset = {};
      offset.top = 0;
      offset.left = 0;
    }

    if (Node == document.body) { //当该节点为body节点时，结束递归
      return offset;
    }
    // debugger
    offset.top += Node.offsetTop;
    offset.left += Node.offsetLeft;

    return getOffset(Node.offsetParent, offset); //向上累加offset里的值
  }


  const boxWrapper = document.getElementsByClassName('box-wrapper')[0]

  const smallBox = document.getElementsByClassName('small-box')[0]
  smallBox.addEventListener('mousemove', (e) => {
    // small-box距离最近的HTMLElement.offsetParent为box-wrapper 距离为 200(自身边距) + 20(test-wrapper填充) + 20(box-wrapper填充)
    console.log(smallBox.offsetLeft, 'offset')  // 打印240  200+20+20
  })
</script>

</html>
```

:::

## 计算元素距离 body 的偏移量

当我们需要获得元素距离 body 的距离时，但是又无法确定父元素是否存在定位元素时(大多数时候在组件开发中，并不清楚父节点是否存在定位)。此时需要实现类似 jqery 的 offset()方法：获得当前元素对于 body 的偏移量。

- 无法直接使用 offsetLeft/offsetTop 获取，因为并不确定父元素是否存在定位元素。
- 使用递归解决，累加偏移量 offset，当前 offsetParent 不为 body 时。
- 继续递归向上超着 offsetParent 累加 offset，直到遇到 body 元素停止。

```js
const offset = (Node, offset) => {
  if (!offset) {
    offset = {};
    const offset = {
      x: 0,
      y: o,
    };
    if (Node === document.body) return offset;
    offset.x = offset.x + offsetLeft;
    offset.y = offset.y + offsetTop;
    return offset(Node.offsetParent, offset);
  }
};
```

::: tip
注意:这里不可以使用 parentNode 上文已经讲过 offsetLeft/top 针对的是 HTMLElement.offsetParent 的偏移量而非 parentNode 的偏移量。
:::
