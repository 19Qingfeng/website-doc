# 回流与重绘

## 布局与绘制。

- 渲染树只包含网页需要的节点。

- 布局计算每个节点精确的位置和大小。 - "盒模型" (根据渲染树上每个节点的位置和大小进行渲染)

- 绘制是像素化每个节点的过程。

> 布局和绘制消耗非常高的。页面首次加载一定是要经过浏览器的生成渲染树，布局`layout`,绘制`paint`以及组合图层的`composite`。
> 之后在页面的使用过程中，用户的一些交互或者做动画都会改变视觉的效果都会触发这个流程。
> 避免回流和重绘的本质就是在某些特定的情况下尽量的减少布局和绘制。

::: tip
就比如样式的一些变化，布局关心的是位置和大小，元素的几何信息。如果样式并不涉及几何信息，比如并不是高度，offsetTop 等等位置大小信息的话。比如仅仅改变背景色或者阴影大小。那么并不会重新计算布局，因为布局没有变化。变化的和元素的几何信息无关,**那么并不会触发`layout`布局(浏览器跳过布局)，仅仅只会触发重绘`paint`。**
:::

## GPU 加速，避免布局和重绘

实际上一些动画可以通过`GPU`加速，从而避免`layout`和`paint`从而直接进行`composite`复合过程达到避免回流和重绘，提高性能。

### 触发回流`reflow`的操作

- 添加/删除元素
- display:none
- 移动元素位置(top,left)
- 操作 style
- 访问及时属性-offsetHeight，getComputedStyle，clientWidth,scrollTop 需要及时计算的属性等等
- 修改浏览器字体大小

## 避免布局抖动 layout thrashing

> 所谓的布局抖动通过一个 Demo 就可以很好的看到了。

::: details

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .app {
        /* will-change: transform; */
        width: 300px;
        height: 300px;
        background-color: red;
        /* animation: wang 2s infinite; */
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
          console.log(div, "div");
          div.style.width = div.offsetTop * Math.random() + "px";
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

所谓的布局抖动也就是说，像上边这段代码每次循环中需要改变页面元素的`width`值这本身就会触发`layout paint`，这本身就很可怕。但是浏览器会对于这些循环中的回流操作尝试集合到一起去操作从而提高渲染性能。

但是主要注意的是**每次循环中不仅仅改变了 width 的值，同时访问了及时属性`offsetTop`**，这就导致了一个问题，每次访问`offsetTop`的时候浏览器不得不重新布局使得访问到及时的值，这样的操作就会触发`forced reflow`强制回流，这样就会造成布局抖动造成渲染效率底下。

> 当在循环中尝试获取`offsetTop`的值的时候，那么浏览器就不得不重新计算`layout`从而获得最新的布局信息。在赋值`width`时就会强制进行了一个`layout`。

::: tip
关于`forced reflow`以及布局抖动，并不是说每次浏览器都进行了绘制，而是强制**浏览器重新布局`layout`**，从而造成连续不断的布局，渲染效率低下的卡顿。
:::
