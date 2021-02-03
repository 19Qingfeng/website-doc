# 避免重绘

其实避免重绘就是尽量使用之前的`transform`,`opacity`等等并不会触发`layout paint`的属性并且跟随`will-change`抽离单独复合层做到页面渲染性能的提高。

但是最后还是要强调的一点是，关于`will-change`不要滥用，往往是页面中一些多数动画元素才有必要使用`will-change`。