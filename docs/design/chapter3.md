# 单例模式

## 介绍

单个例子被系统中唯一使用。

一个类只有一个实例。(这点其实在`typescript`中比较容易实现，在`js`中因为没有抽象类和`private`的概念所以只能替代实现。)

## 示例

登陆框/购物车。。

## 解释

**保证一个类仅有一个实例，并提供一个访问它的全局访问点，这样的模式就叫做单例模式。**

现在我们先不考虑单例模式的应用场景，单看它的实现，思考这样一个问题：如何才能保证一个类仅有一个实例？
一般情况下，当我们创建了一个类（本质是构造函数）后，可以通过 new 关键字调用构造函数进而生成任意多的实例对象。像这样：

```js
class SingleDog {
  show() {
    console.log('我是一个单例对象');
  }
}

const s1 = new SingleDog();
const s2 = new SingleDog();

// false
s1 === s2;
```

楼上我们先 new 了一个 s1，又 new 了一个 s2，很明显 s1 和 s2 之间没有任何瓜葛，两者是相互独立的对象，各占一块内存空间。而单例模式想要做到的是，**不管我们尝试去创建多少次，它都只给你返回第一次所创建的那唯一的一个实例。**

要做到这一点，就需要**构造函数具备判断自己是否已经创建过一个实例的能力。**我们现在把这段判断逻辑写成一个静态方法(其实也可以直接写入构造函数的函数体里）：

```js
class SingleDog {
  show() {
    console.log('我是一个单例对象');
  }
  static getInstance() {
    // 判断是否已经new过1个实例
    if (!SingleDog.instance) {
      // 若这个唯一的实例不存在，那么先创建它
      SingleDog.instance = new SingleDog();
    }
    // 如果这个唯一的实例已经存在，则直接返回
    return SingleDog.instance;
  }
}

const s1 = SingleDog.getInstance();
const s2 = SingleDog.getInstance();

// true
s1 === s2;
```
