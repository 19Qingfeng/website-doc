# 获取图片尺寸

根据 src 加载图片,img.complete 判断图片是否已经缓存。

若已经缓存-直接获取宽高，未缓存需要等待 onload 结束获取 img.width/height/

之后根据最大尺寸进行等比例压缩返回图片的宽高。

::: tip
 注意返回使用 Promise 异步处理。
:::

```js
/**
 * @param {String} url 图片url
 * @param {number} max 最大尺寸
 * @returns {Promise<height,width>}
 * 根据URL获取图片尺寸并且等比例缩放尺寸
 */
export const getPictureSize = (url, max = 300) => {
  const isImg = /\.(gif|jpg|jpeg|png|GIF|JPG|PNG)$/.test(url);
  if (!isImg) {
    return Promise.resolve({ width: `${max}px`, height: `${max}px` });
  }
  const img = new Image();
  img.src = url;
  const compileSize = (width, height) => {
    if (width > max || height > max) {
      const scale = width > height ? width / max : height / max;
      return { width: width / scale, height: height / scale };
    }
    return { width, height };
  };
  return new Promise((resolve) => {
    if (img.complete) {
      const { width, height } = compileSize(img.width, img.height);
      resolve({ width: `${width}px`, height: `${height}px` });
    } else {
      img.onload = function() {
        const { width, height } = compileSize(img.width, img.height);
        resolve({ width: `${width}px`, height: `${height}px` });
      };
    }
  });
};
```
