# 设计模式

> 红宝书更新ing

## 工厂模式

```js
function createPerson(name, age, job) {
  const person = Object.create(null);
  person.name = name;
  person.age = age;
  person.job = job;
  person.sayHello = () => {
    console.log("say Hello");
  };
  return person;
}

createPerson("wanghaoyu", 23, "coder");
```

函数`createPerson`根据接收的参数构建一个包含所有必要信息的 person 对象，可以很多次调用这个函数。而每次他都会返回一个包含三个属性一个方法的对象，这就是工厂模式。

工厂模式虽然解决了创建多个相似对象的问题但是却没有解决对象识别的问题，(如何知道一个对象的类型)。

## 构造函数模式

```js
function CreatePerson(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = () => {
    alert(this.name);
  };
}

const person = new CreatePerson("wang.haoyu", 23, "Software Engineer");
```

注意到构造函数模式和工厂模式存在的不同:

- 没有显示的创建对象。
- 直接将属性赋值给了 this。
- 没有 return 语句。

调用`new`操作符创建一个对象其实经历了以下几个步骤:

- 创建了一个新的对象
- 将构造函数的作用域赋值给新对象。(这一步 this 就指向了新的对象)
- 执行构造函数中的代码。(为新对象添加属性)
- 返回新对象

```js
person.constructor === CreatePerson; // true
```

对象的 constructor 起初是用来表示对象的类型的，对象检测类型，其实还是`instance of`比较靠谱一些。

```js
person instanceof Object; // true
person instanceof CreatePerson; // true
```

:::
构造函数和普通函数唯一的区别就是调用方式不同，构造函数使用`new`关键字，而普通函数则直接调用。
:::

构造函数模式虽然好用但是并不代表它没有缺点，构造函数的主要问题就是每个方法都要在每个实例上重新创建一次。对于一些公用方法其实完全可以使用另一个种模式进行解决。

## 原型模式

我们创建的每一个函数都有`prototype`属性，这个属性是一个指针指向一个对象，而这个对象的用途就是包含可以由特定类型的所有实例共享的属性和方法。

```js
function Person() {}
Person.prototype.name = "wang.haoyu";
Person.prototype.age = 23;
Person.prototype.sayName = () => alert(this.name);
```

上边原型模式的方式来说，创建任何新对象的属性和方法是所有对象共享的。(原型继承)

### 理解原型对象

默认情况下，**所有原型对象都会自动获得一个`constructor`(构造函数)属性，这个属性是一个指向`prototype`属性所在函数的指针。**

```js
// 定义一个构造函数之后，原型队形默认只会取得`constructor`属性，它也是在原型上所以可以被实例共享。
function Person() {}
const person = new Person();

// 其实就是因为继承的原因 实际访问的是person.prototype.constructor
console.log(person.constructor); // [Function:Person]
```

_创建自定义的构造函数之后，其原型对象只会取得`constructor`属性，至于其他方法都是从 Object 继承而来的。当调用构造函数创建了新实例后，该实例的内部将包含一个指针(内部属性)，指向构造函数的原型对象_，也就是

```js
function Person() {}
const person = new Person();
person.__proto__ === Person.prototype; // true
```

**不过需要明确的一点是，关于子类和父类的链接是存在与实例和构造函数的原型对象之间，而不是存在与实例与构造函数之间**。

#### Object.getPrototypeOf()

> `Object.getPrototypeOf(obj)`访问 obj 的原型对象。(访问实例对象的**proto**属性)

![截屏2021-01-17 下午10.21.18.png](https://i.loli.net/2021/01/17/PkCELr2RQ4KcHDF.png)

ES5 中新增加了一个方法，`Object.getPrototypeOf()`这个方法返回\[\[Prototype\]\]的值。

```js
Object.getPrototypeOf(person1) === Person.prototype; // true
Object.getPrototypeOf(person1).name; // 'wang.haoyu'
```

1. 当代码读取某个对象的属性时，都会执行一次搜索，目标是具有给定名字的属性。

2. 首先从实例本身属性开始，如果找到则返回。

3. 如果没有找到，那么会进而去实例的原型对象上去查找(**proto**，也就是实例的构造函数的 prototype,Person.prototype)上去查找，找到则返回。

4. 如果仍然没有找到则会继续此步骤向上查找，(Person.prototype.**proto**)...

这正是多个实例对象共享原型锁保存的属性和方法的基本原理。
::: tip
之前说过，原型最初只包含`constructor`属性，而该属性也是共享的，因此可以通过对象实例访问。
:::

::: warning
如果在实例中添加一个属性，而该属性与实例原型中的一个属性同名，那么如果在实例中创建这个属性(方法)则会屏蔽原型中的那个属性(方法)
:::

当为对象添加一个属性时，这个属性会**屏蔽**原型对象中保存的同名属性，换句话说添加这个属性只会阻止在该实例上对于这个属性原型上的访问但并不会修改原型上的属性。

即使将这个实例上的属性设置为 null，也只会在实例上设置这个属性，而不会恢复其指向原型的链接。
**不过，使用`delete`属性操作符可以完全删除实例属性，从而可以重新访问原型上的属性**。

#### hasOwnProperty()

`Object.hasOwnProperty()`方法可以检测一个属性是存在与实例中还是存在与原型中。

这个方法(不用忘记实例中的这个方法是从 Object 继承而来的)，只在给定属性存在与对象实例的时候才会返回 true。

```js
function Person() {}
Person.prototype.name === "wanghaoyu";
const person = new Person();
person.age = 23;
person.hasOwnProperty(name); // false name是原型对象上的属性
person.hasOwnProperty(age); // true age是实例对象上的属性
```

#### in 操作符

两种方式使用`in`操作符，一种是单独使用一种是`for in`中。

`in`操作符会在通过对象能够访问给定属性时候返回`true`(包括检测对象原型上的属性).

`for in`操作符返回的是所有能够通过对象访问的，可枚举的属性，其中既包括存在实例的属性也包括存在原型上的属性。

> 所以`for in`可以访问到对象上所有的实例属性和原型属性和 in 操作符一致。
> 区别是`in`可以检测自身属性上配置为不可枚举的属性，而`for in`对于自身属性(非原型上的属性)当不可枚举时检测不到。

::: warning for in 和in操作符还是有一定的区别的
对于原型上即便配置为不可枚举的属性，单独通过`in`是可以检测到的，也就是`for in`
:::

::: tip 通过`in`操作符和`hasOwnProperty()`方法可以检测属性究竟是存在自身还是原型上

```js
function hasPrototypeProperty(key, obj) {
  return key in obj && !obj.hasOwnProperty(key);
}
```

:::


+ for in 

+ Object.keys

+ Reflect.onwKeys()

+ Object.getOwnPropertyNames()