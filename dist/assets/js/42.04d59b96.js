(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{396:function(t,a,s){"use strict";s.r(a);var e=s(42),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"pubnub-vue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pubnub-vue"}},[t._v("#")]),t._v(" pubnub-vue")]),t._v(" "),s("h2",{attrs:{id:"pngetmessage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pngetmessage"}},[t._v("#")]),t._v(" $pnGetMessage")]),t._v(" "),s("p",[t._v("使用"),s("code",[t._v("$pnGetMessage")]),t._v(" 将订阅到反应性属性的通道关联起来，并在收到消息后立即开始显示这些消息。")]),t._v(" "),s("blockquote",[s("p",[t._v("$pnGetMessage，订阅一个频道。当接受到该频道消息推送时，通过 $pnGetMessage 接受到频道返回消息。")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Parameter")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Required")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("channel")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("Yes")]),t._v(" "),s("td",[t._v("监听的频道")])]),t._v(" "),s("tr",[s("td",[t._v("callback")]),t._v(" "),s("td",[t._v("Function")]),t._v(" "),s("td",[t._v("Optional")]),t._v(" "),s("td",[t._v("该函数将在收到新的实时消息后立即调用")])]),t._v(" "),s("tr",[s("td",[t._v("keepMessage")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[t._v("Optional")]),t._v(" "),s("td",[t._v("保留的消息数。")])]),t._v(" "),s("tr",[s("td",[t._v("instanceName")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("Optional")]),t._v(" "),s("td",[t._v("要在组件中使用的实例。")])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[s("code",[t._v("$pnGetMessage")]),t._v("将会收到第二个参数，它是一个回调函数，将在收到新的实时消息后立即调用。这将允许对每条消息进行某种形式的转换或操纵，或者实现一种自定义机制来呈现它们。")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("使用"),s("code",[t._v("$pnGetMessage")]),t._v("功能时，默认情况下将保留最新收到的 100 条消息。但是，当您使用附加频道时(也就是传入第三个参数)，可以更改此值$pnGetMessage。"),s("code",[t._v("this.$pnGetMessage('ch1', null, 10)")])])]),t._v(" "),s("h2",{attrs:{id:"pngetpresence"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pngetpresence"}},[t._v("#")]),t._v(" $pnGetPresence")]),t._v(" "),s("blockquote",[s("p",[t._v("暂时不知道什么意思")])]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("点击查看代码")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用pnGetPresence 必须在建立链接的时候配置withPresence: true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$pnSubscribe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channels"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wanghaoyu"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" withPresence"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不知道什么意思")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$pnGetPresence")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wanghaoyu"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("presence"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),s("h2",{attrs:{id:"pngetstatus"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pngetstatus"}},[t._v("#")]),t._v(" $pnGetStatus")]),t._v(" "),s("p",[t._v("监听状态的监听器，通过它可以接受不同的事件。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Parameter")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Required")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("callback")]),t._v(" "),s("td",[t._v("Function")]),t._v(" "),s("td",[t._v("Optional")]),t._v(" "),s("td",[t._v("一旦网络发生变化就会执行的函数。")])]),t._v(" "),s("tr",[s("td",[t._v("instanceName")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("Optional")]),t._v(" "),s("td",[t._v("default")])])])]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("点击查看代码")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("category: {{ category }}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      category"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  methods"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("status")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("st")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("st"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// st.category当前链接状态")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("category "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" st"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("category"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mounted")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$pnSubscribe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      channels"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ch1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$pnGetStatus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("点击查看对应状态")]),t._v(" "),s("h4",{attrs:{id:"侦听器状态事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#侦听器状态事件"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://www.pubnub.com/docs/vue-javascript/api-reference-publish-and-subscribe#listeners-categories",target:"_blank",rel:"noopener noreferrer"}},[t._v("侦听器状态事件"),s("OutboundLink")],1)]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("分类目录")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("PNNetworkUpCategory")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("SDK 检测到网络在线。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("PNNetworkDownCategory")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("当连接不可用或 SDK 无法访问 PubNub 数据流网络时，SDK 会宣布此消息。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("PNNetworkIssuesCategory")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("订阅事件在运行时遇到异常。 该 SDK 无法访问 PubNub 数据流网络。 这可能是由于多种原因造成的，例如：机器或设备未连接到互联网；互联网连接已丢失；您的互联网服务提供商遇到麻烦；或者，也许 SDK 在代理后面。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("PNReconnectedCategory")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("SDK 能够重新连接到 PubNub。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("PNConnectedCategory")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("SDK 订阅了新的渠道组合。 每次频道或频道组混合更改时都会触发此操作。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("PNAccessDeniedCategory")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("PAM 权限失败。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("PNMalformedResponseCategory")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("JSON 解析崩溃。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("PNBadRequestCategory")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("由于请求格式错误，服务器以错误的响应错误响应。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("PNDecryptionErrorCategory")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("如果使用解密策略而解密失败。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("PNTimeoutCategory")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("由于超时，无法建立与 PubNub 的连接。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("PNRequestMessageCountExceedCategory")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("如果"),s("code",[t._v("requestMessageCountThreshold")]),t._v("已设置，SDK 会宣布此错误，并且从 PubNub 接收的消息数（内存中的缓存消息）超过了阈值。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("PNUnknownCategory")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("订阅者从服务器获取非 200 HTTP 响应代码时返回。")])])])])]),t._v(" "),s("h2",{attrs:{id:"pnpublish-推送消息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pnpublish-推送消息"}},[t._v("#")]),t._v(" $pnPublish 推送消息")]),t._v(" "),s("p",[t._v("使用 pubnab 推送消息方法,向频道中推送信息，")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("需要")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("args")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Object")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("是")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("arguments")]),t._v("取消订阅的哈希值。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("callback")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Function")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("可选的")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("invoked")]),t._v("发布消息后将执行的功能。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("instanceName")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("可选的")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("default")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("Instance")]),t._v(" 在组件中使用。")])])])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("this.$pnPublish(\n    {\n        channel: 'ch1',\n        message: Date.now()\n    },\n    (status, response) => console.log(status, response)\n);\n")])])]),s("p",[t._v("::: warming\n不要使用 JSON.stringify(),序列化是为您自动完成的。而是仅将完整对象作为消息有效负载传递。PubNub 为您处理一切。\n:::")]),t._v(" "),s("h2",{attrs:{id:"使用-autoload-获取历史记录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-autoload-获取历史记录"}},[t._v("#")]),t._v(" 使用 autoload 获取历史记录")]),t._v(" "),s("p",[t._v("在订阅频道时，可以传递可选参数"),s("code",[t._v("autoload")]),t._v("，该值必须包含 1 到 100 之间的值，以便检索频道中发布的最后一条消息。调用"),s("code",[t._v("$pnGetMessage")]),t._v("时，将检索历史记录。您可以使用回调来知道检索过程何时完成。")]),t._v(" "),s("h2",{attrs:{id:"pnunsubscribe-取消订阅"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pnunsubscribe-取消订阅"}},[t._v("#")]),t._v(" $pnUnsubscribe 取消订阅")]),t._v(" "),s("p",[s("code",[t._v("$pnUnsubscribe")]),t._v("进行取消订阅频道,关闭消息推送。")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("点击查看代码")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$pnUnsubscribe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  channels"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ch1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),s("h2",{attrs:{id:"pxsubscribe-订阅频道"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pxsubscribe-订阅频道"}},[t._v("#")]),t._v(" $pxSubscribe 订阅频道")]),t._v(" "),s("p",[s("code",[t._v("$pnSubscribe")]),t._v("方法可以订阅对应频道。")]),t._v(" "),s("blockquote",[s("p",[t._v("常用于在 created 中订阅频道。\n"),s("code",[t._v('this.$pnSubscribe({ channels: ["wanghaoyu"], withPresence: true });')])])])])}),[],!1,null,null,null);a.default=n.exports}}]);