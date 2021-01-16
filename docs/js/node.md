# NodeType 元素节点属性

## nodeType

::: tip
Dom Element.nodeType 属性返回节点类型数值的常量。
:::

| 常量                               | 值   | 描述                                                                                                                                                                                                                          |
| :--------------------------------- | :--- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Node.ELEMENT_NODE`                | `1`  | 一个 [`元素`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element) 节点，例如 [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/p) 和 [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/div)。 |
| `Node.TEXT_NODE`                   | `3`  | [`Element`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element) 或者 [`Attr`](https://developer.mozilla.org/zh-CN/docs/Web/API/Attr) 中实际的 [`文字`](https://developer.mozilla.org/zh-CN/docs/Web/API/Text)           |
| `Node.CDATA_SECTION_NODE`          | `4`  | 一个 [`CDATASection`](https://developer.mozilla.org/zh-CN/docs/Web/API/CDATASection)，例如 `<!CDATA[[ … ]]>`。                                                                                                                |
| `Node.PROCESSING_INSTRUCTION_NODE` | `7`  | 一个用于 XML 文档的 [`ProcessingInstruction`](https://developer.mozilla.org/zh-CN/docs/Web/API/ProcessingInstruction) ，例如 `<?xml-stylesheet ... ?>` 声明。                                                                 |
| `Node.COMMENT_NODE`                | `8`  | 一个 [`Comment`](https://developer.mozilla.org/zh-CN/docs/Web/API/Comment) 节点。                                                                                                                                             |
| `Node.DOCUMENT_NODE`               | `9`  | 一个 [`Document`](https://developer.mozilla.org/zh-CN/docs/Web/API/Document) 节点。                                                                                                                                           |
| `Node.DOCUMENT_TYPE_NODE`          | `10` | 描述文档类型的 [`DocumentType`](https://developer.mozilla.org/zh-CN/docs/Web/API/DocumentType) 节点。例如 `<!DOCTYPE html>` 就是用于 HTML5 的。                                                                               |
| `Node.DOCUMENT_FRAGMENT_NODE`      | `11` | 一个 [`DocumentFragment`](https://developer.mozilla.org/zh-CN/docs/Web/API/DocumentFragment) 节点                                                                                                                             |
|                                    |

```html
<div id="box">hello nodeType~</div>

<script type="text/javascript">
  var element = document.getElementById("box");
  var attr = document.getElementById("box").getAttributeNode("id");
  var text = document.getElementById("box").firstChild;

  console.log(element.nodeType); //1
  console.log(attr.nodeType); //2
  console.log(text.nodeType); //3
</script>
```

## NodeName 和 NodeValue

### NodeName

nodeName 属性与 nodeValue 属性
   要了解节点的具体信息，可以使用 nodeName 和 nodeValue 这两个属性。这两个属性的值完全取决于节点的类型。

一般来说：

- 元素节点的 nodeName 是标签名称（大写）
- 属性节点的 nodeName 是属性名称
- 文本节点的 nodeName 永远是 #text
- 文档节点的 nodeName 永远是 #document
  这里可以改下上面的例子，打印这样的：

```js
console.log(document.nodeName); //#document
console.log(element.nodeName); //DIV
console.log(attr.nodeName); //id
console.log(text.nodeName); //#text
```

### NodeValue

- 对于文本节点，nodeValue 属性包含文本。
- 对于属性节点，nodeValue 属性包含属性值。
- 文档节点和元素节点，nodeValue 属性的值始终为 null。

```js
console.log(document.nodeValue); //null
console.log(element.nodeValue); //null
console.log(attr.nodeValue); //box
console.log(text.nodeValue); //hello nodeType~
```

## dom.childNodes

childNodes 属性返回包含被选节点的子节点的 NodeList。

::: tip
需要额外注意的是 childNodes 也包含返回的文本节点
:::

## dom.cloneNode

cloneNode() 方法可创建指定的节点的精确拷贝。

cloneNode() 方法 拷贝所有属性和值。

该方法将复制并返回调用它的节点的副本。如果传递给它的参数是 true，它还将递归复制当前节点的所有子孙节点。否则，它只复制当前节点。

返回被拷贝的节点。

## nodeList

NodeList 对象
我们可通过节点列表中的节点索引号来访问列表中的节点（索引号由 0 开始）。

节点列表可保持其自身的更新。如果节点列表或 XML 文档中的某个元素被删除或添加，列表也会被自动更新。

- nodeList.length 可返回节点列表中的节点数目。

- nodeList.item() 可返回节点列表中处于指定的索引号的节点。

::: tip
nodeList 对象是类数组对象，调用部分数组 API 时需要使用 Array.from()转换。
在一个节点列表中，节点被返回的顺序与它们在 XML 被规定的顺序相同。
:::

## parentNode + childNodes 获取元素兄弟节点方法

使用 parentNode + childNodes 获取同一父元素下不包括自身的兄弟元素节点。

> 通过 nodeType 为 1 取得所有元素节点，在通过排除自身获得兄弟元素节点。

```js
const getBrotherNode = (el) => {
  const childNodes = Array.from(el.parentNode.childrenNodes).filter((node) => {
    return node.nodeType === 1;
  });
  const brotherNodes = childNodes.filter((node) => {
    return node !== el;
  });
};
```
