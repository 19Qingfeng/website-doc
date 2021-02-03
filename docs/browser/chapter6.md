# 高频事件防抖

高频事件的防抖之前的的防抖`debounce`函数，节流`throttle`函数都是老生常谈了。

这里来讲讲`requestAnimationFrame`这个函数。

来看看关于`rAF`这张图
![截屏2021-02-03 下午9.31.40.png](https://i.loli.net/2021/02/03/y5G8eJ3g1ZEtWD6.png)

这是浏览器一帧的生命周期，可以明显的看到:

1. 当触发一些事件，浏览器开始 js 计算。
2. js 计算完成后浏览器开始一帧的绘制过程。
3. 此时开始`layout`和`paint`之前就会执行`rAF`调用它。
4. 开始布局和绘制以及开始渲染。

这里的`rAF`会在每次绘制之前去调用传入的 func。这样其实就达到了每次动画事件防抖的效果。

```js
let flag = false;
window.addEventListener("pointermove", (e) => {
  if (flag) return;
  flag = true;
  window.requestAnimationFrame(() => {
    changeWidth(); // mock 动画操作
    flag = false;
  });
});
```

浏览器每一帧的渲染之前都会执行`rAF`中的`changeWidth`重新计算元素宽度，这样就达到了`changeWidth`函数的防抖。

之后使用`flag`是因为如果在一帧之中多次调用`rAF`其实也是完全没有意义的，所以使用`flag`标记位，每一帧渲染之前如果还没有执行`rAF`那么就调用一次`rAF`，之后改变标记位，当浏览器在这一帧末尾开始调用`rAF`中的函数的时候将标记为变成`false`以提供下一帧事件中正常继续调用`rAF`。

::: tip
关于`rAF`

1. 为了提高性能和电池寿命，因此在大多数浏览器里，**当 requestAnimationFrame() 运行在后台标签页或者隐藏的<iframe> 里时，requestAnimationFrame() 会被暂停调用以提升性能和电池寿命**。(定时器则不会)

2. 回调函数会被传入`DOMHighResTimeStamp`参数，`DOMHighResTimeStamp`指示**当前被 requestAnimationFrame() 排序的回调函数被触发的时间**。在同一个帧中的多个回调函数，它们每一个都会接受到一个相同的时间戳，即使在计算上一个回调函数的工作负载期间已经消耗了一些时间。该时间戳是一个十进制数，单位毫秒，最小精度为 1ms(1000μs)。

:::

来看一个仅仅持续 2s 时间的动画

```js
const divs = document.getElementsByClassName("app");
let start;
// time 其实就是本次raf执行时候距离这个raf第一次开始的时间间隔
const update = (time) => {
  if (!start) {
    start = time;
  }
  let duration = time - start;
  // do some animation
  if (duration < 2000) {
    window.requestAnimationFrame(update);
  }
};
window.addEventListener("load", () => {
  window.requestAnimationFrame(update);
});
```

> 当然`rAF`的返回值是一个 hash 串，通过`cancelAnimationFrame`传入这个返回值可以清除`rAF`.需要注意的是`rAF`需要持续不断的调用才会持续产生效果。

### 对比定时器

如果我们做到每 16 毫秒去渲染一次画面，就能够达到比较流畅的动画效果。对于简单的动画， `setlnterval` 方式勉强能够及格，但是对于稍微复杂一些的动画，脚本方式就顶不住了，比如渲染一帧要花去超过 32 毫秒的时间，那么还用 16 毫秒一个间隔的方式肯定不行。实际上，因为一帧渲染要占用网页线程 32 毫秒，会导致 setlnterval 根本无法以 16 毫秒间隔调用渲染函数，这就产生了明显的动画滞后感，原本一秒钟完成的动画现在要花两秒钟完成，所以这种原始的 setlnterval 方式是肯定不适合复杂的动画的。

> 比如规定一个 2s 内完成的动画，使用定时器的方式往往都不准确。他们的执行是会受到队列中 js 代码执行以及浏览器渲染线程占用的影响导致开始时间不准确以及动画每一次渲染无法保证都是相同的。

使用`rAF`就可以很好的解决这个问题，通过 **`rAF`的参数**进行动态计算。 **每一帧渲染的实际一般都会维持在 16ms，所以说`raf`执行如果快于 16ms 那么也会被放到 16ms 执行一次，如果因为一些问题阻塞导致本次渲染时间增长，那么也可以通过`rAF`函数的参数获取到本次执行动画的间隔时间，从而计算出合理的元素动画变化值。**

setlnterval 和 setTimeout **并不能保证在指定时间间隔或者延迟的情况下准时调用指定函数**。
所以可以换一个思路，当指定函数调用的时候，**根据逝去的时间计算当前这一帧应该显示成什么样子(也就是利用 raf 的参数进行判断)**，这样即使因为浏览器渲染主线程忙碌导致一帧渲染时间超过 16 毫秒，在后续帧谊染时至少内容不会因此滞后，即使达不倒 60fps 的效果，也能保证动画在指定时间内完成。

::: tip
不过有一点需要注意，requestAnimationFrame 是在主线程上完成。这意味着，如果主线程非常繁忙，requestAnimationFrame 的动画效果会大打折扣。
:::

这段代码就可以看出来原理！！！！
因为主线程繁忙`EventLoop`一直没有完成，所以阻塞了浏览器渲染，导致了动画和页面的卡顿。

```js
const div = document.getElementById("app");
let start;
const update = (time) => {
  console.log(time);
  if (!start) {
    start = time;
  }
  // 这段代码深究啊
  let duration = time - start;
  div.style.width = "1000px";
  for (let i of Array.from({ length: 1000000 })) {
    console.log("over");
  }
};
window.addEventListener("mouseover", () => {
  window.requestAnimationFrame(update);
});
```
