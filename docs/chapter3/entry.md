# 使用

## Props && Event

### Props


| name        |      type      | describe  |
| ------------- |:-------------:| -----:|
| data     | Object | 传入的内容(见下方) |
| phoneVerticalHeight,phoneHorizaontalHeight      | 横/竖向手机 card 高度，默认大小，可手动定义。|   string |
|  phoneVerticalWidth,phoneHorizaontalWidth | 手机横竖屏宽度，手机横屏宽度。      |    $1 |
| pcHeight,padHeight | Pc card 高度,Pad card 高度      |    $1 |
| phoneVerticalWidth,phoneHorizaontalWidth | 手机横/竖竖屏宽度。     |    $1 |
| padWidth | pad宽度。     |    $1 |
| phoneVertIconSize，phoneHoriIconSize | 手机横/竖屏icon大小(不影响svg，仅控制icon)     |    $1 |
| padIconSIze,pcIconSize | pad，pc 图标大小。仅仅影响 icon 不影响 svg。     |    $1 |
| titleFontBg，bodyFontBg | 标题文字渐变色，body 文字渐变色。     |    $1 |




### Event
| name     | params     | describe  |
| ------------- |:-------------:| -----:|
| click      |  data    | 点击卡片触发 click 事件，接受参数为传入的当前 data。  |

::: warning
如果存在data中的link属性，那么会进行下载 link。
:::

#### data

::: danger
Data is a object,includes some keys:
:::


| name        | describe           | Cool  |
| ------------- |:-------------:| -----:|
| title     | 顶部文字内容 | $1600 |
| body      | 底部文字内容|   $12 |
| svg | 需要 svg 的图片(iconfont)。      |    $1 |
| icon | 字体(iconfont)      |    $1 |

::: tip
如果存在 icon 属性则会忽略 svg 属性。
:::