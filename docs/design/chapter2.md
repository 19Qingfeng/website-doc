# 工厂模式(重新总结 ing)

## 介绍

- 工厂模式其实就是将`new`操作单独封装起来。

- 当碰到频繁使用`new`时，就要考虑是否使用工厂模式。

```js
class Production {
  // xxx
}
function createProduction() {
  return new Production();
}
// 将类和创建者分离开来
const produciton = createProduction();
```

## 简单工程模式

```js
function User(name , age, career, work) {
    this.name = name
    this.age = age
    this.career = career
    this.work = work
}

// 工厂模式 简单工厂函数 Factory调用创建User
function Factory(name, age, career) {
    let work
    switch(career) {
        case 'coder':
            work =  ['写代码','写系分', '修Bug']
            break
        case 'product manager':
            work = ['订会议室', '写PRD', '催更']
            break
        case 'boss':
            work = ['喝茶', '看报', '见客户']
        case 'xxx':
            // 其它工种的职责分配
            ...

    return new User(name, age, career, work)
}

```

工厂模式其实就是**将创建对象的过程单独封装。**它很像我们去餐馆点菜：比如说点一份西红柿炒蛋，我们不用关心西红柿怎么切、怎么打鸡蛋这些菜品制作过程中的问题，我们只关心摆上桌那道菜。在工厂模式里，我传参这个过程就是点菜，工厂函数里面运转的逻辑就相当于炒菜的厨师和上桌的服务员做掉的那部分工作——这部分工作我们同样不用关心，我们只要能拿到工厂交付给我们的实例结果就行了。

总结一下：**工厂模式的目的，就是为了实现无脑传参，就是为了爽！**

比如说`jquery`中的`$()`其实他就是一种工厂模式。至于工厂模式对于`jq`的好处是不言而喻的，首先书写麻烦，直接使用`new jquery`对于链式操纵将会是噩梦般的存在。

其次一旦构造函数名字发生修改，那么每一处都得修改。但是使用工厂模式就不存在这个问题，只需修改提供给用户的工厂函数就可以了。

## 工厂模式:抽象工程

### 示例

其实主要就是围绕一个设计准则-**开放封闭原则**。

先来看一个示例:

大家知道一部智能手机的基本组成是操作系统（Operating System，我们下面缩写作 OS）和硬件（HardWare）组成。所以说如果我要开一个山寨手机工厂，那我这个工厂里必须是既准备好了操作系统，也准备好了硬件，才能实现手机的量产。考虑到操作系统和硬件这两样东西背后也存在不同的厂商，而我现在并不知道我下一个生产线到底具体想生产一台什么样的手机，我只知道手机必须有这两部分组成，所以我先来一个**抽象类来约定住这台手机的基本组成**：

```js
class MobilePhoneFactory {
  // 提供操作系统的接口
  createOS() {
    throw new Error('抽象工厂方法不允许直接调用，你需要将我重写！');
  }
  // 提供硬件的接口
  createHardWare() {
    throw new Error('抽象工厂方法不允许直接调用，你需要将我重写！');
  }
}
```

楼上这个类，除了约定手机流水线的通用能力之外，啥也不干。如果你尝试让它干点啥，比如 new 一个 MobilePhoneFactory 实例，并尝试调用它的实例方法。它还会给你报错，提醒你“我不是让你拿去 new 一个实例的，我就是个定规矩的”。在抽象工厂模式里，楼上这个类就是我们食物链顶端最大的 **Boss——AbstractFactory（抽象工厂）。**

抽象工厂不干活，具体工厂（ConcreteFactory）来干活！当我们明确了生产方案，明确某一条手机生产流水线具体要生产什么样的手机了之后，就可以化抽象为具体，比如我现在想要一个专门生产 Android 系统 + 高通硬件的手机的生产线，我给这类手机型号起名叫 FakeStar，那我就可以为 FakeStar 定制一个具体工厂：

```js
// 具体工厂继承自抽象工厂
class FakeStarFactory extends MobilePhoneFactory {
  createOS() {
    // 提供安卓系统实例
    return new AndroidOS();
  }
  createHardWare() {
    // 提供高通硬件实例
    return new QualcommHardWare();
  }
}
```

这里我们在提供安卓系统的时候，调用了两个构造函数：AndroidOS 和 QualcommHardWare，它们分别用于生成具体的操作系统和硬件实例。像这种被我们拿来用于 new 出具体对象的类，叫做具体产品类（ConcreteProduct）。具体产品类往往不会孤立存在，不同的具体产品类往往有着共同的功能，比如安卓系统类和苹果系统类，它们都是操作系统，都有着可以操控手机硬件系统这样一个最基本的功能。因此我们可以用一个**抽象产品（AbstractProduct）类**来声明这一类产品应该具有的基本功能（众：什么抽象产品？？？要这些玩意儿干啥？老夫写代码就是一把梭，为啥不让我老老实实一个一个写具体类？？？大家稍安勿躁，先把例子看完，下文会有解释）

```js
// 定义操作系统这类产品的抽象产品类
class OS {
  controlHardWare() {
    throw new Error('抽象产品方法不允许直接调用，你需要将我重写！');
  }
}

// 定义具体操作系统的具体产品类
class AndroidOS extends OS {
  controlHardWare() {
    console.log('我会用安卓的方式去操作硬件');
  }
}

class AppleOS extends OS {
  controlHardWare() {
    console.log('我会用🍎的方式去操作硬件');
  }
}
```

硬件类产品同理：

```js
// 定义手机硬件这类产品的抽象产品类
class HardWare {
  // 手机硬件的共性方法，这里提取了“根据命令运转”这个共性
  operateByOrder() {
    throw new Error('抽象产品方法不允许直接调用，你需要将我重写！');
  }
}

// 定义具体硬件的具体产品类
class QualcommHardWare extends HardWare {
  operateByOrder() {
    console.log('我会用高通的方式去运转');
  }
}

class MiWare extends HardWare {
  operateByOrder() {
    console.log('我会用小米的方式去运转');
  }
}
```

好了，如此一来，当我们需要生产一台 FakeStar 手机时，我们只需要这样做：

```js
// 这是我的手机
const myPhone = new FakeStarFactory();
// 让它拥有操作系统
const myOS = myPhone.createOS();
// 让它拥有硬件
const myHardWare = myPhone.createHardWare();
// 启动操作系统(输出‘我会用安卓的方式去操作硬件’)
myOS.controlHardWare();
// 唤醒硬件(输出‘我会用高通的方式去运转’)
myHardWare.operateByOrder();
```

关键的时刻来了——假如有一天，FakeStar 过气了，我们需要产出一款新机投入市场，这时候怎么办？我们是不是不需要对抽象工厂 MobilePhoneFactory 做任何修改，只需要拓展它的种类：

```js
class newStarFactory extends MobilePhoneFactory {
  createOS() {
    // 操作系统实现代码
  }
  createHardWare() {
    // 硬件实现代码
  }
}
```

这么个操作，对原有的系统不会造成任何潜在影响 所谓的 **“对拓展开放，对修改封闭”**就这么圆满实现了。前面我们之所以要实现抽象产品类，也是同样的道理。

## 总结

大家现在回头对比一下抽象工厂和简单工厂的思路，思考一下：它们之间有哪些异同？

它们的共同点，在于都**尝试去分离一个系统中变与不变的部分**。它们的不同在于场景的复杂度。在简单工厂的使用场景里，处理的对象是类，并且是一些非常好对付的类——它们的共性容易抽离，同时因为逻辑本身比较简单，故而不苛求代码可扩展性。抽象工厂本质上处理的其实也是类，但是是一帮非常棘手、繁杂的类，这些类中不仅能划分出门派，还能划分出等级，同时存在着千变万化的扩展可能性——这使得我们必须对共性作更特别的处理、使用抽象类去降低扩展的成本，同时需要对类的性质作划分，于是有了这样的四个关键角色：

- 抽象工厂（抽象类，它不能被用于生成具体实例）： 用于声明最终目标产品的共性。在一个系统里，抽象工厂可以有多个（大家可以想象我们的手机厂后来被一个更大的厂收购了，这个厂里除了手机抽象类，还有平板、游戏机抽象类等等），每一个抽象工厂对应的这一类的产品，被称为“产品族”。

- 具体工厂（用于生成产品族里的一个具体的产品）： 继承自抽象工厂、实现了抽象工厂里声明的那些方法，用于创建具体的产品的类。

- 抽象产品（抽象类，它不能被用于生成具体实例）： 上面我们看到，具体工厂里实现的接口，会依赖一些类，这些类对应到各种各样的具体的细粒度产品（比如操作系统、硬件等），这些具体产品类的共性各自抽离，便对应到了各自的抽象产品类。

- 具体产品（用于生成产品族里的一个具体的产品所依赖的更细粒度的产品）： 比如我们上文中具体的一种操作系统、或具体的一种硬件等。

抽象工厂模式的定义，是围绕**一个超级工厂创建其他工厂**。
