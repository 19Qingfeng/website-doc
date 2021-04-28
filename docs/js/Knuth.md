# Knuth-Shuffle 底牌算法

## 1

### 函数

经典从数组`length-1`下标到第`0`个下标。

比如一个`Array [1,2,3,4,5,6]`

```js
function shuffer(array) {
  const arr = array.slice();
  for (let i = array.length - 1; i >= 0; i--) {
    const selectedIndex = Math.floor(Math.random() * (i + 1));
    // 交换
    const tem = arr[selectedIndex];
    arr[selectedIndex] = arr[i];
    arr[i] = tem;
  }
  return arr;
}
```

### 原理

`[1,2,3,4,5,6]`,从数组末尾元素`6`开始，最后一个位置选中任意一个元素的概率是`1/6`。未选中的概率是`5/6`。

所以确定了`1/6`的概率选中之后，选中了最后一个元素的位置。

之后循环到达索引`4`,此时位置`4`选中元素的概率是`1/5`，而第一次未选中元素的概率是`5/6`。所以位置`4`选中剩余元素的概率也是`1/5 * 5/6 =1/6`。和第一个相同。

同理往下一个元素去推`5/6 * 4/5 * 4/1` -> `1/6` ...
