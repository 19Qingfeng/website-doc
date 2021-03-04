# 新增

## [teleport](https://v3.vuejs.org/guide/teleport.html#teleport)

瞬间移动组件，包括在`teleport`组件内部的组件会被渲染到`teleport`上的`to`属性的节点上。（to 属性接受的参数会被`querySelector`）。

## [suspense](https://v3.vuejs.org/guide/component-dynamic-async.html#using-with-suspense)

suspense组件，用于包括关于异步请求加载的组件。

`<Suspense>` 常用于控制组件的加载，错误，延迟等等(比如组件数据在请求是显示另一个组件，等待加载完成在显示组件)。

> 异步组件可以选择退出 Suspense 控制，并通过在其选项中指定 suspensable:false，让组件始终控制自己的加载状态。

## [emits](https://v3.vuejs.org/guide/migration/emits-option.html#emits-option)

`emits`属性提供了对应的属性，

- 支持对自定义事件运行时的参数校验。

- 自动补全`emit`的事件名。

- 统一管理事件名和校验，利于维护代码。

```js
<script lang='ts'>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Dialog",
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
  },
  // emits:[ 'close-model' ]
  // 运行时检验参数以及事件一目了然
  emits: {
    // "close-model": (payload: any) => {
    //   return payload.type === "close";
    // },
    // null不进行验证
    "close-model": null,
  },
  setup(props, ctx) {
    const bttonClick = () => {
      ctx.emit("close-model", {
        type: "close",
      });
    };
    return {
      bttonClick,
    };
  },
});
```
