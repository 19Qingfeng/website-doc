# webpack 优化配置

## TreeShaking

::: tip
Tree Shaking 基于`ESM`，支持静态引入。生产模式默认启动的。
涉及到全局作用域的一些模块，需要额外使用`sideEffects`进行指定。(比如 css 文件，全局变量 js)
:::

> 需要注意 babel 的配置，将`modules:false`。这样才不会让`babel`转换掉`ESM`语法，从而使用`Tree Shaking`优化。

## JS 压缩

- Webpack4 后引入`uglifyjs-webpack-plugin`

- 支持 ES6 替换为`terser-webpack-plugin`

> `terser`其实也就是`uglifyjs`一个分支,`terser`效率和效果都比`ug`好,所以后来默认使用`terser`进行 js 压缩

::: tip
`terser-webpack-plugin`默认在生产环境也会启用。
:::

## 作用域提升

所谓的作用域提升，当使用 ESM 倒入导出语法时，`webpack`在生产模式中会自动帮我们进行作用域提升。也就是它会尝试将两个 ESM 合并为一个脚本中的代码。（试图将依赖合并到调用里边）

下图`utils`文件中导出了一个 String，而`index.js`导入了这个依赖，`console`了这个 String。

![截屏2021-02-19 下午2.16.39.png](https://i.loli.net/2021/02/19/QkaRtmLjYB3q7nc.png)

对比作用域提升来看看 webpack 打包后的代码：

![对比](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/86fcf104af9b4d299a7b2d1051ce5d62~tplv-k3u1fbpfcp-watermark.image)

生产模式默认会开启这个功能，它会基于`ESM`尝试合并我们的模块从而达到节省代码体积，提高执行效率。

::: tip
需要额外注意的是作用域提升也要注意使用`babel`的`modules:false`。因为它是针对`esm`中的`import export`的优化功能。
:::

## Babel 7

通常`webpack`和`babel`一起使用.

- @babel/polyfill

  首先，`babel`常用的一定是`babel/polyfill`。它其实就是 babel 对于浏览器的兼容新 ES 语法的 polyfill。当然`@babel/polyfill`本身会囊括所有的规则，但是有一些函数我们并不需要只需要我们所用到的。所以在 babel 配置中，可以使用`useBuiltIns: 'usage'`进行按需引入 polyfill。

* 辅助函数,使用`@babel/plugin-transform-runtime`解决。

`@babel/plugin-transform-runtime`主要解决了两个问题。

**第一个就是关于`@babel/polyfill`污染全局作用域(直接挂在原型上)，而`transform`并不会它是在一个统一的模块内。这对于开发类库来说是非常重要的一点。
`transform`将 api 从之前的直接修改原型改为了从一个统一的模块中引入，避免了对全局变量及其原型的污染，解决了这个问题**

第二点就是关于辅助函数的处理，babel 转译 `syntax` 时，有时候会使用一些辅助的函数来帮忙转译。

> class 语法中，babel 自定义了 \_classCallCheck 这个函数来辅助；typeof 则是直接重写了一遍，自定义了 \_typeof 这个函数来辅助。这些函数叫做 helpers。从上图中可以看到，helper 直接在转译后的文件里被定义了一遍。如果一个项目中有 100 个文件，其中每个文件都写了一个 class，那么这个项目最终打包的产物里就会存在 100 个 \_classCallCheck 函数，他们的长相和功能一模一样，这显然不合理。

**`transform`将 helpers 从之前的原地定义改为了从一个统一的模块中引入，使得打包的结果中每个 helper 只会存在一个，解决了这个问题**

- `@babel/preset-env`中配置`target`属性中的`browser:[">0.25"]`,这里可以指定很多的配置项。比如这里的>0.25%，表示`babel`最终将转码结果必须兼容支持市场上使用大于百分之 0.25 的代码。(其实就是基于 browserList)

基础 Babel 配置可以查看这篇文章。[Babel-plugin-transform-runtime到底是什么](https://zhuanlan.zhihu.com/p/147083132)
