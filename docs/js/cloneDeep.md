# 简易深拷贝+对象合并

::: tip
只要存在 value 是对象那么就一直调用递归进行处理，直到处理到基本数据类型的赋值才不进行递归
。

**递归到基本类型的赋值，只要还是引用类型那么继续进行递归拷贝。**

比如旧的 value 是一个 string，新的 value 是一个`{ a:{ c:3 } }`如果直接进行覆盖，那么这新的对象之中的`a`和`c`仍然是被浅拷贝的 Object。
:::

```ts
const isPlainObject = (val): val is object => {
  return Object.prototype.toString.call(val) === "[object Object]";
};

export const deepMerge = (...objs: any[]): any => {
  const result = Object.create(null);
  objs.forEach((obj) => {
    if (obj) {
      Object.keys(obj).forEach((key) => {
        const value = obj[key];
        if (isPlainObject(value)) {
          if (isPlainObject(result[key])) {
            result[key] = deepMerge(result[key], value);
          } else {
            result[key] = deepMerge({}, value);
          }
        } else {
          result[key] = value;
        }
      });
    }
  });
  return result;
};

const obj = {
  c: {
    name: "wanghaoyu",
  },
};

console.log(obj.c.name, "before");

const obj2 = deepMerge(obj);
console.log(obj2, "obj2");

obj.c.name = "wangahoyu - edit";

console.log(obj.c.name, "after 1"); // wanghaoyu - edit
console.log(obj2.c.name, "after 2"); // wanghaoyu
```
