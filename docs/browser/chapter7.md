# React 时间调度的实现

- `requestIdleCallback`的问题

> 兼容性不好。

之间也讲到过`requestIdleCallback`是在浏览器每一帧剩余的空闲时间调用回调。

- 通过`raf`实现模拟`requestIdleCallback`

![截屏2021-02-04 下午9.15.19.png](https://i.loli.net/2021/02/04/krixV7smQg9yNPb.png)

图中可以看到一帧关键渲染周期之中去做了哪些事件，`requestIdleCallback`是在一帧绘制完成之后进行的触发。(这一帧画完还存在剩余事件)

> 当然需要注意的是需要额外留出一定的空余时间去安排用户突然的交互。当然React中对于这一点也实现的非常优秀。

而`requestAnimationFrame`是在一帧开始绘制前触发(可以打开`performance`调试进行查看)，其实通过`raf`可以算出空余时间,通过这一帧的开始时间和这一帧的上限就可以模拟计算出`requestIdleCallback`的实现。

感兴趣的话可以去 React16 的源码去看，实际上它底层的实现是一个双向链表去安排优先级执行。
