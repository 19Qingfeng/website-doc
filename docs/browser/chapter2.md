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

> 布局抖动其实就是连续不断的发生布局`layout`的回流，连续不断的`forced layout`强制布局就会导致页面抖动从而造成卡顿。
> 所谓的布局抖动通过一个 Demo 就可以很好的看到了。

::: danger
一定要在工作中避免这种会造成强制布局`forced layout`的代码，非常耗费性能(多次无用的`layout`)。
:::

::: details

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <!-- <script src="./fastDom.js"> -->

  </script>
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
        /* transform: translate(0); */
        opacity: 0.1;

      }

      to {
        /* transform: translate(100px); */
        opacity: 1;

      }
    }
  </style>
</head>

<body>
  <div id="app" class="app"></div>
  <input type="text">

  <script>
    window.addEventListener('load', () => {

      setTimeout(() => {
        console.log(document.getElementById('app').offsetWidth)
        document.getElementById('app').style.width = Math.random() * 100 + 'px'
        console.log(document.getElementById('app').offsetWidth)
        document.getElementById('app').style.width = Math.random() * 100 + 'px'

        console.log(document.getElementById('app').offsetWidth)
        document.getElementById('app').style.width = Math.random() * 100 + 'px'

        console.log(document.getElementById('app').offsetWidth)
        document.getElementById('app').style.width = Math.random() * 100 + 'px'

        console.log(document.getElementById('app').offsetWidth)
        document.getElementById('app').style.width = Math.random() * 100 + 'px'

        console.log(document.getElementById('app').offsetWidth)
        document.getElementById('app').style.width = Math.random() * 100 + 'px'

        console.log(document.getElementById('app').offsetWidth)
        document.getElementById('app').style.width = Math.random() * 100 + 'px'

        console.log(document.getElementById('app').offsetWidth)
        document.getElementById('app').style.width = Math.random() * 100 + 'px'

        console.log(document.getElementById('app').offsetWidth)
        document.getElementById('app').style.width = Math.random() * 100 + 'px'

        console.log(document.getElementById('app').offsetWidth)
        document.getElementById('app').style.width = Math.random() * 100 + 'px'

        console.log(document.getElementById('app').offsetWidth)
        document.getElementById('app').style.width = Math.random() * 100 + 'px'

        console.log(document.getElementById('app').offsetWidth)
        document.getElementById('app').style.width = Math.random() * 100 + 'px'

        console.log(document.getElementById('app').offsetWidth)
        document.getElementById('app').style.width = Math.random() * 100 + 'px'

        document.getElementById('app').style.width = Math.random() * 100 + 'px'
        console.log(document.getElementById('app').offsetWidth)

        console.log(document.getElementById('app').offsetWidth)
        document.getElementById('app').style.width = Math.random() * 100 + 'px'

        console.log(document.getElementById('app').offsetWidth)
      }, 40)
    })
  </script>
</body>

</html>
```

:::

这段代码`onload`时间的定时器中的任务执行机制中执行了多次**发生了多次`layout`导致布局抖动(多次强制回流)对性能开销是非常大的。**

> performance 分析图。
> ![截屏2021-02-04 下午9.50.23.png](https://i.loli.net/2021/02/04/to5KCbwfe1MJdz8.png)

::: danger 注意
`settimeout`的`Timer Fired`(执行定时器)中的Task中存在多次的紫色过程`Recalculate Style`和`layout`导致浏览器多次强制布局计算。对于浏览器性能开销是非常大的！这种代码应该从本质上优化，它并不应该出现在你的代码里。

执行完毕后进入第二个Task，也就是图上顶部第二个黑色的线条。`Update Layer Tree`,`Paint`,`Composite Layouts`。
:::


第二个例子.

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



关于布局抖动下面我看到别人文章中的一句话，当在进行`javascript`的时候导致了强制回流这叫做`forced layout`强制回流。当发生强制回流后再次发生`forced layout`后，会导致上一次的强制回流`layout`计算无效，这就叫做布局抖动。

::: tip
> If the Style →Layout process is forced to happen in between the Javascript execution, it is Forced Reflow. If it happens once, it is Forced Reflow. The next time if the same thing happens, the layout calculations done above will be invalidated. Hence it is known as Layout Thrashing.


**如果在Javascript执行之间强制执行Style→Layout过程，则强制回流。如果发生一次，则为强制回流。下一次如果发生同样的情况，上面所做的布局计算将无效。因此它被称为布局抖动。**
:::

但是主要注意的是**每次循环中不仅仅改变了 width 的值，同时访问了及时属性`offsetTop`**，这就导致了一个问题，每次访问`offsetTop`的时候浏览器不得不重新布局使得访问到及时的值，这样的操作就会触发`forced reflow`强制回流，这样就会造成布局抖动造成渲染效率底下。

> 当在循环中尝试获取`offsetTop`的值的时候，那么浏览器就不得不重新计算`layout`从而获得最新的布局信息。在赋值`width`时就会强制进行了一个`layout`。

::: tip
关于`forced reflow`以及布局抖动，并不是说每次浏览器都进行了绘制，而是强制**浏览器重新布局`layout`**，从而造成连续不断的布局，渲染效率低下的卡顿。
:::

首先`layout`和`paint`是 2 个关键的性能消耗环节。**而 `layout thrashing`发生的根本原因还是不停强制进行 layout 造成的**。

`forced reflow`和`layout thrashing`的概念通常认为是一样的，我看一个人的文章原来是这样说的：

> If the Style →Layout process is forced to happen in between the Javascript execution, it is Forced Reflow. If it happens once, it is Forced Reflow. The next time if the same thing happens, the layout calculations done above will be invalidated. Hence it is known as Layout Thrashing

**如果在 Javascript 执行之间强制执行 Style→Layout 过程，则强制回流(比如先修改元素宽度，在访问元素的`offsetWidth`那么为了即时获取浏览器不得不重新`layout`)。如果发生一次，则为强制回流。下一次如果发生同样的情况，上面所做的布局计算将无效。因此它被称为布局抖动**
