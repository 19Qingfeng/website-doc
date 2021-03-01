# Webpack 缓存

基于`Webpack`进行缓存优化。

## 持久化缓存策略

- 每个静态资源文件具有唯一的`hash`值。
- 文件修改后文件`hash`值进行改变。
- 通过`hash`充分利用浏览器缓存。

使用起来很简单，只需要在对应插件中配置`filename`使用预制变量进行`hash`缓存就可以了。

比如

```js
output: {
  path:`${__dirname}/build`,
  filename:'[name].[hash].js',
  chunkFilename:'[name].[chunkhash:8].js'
}

// 或者各种插件配置中生成的filename也可以使用占位。
```

::: tip
关于`hash`和`contenthash`。

- 生成的`js`文件拆分出来的`css`文件如果使用`hash`标记，那么`css`的 hash 值和`js`文件的`hash`值是相同的。
- 如果想要两个`hash`互相独立出来，那么可以使用`contenthash`它会根据内容去计算`hash`值。

这样的话，假如仅仅修改了`js`并没有修改`css`，那么`css`文件并不会因为它是用`js`中提取出来，只要`css`内容没有发生改变，那么它对应的`contenthash`值一定是不会变化的，还可以利用之前的缓存。

:::

::: tip
当然比起`hash`更推荐使用`contenthash`，这样的话每个资源文件根据内容独立出来。
同时达到根据内容进行真正的进行`hash`值的跟随以及变化。[更多可以查看这里](https://github.com/19Qingfeng/Nineteen-webpack)
:::
