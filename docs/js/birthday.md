# 日期(年龄，星座)

> 通过生日计算日期，计算星座。

此处使用了`momentjs`,当然也可自己计算`age`。

```js
/* 生日转年龄和星座 */
function getInfoByBirthday(birthday) {
  // 计算年龄
  const age = moment().diff(moment(birthday), 'years');
  // 计算星座
  const s = '魔羯水瓶双鱼牡羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯';
  const month = birthday.slice(5, 7);
  const day = birthday.slice(-2);
  const arr2 = [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22];
  const constellation = s.substr(
    month * 2 - (day < arr2[month - 1] ? 2 : 0),
    2
  );
  return {
    constellation,
    age,
  };
}
```