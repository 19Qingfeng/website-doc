ESM 和 CJS模块缓存加载机制。

所以特别注意模块缓存变量会缓存，如果需要动态值，一定要动态每次引入时计算。


``` js
获取一个地址的域名和协议
// 解析URL域名和协议
// 这里使用了a标签 同样可以使用new URL(url).host/protocol
function resolveURL(url: string): URLOrigin {
  urlParsingNode.setAttribute('href', url)
  return {
    host: urlParsingNode.host,
    protocol: urlParsingNode.protocol
  }
}
```