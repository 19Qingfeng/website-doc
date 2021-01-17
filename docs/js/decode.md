# URL 解码和编码

网页的 URL 只能包含合法的字符。合法字符分成两类。

- URL 元字符：分号（;），逗号（,），斜杠（/），问号（?），冒号（:），at（@），&，等号（=），加号（+），美元符号（\$），井号（#）

- 语义字符：a-z，A-Z，0-9，连词号（-），下划线（\_），点（.），感叹号（!），波浪线（~），星号（\*），单引号（'），圆括号（()）
  除了以上字符，其他字符出现在 URL 之中都必须转义，规则是根据操作系统的默认编码，将每个字节转为百分号（%）加上两个大写的十六进制字母。

> 比如，UTF-8 的操作系统上，http://www.example.com/q=春节这个 URL 之中，汉字“春节”不是 URL 的合法字符，所以被浏览器自动转成http://www.example.com/q=%E6%98%A5%E8%8A%82。其中，“春”转成了%E6%98%A5，“节”转成了%E8%8A%82。这是因为“春”和“节”的 UTF-8 编码分别是 E6 98 A5 和 E8 8A 82，将每个字节前面加上百分号，就构成了 URL 编码。

- encodeURI()

encodeURI()方法用于转码整个 URL。它的参数是一个字符串，代表整个 URL。它会将元字符和语义字符之外的字符，都进行转义。

```js
encodeURI("http://www.example.com/q=春节");
// "http://www.example.com/q=%E6%98%A5%E8%8A%82"
```

- encodeURIComponent()

encodeURIComponent()方法用于转码 URL 的组成部分，会转码除了语义字符之外的所有字符，即元字符也会被转码。所以，它不能用于转码整个 URL。它接受一个参数，就是 URL 的片段。

> 也就是部分 URL 查询参数可以使用 encodeURIComponent()方法进行转译。

```js
encodeURIComponent('春节')
// "%E6%98%A5%E8%8A%82"
encodeURIComponent('http://www.example.com/q=春节')
// "http%3A%2F%2Fwww.example.com%2Fq%3D%E6%98%A5%E8%8A%82"
上面代码中，encodeURIComponent()会连 URL 元字符一起转义，所以如果转码整个 URL 就会出错。
```

- decodeURI()

decodeURI()方法用于整个 URL 的解码。它是 encodeURI()方法的逆运算。它接受一个参数，就是转码后的 URL。

```
decodeURI('http://www.example.com/q=%E6%98%A5%E8%8A%82')
// "http://www.example.com/q=春节"
```

- decodeURIComponent()

decodeURIComponent()用于 URL 片段的解码。它是 encodeURIComponent()方法的逆运算。它接受一个参数，就是转码后的 URL 片段。

```
decodeURIComponent('%E6%98%A5%E8%8A%82') // "春节
```

使用 encodeURI()编码后的结果是出了空格之外的其他字符都原封不懂，只有空格被替换成为%20,而 encodeURIComponent()方法则会使用对应的编码替换所有非字母数字字符。这也正是可以对整个 URI 使用 encodeURI()，因为它只对空格进行转译。而对于附加在 url 后的字符串使用 encodeURLComponent()。

::: tip
一般来说，我们使用 encodeURIComponent()方法的时候要比使用 encodeURI()更多，因为在实践中更常见的是对查询字符串参数而不是对于基础 URI 进行编码。
:::
