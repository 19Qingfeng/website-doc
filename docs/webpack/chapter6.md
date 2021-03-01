# webpack 性能检测和分析工具

- stars 分析可视化图（在线分析 webpack-chart）
  > 体积分析。 存在问题等待解决，以及另外一种基于`source-map。`
- [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) 进行体积分析
  > 体积分析。
- [speed-measure-webpack-plugin](https://www.npmjs.com/package/speed-measure-webpack-plugin) 速度分析
  > 速度分，配置后使用`smp.wrap`包裹。

::: tip
`speed-measure-webpack-plugin`和`webpack-bundle-analyzer`都可以使用`cross-env`在`package.json`集合环境变量进行分析处理。

```json
 "analyze": "cross-env BUNDLE_ANALYZE='need' vue-cli-service build",
```

**基于插件的按照，建议安装在另外的单独性能分支上，这样的可维护性比较好。**

:::
