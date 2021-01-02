# 获取隐藏元素宽高值

// 记得添加获取图片宽高！！！！！以及压缩图片等比例宽高。

> offsetWidth/offsetHeight 为 0 解决办法
> width/height属性为空字符串
> 其实就是元素存在display:none或者元素父节点存在display为none时无法获取。

::: tip
当元素 display 为 none 的时候，无法通过 offsetWidth 和 offsetHeight 获取值，获取为 0。
好吧，我承认通过 dom.style.height/width 也无法获取，获取到的是空字符串。
:::

此时提供的解决思路为

- 利用给元素添加行内样式：visibility:hidden
- 让隐藏元素变成有物理尺寸存在，但不可见
- 再给它还原成 display 为 none，最后返回结果

``` js
const getEleSize = (Node) => {
    if (Node.nodeType !== 1) return;
    const display = Node.style.display
    const visibility = Node.style.visibility
    Node.style.visibility = 'hidden'
    Node.style.display = 'block'
    const width = Node.offsetWidth
    const height = Node.offsetHeight
    Node.style.display = display
    Node.style.visibility = visibility
    return {
      width,
      height
    }
  }
```