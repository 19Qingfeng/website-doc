# 回流/重塑

回流重塑的概念就不累赘了。

访问及时属性也会触发元素的回流，比如`top`,`left`等值。

可以使用`translate`替代，因为`translate`并不改变元素原本的位置，所以并不会触发回流/重塑。

以及其他待补充。

- 用 `translate` 替换 `top`/`left`/`right`...

> `translate`并不会触发回流，因为它并不改变元素原本的位置。

::: tips
当你要用到像这样的属性：offsetTop、offsetLeft、 offsetWidth、offsetHeight、scrollTop、scrollLeft、scrollWidth、scrollHeight、clientTop、clientLeft、clientWidth、clientHeight 时，你就要注意了！注意，仅仅是获取访问也会触发回流。

“像这样”的属性，到底是像什么样？——这些值有一个共性，就是需要**通过即时计算得到**。**因此浏览器为了获取这些值，也会进行回流。**
:::

- 用 `opacity` 替换 `visibility`

> opacity 属性并不会修改元素的布局，所以并不会触发回流。

- 把 dom 离线 ，修改 N 次再显示

> 很好理解，离线 DOM 后修改样式并不会触发回流和重塑，修改完成在重新让他展示。也就是多次回流操作离线后节省次数变成展示/隐藏两次。
