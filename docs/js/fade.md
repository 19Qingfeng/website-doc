# JS 实现 JQ-fadeIn,fadeout

JS 实现 Jquery，fadeIn，fadeOut 元素动画浅入浅出效果。

> 核心思想通过 setInterval 配合 opacity 进行控制元素 css 属性从而达到动画淡入淡出效果。

## fadeIn

```js
const fadeIn = (el, time) => {
  el.style.display = "block";
  el.style.opacity = 0;
  const timer = setInterval(() => {
    if (el.style.opacity < 1) {
      Number(el.style.opacity) += 0.1;
    } else {
      clearInterval(timer);
      el.style.display = "block";
    }
  }, time * 1000);
  return el
};
```

## fadeOut


``` js

const fadeOut = (el,time) => {
  el.style.display = 'block'
  el.style.opacity = 1;
  const timer = setInterval(() => {
    if(el.style.opacity > 0) {
      el.style.opacity = el.style.opacity - 0.1
    }else {
      clearInterval(timer)
      el.style.opacity = 0
      el.style.display = 'none'
    }
  },time * 1000)
  return el
}

```
