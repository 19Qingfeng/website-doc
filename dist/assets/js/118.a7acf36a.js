(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{472:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"code-splitting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code-splitting"}},[t._v("#")]),t._v(" Code Splitting")]),t._v(" "),a("h2",{attrs:{id:"代码拆分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码拆分"}},[t._v("#")]),t._v(" 代码拆分")]),t._v(" "),a("h3",{attrs:{id:"entry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entry"}},[t._v("#")]),t._v(" entry")]),t._v(" "),a("p",[t._v("将单个"),a("code",[t._v("bundle")]),t._v("拆分成为若干个小的"),a("code",[t._v("bundle/chunks")]),t._v(",目的为了提高首屏加载时间。")]),t._v(" "),a("ul",[a("li",[t._v("基于入口"),a("code",[t._v("entry")]),t._v("进行拆分")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("entry"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  app"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./index.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认入口文件")]),t._v("\n  test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./test.js'")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 需要额外拆分的入口文件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[a("code",[t._v("webpack")]),t._v("会基于"),a("code",[t._v("entry")]),t._v("中的各个入口文件读取对应的文件，将对应的文件达成一个包(相关联模块依赖等等)打成一个包。\n通常多个入口之间会有一些公共的东西，这种方法会造成一些重复代码重复打包。")])]),t._v(" "),a("h3",{attrs:{id:"splitchunks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#splitchunks"}},[t._v("#")]),t._v(" splitChunks")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("splitChunks")]),t._v("提取公共代码，拆分业务代码和第三方组件库")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v(" optimization"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      splitChunks"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        cacheGroups"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 拆分第三方引用包")]),t._v("\n          vendors"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'library'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("[\\\\/]node_modules[\\\\/]")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            minSize"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            minChunks"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            priority"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            chunks"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'initial'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 拆分src中的一个模块被引用2次以上(包含两次)到common中")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 拆分公用代码")]),t._v("\n          common"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'common'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("[\\\\/]src[\\\\/]")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            minSize"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            minChunks"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            priority"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            chunks"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'all'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("h2",{attrs:{id:"异步加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异步加载"}},[t._v("#")]),t._v(" 异步加载")]),t._v(" "),a("p",[t._v("不同的框架对于动态加载有很多种不同的解决方案。")]),t._v(" "),a("p",[a("code",[t._v("react")]),t._v("和"),a("code",[t._v("vue")]),t._v("都有各自成熟的"),a("code",[t._v("lazy loading")]),t._v("。")]),t._v(" "),a("p",[t._v("使用"),a("code",[t._v("lazy loading")]),t._v("对于组件的"),a("code",[t._v("lazy loading")]),t._v("以及页面的"),a("code",[t._v("lazy loading")]),t._v("加载速度提升都是非常大的，提升"),a("code",[t._v("code Coverage")]),t._v("以及页面懒加载。")])])}),[],!1,null,null,null);s.default=e.exports}}]);