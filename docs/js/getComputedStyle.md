# Window.getComputedStyle

Window.getComputedStyle()方法返回一个对象，**该对象在应用活动样式表并解析这些值可能包含的任何基本计算后报告元素的所有 CSS 属性的值**。 私有的 CSS 属性值可以通过对象提供的 API 或通过简单地使用 CSS 属性名称进行索引来访问。

语法

```
let style = window.getComputedStyle(element, [pseudoElt]);
```

- element
  用于获取计算样式的 Element。
- pseudoElt 可选
  指定一个要匹配的伪元素的字符串。必须对普通元素省略（或 null）。

::: tip
返回的 style 是一个实时的 CSSStyleDeclaration 对象，当元素的样式更改时，它会自动更新本身。
:::

- getComputedStyle 与 getPropertyValue

getComputedStyle 为何物呢，**DOM 中 getComputedStyle 方法可用来获取元素中所有可用的 css 属性列表，以数组形式返回，并且是只读的**。IE678 中则用 currentStyle 代替 。

假设我们页面上存在一个 id 为 id 的元素，那么使用 getComputedStyle 获取元素样式就如下图所示
![](https://images2015.cnblogs.com/blog/608782/201602/608782-20160223180051740-242127492.png)

## window.getComputedStyle

> 获取 getComputedStyle 下的单一属性值。

尝试一下之后可以看到，**window.getComputedStyle 获取的是所有的样式，如果我们只是要获取单一样式，该怎么做呢。这个时候就要介绍另一个方法 -- getPropertyValue** 。

用法也很简单：

语法：

```
// 使用 getPropertyValue 来指定获取的属性
window.getComputedStyle("元素", "伪类").getPropertyValue(style);
```

## style 与 getComputedStyle

必须要提出的是，我们使用 element.style 也可以获取元素的 CSS 样式声明对象，但是其与 getComputedStyle 方法还是有一些差异的。

**首先，element.style 是可读可写的，而 getComputedStyle 为只读。**

其次，element.style 只可以获取 style 样式上的属性值，而无法得到所有的 CSS 样式值，什么意思呢？回顾一下 CSS 基础，CSS 样式表的表现有三种方式，

- 内嵌样式（inline Style） ：是写在 HTML 标签里面的，内嵌样式只对该标签有效。
- 
- 内部样式（internal Style Sheet）：是写在 HTML 的 \<style\> 标签里面的，内部样式只对所在的网页有效。
- 外部样式表（External Style Sheet）：如果很多网页需要用到同样的样式(Styles)，将样式(Styles)写在一个以 .CSS 为后缀的 CSS 文件里，然后在每个需要用到这些样式(Styles)的网页里引用这个 CSS 文件。

而 **element.style 只能获取被这些样式表定义了的样式**，而 **getComputedStyle 能获取到所有样式的值(即使没有 css 样式也能翻出来很多样式)**（在不同浏览器结果不一样，chrome 中是 264，在 Firefox 中是 238），不管是否定义在样式表中，以及 window.getComputedStyle 可以获取伪元素的样式。譬如：

```html
<style>
  #id {
    width: 100px;
    float: left;
  }
</style>

var elem = document.getElementById('id'); elem.style.length // 2
window.getComputedStyle(elem, null).length // 264
```

::: tip
window.getComputedStyle 还有另一种写法，就是 document.defaultView.getComputedStyle,他俩的用法是完全一致的。
:::

## 获取元素样式

```js
const getStyle = (el, prop) => {
  const computedStyle = window.getComputedStyle(el);
  return computedStyle.getPropertyValue(prop);
};
```
