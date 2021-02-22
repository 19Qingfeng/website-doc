# 依赖优化

依赖优化主要是针对`webpack`打包本身过程的提速。

## noParse

- noParse

`noParse`意思在告诉 webpack 忽略就较大的库，直接提高构建速度。比如一些第三方工具类。使用一些传统的方式编写的而不是 ESM，比较独立没有外部依赖也比较大。那么干脆直接告诉`webpack`不对它进行编译。当然前提是不使用 ESM 编写的第三方库。(也就是直接引入不进行编译和打包)

在`module`中和`rules`同级别进行配置

```js
{
    module:{
        noParse: /jquery|lodash/,  //接收参数  正则表达式 或函数
        noParse:function(contentPath){
            return /jquery|lodash/.test(contentPath);
        }
    }
}
```

> 防止 webpack 解析那些任何与给定正则表达式相匹配的文件。忽略的文件中不应该含有 import,require,define 的调用，或任何其他导入机制。忽略大型的 library 可以提高构建性能。

::: tip
一旦文件`noParse`了，那么`externals`也将不起作用了。
所以总的结论是:文件中没有任何导入就可以使用 `noParse`，`noParse` 对于 `loader`,`plugin` 等等都没有任何影响

> loader、plugin对某个文件有没有处理，只与loader、plugin中自己的配置有关系。(即使设置了`noParse`,loader...也对它进行处理。)
:::

## dllPlugin

基于dllPlugin在develop模式提升构建速度。
