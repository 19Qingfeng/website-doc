# 读取本地文件上传

主要应用于`electron`的场景。读取本地文件获得文件路径之后通过将文件上传到服务器。

```js
import fs from 'fs';
import { extname, basename } from 'path';
import axios from 'axios';

async function readPathToFile(path) {
  // 通过path获得文件buffer对象
  const buffer = await fs.promises.readFile(path);
  const typeList = {
    png: 'image/png',
    jpg: 'image/jpg',
    jpeg: 'image/jpeg',
    mp4: 'video/mp4',
  };
  const fileSuffix = extname(path).slice(1); // 后缀名
  const type = typeList[fileSuffix]; // 类型
  if (!type) return Promise.reject(`${path}，文件后缀名不正确。`);
  const fileName = basename(path); // 获得文件名
  const file = new File([buffer], fileName, { type });
  // formData上传
  const formData = new FormData();
  formData.append('file', file);
  axios({
    url: 'maisaike/v1/upload/photo',
    method: 'post',
    data: formData,
  });
}
```