# vuex

> 首先 vuex4 版本对于`ts`的支持我认为仍然是不够好，但是好消息是在将来的`vuex5`版本开发人员已经将`ts`重新适配提上日程并且已经在开发阶段了。

### MapState

`compositionApi`中封装`MapState`，同理还可以封装`mapAction`,`mapMutations`,`mapGetters`。

一般来说我们不经常直接在根 state 创建变量，所以这时候我们想到了 module 的方式，在 store 目录下面创建 modules 目录,在 modules 目录下面创建 home 和 about 两个目录，分别创建 state 并导出

```js
// store/modules/home.index.ts
export interface HomeState {
  homeInfo: string;
}

const state: HomeState = {
  homeInfo: "info from home state model",
};
const getters = {};
const mutations = {};
const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
```

```js
// store/modules/about.index.ts
export interface AboutState {
  aboutInfo: string;
}

const state: AboutState = {
  aboutInfo: "info from about state model",
};
const getters = {};
const mutations = {};
const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
```

我们在 modules 目录下面再创建一个 index.ts,将这些 module 一起合并导出

```js
// store/modules/index.ts
import home from "./home";
import about from "./about";

const modules = {
  home,
  about,
};
console.log("modules", modules);

export default modules;
```

> 接着 vuex4 为我们提供了 useStore 方法来获取 state。
> 我们试着来用一下：

```vue
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <p>{{ homeInfo }}</p>
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { computed, defineComponent } from "vue";
import HelloWorld from "../components/HelloWorld.vue";
import styles from "./example.module.css";

export default defineComponent({
  name: "Home",
  setup() {
    const store = useStore();
    const homeInfo = computed(() => store.state.home.homeInfo);

    return {
      homeInfo,
    };
  },
});
</script>
```

貌似重复代码很多，对不对？我们可以自定义一个 hooks 来代替这些重复操作:

```js
import { computed } from "vue";
import { useStore } from "vuex";

const useVuexValue = (moduleName: string, storeKeys: Array<string>) => {
  let values: any = [];
  const moduleNames = moduleName.split("/");
  const state = useCurry(moduleNames);
  storeKeys.forEach((storeKey) => {
    const value = computed(() => state[storeKey]);
    values.push(value ? value : null);
  });
  return values;
};

const useCurry = (moduleNames: Array<string>) => {
  const store = useStore();
  let state = store.state;
  moduleNames.forEach((moduleName) => {
    state = state[moduleName];
  });
  return state;
};

export default useVuexValue;
```

然后我们取 state 变量的方法就变成了:

```js
import { useVuexValue } from '../hooks'
setup() {
    const [homeInfo,value1, value2] = useVuexValue('home', ['homeInfo','value1', 'value2'])
    return {
        value1,
        value2,
        homeInfo
    }
}
```

假如 home module 下面还有 detail、list 等等子 module，那我们取数据的方式就应该是:

```js
setup() {
    const [value1, value2] = useVuexValue('home/detail', ['value1', 'value2'])
    return {
        value1,
        value2
    }
}
```

是不是看上去有点眼熟，对的就是类似于 mapState 的方式，不过是我们自定义的方式，同样的思路，可以封装我们自己的 mutation、action 等。

### 结合 TS

在定义每个 module 时，我们都声明了 interface，我们都知道这是 typescript 的类型定义。但是我们用到了吗：

![图片地址](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/644da51557b54a9bbce88fac4d5775ce~tplv-k3u1fbpfcp-zoom-1.image)

看到这个 any 就知道，咱们压根没法通过 typrscript 来智能化提示咱们的 state，那有没有方法呢？根据上面 👆 截图可知 `(property) Store<any>.state: any`，vuex4 给我们提供了一个`Store<any>.state.any`，我们想办法把这两个 any 变成 typescript 类型就行了。

> 一个是范型一个是返回

按照官方的教程，咱们可以把 typecript 和 vuex4 结合起来，首先来改造一下`store/index.ts:`

```js
// store/index.ts
import { InjectionKey } from "vue";
import {
  createStore,
  createLogger,
  Store,
  useStore as baseUseStore,
} from "vuex";
import modules from "./modules";
import config from "../config";

interface StateType {}

export const key: InjectionKey<Store<StateType>> = Symbol();

const store: Store<StateType> = createStore({
  modules,
  mutations: {},
  actions: {},
  strict: config.isDev,
  plugins: config.isDev ? [createLogger()] : [],
});

export function useStore() {
  return baseUseStore(key);
}
export default store;
```

通过`export const key: InjectionKey<Store<StateType>> = Symbol()`，我们可以给咱们的`store`添加类型定义.对于这个 `StateType`，咱们得想办法将`modules` 下面的`home、about`的类型定义都给囊括进来，但是一般来说，我们的`module` 一般来说都比较多，所以我们不直接在 index.ts 定义`StateType`。我们应该把 StateType 的定义抽出来，作为 types，所以我们在 src 目录下新建一个 types 目录，然后新建一个 index.ts:

> 也就是整合所有`modules`的`state`类型，创建一个新的`Type`包括所有子`modules`的`State 类型`。(VUEX 根 State 的类型)

```js
// types/index.ts
import { HomeState } from '../store/modules/home'
import { AboutState } from '../store/modules/about'

type VuexModuleType = {
	home: HomeState
	about: AboutState
}

export type StateType = VuexModuleType
```

在这里，我们把各个`module`的类型文件都导进来了，然后一起合并导出，在`store/index.ts`下面，我们就能取到这里的`StateType`:

import { StateType } from '../types'

```js
export const key: InjectionKey<Store<StateType>> = Symbol();

const store: Store<StateType> = createStore({
  modules,
  mutations: {},
  actions: {},
  strict: config.isDev,
  plugins: config.isDev ? [createLogger()] : [],
});
```

接下来，我们在 src 下面新建一个 vuex.d.ts:

```js
import { ComponentCustomProperties } from 'vue'
import { StateType } from './types'
import { Store } from 'vuex'

declare module '@vue/runtime-core' {
	// provide typings for `this.$store`
	interface ComponentCustomProperties {
		$store: Store<StateType>
	}
}
```

现在就剩最后一步了，我们在 main.ts 里面拿到 store 暴露出来的 key:

```js
// main.ts
import { createApp } from "vue";
import store, { key } from "./store";
import router from "./router";
import App from "./App.vue";

const app = createApp(App);

app.use(router);
app.use(store, key); // 使用store时带上key
app.mount("#app");
```

现在，我们再来试一试呢？

> 注意调用`useStore`时，第二个参数需要传入`store`的 key，所以在`store`函数中封装了`useStore()`方法，闭包自己记住了`key`。
> 之后使用时需要引入模块内的`useStore()`。

![成功了！](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/99c89addbca6479a8d6e95e399fed028~tplv-k3u1fbpfcp-zoom-1.image)

> 在使用`modules`使就可以正常使用了。

```js
import { testData, testPosts, ColumnProps, PostProps } from "../../mock/column";
import { StateType } from "../types/index";
import { Module } from "vuex";

export interface HomeState {
  column: ColumnProps[];
  testPosts: PostProps[];
}

// 这里注意下 关于`module`直接使用这样的写法 而不是单独拆开来写
// 否则就无法让TS进行类型推断
const module: Module<HomeState, StateType> = {
  namespaced: true,
  state: {
    column: testData, // 专栏
    testPosts: testPosts, // 列表
  },
  mutations: {},
  actions: {},
};

export default module;

/* TS无法正确进行类型推断state，和mutations的参数 以及actions的参数 需要手动声明类型 */

const state = {};

const mutations = {};

const actions = {};

const module: Module<HomeState, StateType> = {
  namespaced: true,
  state,
  mutations,
  actions,
};
```

::: warning
上述结合 TS 有个问题

1. `module`中嵌套`module`的话仍然会导致`vuex4`类型推断错误，目前来说，我们只有将子 module 统一提至根 module，意思就是不要在 module 里面嵌套 module。

> 针对上述这问题，目前都提出来对于`vuex4`版本对于`ts`的不友好性能。
> :::
