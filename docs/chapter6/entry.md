# 使用

## props

### props

| props       | type  | default  | describe       |
| ----------- | ------ | ---------- | ---------- |
| data        | Array  |  [] | 轮播图数据 |
| innerBorder | Boolean  | true | 是否需要内部框(开启后borderStyle才生效) | 
| borderStyle | Object | {borderRadius: '10px',: 'rgba(0,0,0,.2)'} | 内部框样式 |
| duration    | Number |  1 | 轮播时间,秒   |

#### data

幻灯片数据

```
[
        require("../assets/image/pc/car.png"),
        require("../assets/image/pc/gift.png"),
        require("../assets/image/pc/list.png"),
        require("../assets/image/pc/room.png"),
        require("../assets/image/pc/talking.png"),
],
```

#### borderStyle

内边框圆角属性，当需要手机二重边框的时候。外层包裹边框时，控制轮播图内边框的大小和颜色配置。

| props       | type  | default  | describe       |
| ----------- | ------ | ---------- | ---------- |
| outerBorderRadius        | String  |  10px | 外边框圆角宽度 |
| outerBorderWidth | String  | 10px | 外边框宽度 | 
| outerBorderStyle | String  | solid | 外边框样式 | 
| innerBorderRadius | String  | 10px | 内边框宽度 | 
| borderColor | String  | rgba(0,0,0,.2) | 边框颜色 | 


```
outerBorderRadius: '10px', // 外边框圆角宽度
outerBorderWidth: '10px', // 外边框宽度
outerBorderStyle: 'solid', // 外边框样式
innerBorderRadius: '10px', // 内边框宽度
borderColor: 'rgba(0,0,0,.2)' // 边框颜色
```

##### 参照样式
黑色部分为双重边框。
![截屏2020-12-19 下午8.19.51.png](https://i.loli.net/2020/12/19/6kwfhzTJcs4SnVa.png)

