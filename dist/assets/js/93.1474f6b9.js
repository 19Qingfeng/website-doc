(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{445:function(t,s,a){"use strict";a.r(s);var e=a(42),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"依赖优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#依赖优化"}},[t._v("#")]),t._v(" 依赖优化")]),t._v(" "),a("p",[t._v("依赖优化主要是针对"),a("code",[t._v("webpack")]),t._v("打包本身过程的提速。")]),t._v(" "),a("h2",{attrs:{id:"noparse"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#noparse"}},[t._v("#")]),t._v(" noParse")]),t._v(" "),a("ul",[a("li",[t._v("noParse")])]),t._v(" "),a("p",[a("code",[t._v("noParse")]),t._v("意思在告诉 webpack 忽略就较大的库，直接提高构建速度。比如一些第三方工具类。使用一些传统的方式编写的而不是 ESM，比较独立没有外部依赖也比较大。那么干脆直接告诉"),a("code",[t._v("webpack")]),t._v("不对它进行编译。当然前提是不使用 ESM 编写的第三方库。(也就是直接引入不进行编译和打包)")]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("module")]),t._v("中和"),a("code",[t._v("rules")]),t._v("同级别进行配置")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    module"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        noParse"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("jquery|lodash")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//接收参数  正则表达式 或函数")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("noParse")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("contentPath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("jquery|lodash")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("contentPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("防止 webpack 解析那些任何与给定正则表达式相匹配的文件。忽略的文件中不应该含有 import,require,define 的调用，或任何其他导入机制。忽略大型的 library 可以提高构建性能。")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("一旦文件"),a("code",[t._v("noParse")]),t._v("了，那么"),a("code",[t._v("externals")]),t._v("也将不起作用了。\n所以总的结论是:文件中没有任何导入就可以使用 "),a("code",[t._v("noParse")]),t._v("，"),a("code",[t._v("noParse")]),t._v(" 对于 "),a("code",[t._v("loader")]),t._v(","),a("code",[t._v("plugin")]),t._v(" 等等都没有任何影响")]),t._v(" "),a("blockquote",[a("p",[t._v("loader、plugin对某个文件有没有处理，只与loader、plugin中自己的配置有关系。(即使设置了"),a("code",[t._v("noParse")]),t._v(",loader...也对它进行处理。)")])])]),t._v(" "),a("h2",{attrs:{id:"dllplugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dllplugin"}},[t._v("#")]),t._v(" dllPlugin")]),t._v(" "),a("p",[t._v("基于dllPlugin在develop模式提升构建速度。")])])}),[],!1,null,null,null);s.default=n.exports}}]);