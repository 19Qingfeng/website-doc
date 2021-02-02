# 避免回流

避免回流主要考虑两点

## 避免回流

在清除哪些操作会导致回流的情况下，尽量不要去做这些操作。比如需要改变一个元素位置的时候，使用`left,top,bottom,right`这些值一定是会触发页面回流的，可以考虑使用`translate`代替。`translate`既不会触发回流也不会触发重绘，仅仅会触发复合图层，这样就大大节省了性能和布局重绘的开销了。

现代前端中常用的一些框架，比如`react`,`vue`,等。内部使用了 VDOM，他会将一些 DOM 修改的操作进行批量的操作通过计算去减少回流。

## 读写分离

但是有时候回流无法避免，那么就尽量将读写分离。将读和写分离开来，从而更好的节能。

### FastDom


[fastDom](https://github.com/wilsonpage/fastdom)

`fastDom`就是针对读写分离的库，当然也可以选择自己做。

当使用 fastDom 改写之前的 Demo 之后可以明显看到性能的区别以及页面更加流程

>  使用`fastdom.measure`批量读取操作，然后在通过`fastdom.mutate`进行批量写。

::: details

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="./fastDom.js"></script>
    <style>
      .app {
        /* will-change: transform; */
        width: 300px;
        height: 300px;
        background-color: red;
        /* animation: wang 2s infinite; */
      }

      @keyframes wang {
        from {
          transform: translate(0);
        }

        to {
          transform: translate(100px);
        }
      }
    </style>
  </head>

  <body>
    <div class="app"></div>
    <div class="app"></div>
    <div class="app"></div>
    <div class="app"></div>
    <div class="app"></div>
    <div class="app"></div>
    <div class="app"></div>
    <div class="app"></div>
    <div class="app"></div>
    <div class="app"></div>
    <div class="app"></div>
    <div class="app"></div>
    <div class="app"></div>
    <div class="app"></div>
    <div class="app"></div>
    <div class="app"></div>
    <div class="app"></div>
    <div class="app"></div>
    <div class="app"></div>
    <div class="app"></div>
    <div class="app"></div>
    <div class="app"></div>
    <div class="app"></div>
    <div class="app"></div>
    <div class="app"></div>
    <div class="app"></div>
    <div class="app"></div>
    <div class="app"></div>
    <div class="app"></div>

    <script>
      const divs = document.getElementsByClassName("app");
      const update = () => {
        for (let div of divs) {
          fastdom.measure(() => {
            const top = div.offsetTop; // 批量读
            fastdom.mutate(() => {
              div.style.width = top * Math.random() + "px"; // 批量写
            });
          });
        }
        window.requestAnimationFrame(update);
      };
      window.addEventListener("click", () => {
        update();
      });
    </script>
  </body>
</html>
```

:::

