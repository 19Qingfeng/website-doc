# urlSearchParams

::: tip
urlSearchParams 定义了使用 URL 的查询字符串的实用方法，但它兼容性不太好。

而 FormData 接口提供了一种方法，可以轻松地构造一组表示表单字段及其值的键/值对，通常用在 Post 请中。

urlSearchParams 和 FormData 完全是两个不同的东西。

在请求体中携带urlSearchParams时使用toString()方法转化后会得到key=value形式的参数，这和formData发送请求时携带的参数类似。但是urlSearchParams并不局限于此功能，他还提供了解析这类 queryString以及很多解析Url使用功能。
:::

## 使用场景

1. 场景一 获取浏览器地址参数

我们之前在获取浏览器地址参数时很多时候是通过对地址进行分割，然后拼接字段对象的方式来做的，类似

> 自己处理 location.search 进行截取获取 url 查询参数。

```js
function GetRequest() {
  let url = location.search; //获取url中"?"符后的字串
  let theRequest = Object.create(null);
  if (url.indexOf("?") != -1) {
    let str = url.substr(1);
    strs = str.split("&");
    for (let i = 0; i < strs.length; i++) {
      theRequest[strs[i].split("=")[0]] = strs[i].split("=")[1];
    }
  }
  return theRequest;
}
```

但是我们如果使用`URLSearchParams`时就不用这么繁琐了

```
const params = new URLSearchParams(location.search)
params.get(key)
```

2. 使用 URLSearchParams 处理 axios 发送的数据

URLSearchParams 顾名思义，其实就是 URL 添加查询参数。

::: tip
需要注意 xhr 发送请求时携带 URLSearchParams 时，请求头 Content-Type 通常配合 application/x-www-form-urlencoded。(axios 默认会如此处理)
:::

在我们使用 axios 和 fetch 来替换之前的 ajax 进行数据请求时，我们会遇到数据格式不一致的问题。

```
axios({
    method: 'post',
    url: '/test',
    data: {
        name: 'li lei',
        age: 18
    }
})
```

上面的调用方法和我们使用 ajax 时非常相似，我们可能也会自然而然的这样来写，但是我们会发现，其默认的数据格式是有差别的：
![request payload](https://user-gold-cdn.xitu.io/2019/5/7/16a91491e8cb50ac?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)
ajax 数据格式：
![formData](https://user-gold-cdn.xitu.io/2019/5/7/16a91491e9d58899?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)
是的，多了一层包裹，这样和我们后端的对接就出现问题了。哪怕是手动去修改 ContentType 为 application/x-www-form-urlencoded 仍然没有解决。
![png](https://user-gold-cdn.xitu.io/2019/5/7/16a91491e8e0e041?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

::: tip
请求中使用 URLSearchParams 参数，会将请求数据格式为 formdata 形式。
:::

```
let params = new URLSearchParams();
params.append('name', 'li lei');
params.append('age', 18);

// axios中如果传递的是一个URLSearchParams的话，那么自动会调用URLSearchParams.toString()之后进行拼接。
axios({
    method: 'post',
    url: '/test',
    data: params
})
```

## api

- append(name, value):插入一个指定的键/值对作为新的搜索参数。

```js
let url = new URL("https://example.com?foo=1&bar=2");
let params = new URLSearchParams(url.search.slice(1));

//添加第二个foo搜索参数。
params.append("foo", 4);
params.toString();
// 'foo=1&bar=2&foo=4'
```

- delete(name):从搜索参数列表里删除指定的搜索参数及其对应的值。
  name 是需要删除的键值名称。

```
let url = new URL('https://example.com?foo=1&bar=2');
let params = new URLSearchParams(url.search.slice(1));

//添加第二个foo搜索参数。
params.delete('foo');
params.toString();
// 'bar=2'
```

- entries():返回一个 iterator 可以遍历所有键/值对的对象。

```
// 创建一个测试用 URLSearchParams 对象
let searchParams = new URLSearchParams("key1=value1&key2=value2");

// 显示键/值对
for(var pair of searchParams.entries()) {
   console.log(pair[0]+ ', '+ pair[1]);
}

// key1, value1
// key2, value2
```

- get(name):获取指定搜索参数的第一个值。
  name 是将要返回的参数的键名。返回一个 USVString；如果没有，则返回 null。
  如果一个页面的 URL 是 https://example.com/?name=Jonathan&age=18 ，你可以这样解析参数 name 和 age:

```
let params = new URLSearchParams(document.location.search.substring(1));
let name = params.get("name"); // is the string "Jonathan"
let age = parseInt(params.get("age"), 10); // is the number 18

// 查找一个不存在的键名则返回 null:
let address = params.get("address"); // null
```

- getAll(name):获取指定搜索参数的所有值，返回是一个数组。
  name 是返回的参数的名称。

```
let url = new URL('https://example.com?foo=1&bar=2');
let params = new URLSearchParams(url.search.slice(1));

//为foo参数添加第二个值
params.append('foo', 4);

console.log(params.getAll('foo'))' //输出 ["1","4"].
```

- has(name):返回 Boolean 判断是否存在此搜索参数。
  name 是我们要查询的参数的键名。

```
let url = new URL('https://example.com?foo=1&bar=2');
let params = new URLSearchParams(url.search.slice(1));

params.has('bar') === true; //true
```

- keys():返回 iterator 此对象包含了键/值对的所有键名。

```
// 建立一个测试用URLSearchParams对象
let searchParams = new URLSearchParams("key1=value1&key2=value2");

// 输出键值对
for(var key of searchParams.keys()) {
  console.log(key);
}

// key1
// key2
```

- set(name, value):设置一个搜索参数的新值，假如原来有多个值将删除其他所有的值。
  其中 name 是需要插入修改参数的键名，value 是需要插入搜索参数的新值。

```
let url = new URL('https://example.com?foo=1&bar=2');
let params = new URLSearchParams(url.search.slice(1));

//Add a third parameter.
params.set('baz', 3);
```

- sort(): 按键名排序。

```
// Create a test URLSearchParams object
let searchParams = new URLSearchParams("c=4&a=2&b=3&a=1");

// Sort the key/value pairs
searchParams.sort();

// Display the sorted query string
console.log(searchParams.toString());

// a=2&a=1&b=3&c=4
```

- toString():返回搜索参数组成的字符串，可直接使用在 URL 上。

```
let url = new URL('https://example.com?foo=1&bar=2');
let params = new URLSearchParams(url.search.slice(1));

//Add a second foo parameter.
params.append('foo', 4);
console.log(params.toString());
//Prints 'foo=1&bar=2&foo=4'.
```

- values():返回 iterator 此对象包含了键/值对的所有值。

```
// 创建一个测试用URLSearchParams对象
let searchParams = new URLSearchParams("key1=value1&key2=value2");

// 输出值
for(var value of searchParams.values()) {
  console.log(value);
}
```
