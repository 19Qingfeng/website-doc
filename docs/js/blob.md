# blob & arrayBuffer & buffer

## blob/arrayBuffer

[ArrayBuffer-MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)

[Blob-MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Blob)

[URL.createObjectURL()](https://developer.mozilla.org/zh-CN/docs/Web/API/URL/createObjectURL)

[FileReader](https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader)

最早是数据库直接用 Blob 来存储二进制数据对象，这样就不用关注存储数据的格式了。在 web 领域，Blob 对象表示一个只读原始数据的类文件对象，虽然是二进制原始数据但是类似文件的对象，因此可以像操作文件对象一样操作 Blob 对象。

> const aBlob = new Blob( array, options );通过构造函数可以将`blob`转化为`arrayBuffer`。

> array 是一个由 ArrayBuffer, ArrayBufferView, Blob, DOMString 等对象构成的 **Array** ，或者其他类似对象的混合体，它将会被放进 Blob。DOMStrings 会被编码为 UTF-8。

ArrayBuffer 对象用来表示通用的、固定长度的原始二进制数据缓冲区。我们可以通过 new ArrayBuffer(length)来获得一片连续的内存空间，它不能直接读写，但可根据需要将其传递到 TypedArray 视图或 DataView 对象来解释原始缓冲区。实际上视图只是给你提供了一个某种类型的读写接口，让你可以操作 ArrayBuffer 里的数据。TypedArray 需指定一个数组类型来保证数组成员都是同一个数据类型，而 DataView 数组成员可以是不同的数据类型。

> 通过`FileReader`对象可以将`ArrayBuffer`转为`blob`。

Blob 与 ArrayBuffer 的区别是，除了原始字节以外它还提供了 mime type 作为元数据，Blob 和 ArrayBuffer 之间可以进行转换。

> File 对象其实继承自 Blob 对象，并提供了提供了 name ， lastModifiedDate， size ，type 等基础元数据。

创建 Blob 对象并转换成 ArrayBuffer：

```JS
//创建一个以二进制数据存储的html文件
const text = "<div>hello world</div>";
const blob = new Blob([text], { type: "text/html" }); // Blob {size: 22, type: "text/html"}
//以文本读取
const textReader = new FileReader();
textReader.readAsText(blob);
textReader.onload = function() {
  console.log(textReader.result); // <div>hello world</div>
};
//以ArrayBuffer形式读取
const bufReader = new FileReader();
bufReader.readAsArrayBuffer(blob);
bufReader.onload = function() {
  console.log(new Uint8Array(bufReader.result)); // Uint8Array(22) [60, 100, 105, 118, 62, 104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100, 60, 47, 100, 105, 118, 62]
};
```

创建一个相同数据的 ArrayBuffer，并转换成 Blob：

```JS
//我们直接创建一个Uint8Array并填入上面的数据
const u8Buf = new Uint8Array([60, 100, 105, 118, 62, 104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100, 60, 47, 100, 105, 118, 62]);
const u8Blob = new Blob([u8Buf], { type: "text/html" }); // Blob {size: 22, type: "text/html"}
const textReader = new FileReader();

textReader.readAsText(u8Blob);
textReader.onload = function() {
  console.log(textReader.result); // 同样得到div>hello world</div>
};
```

blob 与 ArrayBuffer 的区别在于，blob 用于操作二进制文件，而 ArrayBuffer 用于操作内存

## URL.createObjectURL()

video 标签，audio 标签还是 img 标签的 src 属性，不管是相对路径，绝对路径，或者一个网络地址，归根结底都是指向一个文件资源的地址。既然我们知道了 Blob 其实是一个可以当作文件用的二进制数据，那么只要我们可以生成一个指向 Blob 的地址，是不是就可以用在这些标签的 src 属性上，答案肯定是可以的，这里我们要用到的就是`URL.createObjectURL()`。

```js
const objectURL = URL.createObjectURL(object); //blob:http://localhost:1234/abcedfgh-1234-1234-1234-abcdefghijkl
```

复制代码这里的 object 参数是用于创建 URL 的 File 对象、Blob 对象或者 MediaSource 对象，生成的链接就是以 blob:开头的一段地址，表示指向的是一个二进制数据。
其中 localhost:1234 是当前网页的主机名称和端口号，也就是 location.host，而且这个 Blob URL 是可以直接访问的。需要注意的是，即使是同样的二进制数据，每调用一次 URL.createObjectURL 方法，就会得到一个不一样的 Blob URL。这个 URL 的存在时间，等同于网页的存在时间，一旦网页刷新或卸载，这个 Blob URL 就失效。

通过`URL.revokeObjectURL(objectURL)` 可以释放 URL 对象。**当你结束使用某个 URL 对象之后，应该通过调用这个方法来让浏览器知道不用在内存中继续保留对这个文件的引用了**允许平台在合适的时机进行垃圾收集。

> 浏览器在 document 卸载的时候，会自动释放它们，但是为了获得最佳性能和内存使用状况，你应该在安全的时机主动释放掉它们。

如果是以文件协议打开的 html 文件（即 url 为 file://开头），则地址中http://localhost:1234会变成null，而且此时这个Blob URL 是无法直接访问的。

### 使用

- 上传图片预览

- 以 Blob URL 加载网络视频

> 参考知乎和掘金文章。

- HLS 和 MPEG DASH

- MediaSource

- Fragmented MP4

> 有需求的时候参看掘金文章。

## FileReader

FileReader 对象允许 Web 应用程序异步读取存储在用户计算机上的文件（或原始数据缓冲区）的内容，使用 File 或 Blob 对象指定要读取的文件或数据。

> FileReader 仅用于以安全的方式从用户（远程）系统读取文件内容 它不能用于从文件系统中按路径名简单地读取文件。 要在 JavaScript 中按路径名读取文件，应使用标准 Ajax 解决方案进行服务器端文件读取，如果读取跨域，则使用 CORS 权限。

- `FileReader.readAsArrayBuffer()`

  开始读取指定的 Blob 中的内容, 一旦完成, result 属性中保存的将是被读取文件的 ArrayBuffer 数据对象.

- `FileReader.readAsBinaryString()`
  开始读取指定的 Blob 中的内容。一旦完成，result 属性中将包含所读取文件的原始二进制数据。

- `FileReader.readAsDataURL()`
  开始读取指定的 Blob 中的内容。一旦完成，result 属性中将包含一个 data: URL 格式的 Base64 字符串以表示所读取文件的内容。

- `FileReader.readAsText()`
  开始读取指定的 Blob 中的内容。一旦完成，result 属性中将包含一个字符串以表示所读取的文件内容。

> 使用 FilerReader 可以将`blob`转化为`ArrayBuffer/Test/DataURL(base64)`。

## Buffer

Buffer 是 Node.js 提供的对象，前端没有。 它一般应用于 IO 操作，例如接收前端请求数据时候，可以通过以下的 Buffer 的 API 对接收到的前端数据进行整合

比如`koa-body`这个插件，源生`node`接受的`post`请求数据都是`buffer`，最后进行拼接完成，`JSON.parse(buffer.toString())`。

```js
// Node端（Koa）
const app = new Koa();
app.use(async (ctx, next) => {
  if (ctx.path === '/ajax') {
    const chunks = [];
    const req = ctx.req;
    req.on('data', (buf) => {
      chunks.push(buf);
    });
    req.on('end', () => {
      let buffer = Buffer.concat(chunks);
      console.log(buffer.toString());
    });
  }
});
app.listen(3000);

// 前端
const xhr = new XMLHttpRequest();
xhr.open('POST', 'ajax', true);
xhr.setRequestHeader('Content-Type', 'text/plain');
xhr.send('asdasdsadfsdfsadasdas');
```

```js
// node 输出
asdasdsadfsdfsadasdas;
```

## 参考文章

[掘金](https://juejin.cn/post/6844903880774385671#heading-7)

[知乎](https://zhuanlan.zhihu.com/p/97768916)

[其他参考文章](https://www.psvmc.cn/article/2019-09-17-blob-buffer-file.html)
