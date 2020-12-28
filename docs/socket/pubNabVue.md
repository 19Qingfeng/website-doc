# pubnub-vue

## $pnGetMessage

使用`$pnGetMessage` 将订阅到反应性属性的通道关联起来，并在收到消息后立即开始显示这些消息。

> $pnGetMessage，订阅一个频道。当接受到该频道消息推送时，通过 $pnGetMessage 接受到频道返回消息。

| Parameter    | Type     | Required | Description                          |
| ------------ | -------- | -------- | ------------------------------------ |
| channel      | String   | Yes      | 监听的频道                           |
| callback     | Function | Optional | 该函数将在收到新的实时消息后立即调用 |
| keepMessage  | Number   | Optional | 保留的消息数。                       |
| instanceName | String   | Optional | 要在组件中使用的实例。               |

::: tip
`$pnGetMessage`将会收到第二个参数，它是一个回调函数，将在收到新的实时消息后立即调用。这将允许对每条消息进行某种形式的转换或操纵，或者实现一种自定义机制来呈现它们。
:::

::: tip
使用`$pnGetMessage`功能时，默认情况下将保留最新收到的 100 条消息。但是，当您使用附加频道时(也就是传入第三个参数)，可以更改此值\$pnGetMessage。`this.$pnGetMessage('ch1', null, 10)`
:::

## $pnGetPresence

> 暂时不知道什么意思

::: details 点击查看代码

```js
// 使用pnGetPresence 必须在建立链接的时候配置withPresence: true
this.$pnSubscribe({ channels: ["wanghaoyu"], withPresence: true });
// 不知道什么意思
this.$pnGetPresence("wanghaoyu", this.presence);
```

:::

## $pnGetStatus

监听状态的监听器，通过它可以接受不同的事件。

| Parameter    | Type     | Required | Description                      |
| ------------ | -------- | -------- | -------------------------------- |
| callback     | Function | Optional | 一旦网络发生变化就会执行的函数。 |
| instanceName | String   | Optional | default                          | 要在组件中使用的实例。 |

::: details 点击查看代码

```vue
<template>
  <div id="app">
    <span>category: {{ category }}</span>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      category: "",
    };
  },
  methods: {
    status(st) {
      console.log(st);
      // st.category当前链接状态
      this.category = st.category;
    },
  },
  mounted() {
    this.$pnSubscribe({
      channels: ["ch1"],
    });
    this.$pnGetStatus(this.status);
  },
};
</script>
```

:::

::: details 点击查看对应状态

#### [侦听器状态事件](https://www.pubnub.com/docs/vue-javascript/api-reference-publish-and-subscribe#listeners-categories)

| 分类目录                              | 描述                                                                                                                                                                                                   |
| :------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `PNNetworkUpCategory`                 | SDK 检测到网络在线。                                                                                                                                                                                   |
| `PNNetworkDownCategory`               | 当连接不可用或 SDK 无法访问 PubNub 数据流网络时，SDK 会宣布此消息。                                                                                                                                    |
| `PNNetworkIssuesCategory`             | 订阅事件在运行时遇到异常。 该 SDK 无法访问 PubNub 数据流网络。 这可能是由于多种原因造成的，例如：机器或设备未连接到互联网；互联网连接已丢失；您的互联网服务提供商遇到麻烦；或者，也许 SDK 在代理后面。 |
| `PNReconnectedCategory`               | SDK 能够重新连接到 PubNub。                                                                                                                                                                            |
| `PNConnectedCategory`                 | SDK 订阅了新的渠道组合。 每次频道或频道组混合更改时都会触发此操作。                                                                                                                                    |
| `PNAccessDeniedCategory`              | PAM 权限失败。                                                                                                                                                                                         |
| `PNMalformedResponseCategory`         | JSON 解析崩溃。                                                                                                                                                                                        |
| `PNBadRequestCategory`                | 由于请求格式错误，服务器以错误的响应错误响应。                                                                                                                                                         |
| `PNDecryptionErrorCategory`           | 如果使用解密策略而解密失败。                                                                                                                                                                           |
| `PNTimeoutCategory`                   | 由于超时，无法建立与 PubNub 的连接。                                                                                                                                                                   |
| `PNRequestMessageCountExceedCategory` | 如果`requestMessageCountThreshold`已设置，SDK 会宣布此错误，并且从 PubNub 接收的消息数（内存中的缓存消息）超过了阈值。                                                                                 |
| `PNUnknownCategory`                   | 订阅者从服务器获取非 200 HTTP 响应代码时返回。                                                                                                                                                         |

:::

## Publishing

想 pubnab 推送消息方法。

| 参数           | 类型     | 需要   | 默认值    | 描述                              |
| :------------- | :------- | :----- | :-------- | :-------------------------------- |
| `args`         | Object   | 是     |           | `arguments`取消订阅的哈希值。     |
| `callback`     | Function | 可选的 |           | `invoked`发布消息后将执行的功能。 |
| `instanceName` | String   | 可选的 | `default` | `Instance` 在组件中使用。         |

```
this.$pnPublish(
    {
        channel: 'ch1',
        message: Date.now()
    },
    (status, response) => console.log(status, response)
);
```

## 使用 autoload 获取历史记录

在订阅频道时，可以传递可选参数`autoload`，该值必须包含 1 到 100 之间的值，以便检索频道中发布的最后一条消息。调用`$pnGetMessage`时，将检索历史记录。您可以使用回调来知道检索过程何时完成。

## Unsubscribing 取消订阅

`$pnUnsubscribe`进行取消订阅频道。

::: details 点击查看代码

```js
this.$pnUnsubscribe({
  channels: ["ch1"],
});
```

:::

## Subscribe 订阅

`$pnSubscribe`方法可以订阅对应频道。

> 常用于在 created 中订阅频道。
`this.$pnSubscribe({ channels: ["wanghaoyu"], withPresence: true });`

## Publish 发布

`$pnPublish`发布一条消息到频道。

::: details 点击查看代码

```js
this.$pnPublish(
        { channel: "wanghaoyu", message: Date.now() },
        (status, response) => {
          // 第二个参数为发布消息后的callback
          console.log("发送成功收到响应",status,response);
        }
);
```

:::