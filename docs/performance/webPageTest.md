# WebPageTest

使用`WebPageTest`进行网站性能评估。


怎么看报告。。自己去查吧一两句页说不清。

WebpageTest就很多配置，比如测试的轮数以及不同的地区节点和是否测试首次加载（无缓存）和模拟网络情况.

**在线网络测试**
```
https://www.webpagetest.org/r
```

当然大多数情况很多时候我们的项目还在开发并没有部署线上域名所以通过网络测试就不是很方便了。
所以这里通过`docker`部署一个本地的`WebPageTest`。

需要拉取两个镜像：
`docker pull webpagetest/server`
`docker pull webpagetest/agent`

其他的等我补充


