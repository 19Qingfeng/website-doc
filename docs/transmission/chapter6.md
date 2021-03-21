# 资源优先加载

- 浏览器默认安排资源加载优先级。

- 手动使用`preload`,`prefetch`可以调整资源加载优先级。

## preload

preload: 提前加载较晚出现，但对当前页面非常重要的资源。(提升资源加载优先级)

> 常用于当前页面中一些资源比较重要，此时可以通过 preload 进行资源的加载顺序提升。

```html
<link rel="preload" href="img/pc.svg" as="image" />
```

> 注意`preload`只负责加载不负责解析，意思就是即使调用了`preload`声明同时也需要引入资源。

> preload 同时具有多种`as`的`type`，比如`font`，`video`等等。需要注意的是使用`font`时，一定要给 link 标签设置额外的跨域属性`crossorigin='anonymous'`，以及最好指定对应的字体类型`type='font/woff2'`。

```html
<link
  rel="preload"
  href="xxxx.woff2"
  as="font"
  type="font/woff2"
  crossorigin="anonymous"
/>
```

::: tip

`preload`顾名思义提前当前页面资源优先级，所以需要额外在当前页面引入对应资源+preload 声明。

`prefetch`意为当页面空闲的时候进行加载资源，常用于预加载非当前页面资源，所以并不需要额外资源引入只需要 prefetch 声明引入即可。

:::

## prefetch

prefetch: 提前加载后续路由需要的资源，优先级低。

当前页面需要资源加载完成后，可以结合`prefetch`进行加载额外的资源请求。(最低优先级)

```html
<link rel="prefetch" as="style" href="product-font.css" />
```

::: tip

大多数时候`prefetch`都会配合`split Code`进行`lazy load`配合优化页面。

当使用`prefetch`的时，会提前加载之后可能会需要的资源。在下一次页面需要这个资源的时候(比如用户行为触发需要加载的时候)，可以直接从缓存中拿出来而不需要再次加载了.`newtwork`资源列表也中会出现`prefech cache`。

:::

## Webpack 中的`prefetch`和`preload`

[Prefetching/Preloading modules](https://webpack.js.org/guides/code-splitting/#prefetchingpreloading-modules)

`Webpack`中是通过`Magic Comments` 魔法注释进行处理`prefetch`和`preload`。

```js
import(/* webpackPreload: true */ 'ChartingLibrary');
import(/* webpackPrefetch: true */ './path/to/LoginModal.js');
```

## VueCli 中的`prefetch`和`preload`

- preload

默认情况下，一个 Vue CLI 应用会为所有初始化渲染需要的文件自动生成 preload 提示。这些提示会被@vue/preload-webpack-plugin 注入，并且可以通过 chainWebpack 的 config.plugin('preload')进行修改和删除。

- prefetch

默认情况下，一个 Vue CLI 应用会为所有作为 async chunk 生成的 JavaScript 文件(通过动态 import()按需 code splitting 的产物)自动生成 prefetch 提示。这些提示会被@vue/preload-webpack-plugin 注入，并且可以通过 chainWebpack 的 config.plugin('prefetch')进行修改和删除。

## tip & 使用场景

|                | preload                                           | Prefetch                                             |
| -------------- | ------------------------------------------------- | ---------------------------------------------------- |
| 语法           | `<link rel="preload" href="bg-image-narrow.png">` | `<link rel="prefetch" href="bg-image-narrow.png" />` |
| 适用场景       | 本页面接下来大概率要使用的资源                    | 下个页面的资源。下个页面很可能会去访问               |
| 浏览器支持情况 | 一般                                              | 较高                                                 |
| 加载时间       | 立即加载（一般而言，跟 as 有关）                  | 浏览器闲置的时候才会加载（一般而言）                 |

1、preload 和 prefetch 的本质都是预加载，即先加载、后执行，加载与执行解耦。

2、**preload 和 prefetch 不会阻塞页面的 onload。**

3、preload 用来声明当前页面的关键资源，强制浏览器尽快加载；而 prefetch 用来声明将来可能用到的资源，在浏览器空闲时进行加载。

4、不要滥用 preload 和 prefetch，需要在合适的场景中使用。

5、preload 的字体资源必须设置 crossorigin 属性，否则会导致重复加载。

原因是如果不指定 crossorigin 属性(即使同源)，浏览器会采用匿名模式的 CORS 去 preload，导致两次请求无法共用缓存。
