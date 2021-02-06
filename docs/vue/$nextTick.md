# \$nextTick

## 重点解析

首先明白`Event Loop`以及浏览器渲染原理，这个就不多说了。

> 主线程执行同步代码，执行完同步代码去`Event queue`调度寻找任务，基于`macro`和`micro`去执行队列中的任务，最后渲染页面，然后在重复这个过程。(一次一个`macro`一次一队`micro`)

`nextTick`源码，**本质上就是`Vue`基于数据变化更新 DOM 是一个异步变化过程。(注意:DOM 变化并非浏览器渲染才算 DOM 变化)**

`nextTick`会基于`micro`或者`macro`进行模拟实现，主要还是看当前浏览器的支持程度。

::: details NextTick 源码

```js
import { noop } from "shared/util";
import { handleError } from "./error";
import { isIOS, isNative } from "./env";

const callbacks = [];
let pending = false;

function flushCallbacks() {
  pending = false;
  const copies = callbacks.slice(0);
  callbacks.length = 0;
  for (let i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using both microtasks and (macro) tasks.
// In < 2.4 we used microtasks everywhere, but there are some scenarios where
// microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690) or even between bubbling of the same
// event (#6566). However, using (macro) tasks everywhere also has subtle problems
// when state is changed right before repaint (e.g. #6813, out-in transitions).
// Here we use microtask by default, but expose a way to force (macro) task when
// needed (e.g. in event handlers attached by v-on).
let microTimerFunc;
let macroTimerFunc;
let useMacroTask = false;

// Determine (macro) task defer implementation.
// Technically setImmediate should be the ideal choice, but it's only available
// in IE. The only polyfill that consistently queues the callback after all DOM
// events triggered in the same loop is by using MessageChannel.
/* istanbul ignore if */
if (typeof setImmediate !== "undefined" && isNative(setImmediate)) {
  macroTimerFunc = () => {
    setImmediate(flushCallbacks);
  };
} else if (
  typeof MessageChannel !== "undefined" &&
  (isNative(MessageChannel) ||
    // PhantomJS
    MessageChannel.toString() === "[object MessageChannelConstructor]")
) {
  const channel = new MessageChannel();
  const port = channel.port2;
  channel.port1.onmessage = flushCallbacks;
  macroTimerFunc = () => {
    port.postMessage(1);
  };
} else {
  /* istanbul ignore next */
  macroTimerFunc = () => {
    setTimeout(flushCallbacks, 0);
  };
}

// Determine microtask defer implementation.
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== "undefined" && isNative(Promise)) {
  const p = Promise.resolve();
  microTimerFunc = () => {
    p.then(flushCallbacks);
    // in problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) setTimeout(noop);
  };
} else {
  // fallback to macro
  microTimerFunc = macroTimerFunc;
}

/**
 * Wrap a function so that if any code inside triggers state change,
 * the changes are queued using a (macro) task instead of a microtask.
 */
export function withMacroTask(fn: Function): Function {
  return (
    fn._withTask ||
    (fn._withTask = function() {
      useMacroTask = true;
      const res = fn.apply(null, arguments);
      useMacroTask = false;
      return res;
    })
  );
}

export function nextTick(cb?: Function, ctx?: Object) {
  let _resolve;
  callbacks.push(() => {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, "nextTick");
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    if (useMacroTask) {
      macroTimerFunc();
    } else {
      microTimerFunc();
    }
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== "undefined") {
    return new Promise((resolve) => {
      _resolve = resolve;
    });
  }
}
```

:::

::: tip
`NextTick`其实就是`Vue`的异步更新策略，Vue 中所有的数据改变都可以看成往 nextTick 中的`flush cb`中推入一个函数，等待一定时机去执行去重的`flush cb`从而高效率的更新 Dom。
:::

## 注意点

### 关于`nextTick(cb)`和`nextTick().then()`的执行顺序

```js
export function nextTick(cb?: Function, ctx?: Object) {
  let _resolve;
  callbacks.push(() => {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, "nextTick");
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    if (useMacroTask) {
      macroTimerFunc();
    } else {
      microTimerFunc();
    }
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== "undefined") {
    return new Promise((resolve) => {
      _resolve = resolve;
    });
  }
}
```

重点看这个函数，`this.$nextTick(cb)` 和 `this.$nextTick().then(cb)` 的区别在于，**当 `flushCallbacks` 执行的时候，前者会同步执行 cb，后者会执行 `_resovle(ctx)`，显然同步的 cb 会执行，而 `Promise.resovle` 的会后执行。**

基于`cb`传入的`nextTick`会被当作同步代码去执行，而什么都不传使用`Promise`形式的话，那么当执行到本次`NextTick`的话是会调用`_resolve`函数，从而将这个`Promise`变为完成状态。但是此时需要注意的是`Promise.then()`是异步操作必定会在当前`Task`所以同步执行完之后才会执行。

```js
this.$nextTick().then(() => {
  console.log("promise");
});
this.$nextTick(() => {
  console.log("call back");
});
/* 
      call back
      promsie
*/
```

### nextTick Dom 更新策略

上文说过其实 Vue 的异步都是基于`nextTick`去做的，比如一行`this.message = 'wang.haoyu'`，其实就可以看作他是一次被推入`flush callback`队列，等待`Vue`更新(并非浏览器更新页面)开始执行`flush cb`，所以这里就会牵出一个问题，来看看这个 Demo:

```html
<template>
  <div id="app">
    <div ref="app" @click="change">{{ message }}</div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        message: "wang.haoyu",
      };
    },
    methods: {
      change() {
        this.$nextTick(() => {
          console.log(this.$refs["app"].innerHTML); // wang,haoyu
        });
        this.message = "update";
      },
    },
  };
</script>
```

你会惊奇的发现打印出来的是`wang.haoyu`，其实上边已经讲过了关于`nextTick`会首先往`flush cb`推入本次`nextTick`，当`flush cb`执行的时候，因为还没有执行到`this.message`，所以 DOM 并没有被更新，`this.message = wang.haoyu`在`flush cb`中是排在`nextTick`之后的，所以 Vue 中的循环当然也是进行的依次执行，先执行了`nextTick`的输入，然后才执行了`this.message = update`，所以会打印出`wang.haoyu`。

> 所以平时开发中使用`nextTick`，千万注意要放在异步操作之后进行操作`nextTick`。
> 关于`Mounted`中，nextTick 顺序并不是这样的。

这也就引出了另一个关键性问题，**`nextTick`并不是浏览器渲染后，而是 DOM 更新后**。

浏览器支持的情况下，也就是大多数情况`nextTick`都会包装成`micro`，我们也清楚`micro`在`Event Loop`中浏览器渲染前就要执行完毕,同时结合上一个例子。所以**DOM 更新后并不是浏览器重新渲染后。**

::: tip
就比如`flush callback`依次开始执行的时候(执行时机)，那么执行的`flush callback`数组中每一个操作 DOM 的语句才会真正执行，对应`cb`执行更新对应 DOM 节点(`AST`)，随之之后的获取 DOM 操作就会获得最新的 DOM 节点的信息，每次 DOM 操作都会对应进行`layout`，此时获取对应的 DOM 节点信息就会获取浏览器`layout`更新之后的信息了。
:::



#### 总结

1. `nextTick`就是将要执行的任务推入到`task`中，在下一个`tick`同步执行，遍历`flush callback`进行执行`cb`。

2. 数据改变后触发渲染的`watcher`的`update`，但是`watcher`的`flush`是在`nextTick`之后的，所以重新渲染是异步的。
