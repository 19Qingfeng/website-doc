# Function 类型

## 函数内部属性

函数内部有两个特殊的属性。分别是 arguments 和 this。

::: tip
注意这里仅仅针对普通函数来说，箭头函数内部没有 arguments，以及箭头函数并不存在 this 而是指向它的外层 this 包裹对象。
:::

### arguments

arguments 是一个类数组对象，包含传入函数的所有参数(实参)。虽然 arguments 的主要用途是保存函数参数，但是它还有一个`callee`属性，这个属性是一个指针，指向拥有这个 arguments 对象的函数(也就是当前函数)。来看看这个例子:

```js
function factorial(number) {
  if (number === 1) {
    return number;
  } else {
    return number * factorial(number - 1);
  }
}
```

这是一个很简单的阶乘函数，用到了递归算法。这样的方法在定义函数的时候保证以后函数名不会发生变化的时候这样的写法是没有任何问题的。但问题是这个函数的执行于函数名`factorial`仅仅耦合在了一起。为了消除这样的耦合，可以向下面这样去使用 arguments.callee。

```js
function factorial(number) {
  if (number === 1) {
    return number;
  } else {
    return number * arguments.callee(number - 1);
  }
}
```

接下来在这样的调用中:

```js
const trueFactorial = factorial;
factorial = function() {
  return 0;
};
trueFactorial(5); // 120
factorial(); // 0
```

这样的调用中，trueFactorial 获得了 factorial 的赋值，**其实函数本质是对象，变量只是保存对于对象引用的指针。所以是在另一个位置（trueFactorial）获得了对于同一个对象的引用。同时再修改 factorial 变量让他指向另一个返回 0 的函数。**

此时如果向第一种方式的话 trueFactorial 计算阶乘那么就会出现问题，而使用了`arguments.callee`就会解除了耦合完美的解决了这个问题。
