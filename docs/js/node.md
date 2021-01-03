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

## dom.childNodes

childNodes 属性返回包含被选节点的子节点的 NodeList。

::: tip
需要额外注意的是 childNodes 也包含返回的文本节点
::: |

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