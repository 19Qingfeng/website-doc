# 解压

zip 文件的解压使用了`compressing`库，其实 compressing 也可以压缩，有时间了研究。

::: tip 解压文件代码

```js
const fs = require("fs");
const path = require("path");
const compressing = require("compressing");

// uncompress a file
// compressing.tgz.uncompress('file/path/to/uncompress.tgz', 'path/to/destination/dir')
// .then(uncompressDone)
// .catch(handleError);

// uncompress a file buffer
// compressing.tgz.uncompress(buffer, 'path/to/destination/dir')
// .then(uncompressDone)
// .catch(handleError);

const handleError = (e) => {
  console.log(e, "出了问题了");
};

const uncompressDone = () => {
  console.log("文件解压成功");
};

const stream = fs.createReadStream(path.resolve(__dirname, "./example.zip"));
const output = path.resolve(__dirname, "./docwang");
// uncompress a stream
compressing.zip
  .uncompress(stream, output)
  .then(uncompressDone)
  .catch(handleError);
```

:::
