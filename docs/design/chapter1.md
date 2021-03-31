# 题目

## one

来看看这两个考察设计模式的题目:

- 打车时，可以打专车和快车。任何车都有车牌号和型号。

- 不同车的类型价格不同，快车每公里 1 元，专车每公里 2 元。

- 行程开始时候，显示车辆信息。

- 行程结束时候，显示打车金额(假定公里,5 公里)。

首先来分析分析题目

车可以抽象为一个类，具有车牌和型号。

其次，车辆可以拓展出两个子类分别为快车和专车。

快车和专车具有不同的价格，价格可以抽象为一个单独的类进行管理对应不同种类车的价格。

其次，行程也可以抽象成为一个类，他具有开始和结束两个方法，具有 car 属性和里程树。

```js
// 行程类
class Trip {
  constructor(car, range) {
    this.car = car;
    this.range = range;
  }
  startTrip() {
    console.log(this.car.number);
    console.log(this.car.name);
  }
  endTip() {
    console.log('本次花费了', this.range * this.car.price);
    return this.range * this.car.price;
  }
}
// 价格类
class Price {
  static fastCar() {
    return 1;
  }
  static specialCar() {
    return 2.5;
  }
}
// 汽车类
class Car {
  constructor(number, name) {
    this.number = number;
    this.name = name;
  }
}
// 快车类
class FastCar extends Car {
  constructor(number, name) {
    super(number, name);
    this.price = Price.fastCar();
  }
}
// 专车类
class SpecialCar extends Car {
  constructor(number, name) {
    super(number, name);
    this.price = Price.specialCar();
  }
}

// 创建对应车辆
const car = new FastCar('A10000', '特斯拉');
// 创建行程，行程需要里程和车辆
const trip = new Trip(car, 5);
// 行车开始和结束
trip.startTrip();
trip.endTip();
```

::: tip
每个类进行独立管理对应的职责，开放封闭原则-单一职责原则。
:::

## two

- 某停车场，分 3 层，每层 100 个车位。

- 每个车位都可以检测到车辆的驶入和离开。

- 车辆进入前，显示每层的空余车位数量。

- 车辆进入时，摄像头可以识别车辆的车牌号和时间。

- 车辆离开时，出口显示器显示车牌号和停车时长。

::: tip
总体思路，抽象出不同种类的类进行不同的职责:

1. Car 汽车类 拥有车牌号
2. Monitor 显示屏类 每个停车场拥有一个显示屏
3. Camera 监控类 每个停车场拥有一个监控
4. Space 层 每个停车场中的每一层
5. Floor 车位 每层中的每一个车位构成(类) 拥有状态 表示是否是空车位
6. Park 停车场 它由一层一层(类) 监控 显示屏 构成

:::

```js
class Car {
  constructor(number) {
    this.number = number;
  }
}

class Monitor {
  show(inDate, number) {
    const range = Date.now() - inDate;
    console.log('车牌号' + number + '停留时间---' + range);
    return {
      inDate,
      number,
    };
  }
}

class Camera {
  shot(car) {
    return {
      number: car.number,
      date: Date.now(),
    };
  }
}

class Space {
  constructor() {
    this.isEmpty = true;
  }
  static createSpace() {
    return new Space();
  }
  in() {
    this.isEmpty = false;
  }
  out() {
    this.isEmpty = true;
  }
}

class Floor {
  constructor(index, count) {
    this.index = index;
    this.spaceList = Array.from({ length: count }).map(() =>
      Space.createSpace()
    );
  }
  emptySpace() {
    return this.spaceList.filter((i) => {
      return i.isEmpty;
    }).length;
  }
}

class Park {
  constructor(floor) {
    this.floor = floor || [];
    this.camera = new Camera();
    this.monitor = new Monitor();
    this.cardList = {};
  }
  emptyPlace() {
    let number = 0;
    for (let i of this.floor) {
      number += i.emptySpace();
    }
    console.log('当前剩余车位' + number);
  }
  in(car) {
    // 显示空余车位
    this.emptyPlace();
    const { number, date } = this.camera.shot(car);
    // 处理进入第几层 随机
    const space = this.floor[0].spaceList[parseInt(Math.random() * 100) % 100];
    this.cardList[number] = {
      date,
      space,
    };
    console.log('车辆进入->' + number);
    space.in();
  }
  out(car) {
    // 获得进入时间
    const { date, space } = this.cardList[car.number];
    this.monitor.show(date, car.number);
    space.out(car);
    delete this.cardList[car.number];
  }
}

const park = new Park([
  new Floor(1, 100),
  new Floor(2, 100),
  new Floor(3, 100),
]);
const car = new Car(10000);
const car2 = new Car(20000);

park.in(car);
setTimeout(() => {
  park.out(car);
}, 200);

park.in(car2);

park.out(car2);
```
