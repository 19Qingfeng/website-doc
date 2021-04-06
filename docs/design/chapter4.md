# 适配器模式

## 介绍

旧接口和新接口不兼容，使用适配器模式将旧接口和新接口兼容。

## 演示

```js
class Adapter {
  specificRequest() {
    return '德国标准插头';
  }
}

// 转换器
class Target {
  constructor() {
    this.adapter = new Adapter();
  }
  request() {
    let info = this.adapter.specificRequest();
    return `${info} 转换 中国标准插头`;
  }
}

// 测试
const target = new Target();
target.request(); // 转换
```

## 使用场景

1. 旧接口的封装。

比如遗留的`jquery`的代码，当使用`vue/react`共存的时，对于遗留的`ajax()`适配，适配器模式就可以很好的解决这个问题。

旧的`ajax`->

```js
$.ajax({
  url: 'xxx',
  method: 'get',
  dataType: 'json',
  data: {
    id: '333',
  },
});
```
当撤掉项目中的`ajax`时我们可以自己书写一个适配器类来实现等价替换:
```js
window.$ = {
  ajax: (params) => {
    // 自己的处理。。 转换data
    return axios(data) //
  }
}
```
这样以后的代码中可以使用`axios`，之前的`$.ajax`仍然可以正常使用。

2. vue中的`computed`

对于`vue computed`其实就是一种很好的适配器模式，将使用者进行转化成需要者的格式。
