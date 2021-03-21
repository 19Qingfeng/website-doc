# 基础

```js
const koa = require("koa");
const app = koa();

app.use(async (ctx, next) => {
  console.log(1);
  await next();
  console.log(2);
});

app.use(async (ctx, next) => {
  console.log(3);
  await next();
  console.log(4);
});

app.listener(3000);
```

> 不要在犯错误了。

打印结果 1,3,4,2。

> 执行 async 函数，如果没有朋友 await 之前的函数内容都是同步代码！！就相当于 new Promise 中的同步逻辑！！！
> `await next()`首先会进入`next()`函数中的同步逻辑执行，直到碰到异步`await`才会交给异步并且暂时跳出！！！。
