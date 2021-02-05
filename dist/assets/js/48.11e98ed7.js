(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{404:function(t,s,a){"use strict";a.r(s);var e=a(42),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"esm和cjs区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#esm和cjs区别"}},[t._v("#")]),t._v(" ESM和CJS区别")]),t._v(" "),a("h2",{attrs:{id:"区分es-module和commonjs两种方式的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#区分es-module和commonjs两种方式的区别"}},[t._v("#")]),t._v(" 区分Es Module和CommonJS两种方式的区别")]),t._v(" "),a("p",[t._v("CommonJS 是动态引入，执行时引入。\nES Module 是静态引入，编译时引入。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" sub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("test "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./utils"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("flat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" add "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./utils"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 会报错")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" sub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("test "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./utils"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("flat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" test "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./utils"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("这里的条件判断"),a("code",[t._v("Tree Shaking")]),t._v("指的是代码运行时的而非用户触发一些事件引入，\n用户触发事件 - 动态懒加载引入脚本(模块) - "),a("code",[t._v("Dynamic import")]),t._v(" "),a("code",[t._v("CJS")]),t._v("无法Tree Shaking本质 - 编译代码时导出未使用的代码无法确定在执行脚本时是否使用到了。")])]),t._v(" "),a("p",[t._v("上边的Demo可以看出两者的是使用区别。")]),t._v(" "),a("p",[t._v("关于"),a("strong",[t._v("静态引入")]),t._v("，在编译代码阶段并不会到达执行阶段就会报错。进行语法分析(编译)的时候就会解析"),a("code",[t._v("import")]),t._v("的语句，执行之前就会处理完模块的依赖。")]),t._v(" "),a("p",[t._v("ES modules不支持动态(执行时)引入，仅仅支持静态(编译)引入。")]),t._v(" "),a("p",[t._v("所以将静态引入放入条件判断比如"),a("code",[t._v("if")]),t._v("语句中进行执行时引入就会报错，因为编译阶段就会报错。")]),t._v(" "),a("p",[t._v("关于"),a("strong",[t._v("动态引入")]),t._v("，在执行代码阶段才会根据执行的逻辑动态引入。\b如果条件判断成立则引入模块，而不成立则永远不会引入模块。")]),t._v(" "),a("p",[t._v("CommonJS支持动态(执行时)引入。")]),t._v(" "),a("h2",{attrs:{id:"treeshaking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#treeshaking"}},[t._v("#")]),t._v(" TreeShaking")]),t._v(" "),a("p",[t._v("在webpack4.0以上的"),a("code",[t._v("TreeShaking")]),t._v("中，所谓的"),a("code",[t._v("Tree Shaking")]),t._v("就会"),a("code",[t._v("webpack")]),t._v("在编译时候根据分析模块关系，将模块中导出但并未使用(引入)的代码片段剔除从而达到精简代码，压缩代码体积的效果。")]),t._v(" "),a("p",[t._v("此时就很好理解为什么webpack中"),a("strong",[t._v("默认"),a("code",[t._v("Es Module")]),t._v("中支持"),a("code",[t._v("Tree Shaking")]),t._v("，因为在编译阶段就已经确定好了模块的引入和依赖关系，所以可以很好的处理"),a("code",[t._v("Tree Shaking")]),t._v("代码。")])]),t._v(" "),a("p",[t._v("而webpack在"),a("code",[t._v("Common js")]),t._v("中就不支持"),a("code",[t._v("Tree Shaking")]),t._v("，"),a("strong",[t._v("因为CJS使用的是执行时引入，也就是只有代码执行时候才会区别出到底引入了哪些模块，所以"),a("code",[t._v("Tree Shaking")]),t._v("就很矛盾了，CJS在webpack中无法支持Tree Shaking这就是原因。")])]),t._v(" "),a("p",[t._v("在代码编译阶段并不会执行代码，所以一些模块被导出并没有在顶层声明使用但是可能会在条件判断语句(代码执行时)又会被引入。所以"),a("code",[t._v("Tree Shaking")]),t._v("和"),a("code",[t._v("CJS")]),t._v("就存在了矛盾--"),a("strong",[t._v("编译阶段无法确定哪些无用代码在运行时候引用到了。")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("Dynamic import和CJS的Tree Shaking不要混淆了")]),t._v(" "),a("p",[t._v("需要额外注意的是，当用户触发一些事件才引入一些模块。这是动态引入 "),a("code",[t._v("Dynamic import")]),t._v("的概念。")]),t._v(" "),a("p",[t._v("而CJS的"),a("code",[t._v("Tree Shaking")]),t._v("是指在代码运行时一些条件下引入了导出的一些模块，而在编译时候这些模块存在导出而并没有被引入。")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Rollup中CJS的TreeShaking")]),t._v(" "),a("p",[t._v("这里所说"),a("code",[t._v("Tree Shaking")]),t._v("无法支持"),a("code",[t._v("Common JS")]),t._v("仅仅是在"),a("code",[t._v("webpack")]),t._v("中，当我在使用"),a("code",[t._v("Rollup")]),t._v("时，使用"),a("code",[t._v("@rollup/plugin-commonjs")]),t._v("插件，发现调用"),a("code",[t._v("exports")]),t._v("使用CJS语法Rollup仍然可以帮我进行"),a("code",[t._v("Tree Shaking")]),t._v(",有时间了研究下这个插件源码。")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Webpack中CJS的TreeShaking")]),t._v(" "),a("p",[t._v("其实"),a("code",[t._v("webpack")]),t._v("中也可以依赖一些插件使用"),a("code",[t._v("commonjs")]),t._v("进行"),a("code",[t._v("Tree Shaking")]),t._v(" 也可以可以做到部分的 tree-shaking 的，例如"),a("a",{attrs:{href:"https://github.com/indutny/webpack-common-shake",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/indutny/webpack-common-shake"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("但是，因为 commonjs 毕竟是动态引入的，还是会有一些限制 "),a("a",{attrs:{href:"https://github.com/indutny/webpack-common-shake#limitations",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/indutny/webpack-common-shake#limitations"),a("OutboundLink")],1),t._v(" 。这是语法的限制，无论 webpack 和 rollup 都会有。")]),t._v(" "),a("p",[t._v("另外，“当用户点击按钮触发事件的时候才会执行引入”—— 这个不是 tree-shaking ，这就是异步加载。")])])])}),[],!1,null,null,null);s.default=n.exports}}]);