# 资源压缩

基于`webpack`的资源压缩。

当`mode=production`下`webpack`[默认配置](https://webpack.js.org/configuration/mode/#mode-production)

## js压缩

可以看到默认情况对于`js`，`webpack`使用了`TerserPlugin`的默认配置进行了资源压缩。

一起来看看[TerserPlugin](https://webpack.js.org/plugins/terser-webpack-plugin/)

## css压缩

css压缩无非就是两个插件

+ `mini-css-extract-plugin`提取样式文件到单独`css`文件。
+ `optimize-css-assets-webpack-plugin`配合 mini-css-extract-plugin 生成的 css 文件进行压缩。

## Html压缩

`htmlWebpackPlugin`插件内部引用了`minify`压缩HTML文件。