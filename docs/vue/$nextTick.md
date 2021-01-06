重点看这个函数，this.$nextTick(cb) 和 this.$nextTick().then(cb) 的区别在于，当 flushCallbacks 执行的时候，前者会同步执行 cb，后者会执行 _resovle(ctx)，显然同步的 cb 会执行，而 Promise.resovle 的会后执行。

![](https://img1.sycdn.imooc.com/szimg/5e6da901095077f222561710.jpg)