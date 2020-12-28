# draggable HTML 拖拽

设置 draggable 属性规定元素是否可拖动。

::: tip

提示： 链接和图像默认是可拖动的。

:::
`<_element_ draggable="true|false|auto">`

> H5 中拖拽需要设置元素 draggable 为 true。

## 事件

拖拽元素事件(`dragable=true`的元素)

- ondragstart: 当元素开始拖拽时触发。(拖拽事件会冒泡，换而言之可以通过祖先元素监听事件进行冒泡),事件只会触发一次.

- ondrag:拖拽前,拖拽结束之间触发,事件会连续触发。(过程中触发)

- ondragend:拖拽结束触发,事件只触发一次.

目标元素事件(拖拽元素进入目标元素监听的事件)

> 事件绑定并非在拖拽元素上而是在目标，目标元素上！

- ondragenter:进入目标元素触发
- ondragover:当元素或者选择的文本被拖拽到一个有效的放置目标上时，触发 dragover 事件(每几百毫秒触发一次)。
- ondragleave:离开目标元素触发
- ondrop:在目标元素上释放鼠标

::: tips

需要注意的是，当没有实现想要达到的逻辑效果的时候，
额外注意下阻止事件的默认行为。

比如要触发`drop`事件的时候，需要`dragover`阻止他的默认行为。

:::

## 拖拽数据 dataTransfer

> 所有 拖拽事件 都有一个名为 dataTransfer 的属性，它持有拖拽数据（dataTransfer 是一个 DataTransfer 对象）。

dataTransfer 是拖拽事件对象的属性 .

1.setData() : 设置数据 key 和 value(必须是字符串)

2.getData() : 获取数据，根据 key 值，获取对应的 value

3.effectAllowed : 设置光标样式(none, copy, copyLink, copyMove, link, linkMove, move, all 和 uninitialized)

4.files:获取外部拖拽的文件，返回一个 filesList 列表 filesList 下有个 type 属性,返回文件的类型

### 拖拽文件上传

> datatransfer.files 当拖拽文件进入元素的时候这个属性会提示会保存对应的文件值。
> datatransfer.files+FileReader 可以实现拖拽文件读取文件信息,在结合 formData 以及请求头 multipart/form-data(其实当上传文件的时浏览器会自动添加 multipart/form-data)。

## 设置拖拽反馈图像
当拖拽发生时，会生成拖拽目标的一个半透明图像（触发`"{event("dragstart")}}" `事件的元素），并在拖拽过程中跟踪鼠标指针。这个图像是自动创建的，所以你不需要自己创建它。但是，你可以使用 `setDragImage()` 方法来自定义拖拽反馈图像。

`event.dataTransfer.setDragImage(image, xOffset, yOffset);`

## 拖拽效果

## 指定放置目标

...
> 有时间用到了Demo+总结。

https://developer.mozilla.org/zh-cn/docs/web/api/html_drag_and_drop_api/drag_operations 