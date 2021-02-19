# 对象优化

来看看对于`js`中对象的优化。

## 以相同顺序初始化对象成员，避免隐藏类的调整

结论：**尽量保证对象初始化的顺序保持一致，这样才可以达到最优的效果。**

> 当我们声明一些变量的时，对于编译器而言在解析的时候它会尝试给声明的对象赋一个类型，解析时候会基于赋给的`Hide Class`隐藏类型去做优化。

```js
const car1 = { color: "red" }; // hc1
car1.seats = 4; // hc2
const car2 = { seats: 4 }; // hc3
car2.color = "red"; // hc4
```

首先声明 car1，附带创建隐藏类 hc0，当为 car 追加属性的时候他会再次创建一个 hc1.
当声明 car2 的时，声明的 car2 无法复用 car1 的 hide class，只能再次声明一个新的 hc3.
当给 car2 复制 car2 的时候又再次声明了 hc4.

::: tip
简单理解，`Hide Class`内部对于声明的顺序会有要求，实际上隐藏类型底层会有一个描述的数组去存储，这个数组会去强调描述的顺序/索引。所以这就造成了`car1`和`car2`并不能复用之前声明的  隐藏类。
:::

当然这样来说的话，`car2`无法复用`car1`的隐藏类型，就会降低效率。当然正确的做法还是以为相同顺序去初始化对象成员这样就可以达到隐藏类的复用。比如 ES6 中对于`class`的描述，这时声明是同一顺序就会起到复用的效果。

```js
class car {
  constructor(l, w) {
    this.l = l;
    this.w = w;
  }
}
const car1 = new Car(100, 200);
const car2 = new Car(100, 200);
```

这样就是以相同顺序去声明初始化对象，就可以达到`Hide Class`的复用从而达到加速的效果。

## 实例后尽量避免添加新属性

在实例化对象后，尽量不要在进行属性的额外添加了。比如

```js
const car1 = { color: "red" }; // In-Object 属性
car1.seats = 4; // Normal/Fast 属性
```

- 初始化时候，`In-Object`属性，是对象创建时就带有的属性。

- 追加的属性,`Normal/Fast`属性，存储在`property store`这个地方，它是需要通过描述数组间接查找，这样当然就没有直接从对象创建时查找快了，需要间接的通过描述数组在存储中找到对应的位置然后在取出来。

## 尽量使用 Array 代替 Array-Like

`V8`明确告知，即使将`Array-Like`转化为`Array`在进行数组操作都会比直接使用`Array Like`对象调用数组的 API 更加高效。

因为 V8 底层对于数组进行了极大的优化。

```js
// 类数组对象
Array.property.forEach.call(arrObject, (value, index) => {
  // 不如在真实数组上操作更加高效
  console.log(value, index);
});
// 转为数字 更加高效
const arr = Array.property.slice.call(arrObject, 0);
arr.forEach(() => {});
```

## 避免访问越界元素

```js
const array = [1,2,3]
for(let i = 0,i<array.length;i++) {
  console.log(array[i]) // 访问了越界元素
}
```

访问越界元素其实对于性能特效消耗，**因为数字本身就是一个对象，当本身(数组)找不到这个属性时，它会沿着圆形链继续向上查找**，所以这样就会造成额外的开销。

> 当访问越界元素性能差距会相差到 6 倍左右。

## 避免元素类型转换

```js
const array = [1, 2, 3]; // PACKED_SMI_ELEMENTS
array.push(4.4); // 此时数组就不是PACKED_SMI_ELEMENT类型了
// 因为推进了4.4 更改了数字类型，就会变成 PACKED_DOUBLE_ELEMENTS
```

所谓的`Packed`表示数组中并没有`undefined`/`null`这些。
`SMI`代表`Small Int`整型数组。

::: tip
虽然在我们这里并没有整形，float 区分，但是编译器内部会对这些类型进行处理以及根据对应类型进行优化。
:::

![截屏2021-02-08 下午12.18.32.png](https://i.loli.net/2021/02/08/x2RHAYLwBGEq9O4.png)

> 一层一层的降级过程。`holey`表示有洞的也就是表示有 undefined 或者 null，比如删除数组的时候。

看看这张图，**当类型越具体的时候编译器对于代码的编译阶段优化就会做的精细的优化，变得越通用的时候优化就会越来越普通。**

> 这样来看，对于数组本身是 int 组成所以对于 int 进行优化编译，当推入 float 类型的时候此时数组就变成了 int+float 了。
