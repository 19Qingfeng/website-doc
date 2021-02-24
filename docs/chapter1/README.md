# Nx-components

NX official website components by Vue.

### 使用

#### 安装

`npm install nx-website-component --save`

`yarn add nx-website-component`

::: warning
version 1.x 仅支持 Vue2.x，暂不兼容 Vue3.0 版本。
:::

---

#### 直接引入

```js
import webSite from "nx-website-component";
import "nx-website-component/lib/theme-chalk/index.css";

Vue.use(webSite);
```

#### 按需引入

```js
npm install -D babel-plugin-component
```

babel.config.js

```js
plugins: [
  [
    "component",
    {
      libraryName: "nx-website-component",
      styleLibrary: {
        name: "theme-chalk",
        base: false,
      },
      camel2Dash: false,
    },
  ],
];
```

```js
import { NxCard } from "nx-website-component";
Vue.use(NxCard);
```

#### Iconfont

```
//at.alicdn.com/t/font_2224678_csmx2tf7ooo.css
```

#### 响应式配置

```js
const baseSize = 32; // 基准值
function setRem() {
  // 相对于750像素，获得一个缩放比例
  const scale = document.documentElement.clientWidth / 750;
  document.documentElement.style.fontSize =
    baseSize * Math.min(scale, 2) + "px";
}
setRem();
window.onresize = function() {
  setRem();
};
```

::: tip
public/index.html
:::

#### CSS 媒体查询基础配置

```css
@media only screen and (min-width: 1366px) {
}
// pad 当作pc
@media screen and (min-width: 769px) and (max-width: 1366px) {
}

// 手机
@media screen and (max-width: 769px) {
}

// 手机横屏
@media screen and (min-width: 600px) and (max-width: 960px) and (orientation: landscape) {
}
```

#### Vue Cli 3+

##### 字体文件配置

```js
// vue.config.js
chainWebpack: (config) => {
  const fileRule = config.module.rule("file");
  fileRule
    .test(/\.ttc$/)
    .use("file-loader")
    .loader("file-loader");
};
```

##### 引入源码版本(兼容低版本 IE)

::: details
当低版本浏览器下使用插件报错的情况需要额外跟随项目中的 babel 进行转译。
当使用 Vue CLI 3+ 时，需要在 vue.config.js 中的 transpileDependencies 增加 nx-website-component，如下：

```
module.exports = {
  transpileDependencies:[
    'nx-website-component'
  ]
}
```

:::

> 兼容低版本浏览器配置处理。

---

::: warning
一个组件只做一件事情，之前 bg 揉了太多琐碎逻辑,现在单独全部抽出来。
:::
