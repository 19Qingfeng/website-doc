# Function 类型

## 函数内部属性

函数内部有两个特殊的属性。分别是 arguments 和 this。

::: tip
注意这里仅仅针对普通函数来说，箭头函数内部没有 arguments，以及箭头函数并不存在 this 而是指向它的外层 this 包裹对象。
:::

### arguments

### arguments.callee

> 指向当前函数。

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

## this

**this**引用的是函数内部的执行环境。

```js
window.color = "red";

const o = { color: "green" };

function sayColor() {
  alert(this.color);
}

sayColor(); // red
o.sayColor = sayColor;
o.sayColor(); // green
```

::: tip
需要注意的是，函数的名字仅仅是一个包含指针的变量而已。即便是在不同环境中进行执行，全局的 sayColor()函数与 o.sayColor()指向仍是同一个函数。

```js
const test = () => {
  console.log("test");
};

const test1 = test;

console.log(test1 === test, "test1"); // true
```

:::

### caller

函数的 caller 属性保存调用当前函数的函数的引用。(也就是哪里调用这个函数的引用)

可以配合`arguments.callee.caller`调用当前函数的调用函数从而结偶。

```js
function outer() {
  inner();
}

function inner() {
  console.log(arguments.callee.caller); // 打印outer函数的源代码
}

outer();
```

## 函数的属性

### length

函数的 length 属性表示希望接收命名参数的个数(形参)。

### prototype

对于 EcmaScript 的引用累心来说，prototype 是最有意义的属性。**这个属性是保存所有他们实例方法的真正所在**。换句话来说，比如 toString()等方法都是保存在 prototype 下，只不过是通过各自对象的实例访问罢了。

### apply,call,bind

每个函数都包含两个非继承而来的方法，apply 和 call。这两个方法用途都是在特定作用域下调用函数，实际上等于设置函数体内 this 对象的值。

- apply 接收两个参数，第一个为运行函数的作用域，另一个是参数数组。

- call 接收多个参数，第一个参数是运行函数的作用域，剩余参数就是传递给函数的其余参数。

- bind 方法，这个方法会创建一个新的函数的实例，其中 this 值会被绑定给传递给 bind 函数的值。

::: tip
调用 apply,call 会立即执行函数。而 bind 并不会，他会返回一个改变函数特定作用域下的一个新函数。
:::
