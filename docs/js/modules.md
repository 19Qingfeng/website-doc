# ESM和CJS区别

## 区分Es Module和CommonJS两种方式的区别

CommonJS 是动态引入，执行时引入。
ES Module 是静态引入，编译时引入。

``` js
import { sub,test } from "./utils"

if(flat) {
  import { add } from "./utils" // 会报错
}


const { sub,test } = require("./utils")
if(flat) {
  const { test } = require("./utils")
}
```

> 这里的条件判断`Tree Shaking`指的是代码运行时的而非用户触发一些事件引入，
> 用户触发事件 - 动态懒加载引入脚本(模块) - `Dynamic import`
> `CJS`无法Tree Shaking本质 - 编译代码时导出未使用的代码无法确定在执行脚本时是否使用到了。

上边的Demo可以看出两者的是使用区别。

关于**静态引入**，在编译代码阶段并不会到达执行阶段就会报错。进行语法分析(编译)的时候就会解析`import`的语句，执行之前就会处理完模块的依赖。

ES modules不支持动态(执行时)引入，仅仅支持静态(编译)引入。

所以将静态引入放入条件判断比如`if`语句中进行执行时引入就会报错，因为编译阶段就会报错。

关于**动态引入**，在执行代码阶段才会根据执行的逻辑动态引入。如果条件判断成立则引入模块，而不成立则永远不会引入模块。

CommonJS支持动态(执行时)引入。


## TreeShaking

在webpack4.0以上的`TreeShaking`中，所谓的`Tree Shaking`就会`webpack`在编译时候根据分析模块关系，将模块中导出但并未使用(引入)的代码片段剔除从而达到精简代码，压缩代码体积的效果。

此时就很好理解为什么webpack中**默认`Es Module`中支持`Tree Shaking`，因为在编译阶段就已经确定好了模块的引入和依赖关系，所以可以很好的处理`Tree Shaking`代码。**

而webpack在`Common js`中就不支持`Tree Shaking`，**因为CJS使用的是执行时引入，也就是只有代码执行时候才会区别出到底引入了哪些模块，所以`Tree Shaking`就很矛盾了，CJS在webpack中无法支持Tree Shaking这就是原因。**

在代码编译阶段并不会执行代码，所以一些模块被导出并没有在顶层声明使用但是可能会在条件判断语句(代码执行时)又会被引入。所以`Tree Shaking`和`CJS`就存在了矛盾--**编译阶段无法确定哪些无用代码在运行时候引用到了。**

::: warning Dynamic import和CJS的Tree Shaking不要混淆了
需要额外注意的是，当用户触发一些事件才引入一些模块。这是动态引入 `Dynamic import`的概念。

而CJS的`Tree Shaking`是指在代码运行时一些条件下引入了导出的一些模块，而在编译时候这些模块存在导出而并没有被引入。
:::

::: tip Rollup中CJS的TreeShaking
这里所说`Tree Shaking`无法支持`Common JS`仅仅是在`webpack`中，当我在使用`Rollup`时，使用`@rollup/plugin-commonjs`插件，发现调用`exports`使用CJS语法Rollup仍然可以帮我进行`Tree Shaking`,有时间了研究下这个插件源码。
:::

::: tip Webpack中CJS的TreeShaking
其实`webpack`中也可以依赖一些插件使用`commonjs`进行`Tree Shaking` 也可以可以做到部分的 tree-shaking 的，例如[https://github.com/indutny/webpack-common-shake](https://github.com/indutny/webpack-common-shake)

但是，因为 commonjs 毕竟是动态引入的，还是会有一些限制 [https://github.com/indutny/webpack-common-shake#limitations](https://github.com/indutny/webpack-common-shake#limitations) 。这是语法的限制，无论 webpack 和 rollup 都会有。


另外，“当用户点击按钮触发事件的时候才会执行引入”—— 这个不是 tree-shaking ，这就是异步加载。
:::