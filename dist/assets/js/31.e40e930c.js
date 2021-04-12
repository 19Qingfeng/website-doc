(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{385:function(t,e,v){"use strict";v.r(e);var _=v(42),o=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"回流-重塑"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#回流-重塑"}},[t._v("#")]),t._v(" 回流/重塑")]),t._v(" "),v("p",[t._v("回流重塑的概念就不累赘了。")]),t._v(" "),v("p",[t._v("访问及时属性也会触发元素的回流，比如"),v("code",[t._v("top")]),t._v(","),v("code",[t._v("left")]),t._v("等值。")]),t._v(" "),v("p",[t._v("可以使用"),v("code",[t._v("translate")]),t._v("替代，因为"),v("code",[t._v("translate")]),t._v("并不改变元素原本的位置，所以并不会触发回流/重塑。")]),t._v(" "),v("p",[t._v("以及其他待补充。")]),t._v(" "),v("ul",[v("li",[t._v("用 "),v("code",[t._v("translate")]),t._v(" 替换 "),v("code",[t._v("top")]),t._v("/"),v("code",[t._v("left")]),t._v("/"),v("code",[t._v("right")]),t._v("...")])]),t._v(" "),v("blockquote",[v("p",[v("code",[t._v("translate")]),t._v("并不会触发回流，因为它并不改变元素原本的位置。")])]),t._v(" "),v("p",[t._v("::: tips\n当你要用到像这样的属性：offsetTop、offsetLeft、 offsetWidth、offsetHeight、scrollTop、scrollLeft、scrollWidth、scrollHeight、clientTop、clientLeft、clientWidth、clientHeight 时，你就要注意了！注意，仅仅是获取访问也会触发回流。")]),t._v(" "),v("p",[t._v("“像这样”的属性，到底是像什么样？——这些值有一个共性，就是需要"),v("strong",[t._v("通过即时计算得到")]),t._v("。"),v("strong",[t._v("因此浏览器为了获取这些值，也会进行回流。")]),t._v("\n:::")]),t._v(" "),v("ul",[v("li",[t._v("用 "),v("code",[t._v("opacity")]),t._v(" 替换 "),v("code",[t._v("visibility")])])]),t._v(" "),v("blockquote",[v("p",[t._v("opacity 属性并不会修改元素的布局，所以并不会触发回流。")])]),t._v(" "),v("ul",[v("li",[t._v("把 dom 离线 ，修改 N 次再显示")])]),t._v(" "),v("blockquote",[v("p",[t._v("很好理解，离线 DOM 后修改样式并不会触发回流和重塑，修改完成在重新让他展示。也就是多次回流操作离线后节省次数变成展示/隐藏两次。")])])])}),[],!1,null,null,null);e.default=o.exports}}]);