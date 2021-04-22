# 属性

> 罗列一些比较新的，或者偶尔知道的`css`技巧和属性。

## text-align

之前一直误解`text-align`仅仅对于文本生效。

实际上 **`text-align`设置在块级元素中的时候，会作用到该块级元素下的所有行内元素进行产生效果。(比如 div 中的 span，img 等行内元素)**(属性可继承)

::: tip
注意作用到行内子元素的对其方式(整个子元素)。
:::

demo 自己看吧，比较简单的属性之前是因为自己理解错误。

::: details

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .wrapper {
        text-align: center;
      }

      span {
        border: 1px solid red;
      }
    </style>
  </head>

  <body>
    <div class="wrapper">
      <img
        src="//upload-images.jianshu.io/upload_images/1371196-6be659e9bed600eb.png"
        height="20"
        width="20"
        alt=""
      />
    </div>
    <div class="wrapper">
      <span>aaa</span>
    </div>
  </body>
</html>
```

:::

## object-fit

[object-fit](https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-fit)

`object-fit` `CSS` 属性指定可替换元素的内容应该如何适应到其使用的高度和宽度确定的框。

比如用于`img`标签，`img`标签中的图片就可以认为是可替换元素的内容，框就是可以理解为`img`标签的大小。

`object-fit`属性用于`img`标签的话，简单来说就是`img`标签中的元素(图片内容)如何在`img`标签框中进行展示。

您可以通过使用 `object-position` 属性来切换被替换元素的内容对象在元素框内的对齐方式。

::: tip
`object-fit`属性是响应式的，会根据框大小变化而变化对应匹配内容。
:::

## touch-action

[object-fit](https://developer.mozilla.org/zh-CN/docs/Web/CSS/touch-action)

CSS 属性 `touch-action` 用于设置触摸屏用户如何操纵元素的区域(例如，浏览器内置的拖动功能)。

允许用户区域内进行特定手势操作(通过设置)，-> 禁用浏览器默认的手势行为。

## backface-visibility

`backface-visibility` 属性定义当元素不面向屏幕时是否可见。(比如调用`transform3D`,`rotate`旋转时，元素背面正常来说应该是显示倒着的元素。但是使用`backface-visibility`会控制元素旋转时背面是否可见。)

## backdrop-filter & filter

### 语法

> 对于下`backdrop-filter和filter`语法，其实一模一样。

看下面的对比表：

> backdrop-filter

```css
/* 关键字值 */
backdrop-filter: none;

/* URL方式外链SVG filter */
backdrop-filter: url(zxx.svg#filter);

/* <filter-function>值 */
backdrop-filter: blur(2px);
backdrop-filter: brightness(60%);
backdrop-filter: contrast(40%);
backdrop-filter: drop-shadow(4px 4px 10px blue);
backdrop-filter: grayscale(30%);
backdrop-filter: hue-rotate(120deg);
backdrop-filter: invert(70%);
backdrop-filter: opacity(20%);
backdrop-filter: sepia(90%);
backdrop-filter: saturate(80%);
```

> filter

```css
/* 关键字值 */
filter: none;

/* URL方式外链SVG filter */
filter: url(zxx.svg#filter);

/* <filter-function>值 */
filter: blur(2px);
filter: brightness(60%);
filter: contrast(40%);
filter: drop-shadow(4px 4px 10px blue);
filter: grayscale(30%);
filter: hue-rotate(120deg);
filter: invert(70%);
filter: opacity(20%);
filter: sepia(90%);
filter: saturate(80%);
```

各个滤镜方法对应含义如下表：

|    滤镜     |   释义   |
| :---------: | :------: |
|    blur     |   模糊   |
| brightness  |   亮度   |
|  contrast   |  对比度  |
| drop-shadow |   投影   |
|  grayscale  |   灰度   |
| hue-rotate  | 色调变化 |
|   invert    |   反相   |
|   opacity   |  透明度  |
|  saturate   |  饱和度  |
|    sepia    |   褐色   |

然后各个滤镜大致效果可以参见之前这篇文章：“[FDCon2019 大会分享之滤镜与混合模式实录](https://www.zhangxinxu.com/wordpress/2019/06/fdcon2019-css-share/)”，这里就不一一展示了，唯一需要演示的就是文章一开始提到的毛玻璃效果。

### backdrop-filter 和 filter 区别

backdrop-filter 是让当前元素所在区域后面的内容模糊灰度或高亮之类，要想看到效果，需要元素本身半透明或者完全透明；而 filter 是让当前元素自身模糊灰度或高亮之类。

我们来通过毛玻璃效果的案例来感受一下 backdrop-filter 的实际效果。
