# 单例模式

**保证一个类仅有一个实例，并提供一个访问它的全局访问点，这样的模式就叫做单例模式。**

## 单例模式的实现思路

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

除了楼上这种实现方式之外，getInstance 的逻辑还可以用闭包来实现：

```js
SingleDog.getInstance = (function() {
  // 定义自由变量instance，模拟私有变量
  let instance = null;
  return function() {
    // 判断自由变量是否为null
    if (!instance) {
      // 如果为null则new出唯一实例
      instance = new SingleDog();
    }
    return instance;
  };
})();
```

## 全局模态框

### 思路

这道题比较经典，基本上所有讲单例模式的文章都会以此为例，同时它也是早期单例模式在前端领域的最集中体现。

万变不离其踪，记住 getInstance 方法、记住**instance 变量、记住闭包和静态方法**，这个题除了要多写点 HTML 和 CSS 之外，对大家来说完全不成问题。

### 实现

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>单例模式弹框</title>
  </head>
  <style>
    #modal {
      height: 200px;
      width: 200px;
      line-height: 200px;
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      border: 1px solid black;
      text-align: center;
    }
  </style>
  <body>
    <button id="open">打开弹框</button>
    <button id="close">关闭弹框</button>
  </body>
  <script>
    // 核心逻辑，这里采用了闭包思路来实现单例模式
    const Modal = (function() {
      let modal = null;
      return function() {
        if (!modal) {
          modal = document.createElement('div');
          modal.innerHTML = '我是一个全局唯一的Modal';
          modal.id = 'modal';
          modal.style.display = 'none';
          document.body.appendChild(modal);
        }
        return modal;
      };
    })();

    // 点击打开按钮展示模态框
    document.getElementById('open').addEventListener('click', function() {
      // 未点击则不创建modal实例，避免不必要的内存占用;此处不用 new Modal 的形式调用也可以，和 Storage 同理
      const modal = new Modal();
      modal.style.display = 'block';
    });

    // 点击关闭按钮隐藏模态框
    document.getElementById('close').addEventListener('click', function() {
      const modal = new Modal();
      if (modal) {
        modal.style.display = 'none';
      }
    });
  </script>
</html>
```
