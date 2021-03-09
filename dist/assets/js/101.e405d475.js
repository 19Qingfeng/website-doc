(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{453:function(e,v,_){"use strict";_.r(v);var t=_(42),a=Object(t.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"webpack-优化配置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#webpack-优化配置"}},[e._v("#")]),e._v(" webpack 优化配置")]),e._v(" "),_("h2",{attrs:{id:"treeshaking"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#treeshaking"}},[e._v("#")]),e._v(" TreeShaking")]),e._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),_("p",[e._v("Tree Shaking 基于"),_("code",[e._v("ESM")]),e._v("，支持静态引入。生产模式默认启动的。\n涉及到全局作用域的一些模块，需要额外使用"),_("code",[e._v("sideEffects")]),e._v("进行指定。(比如 css 文件，全局变量 js)")])]),e._v(" "),_("blockquote",[_("p",[e._v("需要注意 babel 的配置，将"),_("code",[e._v("modules:false")]),e._v("。这样才不会让"),_("code",[e._v("babel")]),e._v("转换掉"),_("code",[e._v("ESM")]),e._v("语法，从而使用"),_("code",[e._v("Tree Shaking")]),e._v("优化。")])]),e._v(" "),_("h2",{attrs:{id:"js-压缩"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#js-压缩"}},[e._v("#")]),e._v(" JS 压缩")]),e._v(" "),_("ul",[_("li",[_("p",[e._v("Webpack4 后引入"),_("code",[e._v("uglifyjs-webpack-plugin")])])]),e._v(" "),_("li",[_("p",[e._v("支持 ES6 替换为"),_("code",[e._v("terser-webpack-plugin")])])])]),e._v(" "),_("blockquote",[_("p",[_("code",[e._v("terser")]),e._v("其实也就是"),_("code",[e._v("uglifyjs")]),e._v("一个分支,"),_("code",[e._v("terser")]),e._v("效率和效果都比"),_("code",[e._v("ug")]),e._v("好,所以后来默认使用"),_("code",[e._v("terser")]),e._v("进行 js 压缩")])]),e._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),_("p",[_("code",[e._v("terser-webpack-plugin")]),e._v("默认在生产环境也会启用。")])]),e._v(" "),_("h2",{attrs:{id:"作用域提升"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#作用域提升"}},[e._v("#")]),e._v(" 作用域提升")]),e._v(" "),_("p",[e._v("所谓的作用域提升，当使用 ESM 倒入导出语法时，"),_("code",[e._v("webpack")]),e._v("在生产模式中会自动帮我们进行作用域提升。也就是它会尝试将两个 ESM 合并为一个脚本中的代码。（试图将依赖合并到调用里边）")]),e._v(" "),_("p",[e._v("下图"),_("code",[e._v("utils")]),e._v("文件中导出了一个 String，而"),_("code",[e._v("index.js")]),e._v("导入了这个依赖，"),_("code",[e._v("console")]),e._v("了这个 String。")]),e._v(" "),_("p",[_("img",{attrs:{src:"https://i.loli.net/2021/02/19/QkaRtmLjYB3q7nc.png",alt:"截屏2021-02-19 下午2.16.39.png"}})]),e._v(" "),_("p",[e._v("对比作用域提升来看看 webpack 打包后的代码：")]),e._v(" "),_("p",[_("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/86fcf104af9b4d299a7b2d1051ce5d62~tplv-k3u1fbpfcp-watermark.image",alt:"对比"}})]),e._v(" "),_("p",[e._v("生产模式默认会开启这个功能，它会基于"),_("code",[e._v("ESM")]),e._v("尝试合并我们的模块从而达到节省代码体积，提高执行效率。")]),e._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),_("p",[e._v("需要额外注意的是作用域提升也要注意使用"),_("code",[e._v("babel")]),e._v("的"),_("code",[e._v("modules:false")]),e._v("。因为它是针对"),_("code",[e._v("esm")]),e._v("中的"),_("code",[e._v("import export")]),e._v("的优化功能。")])]),e._v(" "),_("h2",{attrs:{id:"babel-7"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#babel-7"}},[e._v("#")]),e._v(" Babel 7")]),e._v(" "),_("p",[e._v("通常"),_("code",[e._v("webpack")]),e._v("和"),_("code",[e._v("babel")]),e._v("一起使用.")]),e._v(" "),_("ul",[_("li",[_("p",[e._v("@babel/polyfill")]),e._v(" "),_("p",[e._v("首先，"),_("code",[e._v("babel")]),e._v("常用的一定是"),_("code",[e._v("babel/polyfill")]),e._v("。它其实就是 babel 对于浏览器的兼容新 ES 语法的 polyfill。当然"),_("code",[e._v("@babel/polyfill")]),e._v("本身会囊括所有的规则，但是有一些函数我们并不需要只需要我们所用到的。所以在 babel 配置中，可以使用"),_("code",[e._v("useBuiltIns: 'usage'")]),e._v("进行按需引入 polyfill。")])])]),e._v(" "),_("ul",[_("li",[e._v("辅助函数,使用"),_("code",[e._v("@babel/plugin-transform-runtime")]),e._v("解决。")])]),e._v(" "),_("p",[_("code",[e._v("@babel/plugin-transform-runtime")]),e._v("主要解决了两个问题。")]),e._v(" "),_("p",[_("strong",[e._v("第一个就是关于"),_("code",[e._v("@babel/polyfill")]),e._v("污染全局作用域(直接挂在原型上)，而"),_("code",[e._v("transform")]),e._v("并不会它是在一个统一的模块内。这对于开发类库来说是非常重要的一点。\n"),_("code",[e._v("transform")]),e._v("将 api 从之前的直接修改原型改为了从一个统一的模块中引入，避免了对全局变量及其原型的污染，解决了这个问题")])]),e._v(" "),_("p",[e._v("第二点就是关于辅助函数的处理，babel 转译 "),_("code",[e._v("syntax")]),e._v(" 时，有时候会使用一些辅助的函数来帮忙转译。")]),e._v(" "),_("blockquote",[_("p",[e._v("class 语法中，babel 自定义了 _classCallCheck 这个函数来辅助；typeof 则是直接重写了一遍，自定义了 _typeof 这个函数来辅助。这些函数叫做 helpers。从上图中可以看到，helper 直接在转译后的文件里被定义了一遍。如果一个项目中有 100 个文件，其中每个文件都写了一个 class，那么这个项目最终打包的产物里就会存在 100 个 _classCallCheck 函数，他们的长相和功能一模一样，这显然不合理。")])]),e._v(" "),_("p",[_("strong",[_("code",[e._v("transform")]),e._v("将 helpers 从之前的原地定义改为了从一个统一的模块中引入，使得打包的结果中每个 helper 只会存在一个，解决了这个问题")])]),e._v(" "),_("ul",[_("li",[_("code",[e._v("@babel/preset-env")]),e._v("中配置"),_("code",[e._v("target")]),e._v("属性中的"),_("code",[e._v('browser:[">0.25"]')]),e._v(",这里可以指定很多的配置项。比如这里的>0.25%，表示"),_("code",[e._v("babel")]),e._v("最终将转码结果必须兼容支持市场上使用大于百分之 0.25 的代码。(其实就是基于 browserList)")])]),e._v(" "),_("p",[e._v("基础 Babel 配置可以查看这篇文章。"),_("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/147083132",target:"_blank",rel:"noopener noreferrer"}},[e._v("Babel-plugin-transform-runtime到底是什么"),_("OutboundLink")],1)])])}),[],!1,null,null,null);v.default=a.exports}}]);