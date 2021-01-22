# koa 实现 koa 简单核心原理

::: tip
把握`JS`词法作用域，以及理清楚处`dispatch()`和中间件函数各自的作用域和调用盏那么就很好理解中间件的分发逻辑了。
:::

```js
const http = require("http");

/**
 * 把握原则 dispatch函数作用域和中间件作用域
 * 当调用next()的时候相当于调用dispatch(i)--(引用类型的调用，因为js的词法作用域)
 * 所以调用dispatch()时会找到 dispatch作用域 从而可以访问到ctx变量
 * 而进入 每一个中间件执行时候，ctx是通过参数传入。每一个中间件的函数作用域并不能访问到ctx和dispatchFn，所只能通过参数传递从而调用引用类型(这里指传入的next函数也就是下一个dispatch函数。)
 * 组合中间件函数 使用Promise逻辑进行处理
 * 一个函数中调用嵌套await等待另一个函数进行处理完成(这就构成了洋葱圈模型)
 * 返回中间件调用函数 中间件中依次进行调用
 * 同时使用Promise.resolve/Promise.reject进行包裹防止app.use()传入非async函数
 */

/*
  我理解是主要是 compose函数 和 每个中间件函数拥有各自的作用域。

  compose函数是在Koa类文件中定义 所以当每次调用next()时其实就是compose函数中的作用域->调用dispatch 所以可以访问到ctx和middlewareList,以及next()执行时仅仅可以看作是递归调用dispatch()。

  而 每一个中间件是在用户自己定义的作用域中，所以作用域中并没有ctx和next只能通过dispatch函数分发通过传入参数的形式进行调用和访问ctx。(dispatch函数自身进行递归调用，而中间件的执行仅仅是在dispatch函数内部根据下标进行执行而已)

  每个中间件函数中，因为传入的next函数(实际也是引用类型的关系)，执行next()就相当于执行了dispatch.bind(null, i + 1)返回的新函数。

  对于ctx的改变，因为ctx是复杂类型，即使使用参数方式传递那么也是修改了堆地址中的值，所以可以让每一个中间件都可以共享每一次ctx值的改变。

  简单来说就是 compose函数 和 每个中间件函数拥有各自的作用域，通过次dispatchFn()执行每一个中间件函数，以及传入ctx和下一次dispatch函数进行依次执行dispatch()函数。

  dispatch()函数内部调用中间件函数，但是他们的作用域是完全不同的(因为函数定义的位置就不同)。
*/

const combineMiddleware = (middlewareList) => {
  return function(ctx) {
    const dispatch = (i) => {
      const fn = middlewareList[i];
      try {
        return Promise.resolve(fn(ctx, dispatch.bind(null, i + 1)));
      } catch (error) {
        return Promise.reject(error);
      }
    };
    return dispatch(0);
  };
};

class Koa {
  constructor() {
    this.middlewareList = [];
  }
  // 添加中间件
  use(fn) {
    this.middlewareList.push(fn);
  }

  combineContext(req, res) {
    return {
      req,
      res,
    };
  }

  callback() {
    const fn = combineMiddleware(this.middlewareList);
    return (req, res) => {
      const ctx = this.combineContext(req, res);
      // 组合获得所有中间件
      fn(ctx);
    };
  }

  listen(...args) {
    const server = http.createServer(this.callback());
    server.listen(...args);
  }
}

const app = new Koa();

// logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx["X-Response-Time"];
  console.log(`${ctx.req.method} ${ctx.req.url} - ${rt}`);
});

// x-response-time
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx["X-Response-Time"] = `${ms}ms`;
});

// response
app.use(async (ctx) => {
  ctx.res.end("This is like koa2");
});

app.listen(8002);
```
