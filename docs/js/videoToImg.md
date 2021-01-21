# 上传视频生成缩略图，上传图片生成缩略图

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
export const getPictureByVideo = (file, fileName = "这是文件名称.png") => {
  const url = URL.createObjectURL(file);
  let video = document.createElement("video");
  video.controls = true;
  video.muted = true;
  // 开启自动播放
  video.autoplay = true;
  video.src = url;
  return new Promise((resolve) => {
    video.oncanplay = () => {
      const height = video.videoHeight;
      const width = video.videoWidth;
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      canvas
        .getContext("2d")
        .drawImage(video, 0, 0, canvas.width, canvas.height);
      const base64Url = canvas.toDataURL("image/png", 1);
      const file = dataURLtoFile(base64Url, fileName);
      resolve(file);
      video = null;
      canvas.remove();
    };
  });
};
```

## 图片压缩算法

等我总结，一样的道理。都是转 canvas 压缩。

## 压缩图片(尺寸以及图片)

### 图片转 canvas 压缩

### 使用 fileReader 显示缩略图

https://developer.mozilla.org/zh-CN/docs/Web/API/File/Using_files_from_web_applications#Example.3A_Using_object_URLs_to_display_images

### 仅仅缩小尺寸(单纯压缩尺寸)

```js
/**
 * @param {String} url 图片url
 * @param {number} max 最大尺寸
 * @returns {Promise<height,width>}
 * 根据URL获取图片尺寸并且等比例缩放尺寸
 */
const getPictureSize = (url: string, max = 10000): Promise<any> => {
  const isImg = /\.(gif|jpg|jpeg|png|GIF|JPG|PNG|webp)$/.test(url);
  if (!isImg) {
    return Promise.resolve({ width: `${max}px`, height: `${max}px` });
  }
  const img = new Image();
  img.src = url;
  const compileSize = (width: number, height: number) => {
    if (width > max || height > max) {
      // 压缩尺寸
      const scale = width > height ? width / max : height / max;
      // return { width: width / scale, height: height / scale };
      width = width / scale;
      height = height / scale;
      compileSize(width, height);
    }
    return { width, height };
  };
  return new Promise((resolve) => {
    if (img.complete) {
      const { width, height } = compileSize(img.width, img.height);
      resolve({ width, height });
    } else {
      img.onload = function() {
        const { width, height } = compileSize(img.width, img.height);
        resolve({ width, height });
      };
    }
  });
};
```
