(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{404:function(t,s,e){"use strict";e.r(s);var n=e(42),a=Object(n.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"element-getboundingclientrect"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#element-getboundingclientrect"}},[t._v("#")]),t._v(" Element.getBoundingClientRect")]),t._v(" "),e("p",[t._v("Element.getBoundingClientRect() 方法返回元素的大小及其相对于"),e("strong",[t._v("视口")]),t._v("的位置。")]),t._v(" "),e("blockquote",[e("p",[t._v("element.getBoundingClientRect()返回的相对于视口左上角的位置。")])]),t._v(" "),e("p",[e("strong",[t._v("element.getBoundingClientRect()返回的 height 和 width 是针对元素可见区域的宽和高(具体尺寸根据 box-sizing 决定)，并不包含滚动条被隐藏的内容。")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("如果是标准盒子模型，元素的尺寸等于 width/height + padding + border-width 的总和。如果 box-sizing: border-box，元素的的尺寸等于 width/height。")])]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("该 API 返回的 DOMRect 对象在现代浏览器中可以被修改。而对于返回值为 DOMRectReadOnly 的旧版本，返回值并不能被修改")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("rectObject "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" object"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBoundingClientRect")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("返回值是一个 DOMRect 对象，这个对象是由该元素的 getClientRects() 方法返回的一组矩形的集合，就是该元素的 CSS 边框大小。返回的结果是包含完整元素的最小矩形，并且拥有 left, top, right, bottom, x, y, width, 和 height 这几个以像素为单位的只读属性用于描述整个边框。除了 width 和 height 以外的属性是相对于视图窗口的左上角来计算的。（width 和 height 是当前元素显示的大小，并不计算元素滚动条被隐藏的高和宽）")]),t._v(" "),e("p",[t._v("当计算边界矩形时，会考虑视口区域（或其他可滚动元素）内的滚动操作，"),e("strong",[t._v("也就是说，当滚动位置发生了改变，top 和 left 属性值就会随之立即发生变化（因此，它们的值是相对于视口的，而不是绝对的）")]),t._v("。如果你需要获得相对于整个网页左上角定位的属性值，那么只要给 top、left 属性值加上当前的滚动位置（通过 window.scrollX 和 window.scrollY），这样就可以获取与当前的滚动位置无关的值。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://mdn.mozillademos.org/files/15087/rect.png",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"计算元素是否出现在视口内"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#计算元素是否出现在视口内"}},[t._v("#")]),t._v(" 计算元素是否出现在视口内")]),t._v(" "),e("p",[t._v("利用的还是元素距离视口的位置小于视口的大小。")]),t._v(" "),e("blockquote",[e("p",[t._v("注意即便变成了负值，那么也表示元素曾经出现过在屏幕中只是现在不显示了而已。(就比如滑动过)")])]),t._v(" "),e("p",[e("code",[t._v("vue-lazy")]),t._v("图片懒加载库源码就是这么判断的。")]),t._v(" "),e("div",{staticClass:"language-ts extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("isInView")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" rect "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("el"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBoundingClientRect")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" rect"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" window"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHeight "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" rect"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" window"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerWidth\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=a.exports}}]);