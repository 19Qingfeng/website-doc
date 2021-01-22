# inspect 协议

## inspect 协议

1. 启动命令增加`inspect`参数

```json
"dev": "cross-env NODE_ENV=dev ./node_modules/.bin/nodemon --inspect=9229 bin/www",
```

2. 代码中使用`debugger`

> 这点仿佛是个废话。。

3. 使用 Chrome 调试

chrome 打开`chrome://inspect`

![企业微信截图_0d500fa7-d259-4ee4-9ccd-af1b95ad3964.png](https://i.loli.net/2021/01/22/6msXJtbaSeIoy3F.png)

点击`inspect`链接进入。

此时在访问接口就可以看到`inspect`窗口下已经进入跟踪的`debugger`文件。

::: tip
注意只有代码执行到了`debugger`这一行`inspect`才会进行 source 中的代码跟踪 debugger。。坑惨我了。
:::

## VSCode

自带插件。

## 其他第三方黑科技

等待发现。
