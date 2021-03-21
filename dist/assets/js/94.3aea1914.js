(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{444:function(t,a,s){"use strict";s.r(a);var e=s(42),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"资源优先加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#资源优先加载"}},[t._v("#")]),t._v(" 资源优先加载")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("浏览器默认安排资源加载优先级。")])]),t._v(" "),s("li",[s("p",[t._v("手动使用"),s("code",[t._v("preload")]),t._v(","),s("code",[t._v("prefetch")]),t._v("可以调整资源加载优先级。")])])]),t._v(" "),s("h2",{attrs:{id:"preload"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#preload"}},[t._v("#")]),t._v(" preload")]),t._v(" "),s("p",[t._v("preload: 提前加载较晚出现，但对当前页面非常重要的资源。(提升资源加载优先级)")]),t._v(" "),s("blockquote",[s("p",[t._v("常用于当前页面中一些资源比较重要，此时可以通过 preload 进行资源的加载顺序提升。")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("preload"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("img/pc.svg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("as")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("注意"),s("code",[t._v("preload")]),t._v("只负责加载不负责解析，意思就是即使调用了"),s("code",[t._v("preload")]),t._v("声明同时也需要引入资源。")])]),t._v(" "),s("blockquote",[s("p",[t._v("preload 同时具有多种"),s("code",[t._v("as")]),t._v("的"),s("code",[t._v("type")]),t._v("，比如"),s("code",[t._v("font")]),t._v("，"),s("code",[t._v("video")]),t._v("等等。需要注意的是使用"),s("code",[t._v("font")]),t._v("时，一定要给 link 标签设置额外的跨域属性"),s("code",[t._v("crossorigin='anonymous'")]),t._v("，以及最好指定对应的字体类型"),s("code",[t._v("type='font/woff2'")]),t._v("。")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("preload"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("xxxx.woff2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("as")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("font"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("font/woff2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("crossorigin")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("anonymous"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[s("code",[t._v("preload")]),t._v("顾名思义提前当前页面资源优先级，所以需要额外在当前页面引入对应资源+preload 声明。")]),t._v(" "),s("p",[s("code",[t._v("prefetch")]),t._v("意为当页面空闲的时候进行加载资源，常用于预加载非当前页面资源，所以并不需要额外资源引入只需要 prefetch 声明引入即可。")])]),t._v(" "),s("h2",{attrs:{id:"prefetch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prefetch"}},[t._v("#")]),t._v(" prefetch")]),t._v(" "),s("p",[t._v("prefetch: 提前加载后续路由需要的资源，优先级低。")]),t._v(" "),s("p",[t._v("当前页面需要资源加载完成后，可以结合"),s("code",[t._v("prefetch")]),t._v("进行加载额外的资源请求。(最低优先级)")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("prefetch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("as")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("style"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("product-font.css"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("大多数时候"),s("code",[t._v("prefetch")]),t._v("都会配合"),s("code",[t._v("split Code")]),t._v("进行"),s("code",[t._v("lazy load")]),t._v("配合优化页面。")]),t._v(" "),s("p",[t._v("当使用"),s("code",[t._v("prefetch")]),t._v("的时，会提前加载之后可能会需要的资源。在下一次页面需要这个资源的时候(比如用户行为触发需要加载的时候)，可以直接从缓存中拿出来而不需要再次加载了."),s("code",[t._v("newtwork")]),t._v("资源列表也中会出现"),s("code",[t._v("prefech cache")]),t._v("。")])]),t._v(" "),s("h2",{attrs:{id:"webpack-中的prefetch和preload"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack-中的prefetch和preload"}},[t._v("#")]),t._v(" Webpack 中的"),s("code",[t._v("prefetch")]),t._v("和"),s("code",[t._v("preload")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://webpack.js.org/guides/code-splitting/#prefetchingpreloading-modules",target:"_blank",rel:"noopener noreferrer"}},[t._v("Prefetching/Preloading modules"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("code",[t._v("Webpack")]),t._v("中是通过"),s("code",[t._v("Magic Comments")]),t._v(" 魔法注释进行处理"),s("code",[t._v("prefetch")]),t._v("和"),s("code",[t._v("preload")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* webpackPreload: true */")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ChartingLibrary'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* webpackPrefetch: true */")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./path/to/LoginModal.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"vuecli-中的prefetch和preload"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuecli-中的prefetch和preload"}},[t._v("#")]),t._v(" VueCli 中的"),s("code",[t._v("prefetch")]),t._v("和"),s("code",[t._v("preload")])]),t._v(" "),s("ul",[s("li",[t._v("preload")])]),t._v(" "),s("p",[t._v("默认情况下，一个 Vue CLI 应用会为所有初始化渲染需要的文件自动生成 preload 提示。这些提示会被@vue/preload-webpack-plugin 注入，并且可以通过 chainWebpack 的 config.plugin('preload')进行修改和删除。")]),t._v(" "),s("ul",[s("li",[t._v("prefetch")])]),t._v(" "),s("p",[t._v("默认情况下，一个 Vue CLI 应用会为所有作为 async chunk 生成的 JavaScript 文件(通过动态 import()按需 code splitting 的产物)自动生成 prefetch 提示。这些提示会被@vue/preload-webpack-plugin 注入，并且可以通过 chainWebpack 的 config.plugin('prefetch')进行修改和删除。")]),t._v(" "),s("h2",{attrs:{id:"tip-使用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tip-使用场景"}},[t._v("#")]),t._v(" tip & 使用场景")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th"),t._v(" "),s("th",[t._v("preload")]),t._v(" "),s("th",[t._v("Prefetch")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("语法")]),t._v(" "),s("td",[s("code",[t._v('<link rel="preload" href="bg-image-narrow.png">')])]),t._v(" "),s("td",[s("code",[t._v('<link rel="prefetch" href="bg-image-narrow.png" />')])])]),t._v(" "),s("tr",[s("td",[t._v("适用场景")]),t._v(" "),s("td",[t._v("本页面接下来大概率要使用的资源")]),t._v(" "),s("td",[t._v("下个页面的资源。下个页面很可能会去访问")])]),t._v(" "),s("tr",[s("td",[t._v("浏览器支持情况")]),t._v(" "),s("td",[t._v("一般")]),t._v(" "),s("td",[t._v("较高")])]),t._v(" "),s("tr",[s("td",[t._v("加载时间")]),t._v(" "),s("td",[t._v("立即加载（一般而言，跟 as 有关）")]),t._v(" "),s("td",[t._v("浏览器闲置的时候才会加载（一般而言）")])])])]),t._v(" "),s("p",[t._v("1、preload 和 prefetch 的本质都是预加载，即先加载、后执行，加载与执行解耦。")]),t._v(" "),s("p",[t._v("2、"),s("strong",[t._v("preload 和 prefetch 不会阻塞页面的 onload。")])]),t._v(" "),s("p",[t._v("3、preload 用来声明当前页面的关键资源，强制浏览器尽快加载；而 prefetch 用来声明将来可能用到的资源，在浏览器空闲时进行加载。")]),t._v(" "),s("p",[t._v("4、不要滥用 preload 和 prefetch，需要在合适的场景中使用。")]),t._v(" "),s("p",[t._v("5、preload 的字体资源必须设置 crossorigin 属性，否则会导致重复加载。")]),t._v(" "),s("p",[t._v("原因是如果不指定 crossorigin 属性(即使同源)，浏览器会采用匿名模式的 CORS 去 preload，导致两次请求无法共用缓存。")])])}),[],!1,null,null,null);a.default=r.exports}}]);