# 使用

## Props

| name      |  type  |                        describe |
| --------- | :----: | ------------------------------: |
| data      | array  |                            下方 |
| copyRight | string | 底部 copyright,直接写入APP名称。 |

### data

| name  |  type  |                                      describe |
| ----- | :----: | --------------------------------------------: |
| text  | string |                                        内容。 |
| path  | array  | 跳转页面路由 Name。(存在该属性，点击直接跳转) |
| email | string |                  存在该属性点击直接吊起邮箱。 |

::: tip
props 中的 data。
:::

## Event

| event |                           params                            | describe |
| ----- | :---------------------------------------------------------: | -------: |
| click | ｜ 当前点击元素内容,存在 link 则跳转，存在 email 则吊起邮箱 |
