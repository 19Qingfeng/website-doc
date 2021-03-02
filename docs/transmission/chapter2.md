# 启用 Keep Alive

## keep Alive

### 简介

`Http Keep Alive` 它的作用是对于`http`请求的`tcp`链接进行复用。也就是说当首次请求和服务器进行 TCP 链接之后，接下里的所有请求就不需要额外的重复进行 TCP 链接了。

> Http1.1 开始后，`Keep Alive`成为了默认配置，默认进行开启。

![截屏2021-03-02 下午10.20.30.png](https://i.loli.net/2021/03/02/HLxjoVrE3WMeIwO.png)

瀑布图中的`Initial connection`就是进行`TCP`链接的过程。

之后同一台服务器下的请求，就没有`Initial connection`这个过程了。实际上它进行`keep alive`启到的作用，对同一台服务器下的请求进行`tcp`链接的复用。

![截屏2021-03-02 下午10.23.33.png](https://i.loli.net/2021/03/02/H9PVNjZ2w5KFitA.png)

> `initial connection`是和服务器建立链接的时间，而`TTFB`是服务器收到请求后服务器处理请求(比如数据库查找，代码执行)所消耗的时间，不要混淆。

### 开启

![1.jpg](https://i.loli.net/2021/03/02/kwhceyGiRX6lCMu.jpg)

检查是否开启`keep alive`非常简单，检查响应头中是否存在`Connection: keep-alive`。存在即是开启了`keep alive`。

查看`response header`有很多种方法，可以从浏览器来看也可以使用`cur`来看，比如：
`cur -v [url]`就可以看到详细的请求返回信息。

### 参数

和`keep alive`相关的还有两个基于nginx重要的参数，这两个参数通常根据网站实际的请求量进行灵活配置。
