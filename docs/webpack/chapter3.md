# Code Splitting

## 代码拆分

将单个`bundle`拆分成为若干个小的`bundle/chunks`,目的为了提高首屏加载时间。

- 基于入口`entry`进行拆分

```js
entry: {
  app:'./index.js',  // 默认入口文件
  test:'./test.js'  // 需要额外拆分的入口文件
}
```

> `webpack`会基于`entry`中的各个入口文件读取对应的文件，将对应的文件达成一个包(相关联模块依赖等等)打成一个包。
> 通常多个入口之间会有一些公共的东西，这种方法会造成一些重复代码重复打包。

- `splitChunks`提取公共代码，拆分业务代码和第三方组件库

```js
 optimization: {
      splitChunks: {
        cacheGroups: {
          // 拆分第三方引用包
          vendors: {
            name: 'library',
            test: /[\\/]node_modules[\\/]/,
            minSize: 0,
            minChunks: 1,
            priority: 10,
            chunks: 'initial',
          },
          // 拆分src中的一个模块被引用2次以上(包含两次)到common中
          // 拆分公用代码
          common: {
            name: 'common',
            test: /[\\/]src[\\/]/,
            minSize: 0,
            minChunks: 2,
            priority: 20,
            chunks: 'all',
          },
        },
      },
    },
```

## 异步加载

不同的框架对于动态加载有很多种不同的解决方案。

`react`和`vue`都有各自成熟的`lazy loading`。

使用`lazy loading`对于组件的`lazy loading`以及页面的`lazy loading`加载速度提升都是非常大的，提升`code Coverage`以及页面懒加载。
