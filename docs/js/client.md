# client 相关属性

## event.clientX/Y

> MouseEvent.clientX 是只读属性， 它提供事件发生时的应用客户端区域的水平坐标 (与页面坐标不同)。例如，不论页面是否有水平滚动，当你点击客户端区域的左上角时，鼠标事件的 clientX 值都将为 0 。最初这个属性被定义为长整型（long integer），如今 CSSOM 视图模块将其重新定义为双精度浮点数（double float）。你可以查阅浏览器兼容性部分的文档来进一步了解有关信息。

事件属性 event.client。

简单来说一句带过:clientX/Y 事件属性返回当事件被触发时鼠标指针向对于浏览器页面（客户区）的水平垂直坐标。 客户区指的是当前窗口。


## clientWidth/clientHeight

> 内联元素以及没有 CSS 样式的元素的 clientWidth 属性值为 0。Element.clientWidth 属性表示元素的内部宽度，以像素计。该属性包括内边距 padding，但不包括边框 border、外边距 margin 和垂直滚动条（如果有的话）

相对于offsetWidth/Height来说clientWidth/Height，仅仅包含padding+width/height,而不包含border。(offsetWidth/Height注意同时包含滚动条宽高,而clientWidth/Height不包括滚动条。)

![png](https://developer.mozilla.org/@api/deki/files/185/=Dimensions-client.png)


## clientLeft/clientTop

> 表示一个元素的左边框的宽度，以像素表示。如果元素的文本方向是从右向左（RTL, right-to-left），并且由于内容溢出导致左边出现了一个垂直滚动条，则该属性包括滚动条的宽度。clientLeft 不包括左外边距和左内边距。clientLeft 是只读的。

clientTop同理。