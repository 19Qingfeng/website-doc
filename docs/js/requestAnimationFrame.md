# requestAnimationFrame & requestIdleCallback

## requestAnimationFrame

window.requestAnimationFrame()方法通知瀏覽器我們想要產生動畫，並且要求瀏覽器在下次重繪畫面前呼叫特定函數更新動畫。這個方法接受一個引數作為下次重繪前調用的回呼函數。

> 浏览器大多数是60帧每秒的频率，所以当一秒变换60次已上可以实现完美帧数的动画。

::: tips 
关于最简单的js动画使用`setTimeout`或者`setInterval`这两种去实现，受困于`Eventloop`以及`js`的原理所以会存在时间区间上的不准确，而使用`window.requestAnimationFrame()`正是完美的解决了这个问题。
:::

https://blog.csdn.net/wuqi5328/article/details/82081594

总结一下

## requestIdleCallback

https://www.lagou.com/lgeduarticle/105035.html

http://www.zhangyunling.com/702.html