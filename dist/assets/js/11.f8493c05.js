(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{362:function(t,e,n){"use strict";n.r(e);var a=n(42),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"复合线程与图层"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#复合线程与图层"}},[t._v("#")]),t._v(" 复合线程与图层")]),t._v(" "),n("p",[t._v("复合线程其实主要做的将页面拆成多个图层，当某个图层的元素发生变化的时候，那么并不会引发其他图层的重绘和回流。")]),t._v(" "),n("p",[n("strong",[t._v("复合其实就是将页面拆成多个图层进行绘制叠加。")])]),t._v(" "),n("blockquote",[n("p",[t._v("默认情况下浏览器会分析，如果存在某个元素的变化影响太多的元素那么浏览器会默认将这个元素独立出来成为一个图层从而将它独立绘制提升提升性能。")])]),t._v(" "),n("h2",{attrs:{id:"主动提取图层"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#主动提取图层"}},[t._v("#")]),t._v(" 主动提取图层")]),t._v(" "),n("p",[n("strong",[t._v("下面一些属性的改变仅仅会触发复合而不会触发布局和重绘：")])]),t._v(" "),n("p",[n("strong",[t._v("1. 移动位置"),n("code",[t._v("transform:translate(x,y)")])])]),t._v(" "),n("p",[n("strong",[t._v("2. 变化大小"),n("code",[t._v("transform:scale(n)")])])]),t._v(" "),n("p",[n("strong",[t._v("3. 旋转元素"),n("code",[t._v("transform:rotate(ndeg)")])])]),t._v(" "),n("p",[n("strong",[t._v("3. 改变透明度"),n("code",[t._v("opacity")])])]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[t._v("一般来时使用这些属性时需要额外配合一些比如"),n("code",[t._v("will-change")]),t._v("属性将它提取到独立的图层中从而达到不触发回流(重绘)和布局的过程，直接进行"),n("code",[t._v("composite")]),t._v("。\n最好还是加上吧，我现在也点晕。加与不加难道只是使用"),n("code",[t._v("GPU")]),t._v("加速以及抽离单独图层的关系吗？(有人说不加的话"),n("code",[t._v("translate")]),t._v("也会触发回流，可是我不加测试就没有)。\n反正最好加上把，也可以使用"),n("code",[t._v("GPU")]),t._v("加速。")])]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[t._v("当使用这些属性的时候，加上一些提取图层的属性比如"),n("code",[t._v("will-change")]),t._v("。将这些元素提取到单独的图层，那么这些元素的改变就并不会触发回流和重绘。\n实际开发中一般都会使用这些属性，这些属性本身并不会触发回流和布局计算，加上"),n("code",[t._v("will-change")]),t._v("属性抽离单独图层进行渲染"),n("code",[t._v("GPU")]),t._v("加速。\n但是需要注意的是，不要抽离过多的图层，换句话说也就不要过于使用"),n("code",[t._v("will-change")]),t._v("，如果存在很多图层对于浏览器渲染也会造成性能陷阱，图层越多开销也越多反而适得其反造成卡顿。")]),t._v(" "),n("p",[t._v("将真正需要的提取的提取成单独图层进行 GPU 加速渲染。")])]),t._v(" "),n("h2",{attrs:{id:"正确使用will-change"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#正确使用will-change"}},[t._v("#")]),t._v(" 正确使用"),n("code",[t._v("will-change")])]),t._v(" "),n("p",[t._v("下面是另一个展示如何使用脚本正确地应用 will-change 属性的示例，在大部分的场景中，你都应该这样做。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("var el = document.getElementById('element');\n\n// 当鼠标移动到该元素上时给该元素设置 will-change 属性\nel.addEventListener('mouseenter', hintBrowser);\n// 当 CSS 动画结束后清除 will-change 属性\nel.addEventListener('animationEnd', removeHint);\n\nfunction hintBrowser() {\n  // 填写上那些你知道的，会在 CSS 动画中发生改变的 CSS 属性名们\n  this.style.willChange = 'transform, opacity';\n}\n\nfunction removeHint() {\n  this.style.willChange = 'auto';\n}\n")])])]),n("p",[t._v("但是，如果某个应用在按下键盘的时候会翻页，比如相册或者幻灯片一类的，它的页面很大很复杂，此时在样式表中写上 will-change 是合适的。这会使浏览器提前准备好过渡动画，当键盘按下的时候就能立即看到灵活轻快的动画。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v(".slide {\n  will-change: transform;\n}\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);