# 配合 V8 有效优化代码

## V8 编译原理

![截屏2021-02-05 下午9.08.40.png](https://i.loli.net/2021/02/05/W9F57XPQxjtpqGc.png)

这张图其实就是 v8 对于 js 的解析过程。

首先它拿到`js`代码，先进行了`parse`解析阶段。将 js 解析成`ast`抽象语法树，也就是将`js`文本解析成字符，然后将重要的信息节点存储在一定的数据结构中。

接下来将这份数据结构`ast`交给解释器`interpreter`，理解代码的意义。在执行这份解释后的代码之前，编译器会提前进行一定的优化功能。当编译引擎发现优化不合适的时候，会进行一个**反优化**的过程，这可能会造成一定的运行效率。

所以我们在代码层面的优化就是迎合`v8`上对于代码的优化，它是怎么进行的优化的，那么我们就尽可能的迎合它。同时回避一些作为反优化过程的代码。

## 顺着 V8 思路优化代码

### 从编译原理出发

来看看这个函数，通过`web Api`进行测量:

::: details

```js
const { performance, PerformanceObserver } = require("perf_hooks");

const add = (a, b) => a + b;

const numa = 1;
const numb = 2;

performance.mark();

for (let i = 0; i < 100000; i++) {
  add(numa, numb);
}

add(numa, "s"); // 类型发生变化

for (let i = 0; i < 100000; i++) {
  add(numa, numb);
}

performance.mark("end");

const observable = new PerformanceObserver((list) => {
  console.log(list.getEntries()[0]);
});

observable.observe({
  entryTypes: ["measure"],
});

performance.measure("测量1", "start", "end");

/*
PerformanceEntry {
  name: '测量1',
  entryType: 'measure',
  startTime: 0,
  duration: 39.925673
}
*/
```

:::

```js
for (let i = 0; i < 100000; i++) {
  add(numa, numb);
}
```

当 V8 中执行这一个循环的时候，这个`add`函数被调用了很多次。但是每次的入参都很稳定，所以 V8 会对这段代码进行一次优化，但是执行到`add(numa, "s");`这一行代码，忽然在某一次它发现参数的类型发生了变化，那么它就不会运行之前进行的优化继续优化了，因为参数的类型发生了改变。此时它就会撤销优化这样就会带来了一定的延迟。

当我注释掉`add(numa, "s");`这一行代码，明显可以看到性能的提升，在老版本浏览器上测试注释前`59ms`，注释后`19ms`。是因为`V8`会一直使用之前的函数类型优化。

::: tip
当然在最新浏览器下，这点被`chrome`做了优化，时间相差不多基本一致。但是对于我们来讲，用户在使用什么浏览器我们完全是不可控的，所以这些细节点的优化是不可忽略的。
:::

::: tip
至于`node`底层对于什么做了优化对什么做了反优化，可以使用`node`的两个参数。

`node --trace-opt 文件名`

`node --trace-deopt 文件名`
:::

### V8 优化机制

- 脚本流

> node 对于脚本做了优化，就是脚本下载当超过`30KB`时候，它会单独开一个线程进行解析下载的部分。这样的话等待所有下载完成在进行解析效率就会大大提高。(只需要合并解析，流式处理)

- 字节码缓存

> 缓存解析的字节码。

- 懒解析

> 对于一些仅仅声明而没有立马调用的函数，`nodeJs`会进行一个懒解析，也就是说声明了一个函数但是并没有用到这个函数默认情况下并不会解析函数内部的逻辑，只有调用到函数的时候才进行解析。这样也大大提高了解析效率。

**懒解析的好处也非常容易理解，进一步来说当函数仅仅被声明但是并没有被调用。那么node也就并不会解析这个函数，也不需要为他创建一个语法树，那么这个函数也并不会在堆内存中分配空间**。这样大大提高了性能。
