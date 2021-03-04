# Service Workers

[Service Workers](https://developer.mozilla.org/zh-CN/docs/Web/API/Service_Worker_API)

作用

- 加速重复访问

> 类似于缓存的概念。

- 离线支持

> 不存在网络也可以使用，从而产生了 PWA。

> 一个服务器与浏览器之间的中间人角色，如果网站中注册了 service worker 那么它可以拦截当前网站所有的请求，进行判断（需要编写相应的判断程序），如果需要向服务器发起请求的就转给服务器，如果可以直接使用缓存的就直接返回缓存不再转给服务器。从而大大提高浏览体验。

::: warning
service配置目前搞不到一起，先放一放吧。
:::