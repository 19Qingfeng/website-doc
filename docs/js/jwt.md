# jwt

`jwt`是基于`cookie`和`session`升级的解决方案。

`jwp`相对于`cookie&session`的优点是服务端不保存任何用户信息。将用户信息保护在客户端`token`中，每次通过登陆生成的加密`token`让客户端发送请求(一般在`Head`头中携带)发送给客户端解密作为用户持久化的登陆存储。

![截屏2021-03-09 下午10.12.43.png](https://i.loli.net/2021/03/09/3VQoiGUNFqJDLYr.png)

首先第一步还是客户端发起登陆发送账户和密码，服务器验证用户名和密码通过之后通过`jwt`(对应库)算法生成签名`token`返回给客户端。

接下来客户端将服务端返回的`token`保存在客户端(`sessionStorage || localStorage`中)。

之后在往服务器发送请求的时候，都会带上`token`。(`HEAD`头中的`Authorization:Bear <token>`)。

服务器每次请求首先通过中间件全局验证`token`,对`token`进行反向解密，验证`token`。

验证通过，返回数据。

验证不通过，返回 401 或者 403。

::: tip
首先，基于`token`的登陆服务器不保存任何状态，并不保存哪些用户是否登陆。
每次请求通过解密`token`检查确认请求的真实性进行返回。

`token`是通过一些加密算法，将用户信息加密进行传输。从而变成无状态的保存方式。

[JWT 官方网站](https://jwt.io/)可以查阅`token`对应包含哪些信息，分别是头部加密方式，身体用户信息以及底部密钥过期时间。
:::

::: tip
通常对于客户端权限验证，首先通过登陆获得`token`。（或者从已经登陆的持久化信息中拿取）

之后会根据`token`再去服务端请求接口拉取用户信息(用户可访问路由列表)，从而根据返回的用户信息动态注册路由列表以及获取对应用户权限。

(权限-通过获得的`token`，访问服务端接口(传递 token)拉取可访问路由页面以及用户权限和用户信息)。
:::