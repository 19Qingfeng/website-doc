# Vue 实例挂载实现

::: tip
runtime-only 就是只有运行时，编译是发生在 webpack 编译时候 通过 vue-loader 编译生成组件相关 JS 和 CSS，并把 template 部分转换成 render 函数添加到组件对象的属性中。(打包时已经编译好，运行时不存在 template 全是 render 函数。)
runtime-compiled 是在运行时编译，组件的模板直接在组件对象 template 属性中编写，然后在运行时阶段编译生成 render 函数。(运行时可以识别 template，进行运行时编译成 render 函数渲染)
:::

可以看到首次 Vue 定义\$mount 方法的代码如下:

> platform/web/runtime/index.js

```js
// public mount method
Vue.prototype.$mount = function(
  el?: string | Element,
  hydrating?: boolean
): Component {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating);
};
```

之后在每个版本下获得之前定义的 mount 方法，然后重新定义\$mount。

之所以这么做是因为不同的版本下，比如 runtime-only 仅需要 runtime 中首次定义的就足够了。而 runtime-compile 版本需要在之前定义的 mount 方法上做扩展--首先将 options 中的 template 编译成 render 函数再然后调用之前定义好的\$mount 方法将 render 函数进行挂载。

::: tip
抽离公用逻辑定义公用方法，特殊模块取出公用方法。然后重新定义并且在新定义的方法中调用保存的公用逻辑进行调用。
:::

::: details runtime-compile 版本\$mount

```js
Vue.prototype.$mount = function(
  el?: string | Element,
  hydrating?: boolean
): Component {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    process.env.NODE_ENV !== "production" &&
      warn(
        `Do not mount Vue to <html> or <body> - mount to normal elements instead.`
      );
    return this;
  }

  const options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    let template = options.template;
    if (template) {
      if (typeof template === "string") {
        if (template.charAt(0) === "#") {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if (process.env.NODE_ENV !== "production" && !template) {
            warn(
              `Template element not found or is empty: ${options.template}`,
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        if (process.env.NODE_ENV !== "production") {
          warn("invalid template option:" + template, this);
        }
        return this;
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if (process.env.NODE_ENV !== "production" && config.performance && mark) {
        mark("compile");
      }

      const { render, staticRenderFns } = compileToFunctions(
        template,
        {
          outputSourceRange: process.env.NODE_ENV !== "production",
          shouldDecodeNewlines,
          shouldDecodeNewlinesForHref,
          delimiters: options.delimiters,
          comments: options.comments,
        },
        this
      );
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if (process.env.NODE_ENV !== "production" && config.performance && mark) {
        mark("compile end");
        measure(`vue ${this._name} compile`, "compile", "compile end");
      }
    }
  }
  return mount.call(this, el, hydrating);
};
```

:::

首先`$mount`是在`_init`函数最后进行的调用

```js
if (vm.$options.el) {
  vm.$mount(vm.$options.el);
}
```

> hydrating 参数为服务端 SSR 渲染，可以先忽略它。

传入了 options 中的 el，首先这段代码拿到 options 中的 el 然后使用 query 方法，query 其实特别简单就是调用了`document.querySelect`获取 el 元素，然后判断 el 是否是 body 或者 document。如果是那么则报错。并且返回 this,也就是当前 vm(vue)实例。

> 之所以不能挂载在 body 和 html 下因为 vue 挂载的元素是会覆盖的。

之后判断初始化 vue 实例的时候是否传入了 render 函数，比如使用 vue-cli3 生成的 main.js 就使用了 render 函数。当然之前的例子并没有使用 render。

之后判断是否存在 template 属性(runtime-compile 版本会,only 并不会)。如果写了 template 属性，那么他会判断 template 是否是 string

- 如果是 string 并且是#开头。那么首先会调用`idToTemplate(template)`将 el 转化为 Dom 对象，并且获得它的 innerHTML。

* 如果是 string 那么就会调用 template 的`nodeType`属性判断是否是 Dom 节点。如果是，那么取出他们 innerHTML 赋值给 Template。

* 如果 template 是一个 String 并且都不满足，那么就会报错。

> template 传入的首先是 string(如果是 string，那么要求是传入的对应元素 ID，比如'#app')或者 Dom 对象，否则就会报错。

之后如果没有传入 template 那么就会去寻找 el，如果存在 el 那么就会获得 el 的 outerHTML 赋值给 template。

总之，\$mount 步骤

1. 首先合法性校验。options 上的 el 如果存在，那么判断 el 是否是 body 或者 document。如果是那么就会提示错误并且返回 vm。
2. 拿到 options，判断是否传入 render，传入 render 使用 render。没有 render 向下寻找 template 属性，template 必须是 string，传入 template 拿到对应元素节点的的内容。没有传入 template 的话使用 el 属性拿出对应 el 的内容赋值给 template。
3. 总之如果传入 render 那么就使用 render，如果没有传入 render 首先是会通过 template 或者 el 去尝试获取到挂载 DOM 的内容。

> 注意的是 innerHTML 和 outerHTML 获得的都是 DOM 对象的内容，返回的是一个 string 类型。template 最红也就是一个字符串。
> ::: details utils

4. 如果拿到了 template 那么就会调用`compileToFunctions`生成对应的 render 函数以及对应的静态 render 函数。编译这块之后在看。也就是 vue 最终只认 render 函数。

**所以当传入 template 选项和 el 选项是同一个元素的时候差距就会体现出来，template 选项是会取 innerHTML 所以要求需要 🈶️ 一个根元素包裹而取 el 的时候因为使用了 outerHTML 所以一定是会被一个根元素进行包裹的。**

**要么拿到 render 函数的内容渲染到，要么拿到 template 元素的 innerHTML 内容渲染到 el 上，要么直接拿到 el 本身的 outerHTML 进行替换。**

::: warn
template 渲染时，只能存在一个根元素，无论是.vue 文件还是 options 中的 template 都内部都必须只有一个根元素包裹。这也就是为什么取的时候需要取 template 的 innerHTML。
如果 template 存在，那么就会取 template 下的 innerHTML 进行模版编译渲染，如果不存在没有办法了所以才会尝试索取 el 的 outerHTML 作为 template(也是只有一个根元素)。最终是会将整个 el 进行替换的。
:::

```js
var idToTemplate = cached(function(id) {
  var el = query(id);
  return el && el.innerHTML;
});

"1".nodeType; // undefined
document.querySelector("div").nodeType; // 返回1 元素节点

// outerHTML的polyfill
function getOuterHTML(el) {
  if (el.outerHTML) {
    return el.outerHTML;
  } else {
    var container = document.createElement("div");
    container.appendChild(el.cloneNode(true));
    return container.innerHTML;
  }
}
```

:::

之后**调用了之前缓存的公用的\$mount 方法**进行挂载。`mount.call(this, el, hydrating);`传入了 el


！！！！
5分13！
一个问题待解决：template和el挂载为什么一个是innerHTML一个是outerHTML
