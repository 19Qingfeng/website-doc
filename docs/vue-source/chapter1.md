# New Vue 发生了什么

##  源码分析

```js
function Vue(options) {
  if (process.env.NODE_ENV !== "production" && !(this instanceof Vue)) {
    warn("Vue is a constructor and should be called with the `new` keyword");
  }
  this._init(options);
}
```

Vue 其实就是一个 function，new Vue 初始化了一个 vue 实例并且传入 options 并且调用`this._init(options)`方法。

`_init(options)`方法在`initMixin`中`Vue.prototype._init`上已经挂载过了。可以看到在\_init 中有一段这样的逻辑,将传入的 options 合并到 vm.\$options 上。

```js
// vm就是初始化的this实例
vm.$options = mergeOptions(
  resolveConstructorOptions(vm.constructor),
  options || {},
  vm
);
```

合并完成配置之后可以看到有这样一段逻辑

```js
// expose real self
vm._self = vm;
initLifecycle(vm);
initEvents(vm);
initRender(vm);
callHook(vm, "beforeCreate");
initInjections(vm); // resolve injections before data/props
initState(vm);
initProvide(vm); // resolve provide after data/props
callHook(vm, "created");
```

初始化关于 vue 的各种逻辑。

在之后会看到一段逻辑，判断传入的 options 合并后是否存在 el 属性，el 属性传入一个 String，如果传入了则会在\$mount 的时候转化成 Dom 对象并且进行挂载。

```js
if (vm.$options.el) {
  vm.$mount(vm.$options.el);
}
```

## Demo 演示

来看这样一个 Demo。当在 data 中定义了一个 message 变量，之后在项目中的大部分地方都可以使用`this.message`去访问它的值。我们来看看为什么会这样。

```js
import Vue from "vue";
/* eslint-disable */
const app = new Vue({
  el: "#app",
  mounted() {
    console.log(this.message);
  },
  data: {
    message: "hello world",
  },
});
```

来看看`_init`中`initState(vm)`中的逻辑。

```js
function initState(vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) {
    initProps(vm, opts.props);
  }
  if (opts.methods) {
    initMethods(vm, opts.methods);
  }
  if (opts.data) {
    initData(vm);
  } else {
    observe((vm._data = {}), true /* asRootData */);
  }
  if (opts.computed) {
    initComputed(vm, opts.computed);
  }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}
```

可以看到`initState`方法传入了当前 vue 实例，获取当前 options，**首先初始化 opts.props 然后初始化 methods 再然后初始化 data，之后在初始化 computed 和 watch**.

::: tip
所以这样就是为什么 data 中无法依赖 computed 的值，因为首先初始化的 data 之后才初始化的 computed。
:::

### initData

在看着重看看`initData`这个方法,首先获得所有 options 上的 data。

判断 data 是否是一个函数，

- 如果是一个函数调用`getData - data.call(vm, vm)`执行 data,使用 call 的原因是绑定 data 中的 this 指向当前 vue 实例，以及将当前 vm 实例作为参数传入。

- 如果没有传入 data 那么给它一个空对象。

之后**运行后得到的 data 赋值给 vm.\_data(赋值给当前实例下的 data)**判断 data 是否是一个对象，如果不是对象则报错并且将 data 强制等于一个对象。

::: details

```js
// initData 部分逻辑
var data = vm.$options.data;
data = vm._data = typeof data === "function" ? getData(data, vm) : data || {};
if (!isPlainObject(data)) {
  data = {};
  process.env.NODE_ENV !== "production" &&
    warn(
      "data functions should return an object:\n" +
        "https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function",
      vm
    );
}
```

:::

之后通过`Object.keys(data)`拿到所有的 key 和`vm.$options.props`以及`vm.$options.methods`进行 while 循环，判断 data 中的 key 和 methods 以及 props 进行 key 对比查看是否重复。

之所以要这样检查同 key 不能重复，是因为他们最终都要挂载在 vm 实例上，所以必须保证不能重复。

::: details

```js
var keys = Object.keys(data);
var props = vm.$options.props;
var methods = vm.$options.methods;
var i = keys.length;
while (i--) {
  var key = keys[i];
  if (process.env.NODE_ENV !== "production") {
    if (methods && hasOwn(methods, key)) {
      warn(
        'Method "' + key + '" has already been defined as a data property.',
        vm
      );
    }
  }
  if (props && hasOwn(props, key)) {
    process.env.NODE_ENV !== "production" &&
      warn(
        'The data property "' +
          key +
          '" is already declared as a prop. ' +
          "Use prop default value instead.",
        vm
      );
  } else if (!isReserved(key)) {
    proxy(vm, "_data", key);
  }

  // observe data
  observe(data, true /* asRootData */);
}
```

:::

当检测到 key 没有重复的话那么 vue 中就会调用`proxy(vm,"_data",key)`就会传入当前实例对象，"\_data",当前 data 上的 key。

其实可以看到`proxy`方法

```js
var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop,
};
// target-vm sourceKey-_data key-key
function proxy(target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter() {
    return this[sourceKey][key];
  };
  sharedPropertyDefinition.set = function proxySetter(val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}
```

实际上这一步也就通过 vm.key 代理到了 vm.\_data.key,对应例子来看当我们访问`this.message`就会通过`Object.defineProperty`到`vm._data.message`上去。** 因为`vm._data`在 initData 方法中最开始已经通过执行 data()放在了 vm.\_data 中**,所以通过 vm.\_data 自而然就可以访问到对应的值。

> 当然 prop 也是这么做的。

调用过程

- this.message -> this.\_data.message -> this.\_data = \$options.data()

```js
import Vue from "vue";
const app = new Vue({
  el: "#app",
  data: {
    message: "hello world",
  },
  methods: {},
  mounted() {
    console.log(this.message, "data"); // hello world
    console.log(this._data.message); // hello world
  },
});
```

::: tip
这里需要注意的是，每次调用 proxy 的确会覆盖 sharedPropertyDefinition 这个对象的值。不过没关系，每次调用 proxy 方法执行`Object.defineProperty(target, key, sharedPropertyDefinition);`都会在 target(vm)的 key 属性上定义一个 sharedPropertyDefinition,这个是独一无二的。

**换句话说，也就是每次通过`Object.defineProperty`方法定义对象上的属性，值都是独一无二的并不会被相同引用。(相当于重新初始化了一个新的对象)**

:::

::: details 具体演示可以查看这个 Demo

```js
let sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: () => {
    return "1";
  },
  set: () => {},
};

const obj = {};

Object.defineProperty(obj, "a", sharedPropertyDefinition);

console.log(obj["a"]); // 1

sharedPropertyDefinition["get"] = () => {
  return "11111";
};

console.log(obj["a"]); // 1

sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: () => {
    return "12";
  },
  set: () => {},
};

console.log(obj["a"]); // 1
```

:::

## 总结

其实 new vue 的时候首先实例了 vue 对象，之后进行了合并 options。在之后一系列 init 方法,

```js
initLifecycle(vm);
initEvents(vm);
initRender(vm);
callHook(vm, "beforeCreate");
initInjections(vm); // resolve injections before data/props
initState(vm);
initProvide(vm); // resolve provide after data/props
callHook(vm, "created");
```

最后判断是否存在 el，如果传入了 el 选项则调用 vm.\$mount 进行挂载 vue。
