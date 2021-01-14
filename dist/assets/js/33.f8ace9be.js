(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{387:function(t,e,s){"use strict";s.r(e);var a=s(42),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"object-属性定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#object-属性定义"}},[t._v("#")]),t._v(" Object 属性定义")]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("普通方式定义对象的时候并不存在getter和setter，直接定义了value属性。这点需要注意。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" obj"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nObject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getOwnPropertyDescriptor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'obj'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// { value: '', writable: true, enumerable: true, configurable: true } 数据描述符")]),t._v("\n")])])]),s("p",[t._v("所以通过obj['obj']是可以获取到值的。\n但当")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" obj1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nObject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineProperty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"obj"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 存取描述符$$")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nobj1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'obj'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// undefined 因为定义的属性getter并没有返回 ")]),t._v("\n")])])])]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("使用Object.defineProperty() 定义对象属性时，如已设置 set 或 get, 就不能设置 writable 和 value 中的任何一个了，不然会报错。")]),t._v(" "),s("p",[t._v("同时初始化一个普通对象的时候，"),s("code",[t._v("const a = { b:1 }")]),t._v(",此时a.b的value为1，get和set未定义而是undefined，在进行Object.defineProperty(a,'b',{ set(){} })在进行定义get和set任意描述符时，a对象下的b属性的value描述符就会无效。")])]),t._v(" "),s("h2",{attrs:{id:"object-defineproperty"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#object-defineproperty"}},[t._v("#")]),t._v(" Object.defineProperty()")]),t._v(" "),s("p",[t._v("Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。")]),t._v(" "),s("p",[s("code",[t._v("Object.defineProperty(obj, prop, descriptor)")]),t._v("\n参数")]),t._v(" "),s("ul",[s("li",[t._v("obj:要定义属性的对象。")]),t._v(" "),s("li",[t._v("prop:要定义或修改的属性的名称或 Symbol 。")]),t._v(" "),s("li",[t._v("descriptor:要定义或修改的属性描述符。")])]),t._v(" "),s("p",[s("strong",[t._v("描述符")])]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("DETAILS")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#%E6%8F%8F%E8%BF%B0",target:"_blank",rel:"noopener noreferrer"}},[t._v("描述"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("该方法允许精确地添加或修改对象的属性。通过赋值操作添加的普通属性是可枚举的，在枚举对象属性时会被枚举到（"),s("code",[t._v("for...in")]),t._v("这些属性。这个方法允许修改默认的额外选项（或配置）。默认情况下，使用 "),s("code",[t._v("Object.defineProperty()")]),t._v(" 添加的属性值是不可修改（immutable）的。")]),t._v(" "),s("p",[t._v("对象里目前存在的属性描述符有两种主要形式："),s("strong",[t._v("数据描述符")]),t._v("和"),s("strong",[t._v("存取描述符")]),t._v("。"),s("em",[t._v("数据描述符")]),t._v("是一个具有值的属性，该值可以是可写的，也可以是不可写的。"),s("em",[t._v("存取描述符")]),t._v("是由 getter 函数和 setter 函数所描述的属性。一个描述符只能是这两者其中之一；不能同时是两者。")]),t._v(" "),s("p",[t._v("这两种描述符都是对象。它们共享以下可选键值（默认值是指在使用 "),s("code",[t._v("Object.defineProperty()")]),t._v(" 定义属性时的默认值）：")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("configurable")])]),t._v(" "),s("p",[t._v("当且仅当该属性的 "),s("code",[t._v("configurable")]),t._v(" 键值为 "),s("code",[t._v("true")]),t._v(" 时，该属性的描述符才能够被改变，同时该属性也能从对应的对象上被删除。 "),s("strong",[t._v("默认为")]),t._v(" "),s("strong",[s("code",[t._v("false")])]),t._v("。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("enumerable")])]),t._v(" "),s("p",[t._v("当且仅当该属性的 "),s("code",[t._v("enumerable")]),t._v(" 键值为 "),s("code",[t._v("true")]),t._v(" 时，该属性才会出现在对象的枚举属性中。 "),s("strong",[t._v("默认为 "),s("code",[t._v("false")])]),t._v("。")])])]),t._v(" "),s("p",[t._v("数据描述符还具有以下可选键值：")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("value")])]),t._v(" "),s("p",[t._v("该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）。 "),s("strong",[t._v("默认为 "),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("undefined")]),s("OutboundLink")],1)]),t._v("。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("writable")])]),t._v(" "),s("p",[t._v("当且仅当该属性的 "),s("code",[t._v("writable")]),t._v(" 键值为 "),s("code",[t._v("true")]),t._v(" 时，属性的值，也就是上面的 "),s("code",[t._v("value")]),t._v("，才能被"),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Assignment_Operators",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("赋值运算符")]),s("OutboundLink")],1),t._v("改变。 "),s("strong",[t._v("默认为 "),s("code",[t._v("false")]),t._v("。")])])])]),t._v(" "),s("p",[t._v("存取描述符还具有以下可选键值：")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("get")])]),t._v(" "),s("p",[t._v("属性的 getter 函数，如果没有 getter，则为 "),s("code",[t._v("undefined")]),t._v("。当访问该属性时，会调用此函数。执行时不传入任何参数，但是会传入 "),s("code",[t._v("this")]),t._v(" 对象（由于继承关系，这里的"),s("code",[t._v("this")]),t._v("并不一定是定义该属性的对象）。该函数的返回值会被用作属性的值。 "),s("strong",[t._v("默认为 "),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("undefined")]),s("OutboundLink")],1)]),t._v("。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("set")])]),t._v(" "),s("p",[t._v("属性的 setter 函数，如果没有 setter，则为 "),s("code",[t._v("undefined")]),t._v("。当属性值被修改时，会调用此函数。该方法接受一个参数（也就是被赋予的新值），会传入赋值时的 "),s("code",[t._v("this")]),t._v(" 对象。 "),s("strong",[t._v("默认为 "),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("undefined")]),s("OutboundLink")],1)]),t._v("。")])])]),t._v(" "),s("h4",{attrs:{id:"描述符默认值汇总"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#描述符默认值汇总"}},[t._v("#")]),t._v(" 描述符默认值汇总")]),t._v(" "),s("ul",[s("li",[t._v("拥有布尔值的键 "),s("code",[t._v("configurable")]),t._v("、"),s("code",[t._v("enumerable")]),t._v(" 和 "),s("code",[t._v("writable")]),t._v(" 的默认值都是 "),s("code",[t._v("false")]),t._v("。")]),t._v(" "),s("li",[t._v("属性值和函数的键 "),s("code",[t._v("value")]),t._v("、"),s("code",[t._v("get")]),t._v(" 和 "),s("code",[t._v("set")]),t._v(" 字段的默认值为 "),s("code",[t._v("undefined")]),t._v("。")])])]),t._v(" "),s("p",[t._v("::: warn\nObject.defineProperty(object, propertyName, descriptor) 定义新属性时，descriptor 中同时有 访问器(getter/setter) 与 value/writable 属性时会报错。")]),t._v(" "),s("p",[t._v("如已设置 set 或 get, 就不能设置 writable 和 value 中的任何一个了，")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('\n:::\n\n## Object.getOwnPropertyDescriptor()\n\nObject.getOwnPropertyDescriptor() 方法返回**指定对象上一个自有属性对应的属性描述符**。（自有属性指的是直接赋予该对象的属性，不需要从原型链上进行查找的属性）\n\n```js\nconst object1 = {\n  property1: 42,\n};\n\nconst descriptor1 = Object.getOwnPropertyDescriptor(object1, "property1");\n\nconsole.log(descriptor1.configurable);\n// expected output: true\n\nconsole.log(descriptor1.value);\n// expected output: 42\n')])])]),s("p",[t._v("如果指定的属性存在于对象上，则返回其属性描述符对象（property descriptor），否则返回 undefined。")]),t._v(" "),s("h2",{attrs:{id:"object-defineproperties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#object-defineproperties"}},[t._v("#")]),t._v(" Object.defineProperties()")]),t._v(" "),s("p",[t._v("功能: 方法直接在一个对象上定义一个或"),s("strong",[t._v("多个新的属性")]),t._v("或修改现有属性，并返回该对象。")]),t._v(" "),s("p",[t._v("语法: "),s("code",[t._v("Object.defineProperties(obj, props)")])]),t._v(" "),s("ul",[s("li",[t._v("obj: 将要被添加属性或修改属性的对象")]),t._v(" "),s("li",[t._v("props: 该对象的一个或多个键值对定义了将要为对象添加或修改的属性的具体配置")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nObject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineProperties")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        value"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'张三'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        configurable"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        writable"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        enumerable"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    age"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        value"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        configurable"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 张三, 18")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("https://segmentfault.com/a/1190000011294519慢慢吸取总结")])])])}),[],!1,null,null,null);e.default=n.exports}}]);