# 修复记录

## V1.1.0

::: details

+ 修复点击下载IOS无效。

+ 修复移动端下点击nx-card后出现背景边框。

> 移动端:hover transfrom:scale导致，解决方法：仅在web端保留hover:transfrom:scale(1.02)。

+ 修复card中Title真机测试不显示。
  
> display导致问题，暂时不清楚为什么。使用居中替代方案translateY进行居中。

+ 修复打包后css文件问题。

> sideEffects。(目前还存在部分问题)
:::