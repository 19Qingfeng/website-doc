# 压缩文件

::: tip
node 的 zlib 不能解压 zip 文件的
里面只是提供了压缩和解压算法而已
:::

所以关于文件压缩和解压我采用的是第三方库进行实现。
当然也可以选择使用调用控制台或使用二进制。

## 压缩

采用强大的`archiver`库。

### `new Archiver(type,options)`

type 压缩为文件的类型，options 压缩配置。
返回创建的压缩流。

::: details 点击查看代码

```js
// 设置压缩等级 创建压缩流
// 可设置zip，gz。。。格式
const archive = new Archiver("zip", {
  zlib: {
    level: 9, // 压缩等级
  },
});
```

:::

### new Archiver(type,options).pipe(output)

> 导入archive向出口zip中,output为出口文件路径。

创建的压缩文件流之后，将压缩文件导入目录中。

## archive.append()

调用archive.append()可以向流中追加文件.

## archive.finalize()

调用finalize方法 完成压缩。触发clone，end，finish事件

### 完整压缩文件Demo

``` js
// 压缩文件

const fs = require("fs");
const path = require("path");
// 第三方压缩库
const Archiver = require("archiver");

// 创建输出流文件
const output = fs.createWriteStream(path.join(__dirname, "/example.zip"));
// 设置压缩等级 创建压缩流
const archive = new Archiver("zip", {
  zlib: {
    level: 9, // 压缩等级
  },
});

// output是源生nodejs中的stream对象 所以事件/api之类都可以使用
output.on("pipe", (src) => {
  // console.log("pipe", src);
});

// 侦听所有要写入的存档数据
// 仅当涉及文件描述符时才会触发关闭事件
// output.on("close", () => {
//   console.log("close");
//   console.log("结束压缩", `${archive.pointer()}个字节`);
// });

output.on("finish", () => {
  // console.log("finish");
  // console.log("结束压缩", `${archive.pointer()}个字节`);
});

// 导入archive向出口zip中
archive.pipe(output);

const prefixPath = "./source";

const file1 = path.join(__dirname, prefixPath, "/file1.txt");
archive.append(fs.createReadStream(file1), { name: "file1.txt" });

// append a file from string
// 增加一个 file2文件 内容为 'string cheese!'
archive.append("string cheese!", { name: "file2.txt" });

// append a file from buffer
// 从buffer创建文件追加到压缩文件中
const buffer3 = Buffer.from("buff it!");
archive.append(buffer3, { name: "file3.txt" });

// 读取json文件追加到文件中
const jsonStream = fs.createReadStream(
  path.join(__dirname, prefixPath, "./file2.json")
);
archive.append(jsonStream, { name: "file2.json" });

// append a file
archive.file(path.join(__dirname, prefixPath, "./file1.txt"), {
  name: "file4.txt",
});

// append files from a sub-directory and naming it `new-subdir` within the archive
// 追加子目录中的文件夹并且将压缩文件中子目录文件命名为 `new-subdir`
archive.directory(path.join(__dirname, prefixPath, "subdir/"), "json-dir");

// append files from a sub-directory, putting its contents at the root of archive
// 追加子目录中的文件放到压缩文件顶级root文件中 (并不在子目录中了)
archive.directory(path.join(__dirname, prefixPath, "./topdir/"), false);

// append files from a glob pattern
// 从目录下进行全局文件匹配
archive.glob(path.join(__dirname, prefixPath, "topdir/*.txt"));

// finalize the archive (ie we are done appending files but streams have to finish yet)
// 'close', 'end' or 'finish' may be fired right after calling this method so register to them beforehand

// 调用finalize方法 完成压缩 触发clone，end，finish事件
archive.finalize();

```

