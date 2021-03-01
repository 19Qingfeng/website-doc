(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{367:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"高频事件防抖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高频事件防抖"}},[t._v("#")]),t._v(" 高频事件防抖")]),t._v(" "),a("h2",{attrs:{id:"防抖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#防抖"}},[t._v("#")]),t._v(" 防抖")]),t._v(" "),a("p",[t._v("高频事件的防抖之前的的防抖"),a("code",[t._v("debounce")]),t._v("函数，节流"),a("code",[t._v("throttle")]),t._v("函数都是老生常谈了。")]),t._v(" "),a("p",[t._v("这里来讲讲"),a("code",[t._v("requestAnimationFrame")]),t._v("这个函数。")]),t._v(" "),a("p",[t._v("来看看关于"),a("code",[t._v("rAF")]),t._v("这张图\n"),a("img",{attrs:{src:"https://i.loli.net/2021/02/03/y5G8eJ3g1ZEtWD6.png",alt:"截屏2021-02-03 下午9.31.40.png"}})]),t._v(" "),a("p",[t._v("这是浏览器一帧的生命周期，可以明显的看到:")]),t._v(" "),a("ol",[a("li",[t._v("当触发一些事件，浏览器开始 js 计算。")]),t._v(" "),a("li",[t._v("js 计算完成后浏览器开始一帧的绘制过程。")]),t._v(" "),a("li",[t._v("此时开始"),a("code",[t._v("layout")]),t._v("和"),a("code",[t._v("paint")]),t._v("之前就会执行"),a("code",[t._v("rAF")]),t._v("调用它。")]),t._v(" "),a("li",[t._v("开始布局和绘制以及开始渲染。")])]),t._v(" "),a("p",[t._v("这里的"),a("code",[t._v("rAF")]),t._v("会在每次绘制之前去调用传入的 func。这样其实就达到了每次动画事件防抖的效果(保证浏览器绘制一帧的过程仅执行一次"),a("code",[t._v("changeWidth")]),t._v("函数)。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" flag "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pointermove"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("flag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  flag "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestAnimationFrame")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("changeWidth")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// mock 动画操作")]),t._v("\n    flag "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("浏览器每一帧的渲染之前都会执行"),a("code",[t._v("rAF")]),t._v("中的"),a("code",[t._v("changeWidth")]),t._v("重新计算元素宽度，这样就达到了"),a("code",[t._v("changeWidth")]),t._v("函数的防抖。")]),t._v(" "),a("p",[t._v("之后使用"),a("code",[t._v("flag")]),t._v("是因为如果在一帧之中多次调用"),a("code",[t._v("rAF")]),t._v("其实也是完全没有意义的，所以使用"),a("code",[t._v("flag")]),t._v("标记位，每一帧渲染之前如果还没有执行"),a("code",[t._v("rAF")]),t._v("那么就调用一次"),a("code",[t._v("rAF")]),t._v("，之后改变标记位，当浏览器在这一帧末尾开始调用"),a("code",[t._v("rAF")]),t._v("中的函数的时候将标记为变成"),a("code",[t._v("false")]),t._v("以提供下一帧事件中正常继续调用"),a("code",[t._v("rAF")]),t._v("。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("关于"),a("code",[t._v("rAF")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("为了提高性能和电池寿命，因此在大多数浏览器里，"),a("strong",[t._v("当 requestAnimationFrame() 运行在后台标签页或者隐藏的"),a("code",[t._v("<iframe>")]),t._v(" 里时，requestAnimationFrame() 会被暂停调用以提升性能和电池寿命")]),t._v("。(定时器则不会)")])]),t._v(" "),a("li",[a("p",[t._v("回调函数会被传入"),a("code",[t._v("DOMHighResTimeStamp")]),t._v("参数，"),a("code",[t._v("DOMHighResTimeStamp")]),t._v("指示"),a("strong",[t._v("当前被 requestAnimationFrame() 排序的回调函数被触发的时间")]),t._v("。在同一个帧中的多个回调函数，它们每一个都会接受到一个相同的时间戳，即使在计算上一个回调函数的工作负载期间已经消耗了一些时间。该时间戳是一个十进制数，单位毫秒，最小精度为 1ms(1000μs)。")])])])]),t._v(" "),a("p",[t._v("来看一个仅仅持续 2s 时间的动画")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" divs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementsByClassName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// time 其实就是本次raf执行时候距离这个raf第一次开始的时间间隔")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("update")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("time")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    start "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" duration "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" time "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// do some animation")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("duration "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestAnimationFrame")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("update"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"load"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestAnimationFrame")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("update"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("当然"),a("code",[t._v("rAF")]),t._v("的返回值是一个 hash 串，通过"),a("code",[t._v("cancelAnimationFrame")]),t._v("传入这个返回值可以清除"),a("code",[t._v("rAF")]),t._v(".需要注意的是"),a("code",[t._v("rAF")]),t._v("需要持续不断的调用才会持续产生效果。")])]),t._v(" "),a("h3",{attrs:{id:"对比定时器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对比定时器"}},[t._v("#")]),t._v(" 对比定时器")]),t._v(" "),a("p",[t._v("如果我们做到每 16 毫秒去渲染一次画面，就能够达到比较流畅的动画效果。对于简单的动画， "),a("code",[t._v("setlnterval")]),t._v(" 方式勉强能够及格，但是对于稍微复杂一些的动画，脚本方式就顶不住了，比如渲染一帧要花去超过 32 毫秒的时间，那么还用 16 毫秒一个间隔的方式肯定不行。实际上，因为一帧渲染要占用网页线程 32 毫秒，会导致 setlnterval 根本无法以 16 毫秒间隔调用渲染函数，这就产生了明显的动画滞后感，原本一秒钟完成的动画现在要花两秒钟完成，所以这种原始的 setlnterval 方式是肯定不适合复杂的动画的。")]),t._v(" "),a("blockquote",[a("p",[t._v("比如规定一个 2s 内完成的动画，使用定时器的方式往往都不准确。他们的执行是会受到队列中 js 代码执行以及浏览器渲染线程占用的影响导致开始时间不准确以及动画每一次渲染无法保证都是相同的。")])]),t._v(" "),a("p",[t._v("使用"),a("code",[t._v("rAF")]),t._v("就可以很好的解决这个问题，通过 "),a("strong",[a("code",[t._v("rAF")]),t._v("的参数")]),t._v("进行动态计算。 "),a("strong",[t._v("每一帧渲染的实际一般都会维持在 16ms，所以说"),a("code",[t._v("raf")]),t._v("执行如果快于 16ms 那么也会被放到 16ms 执行一次，如果因为一些问题阻塞导致本次渲染时间增长，那么也可以通过"),a("code",[t._v("rAF")]),t._v("函数的参数获取到本次执行动画的间隔时间，从而计算出合理的元素动画变化值。")])]),t._v(" "),a("p",[t._v("setlnterval 和 setTimeout "),a("strong",[t._v("并不能保证在指定时间间隔或者延迟的情况下准时调用指定函数")]),t._v("。\n所以可以换一个思路，当指定函数调用的时候，"),a("strong",[t._v("根据逝去的时间计算当前这一帧应该显示成什么样子(也就是利用 raf 的参数进行判断)")]),t._v("，这样即使因为浏览器渲染主线程忙碌导致一帧渲染时间超过 16 毫秒，在后续帧谊染时至少内容不会因此滞后，即使达不倒 60fps 的效果，也能保证动画在指定时间内完成。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("不过有一点需要注意，requestAnimationFrame 是在主线程上完成。这意味着，如果主线程非常繁忙，requestAnimationFrame 的动画效果会大打折扣。")])]),t._v(" "),a("p",[t._v("这段代码就可以看出来原理！！！！\n因为主线程繁忙"),a("code",[t._v("EventLoop")]),t._v("一直没有完成，所以阻塞了浏览器渲染，导致了动画和页面的卡顿。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" div "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("update")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("time")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    start "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这段代码深究啊")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" duration "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" time "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  div"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1000px"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" Array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" length"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000000")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"over"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mouseover"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestAnimationFrame")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("update"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("blockquote",[a("p",[a("code",[t._v("rAF")]),t._v("占据了过多的主线程，造成了主线程阻塞。同时一些用户的交互也会造成卡顿，比如 input 的输入也会等待主线程空闲(当前 raf 执行完成，本次渲染完处理用户交互+raf+渲染)才会执行。")])]),t._v(" "),a("h2",{attrs:{id:"内核"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内核"}},[t._v("#")]),t._v(" 内核")]),t._v(" "),a("p",[t._v("既然提到了"),a("code",[t._v("rAF")]),t._v("那么就顺道把浏览器的机制进行一并处理下。")]),t._v(" "),a("h3",{attrs:{id:"浏览器的内核是多进程的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的内核是多进程的"}},[t._v("#")]),t._v(" 浏览器的内核是多进程的")]),t._v(" "),a("ol",[a("li",[t._v("brower 进程（主进程）")])]),t._v(" "),a("ul",[a("li",[t._v("负责浏览器的页面展示，与用户交互。如前进，后退")]),t._v(" "),a("li",[t._v("页面的前进，后退")]),t._v(" "),a("li",[t._v("负责页面的管理，创建和销毁其他进程")])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("GPU 进程")])]),t._v(" "),a("ul",[a("li",[t._v("3D 渲染")])]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("插件进程")])]),t._v(" "),a("ul",[a("li",[t._v("每种类型的插件对应一个进程，仅当使用该插件时才能创建")])]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("浏览器渲染进程（浏览器内核）")])]),t._v(" "),a("ul",[a("li",[t._v("GUI 渲染线程 - DOM 解析， CSS 解析，生成渲染树")]),t._v(" "),a("li",[t._v("js 引擎线程 - 执行 Js 代码")]),t._v(" "),a("li",[t._v("事件触发，管理着一个任务队列")]),t._v(" "),a("li",[t._v("异步 HTTP 请求线程")]),t._v(" "),a("li",[t._v("定时触发器线程")])]),t._v(" "),a("p",[t._v("可以看到 js 引擎是浏览器渲染进程的一个线程。总结一下浏览器:")]),t._v(" "),a("p",[a("strong",[t._v("多进程浏览器，多线程页面渲染，单线程js。")])]),t._v(" "),a("h3",{attrs:{id:"浏览器内核中线程之间的关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器内核中线程之间的关系"}},[t._v("#")]),t._v(" 浏览器内核中线程之间的关系")]),t._v(" "),a("p",[a("strong",[t._v("GUI 渲染线程和 JS 引擎线程互斥")])]),t._v(" "),a("ul",[a("li",[t._v("js 是可以操作 DOM 的，如果在修改这些元素的同时渲染页面（js 线程和 ui 线程同时运行），那么渲染线程前后获得的元素数据可能就不一致了。")]),t._v(" "),a("li",[t._v("JS 阻塞页面加载")]),t._v(" "),a("li",[t._v("js 如果执行时间过长就会阻塞页面")])]),t._v(" "),a("h3",{attrs:{id:"进程和线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进程和线程"}},[t._v("#")]),t._v(" 进程和线程")]),t._v(" "),a("p",[t._v("进程（process）和线程（thread）是操作系统的基本概念。")]),t._v(" "),a("ul",[a("li",[t._v("进程是 CPU 资源分配的最小单位（是能拥有资源和独立运行的最小单位）。")]),t._v(" "),a("li",[t._v("线程是 CPU 调度的最小单位（是建立在进程基础上的一次程序运行单位）。")])]),t._v(" "),a("p",[t._v("由于每个进程至少要做一件事,所以一个进程至少有一个线程。系统会给每个进程分配独立的内存,因此进程有它独立的资源。同一进程内的各个线程之间共享该进程的内存空间（包括代码段,数据集,堆等）。 进程可以理解为一个工厂不不同车间，相互独立。线程是车间里的工人，可以自己做自己的事情,也可以相互配合做同一件事情。")]),t._v(" "),a("h4",{attrs:{id:"任务队列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#任务队列"}},[t._v("#")]),t._v(" 任务队列")]),t._v(" "),a("p",[t._v("单线程就意味着，所有任务都要排队执行，前一个任务结束，才会执行后一个任务。"),a("strong",[t._v("如果一个任务需要执行，但此时 JavaScript 引擎正在执行其他任务，那么这个任务就需要放到一个队列中进行等待。等到线程空闲时，就可以从这个队列中取出最早加入的任务进行执行")]),t._v("（类似于我们去银行排队办理业务，单线程相当于说这家银行只有一个服务窗口，一次只能为一个人服务，后面到的就需要排队，而任务队列就是排队区，先到的就优先服务） 注意：如果当前线程空闲，并且队列为空，那每次加入队列的函数将立即执行。")]),t._v(" "),a("blockquote",[a("p",[t._v("Event 事件队列也是的，浏览器进程会单位为事件触发开启一个线程处理交互事件。当有 Event 触发时，首先将推入事件队列，当主线程是空的时候此时就会从事件队列中取出第一个任务开始处理。同理如果出线程特别繁忙一直被占用着。那么用户的事件交互就得不到即使的响应。(因为它一直在事件队列中进行等待主线程空闲，从而无法加入主线程执行)，就会造成交互事件的延迟也就是卡顿，其他处理机制是同理。")])]),t._v(" "),a("h4",{attrs:{id:"settimeout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#settimeout"}},[t._v("#")]),t._v(" setTimeout")]),t._v(" "),a("p",[t._v("setTimeout 的运行机制：执行该语句时，设置一个定时器，定时时间置为多设置的延时，当计数结束后，"),a("strong",[t._v("将传入的函数加入任务队列，之后的执行就交给任务队列负责")]),t._v("。")]),t._v(" "),a("p",[t._v("来看看这个例子")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("输出 2， 1；")]),t._v(" "),a("p",[t._v("setTimeout 的第二个参数表示在执行代码前等待的毫秒数。上面代码中，设置为 0，表面意思为 执行代码前等待的毫秒数为 0，即立即执行。但实际上的运行结果我们也看到了，并不是表面上看起来的样子，千万不要被欺骗了。")]),t._v(" "),a("p",[t._v("实际上，上面的代码并不是立即执行的，这是因为 setTimeout 有一个最小执行时间，HTML5 标准规定了 setTimeout()的第二个参数的最小值（最短间隔）不得低于 4 毫秒。 当指定的时间低于该时间时，浏览器会用最小允许的时间作为 setTimeout 的时间间隔，也就是说即使我们把 setTimeout 的延迟时间设置为 0，"),a("strong",[t._v("实际上可能为 4 毫秒后才事件推入任务队列")]),t._v("。")]),t._v(" "),a("blockquote",[a("p",[t._v("当然它也是一个宏任务，但这在这里并不是我想讲的重点。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("111")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("上面代码表示 100ms 后执行 "),a("code",[t._v("console.log(111)")]),t._v('，但实际上实行的时间肯定是大于 100ms 后的， 100ms **只是表示 100ms 后将任务加入到"任务队列"中，必须等到当前代码（执行栈）执行完，主线程才会去执行它指定的回调函数。**要是当前代码耗时很长，有可能要等很久，所以并没有办法保证，回调函数一定会在 setTimeout()指定的时间执行。')]),t._v(" "),a("h4",{attrs:{id:"settimeout-和-setinterval-区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#settimeout-和-setinterval-区别"}},[t._v("#")]),t._v(" setTimeout 和 setInterval 区别")]),t._v(" "),a("ul",[a("li",[t._v("setTimeout: 指定延期后调用函数，每次 setTimeout 计时到后就会去执行，然后执行一段时间后才继续 setTimeout,中间就多了误差，（误差多少与代码的执行时间有关）。")]),t._v(" "),a("li",[t._v("setInterval：以指定周期调用函数，而 setInterval 则是每次都精确的隔一段时间推入一个事件（但是，事件的执行时间不一定就不准确，还有可能是这个事件还没执行完毕，下一个事件就来了）.")])]),t._v(" "),a("p",[t._v("一起来看看这个例子")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("btn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onclick")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("250")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("点击该按钮后，首先将 onclick 事件处理程序加入队列。该程序执行后才设置定时器，再有 250ms 后，指定的代码才被"),a("strong",[t._v("添加到队列中等待执行")]),t._v("。 如果上面代码中的 onclick 事件处理程序执行了 300ms，那么定时器的代码至少要在定时器设置之后的 300ms 后才会被执行。"),a("strong",[t._v("队列中所有的代码都要等到 javascript 进程空闲之后才能执行，而不管它们是如何添加到队列中的。")])]),t._v(" "),a("blockquote",[a("p",[t._v("注意是先推入了定时器，之后在执行事件处理。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://pic1.zhimg.com/v2-13c3d7071b5de5f3f04cb94910aa2c6c_r.jpg",alt:"url"}})]),t._v(" "),a("h4",{attrs:{id:"setinterval-存在的一些问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setinterval-存在的一些问题"}},[t._v("#")]),t._v(" setInterval 存在的一些问题：")]),t._v(" "),a("p",[t._v("JavaScript 中使用 setInterval 开启轮询。"),a("strong",[t._v("定时器代码可能在代码再次被添加到队列之前还没有完成执行，结果导致定时器代码连续运行好几次，而之间没有任何停顿。而 javascript 引擎对这个问题的解决是：当使用 setInterval()时，仅当没有该定时器的任何其他代码实例时，才将定时器代码添加到队列中。这确保了定时器代码加入到队列中的最小时间间隔为指定间隔。")])]),t._v(" "),a("p",[t._v("但是，这样会导致两个问题：")]),t._v(" "),a("p",[t._v("1、某些间隔被跳过；\n2、多个定时器的代码执行之间的间隔可能比预期的小")]),t._v(" "),a("p",[t._v("假设，某个 onclick 事件处理程序使用 setInterval()设置了 200ms 间隔的定时器。如果事件处理程序花了 300ms 多一点时间完成，同时定时器代码也花了差不多的时间，就会同时出现跳过某间隔的情况")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://pic2.zhimg.com/80/v2-4e5983c1ad8f65a7b439e29cd88e0235_1440w.jpg",alt:""}})]),t._v(" "),a("p",[t._v("例子中的第一个定时器是在 205ms 处添加到队列中的，但是直到过了 300ms 处才能执行。当执行这个定时器代码时，在 405ms 处又给队列添加了另一个副本。在下一个间隔，即 605ms 处，第一个定时器代码仍在运行，同时在队列中已经有了一个定时器代码的实例。结果是，"),a("em",[t._v("在这个时间点上的定时器代码不会被添加到队列中")])]),t._v(" "),a("h4",{attrs:{id:"requestanimationframe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requestanimationframe"}},[t._v("#")]),t._v(" requestAnimationFrame")]),t._v(" "),a("p",[t._v("目前大多数设备的屏幕刷新率为 60 次/秒，如果在页面中有一个动画或者渐变效果，或者用户正在滚动页面，那么浏览器渲染动画或页面的每一帧的速率也需要跟设备屏幕的刷新率保持一致。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("卡顿：其中每个帧的预算时间仅比 16 毫秒多一点（1 秒/ 60 = 16.6 毫秒）。但实际上，浏览器有整理工作要做，因此您的所有工作是需要在 10 毫秒内完成。如果无法符合此预算，帧率将下降，并且内容会在屏幕上抖动。此现象通常称为卡顿，会对用户体验产生负面影响。")])]),t._v(" "),a("li",[a("p",[t._v("跳帧: 假如动画切换在 16ms, 32ms, 48ms 时分别切换，跳帧就是假如到了 32ms，其他任务还未执行完成，没有去执行动画切帧，等到开始进行动画的切帧，已经到了该执行 48ms 的切帧。就好比你玩游戏的时候卡了，过了一会，你再看画面，它不会停留你卡的地方，或者这时你的角色已经挂掉了。必须在下一帧开始之前就已经绘制完毕;")])])]),t._v(" "),a("p",[t._v("requestAnimationFrame 是浏览器用于定时循环操作的一个接口，类似于 setTimeout，主要用途是按帧对网页进行重绘。")]),t._v(" "),a("p",[t._v("在 requestAnimationFrame 之前，主要借助 setTimeout/ setInterval 来编写 JS 动画，而动画的关键在于动画帧之间的时间间隔设置，这个时间间隔的设置有讲究，一方面要足够小，这样动画帧之间才有连贯性，动画效果才显得平滑流畅；另一方面要足够大，确保浏览器有足够的时间及时完成渲染。")]),t._v(" "),a("p",[t._v("显示器有固定的刷新频率（60Hz 或 75Hz），也就是说，每秒最多只能重绘 60 次或 75 次，requestAnimationFrame 的基本思想就是与这个刷新频率保持同步，利用这个刷新频率进行页面重绘。此外，使用这个 API，一旦页面不处于浏览器的当前标签，就会自动停止刷新。这就节省了 CPU、GPU 和电力。")]),t._v(" "),a("p",[a("strong",[t._v("requestAnimationFrame 是在主线程上完成。这意味着，如果主线程非常繁忙，requestAnimationFrame 的动画效果会大打折扣。")])]),t._v(" "),a("p",[t._v("requestAnimationFrame 使用一个回调函数作为参数。这个回调函数会在浏览器重绘之前调用。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[a("code",[t._v("requestAnimationFrame")]),t._v("是在主线程中进行执行的。")])]),t._v(" "),a("h4",{attrs:{id:"requestidlecallback"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requestidlecallback"}},[t._v("#")]),t._v(" requestIdleCallback()")]),t._v(" "),a("blockquote",[a("p",[t._v("实验中的特性。\nMDN 上的解释：requestIdleCallback()方法将在浏览器的空闲时段内调用的函数排队。这使开发者能够在主事件循环上执行后台和低优先级工作，而不会影响延迟关键事件，如动画和输入响应。函数一般会按先进先调用的顺序执行，然而，如果回调函数指定了执行超时时间 timeout，则有可能为了在超时前执行函数而打乱执行顺序。")])]),t._v(" "),a("p",[a("strong",[t._v("requestAnimationFrame 会在每次屏幕刷新的时候被调用，而 requestIdleCallback 则会在每次屏幕刷新时，判断当前帧是否还有多余的时间，如果有，则会调用 requestAnimationFrame 的回调函数。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://pic1.zhimg.com/v2-4c703880218acf2210f1c3c4e321189c_r.jpg",alt:"requestIdleCallback"}})]),t._v(" "),a("p",[t._v("图片中是两个连续的执行帧，大致可以理解为两个帧的持续时间大概为 16.67，图中黄色部分就是空闲时间。所以，requestIdleCallback 中的回调函数仅会在每次屏幕刷新并且有空闲时间时才会被调用.")]),t._v(" "),a("p",[t._v("利用这个特性，我们可以在动画执行的期间，利用每帧的空闲时间来进行数据发送的操作，或者一些优先级比较低的操作，此时不会使影响到动画的性能，或者和 requestAnimationFrame 搭配，可以实现一些页面性能方面的的优化")])])}),[],!1,null,null,null);s.default=e.exports}}]);