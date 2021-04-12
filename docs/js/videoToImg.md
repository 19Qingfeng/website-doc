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
export const getPictureByVideo = (file, fileName = '这是文件名称.png') => {
  const url = URL.createObjectURL(file);
  let video = document.createElement('video');
  video.controls = true;
  video.muted = true;
  // 开启自动播放
  video.autoplay = true;
  video.src = url;
  return new Promise((resolve) => {
    video.oncanplay = () => {
      const height = video.videoHeight;
      const width = video.videoWidth;
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      canvas
        .getContext('2d')
        .drawImage(video, 0, 0, canvas.width, canvas.height);
      const base64Url = canvas.toDataURL('image/png', 1);
      const file = dataURLtoFile(base64Url, fileName);
      resolve(file);
      video = null;
      canvas.remove();
    };
  });
};
```

## 生成缩略图写入文件中

主要应用场景在`electron`中，因为既不能想服务器那样安装环境。同时也要生成文件放入本地(直接本地同步 ⬆s3)

主要思路还是生成 base64，然后直接通过 base64 的格式直接写入文件。

```js
function decodeBase64Image(dataString) {
  return dataString.replace(/^data:image\/png;base64,/, '');
}

// 视频 获得第一帧缩略图
// 生成buffer对象 提供给fs写入文件中 注意去除元信息 base64的前缀
export const getPictureByVideo = (url) => {
  // const url = URL.createObjectURL(file);
  let video = document.createElement('video');
  video.controls = true;
  video.muted = true;
  // 开启自动播放
  video.autoplay = true;
  video.src = 'local-resource://' + url;
  return new Promise((resolve) => {
    video.oncanplay = async () => {
      const height = video.videoHeight;
      const width = video.videoWidth;
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      canvas
        .getContext('2d')
        .drawImage(video, 0, 0, canvas.width, canvas.height);
      const base64Url = decodeBase64Image(canvas.toDataURL('image/png', 1));
      const imageBuffer = Buffer.fr$$om(base64Url, 'base64');
      resolve(imageBuffer);
      video = null;
      canvas.remove();
    };
  });
};

// 使用
const thumbBuffer = await getPictureByVideo(videoUrl);
await fs.promises.writeFile(path.join(dirPath, 'thumb13_.png'), thumbBuffer);
```

## 图片压缩算法

等我总结，一样的道理。都是转 canvas 压缩。1

## 压缩图片(尺寸以及图片)

### 图片转 canvas 压缩

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>canvas图片压缩算法</title>
  </head>

  <body>
    <!-- 图片上传到服务端之前进行图片压缩 -->
    <input type="file" id="file" />
    <script>
      const ACCEPT = ['image/jpg', 'image/png', 'image/jpeg'];
      const upload = document.getElementById('file');
      const MAXSIZE = 1024 * 1024;
      const MAXTIP = '1MB';

      function convertImageToBase64(file, callback) {
        // 创建一个FileReader对象，它允许Web应用程序异步读取存储在计算机上的文件
        // 也就是file对象
        let reader = new FileReader();
        // 添加一个load事件，load会在加载完毕之后进行触发（也就是readAsDataURL读取完毕后触发）
        reader.addEventListener('load', function(e) {
          const base64Image = e.target.result; // 相当于reader.result 获取文件的Base64
          // 回收内存
          callback && callback(base64Image); // 调用callback压缩
          reader = null;
        });

        // readAsDataURL方法读取指定的file或blob对象
        reader.readAsDataURL(file);
      }
      // 压缩算法函数
      /*
        1.首先拿到了base64的图片字符串
        2.创建一个image对象，获得原始图片的宽度和高度
        3.对原始图片的宽度和高度进行压缩达到符合条件（第一次压缩-从尺寸压缩）
        4.调用canvasAPI进行绘制新的图片
        5.绘制成功之后调用canvasAPI进行绘制（canvasAPI支持压缩-二次压缩-从质量压缩）
        6.得到压缩后的base64
         */
      function compress(base64Image, callback) {
        let maxW = 1024;
        let maxH = 1024;
        const image = new Image(); // 创建image对象 相当于创建a标签
        image.addEventListener('load', function(e) {
          // image加载完成后就会触发 也就是src加载后
          let radio; // 压缩比例
          let needCompress = false; // 是否需要压缩
          // image.naturalWidth/naturalHeight H5新属性 获取源生图片的宽高
          if (image.naturalWidth > maxW) {
            needCompress = true;
            // 获得压缩宽高过后的大小（保证等比例缩放）
            radio = image.naturalWidth / maxW;
            maxH = image.naturalHeight / radio;
          }
          // 同样宽度压缩之后 还要看压缩后的高度是否满足 不满足则继续压缩宽高
          if (image.naturalHeight > maxH) {
            needCompress = true;
            radio = image.naturalHeight / maxH;
            maxW = image.naturalWidth / radio;
          }
          // 不需要压缩
          if (!needCompress) {
            maxW = image.naturalWidth;
            maxH = image.naturalHeight;
          }
          // 第一次压缩完成
          // 接下来使用canvas进行质量压缩
          const canvas = document.createElement('canvas');
          canvas.height = maxH;
          canvas.width = maxW;
          canvas.setAttribute('id', '_compress_');
          // visibility hidden 需要创建的canvas隐藏 而不是不渲染DOM
          canvas.style.visibility = 'hidden';
          document.body.appendChild(canvas);

          const ctx = canvas.getContext('2d');
          // canvas.clearRect() 方法清空给定矩形内的指定像素。(x1，y1，width,height)
          // 防止重新上传覆盖
          ctx.clearRect(0, 0, maxW, maxH);
          // canvas.drawImage() 方法在画布(canvas)上绘制图像、画布或视频。
          // 传入 视频/图片对象 起始点x 起始点y 绘制宽 绘制高
          ctx.drawImage(image, 0, 0, maxW, maxH);
          // 接来下就是压缩canvas 通过API将canvas输出成base64格式

          /**
           * @HTMLCanvasElement.toDataURL(type, encoderOptions);  注意调用这是 Canvas的Dom对象而非ctx
           * @param {String} 可以使用 type 参数其类型， type 图片格式，默认为image/png,图片的分辨率为96dpi。
           * @param {Number}  encoderOptions 可选 指定图片格式是image/jpeg或image/webp的情况下，可以从0到1区间内进行选择图片的质量（1原质量）。如果超出取值方位，使用默认0.92
           * @returns {dataURL}  方法返回一个包含图片展示的 data URI （Base64）
           */
          console.log(base64Image, 'base64Image');
          /* 注意这里是Canvas DOM 节点 而非canvas对象*/
          const compressImage = canvas.toDataURL('image/jpeg', 0.8); // 通常压缩是0.8-0.9
          callback && callback(compressImage); // 压缩完成进行后台传输逻辑
          // 压缩完的图片就已经保存在内存(compressImage)中了
          // 接下来移除canvas元素 调用DOM.remove()
          canvas.remove();

          // 需要的上传预览的话可以单独建一个new image进行预览
          const _image = new Image();
          _image.src = compressImage;
          document.body.appendChild(_image);
          //计算压缩比 使用src(base)的长度就可以对比了
          console.log(`压缩比${image.src.length / _iamge.src.length}`);
        });
        image.src = base64Image;
        // document.body.appendChild(image) // 挂载
      }
      // 绑定上传图片的change事件
      // mock上传后台逻辑
      function uploadToServer(compressImage) {
        console.log('上传后台');
      }
      upload.addEventListener('change', function(e) {
        // 获取上传的文件 解构Arry 拿到第一个元素
        const [file] = e.target.files;
        if (!file) {
          return;
        }
        const { type: fileType, size: fileSize } = file;
        // 上传校验逻辑
        if (!ACCEPT.includes(fileType)) {
          alert(`不支持[${fileType}]类型`);
          upload.value = '';
          return;
        }
        if (fileSize > MAXSIZE) {
          alert(`文件超${MAXTIP}`);
          upload.value = '';
          return;
        }
        // 压缩图片 需要转成base64进行压缩
        convertImageToBase64(file, (base64Image) => {
          compress(base64Image, uploadToServer);
        });
      });
    </script>
  </body>
</html>
```

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
