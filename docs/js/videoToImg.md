# 上传视频生成缩略图

## 上传视频生成缩略图

### 总体思路

1.  `URL.createObjectURL`

`URL.createObjectURL()` 静态方法会创建一个 DOMString，其中包含一个表示参数中给出的对象的 URL。这个 URL 的生命周期和创建它的窗口中的 document 绑定。这个新的 URL 对象表示指定的 File 对象或 Blob 对象。

本地上传视频时生成 file 对象的 url。

2. 创建 video 标签复制 url

这一步千万**注意**要播放时的 video 才可以使用 canvas 的 drawImage 绘上。否则没有播放(初始状态绘制是一片空白)。

3. 创建 canvas 标签

使用 canvas 的`drawImage()`方法绘制 video 中的视频到 canvas 中,之后使用`canvas.toDataURL()`转化成 base64 形式。此时直接给 img 标签 src 赋值就可以直接展示了。

4. `new Uint8Array`和`new File`对象

调用这两个 API 将 base64 格式的转化成 file 对象。

5.`new FormData()`

之后通过`base64`转化的`file`对象结合`formData.append('file',file)`发送请求，结合`Content-Type: multipart/form-data;`就可以将生成的缩略图(和`input type='file'`生成的一致)，都是`file`类型。上传到服务端去了。

6. 释放变量

不要忘记使用创建的`video`对象，以及`canvas.remove()`移除创建的 canvas。

```js
// 视频 获得第一帧缩略图
export const getPictureByVideo = (
  file,
  fileName = "这是文件名称.png",
  width = 100,
  height = 100
) => {
  // 创建file对象
  const url = URL.createObjectURL(file);
  let video = document.createElement("video");
  video.controls = true;
  video.src = url;
  video.muted = true;
  // 开启自动播放
  video.autoplay = true;
  return new Promise((resolve) => {
    // 监听可以播放事件 当事件触发因为设置了autoplay会自动播放的 所以可以截取到
    video.oncanplay = () => {
      const canvas = document.createElement("canvas"); //创建一个canvas
      canvas.width = width; //canvas的宽
      canvas.height = height; //canvas的高
      canvas
        .getContext("2d")
        .drawImage(video, 0, 0, canvas.width, canvas.height);
      const base64Url = canvas.toDataURL("image/png"); // 图片的base64编码
      // dataURLtoFile base64 转file对象 然后使用formData上传
      const file = dataURLtoFile(base64Url, fileName);
      resolve(file);
      video = null;
      canvas.remove();
    };
  });
};

// base64转file
export function dataURLtoFile(dataurl, filename) {
  var arr = dataurl.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
}
```


## 图片压缩算法


等我总结，一样的道理。都是转canvas压缩。
