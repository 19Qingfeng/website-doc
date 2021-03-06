# JAVASCRIPT变量机制和垃圾回收机制

## 变量机制

- 基本类型值在内容中占据的固定大小的空间，所以才会存储在堆内存中。

- 从一个变量向另一个变量复制基本类型的值，会创建这个值的一个副本。

- 引用类型的值是对象。保存在堆内存中。

- 包含引用类型值的变量实际上并不是对象本身，而是一个指向该对象的指针。

- 从一个变量向另一个变量复制引用类型的值，复制的其实是指针的引用，因此两个变量最终都指向同一个对象。

所有变量都存在于一个执行环境(作用域)，这个执行环境决定了变量的生命周期，以及哪一个部分代码可以访问其中的变量。

- 全局作用域，局部作用域。

- 每次进行入一个新的执行环境，都会创建一个用于搜索变量和函数的作用域链。

## 垃圾回收机制

JavaScript 是一门具有自动垃圾回头机制的的编程语言，开发一般无需刻意关心垃圾回收机制。

- 标记清除法(现代浏览器):离开作用域的值将被自动标记为可以回收，因此将在垃圾收集期间被删除。

- "标记清除"是目前逐句的垃圾回收算法，给当前不实用的值加上标记，然后在将其垃圾回收。

::: tip

```js
function createPerson(name) {
  // do something
}
const person = createPerson("wang.haoyu");

// 手工解除引用
person = null;
```

注意:解除一个值的引用并不意味着自动回收该值所占用的内存。**解除引用的真正作用是让值脱离执行环境，以便垃圾回收机器下次运行时将其回收。**
:::

- 另一中引用计数的方式，跟踪记录所有值被引用的次数。目前都不在使用了，他拥有一个巨大的缺陷就是对于循环引用的现象它永远无法释放内存空间。
