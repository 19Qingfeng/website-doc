# EventLoop

## 浏览器中的EventLoop

```html

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <div id='app'></div>
  <script>
    setTimeout(() => {

      const promise = Promise.resolve(1)
      console.log('123')
      promise.then(res => {
        debugger
        document.getElementById('app').innerHTML = res
        debugger
      })
    }, 1000)
  </script>
</body>

</html>
```

两次debuuger就可以看出来了。

第一个dubugger中id为app的元素中还没有任何内容，第二个debugger中id为app的元素已经在页面上渲染为1了。

浏览器中的EventLoop图示就是：

![EventLoop](https://user-gold-cdn.xitu.io/2018/10/1/1662ff57ebe7a73f?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

## NodeJS中的EventLoop