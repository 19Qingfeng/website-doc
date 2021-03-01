(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{416:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"配合-v8-有效优化代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配合-v8-有效优化代码"}},[t._v("#")]),t._v(" 配合 V8 有效优化代码")]),t._v(" "),a("h2",{attrs:{id:"v8-编译原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v8-编译原理"}},[t._v("#")]),t._v(" V8 编译原理")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/02/05/W9F57XPQxjtpqGc.png",alt:"截屏2021-02-05 下午9.08.40.png"}})]),t._v(" "),a("p",[t._v("这张图其实就是 v8 对于 js 的解析过程。")]),t._v(" "),a("p",[t._v("首先它拿到"),a("code",[t._v("js")]),t._v("代码，先进行了"),a("code",[t._v("parse")]),t._v("解析阶段。将 js 解析成"),a("code",[t._v("ast")]),t._v("抽象语法树，也就是将"),a("code",[t._v("js")]),t._v("文本解析成字符，然后将重要的信息节点存储在一定的数据结构中。")]),t._v(" "),a("p",[t._v("接下来将这份数据结构"),a("code",[t._v("ast")]),t._v("交给解释器"),a("code",[t._v("interpreter")]),t._v("，理解代码的意义。在执行这份解释后的代码之前，编译器会提前进行一定的优化功能。当编译引擎发现优化不合适的时候，会进行一个"),a("strong",[t._v("反优化")]),t._v("的过程，这可能会造成一定的运行效率。")]),t._v(" "),a("p",[t._v("所以我们在代码层面的优化就是迎合"),a("code",[t._v("v8")]),t._v("上对于代码的优化，它是怎么进行的优化的，那么我们就尽可能的迎合它。同时回避一些作为反优化过程的代码。")]),t._v(" "),a("h2",{attrs:{id:"顺着-v8-思路优化代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#顺着-v8-思路优化代码"}},[t._v("#")]),t._v(" 顺着 V8 思路优化代码")]),t._v(" "),a("h3",{attrs:{id:"从编译原理出发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从编译原理出发"}},[t._v("#")]),t._v(" 从编译原理出发")]),t._v(" "),a("p",[t._v("来看看这个函数，通过"),a("code",[t._v("web Api")]),t._v("进行测量:")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("DETAILS")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" performance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" PerformanceObserver "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"perf_hooks"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" numa "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" numb "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nperformance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mark")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("numa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" numb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("numa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"s"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 类型发生变化")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("numa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" numb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nperformance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mark")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"end"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" observable "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PerformanceObserver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("list")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getEntries")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nobservable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("observe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  entryTypes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"measure"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nperformance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("measure")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"测量1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"start"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"end"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\nPerformanceEntry {\n  name: '测量1',\n  entryType: 'measure',\n  startTime: 0,\n  duration: 39.925673\n}\n*/")]),t._v("\n")])])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("numa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" numb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("当 V8 中执行这一个循环的时候，这个"),a("code",[t._v("add")]),t._v("函数被调用了很多次。但是每次的入参都很稳定，所以 V8 会对这段代码进行一次优化，但是执行到"),a("code",[t._v('add(numa, "s");')]),t._v("这一行代码，忽然在某一次它发现参数的类型发生了变化，那么它就不会运行之前进行的优化继续优化了，因为参数的类型发生了改变。此时它就会撤销优化这样就会带来了一定的延迟。")]),t._v(" "),a("p",[t._v("当我注释掉"),a("code",[t._v('add(numa, "s");')]),t._v("这一行代码，明显可以看到性能的提升，在老版本浏览器上测试注释前"),a("code",[t._v("59ms")]),t._v("，注释后"),a("code",[t._v("19ms")]),t._v("。是因为"),a("code",[t._v("V8")]),t._v("会一直使用之前的函数类型优化。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("当然在最新浏览器下，这点被"),a("code",[t._v("chrome")]),t._v("做了优化，时间相差不多基本一致。但是对于我们来讲，用户在使用什么浏览器我们完全是不可控的，所以这些细节点的优化是不可忽略的。")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("至于"),a("code",[t._v("node")]),t._v("底层对于什么做了优化对什么做了反优化，可以使用"),a("code",[t._v("node")]),t._v("的两个参数。")]),t._v(" "),a("p",[a("code",[t._v("node --trace-opt 文件名")])]),t._v(" "),a("p",[a("code",[t._v("node --trace-deopt 文件名")])])]),t._v(" "),a("h3",{attrs:{id:"v8-优化机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v8-优化机制"}},[t._v("#")]),t._v(" V8 优化机制")]),t._v(" "),a("ul",[a("li",[t._v("脚本流")])]),t._v(" "),a("blockquote",[a("p",[t._v("node 对于脚本做了优化，就是脚本下载当超过"),a("code",[t._v("30KB")]),t._v("时候，它会单独开一个线程进行解析下载的部分。这样的话等待所有下载完成在进行解析效率就会大大提高。(只需要合并解析，流式处理)")])]),t._v(" "),a("ul",[a("li",[t._v("字节码缓存")])]),t._v(" "),a("blockquote",[a("p",[t._v("缓存解析的字节码。")])]),t._v(" "),a("ul",[a("li",[t._v("懒解析")])]),t._v(" "),a("blockquote",[a("p",[t._v("对于一些仅仅声明而没有立马调用的函数，"),a("code",[t._v("nodeJs")]),t._v("会进行一个懒解析，也就是说声明了一个函数但是并没有用到这个函数默认情况下并不会解析函数内部的逻辑，只有调用到函数的时候才进行解析。这样也大大提高了解析效率。")])]),t._v(" "),a("p",[a("strong",[t._v("懒解析的好处也非常容易理解，进一步来说当函数仅仅被声明但是并没有被调用。那么node也就并不会解析这个函数，也不需要为他创建一个语法树，那么这个函数也并不会在堆内存中分配空间")]),t._v("。这样大大提高了性能。")])])}),[],!1,null,null,null);s.default=e.exports}}]);