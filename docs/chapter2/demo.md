# 代码演示

### 调用 Demo

::: details 点击查看代码
``` js
<template>
  <div class="home">
    <nx-bg
      :pc="require('../assets/pc.png')"
      :phoneVertical="require('../assets/pad.png')"
      :phoneHorizaontal="require('../assets/phone.jpg')"
    />
    <!--
      pc="require('../assets/pc.png')"

     -->
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home'
}
</script>
<style>
  .home {
    height: 100%;
  }
</style>
```
:::