(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{399:function(t,e,s){"use strict";s.r(e);var a=s(42),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"window-getcomputedstyle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#window-getcomputedstyle"}},[t._v("#")]),t._v(" Window.getComputedStyle")]),t._v(" "),s("p",[t._v("Window.getComputedStyle()方法返回一个对象，"),s("strong",[t._v("该对象在应用活动样式表并解析这些值可能包含的任何基本计算后报告元素的所有 CSS 属性的值")]),t._v("。 私有的 CSS 属性值可以通过对象提供的 API 或通过简单地使用 CSS 属性名称进行索引来访问。")]),t._v(" "),s("p",[t._v("语法")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("let style = window.getComputedStyle(element, [pseudoElt]);\n")])])]),s("ul",[s("li",[t._v("element\n用于获取计算样式的 Element。")]),t._v(" "),s("li",[t._v("pseudoElt 可选\n指定一个要匹配的伪元素的字符串。必须对普通元素省略（或 null）。")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("返回的 style 是一个实时的 CSSStyleDeclaration 对象，当元素的样式更改时，它会自动更新本身。")])]),t._v(" "),s("ul",[s("li",[t._v("getComputedStyle 与 getPropertyValue")])]),t._v(" "),s("p",[t._v("getComputedStyle 为何物呢，"),s("strong",[t._v("DOM 中 getComputedStyle 方法可用来获取元素中所有可用的 css 属性列表，以数组形式返回，并且是只读的")]),t._v("。IE678 中则用 currentStyle 代替 。")]),t._v(" "),s("p",[t._v("假设我们页面上存在一个 id 为 id 的元素，那么使用 getComputedStyle 获取元素样式就如下图所示\n"),s("img",{attrs:{src:"https://images2015.cnblogs.com/blog/608782/201602/608782-20160223180051740-242127492.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"window-getcomputedstyle-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#window-getcomputedstyle-2"}},[t._v("#")]),t._v(" window.getComputedStyle")]),t._v(" "),s("h3",{attrs:{id:"window-getcomputedstyle-el-getpropertyvalue-stylename"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#window-getcomputedstyle-el-getpropertyvalue-stylename"}},[t._v("#")]),t._v(" window.getComputedStyle(el).getPropertyValue(styleName)")]),t._v(" "),s("blockquote",[s("p",[t._v("获取 getComputedStyle 下的单一属性值。")])]),t._v(" "),s("p",[t._v("尝试一下之后可以看到，"),s("strong",[t._v("window.getComputedStyle 获取的是所有的样式，如果我们只是要获取单一样式，该怎么做呢。这个时候就要介绍另一个方法 -- getPropertyValue")]),t._v(" 。")]),t._v(" "),s("p",[t._v("用法也很简单：")]),t._v(" "),s("p",[t._v("语法：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('// 使用 getPropertyValue 来指定获取的属性\nwindow.getComputedStyle("元素", "伪类").getPropertyValue(style);\n')])])]),s("h2",{attrs:{id:"style-与-getcomputedstyle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#style-与-getcomputedstyle"}},[t._v("#")]),t._v(" style 与 getComputedStyle")]),t._v(" "),s("p",[t._v("必须要提出的是，我们使用 element.style 也可以获取元素的 CSS 样式声明对象，但是其与 getComputedStyle 方法还是有一些差异的。")]),t._v(" "),s("p",[s("strong",[t._v("首先，element.style 是可读可写的，而 getComputedStyle 为只读。")])]),t._v(" "),s("p",[t._v("其次，element.style 只可以获取 style 样式上的属性值，而无法得到所有的 CSS 样式值，什么意思呢？回顾一下 CSS 基础，CSS 样式表的表现有三种方式，")]),t._v(" "),s("ul",[s("li",[t._v("内嵌样式（inline Style） ：是写在 HTML 标签里面的，内嵌样式只对该标签有效。")]),t._v(" "),s("li"),t._v(" "),s("li",[t._v("内部样式（internal Style Sheet）：是写在 HTML 的 <style> 标签里面的，内部样式只对所在的网页有效。")]),t._v(" "),s("li",[t._v("外部样式表（External Style Sheet）：如果很多网页需要用到同样的样式(Styles)，将样式(Styles)写在一个以 .CSS 为后缀的 CSS 文件里，然后在每个需要用到这些样式(Styles)的网页里引用这个 CSS 文件。")])]),t._v(" "),s("p",[t._v("而 "),s("strong",[t._v("element.style 只能获取被这些样式表定义了的样式")]),t._v("，而 "),s("strong",[t._v("getComputedStyle 能获取到所有样式的值(即使没有 css 样式也能翻出来很多样式)")]),t._v("（在不同浏览器结果不一样，chrome 中是 264，在 Firefox 中是 238），不管是否定义在样式表中，以及 window.getComputedStyle 可以获取伪元素的样式。譬如：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token style"}},[s("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n  "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#id")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("float")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" left"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\nvar elem = document.getElementById('id'); elem.style.length // 2\nwindow.getComputedStyle(elem, null).length // 264\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("window.getComputedStyle 还有另一种写法，就是 document.defaultView.getComputedStyle,他俩的用法是完全一致的。")])]),t._v(" "),s("h2",{attrs:{id:"获取元素样式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取元素样式"}},[t._v("#")]),t._v(" 获取元素样式")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getStyle")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" prop")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" computedStyle "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getComputedStyle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" computedStyle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPropertyValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);