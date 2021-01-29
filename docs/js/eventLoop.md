# EventLoop

## 深度挖掘

https://zhuanlan.zhihu.com/p/142742003

https://zhuanlan.zhihu.com/p/142742003

## 浏览器中的 EventLoop

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <body>
    <div id="app"></div>
    <script>
      setTimeout(() => {
        const promise = Promise.resolve(1);
        console.log("123");
        promise.then((res) => {
          debugger;
          document.getElementById("app").innerHTML = res;
          debugger;
        });
      }, 1000);
    </script>
  </body>
</html>
```

两次 debuuger 就可以看出来了。

第一个 dubugger 中 id 为 app 的元素中还没有任何内容，第二个 debugger 中 id 为 app 的元素已经在页面上渲染为 1 了。

浏览器中的 EventLoop 图示就是：

![EventLoop](https://user-gold-cdn.xitu.io/2018/10/1/1662ff57ebe7a73f?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

**微任务中的 Promise 指的是 then 或者 catch，Promise 确定状态后推入当前 tast 中的叫做微任务，推入 task 中的 Promise 的 callback 才是阻塞的根源。**

> Task 中的微任务如果执行耗时间特别长，就会阻塞浏览器下一次渲染时机造成视觉卡顿。

通过 Promise 发送请求，只是 JS 会当作异步任务处理，只有 Promise 状态确定后才会将 then 或者 catch 的回调函数推入当前 EventLoop 中 task 当作微任务。

::: tip
需要注意的是**微任务中如果嵌套微任务的话，嵌套的微任务仍然会加入本次 EventLoop 中的微任务并且跟随本次 loop 中的所有微任务进行一起清空。**
:::
::: details

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <body>
    <div id="app" style="width:200px;height:200px;"></div>
    <script>
      const app = document.getElementById("app");
      console.log("start");

      function promiseStart() {
        console.log("promise start");
        return new Promise((resolve) => {
          setTimeout(() => {
            setTimeout(() => {
              console.log("timer in promise");
            }, 0);
            resolve();
          }, 500);
        });
      }

      setTimeout(() => {
        console.log("setTimeout");
      }, 0);

      promiseStart()
        .then(() => {
          console.log("promise over");
          // 微任务中嵌套微任务 会在本次Loop中跟随所有微任务一起清除掉
          const successPromise = Promise.resolve("success");
          successPromise.then((res) => console.log(res));
          // 其实红色压根不会渲染出来 本次Eventloop就会执行到蓝色才会渲染
          // 使用performance 是看不到div被渲染成红色的
          // 需要注意的是 虽然没有重新渲染 但仍然发生了重塑哦！！！
          // 区分开来回流重塑和渲染是没有关系的
          app.style.background = "red";
          /*  打开for循环明显看到卡顿之后才会渲染
           for (let i of Array.from({
               length: 100000
             })) {
             console.log(i, 'i')
           }
           */
          app.style.background = "blue";

          return "over";
        })
        .then((res) => {
          console.log(res);
        });
      console.log("script end");
    </script>
  </body>
</html>
```

:::

## NodeJS 中的 EventLoop
