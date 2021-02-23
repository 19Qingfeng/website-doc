(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{419:function(a,t,s){"use strict";s.r(t);var n=s(42),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"函数优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数优化"}},[a._v("#")]),a._v(" 函数优化")]),a._v(" "),s("p",[a._v("上边说到了"),s("code",[a._v("lazy parse")]),a._v("懒解析，本质上对于没有调用的函数并不会解析进行堆内存的分配。提升性能，")]),a._v(" "),s("h2",{attrs:{id:"lazy-parse懒解析-vs-eager-parsing-饥饿解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lazy-parse懒解析-vs-eager-parsing-饥饿解析"}},[a._v("#")]),a._v(" "),s("code",[a._v("lazy parse")]),a._v("懒解析 VS "),s("code",[a._v("eager parsing")]),a._v(" 饥饿解析")]),a._v(" "),s("p",[a._v("但是显示中对于一些函数声明后立马就要调用，就会导致 V8 对于"),s("code",[a._v("lazy parse")]),a._v("然后在进行"),s("code",[a._v("eager parsing")]),a._v("，实际上会导致效率被降低了。")]),a._v(" "),s("h2",{attrs:{id:"立即执行函数告诉-v8"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#立即执行函数告诉-v8"}},[a._v("#")]),a._v(" 立即执行函数告诉 V8")]),a._v(" "),s("p",[a._v("所以我们需要告诉 V8 我们这个函数是一个立即执行函数，不需要进行"),s("code",[a._v("lazy parse")]),a._v("而是直接进行"),s("code",[a._v("eager parsing")]),a._v(".")]),a._v(" "),s("p",[a._v("其实很简单，只需要在函数声明的时候用"),s("strong",[a._v("括号")]),a._v("包起来就行了。")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[a._v("add")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("num1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" num2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" num1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" num2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("默认时，会对上边声明的"),s("code",[a._v("add")]),a._v("函数进行一个懒解析，等到真正调用的时候才会进行真正解析这个函数。")]),a._v(" "),s("p",[a._v("其实如果要应用"),s("code",[a._v("eager parsing")]),a._v("的话，特别简单")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[a._v("add")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("num1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" num2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" num1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" num2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[s("strong",[a._v("当通过一对括号，将函数的声明包括起来")]),a._v("，那么当 V8 解析到这个函数的时候就不会进行默认的懒解析了，而是直接进行"),s("code",[a._v("eager parsing")]),a._v("，等到开始调用的时候因为函数已经会提前解析了，所以效率就特别高了。")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),s("p",[a._v("当然，往往我们使用一些压缩打包工具,比如"),s("code",[a._v("webpack")]),a._v("会将最终的"),s("code",[a._v("js")]),a._v("代码进行压缩，可以使用"),s("code",[a._v("optimize")]),a._v("或者其他，(其实"),s("code",[a._v("webpack")]),a._v("中的 ug/terser)等插件现在也可以完美的解决这个问题，可以将压缩去掉的括号补全回来。")])])])}),[],!1,null,null,null);t.default=e.exports}}]);