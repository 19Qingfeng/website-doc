# 复合线程与图层

复合线程其实主要做的将页面拆成多个图层，当某个图层的元素发生变化的时候，那么并不会引发其他图层的重绘和回流。

**复合其实就是将页面拆成多个图层进行绘制叠加。**

> 默认情况下浏览器会分析，如果存在某个元素的变化影响太多的元素那么浏览器会默认将这个元素独立出来成为一个图层从而将它独立绘制提升提升性能。

## 主动提取图层

**下面一些属性的改变仅仅会触发复合而不会触发布局和重绘：**

**1. 移动位置`transform:translate(x,y)`**

**2. 变化大小`transform:scale(n)`**

**3. 旋转元素`transform:rotate(ndeg)`**

**3. 改变透明度`opacity`**

::: tip
一般来时使用这些属性时需要额外配合一些比如`will-change`属性将它提取到独立的图层中从而达到不触发回流(重绘)和布局的过程，直接进行`composite`。
最好还是加上吧，我现在也点晕。加与不加难道只是使用`GPU`加速以及抽离单独图层的关系吗？(有人说不加的话`translate`也会触发回流，可是我不加测试就没有)。
反正最好加上把，也可以使用`GPU`加速。
:::

::: tip
当使用这些属性的时候，加上一些提取图层的属性比如`will-change`。将这些元素提取到单独的图层，那么这些元素的改变就并不会触发回流和重绘。
实际开发中一般都会使用这些属性，这些属性本身并不会触发回流和布局计算，加上`will-change`属性抽离单独图层进行渲染`GPU`加速。
但是需要注意的是，不要抽离过多的图层，换句话说也就不要过于使用`will-change`，如果存在很多图层对于浏览器渲染也会造成性能陷阱，图层越多开销也越多反而适得其反造成卡顿。

将真正需要的提取的提取成单独图层进行 GPU 加速渲染。
:::

## 正确使用`will-change`

下面是另一个展示如何使用脚本正确地应用 will-change 属性的示例，在大部分的场景中，你都应该这样做。

```
var el = document.getElementById('element');

// 当鼠标移动到该元素上时给该元素设置 will-change 属性
el.addEventListener('mouseenter', hintBrowser);
// 当 CSS 动画结束后清除 will-change 属性
el.addEventListener('animationEnd', removeHint);

function hintBrowser() {
  // 填写上那些你知道的，会在 CSS 动画中发生改变的 CSS 属性名们
  this.style.willChange = 'transform, opacity';
}

function removeHint() {
  this.style.willChange = 'auto';
}
```

但是，如果某个应用在按下键盘的时候会翻页，比如相册或者幻灯片一类的，它的页面很大很复杂，此时在样式表中写上 will-change 是合适的。这会使浏览器提前准备好过渡动画，当键盘按下的时候就能立即看到灵活轻快的动画。

```
.slide {
  will-change: transform;
}
```
