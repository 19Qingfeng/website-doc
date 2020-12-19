# 代码演示

``` vue
<template>
  <div class="home">
    <nx-bg
      :pc="require('../assets/image/pc/bg_pc.png')"
      :phoneVertical="require('../assets/image/phone/bg_phone.png')"
      :phoneHorizaontal="require('../assets/image/phone/bg_phone.png')"
    />

    <div class="slide-wapper">
      <nx-slide :data="slideData" />
    </div>

    <div class="card-wapper">
      <template v-for="card in cardList">
        <nx-card
          class="card-item"
          v-if="card.isShow"
          :key="card.content"
          :data="card"
        />
      </template>
    </div>

    <nx-footer :copy-right="copyRight" :data="footerList" />
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "Home",
  data() {
    return {
      copyRight: "© 2020 Aloha",
      slideData: [
        require("../assets/image/pc/car.png"),
        require("../assets/image/pc/gift.png"),
        require("../assets/image/pc/list.png"),
        require("../assets/image/pc/room.png"),
        require("../assets/image/pc/talking.png"),
      ],
      footerList: [
        {
          text: "Privacy",
          path: "Privacy",
        },
        {
          text: "Terms",
          path: "Terms",
        },
        {
          text: "Support",
          email: "wizfeedback@yeah.net",
        },
      ],
      cardList: [
        {
          icon: "iconziti48",
          title: "Download on the",
          body: "App Store ",
          link:
            "https://apps.apple.com/us/app/aloha-group-voice-chat-rooms/id1543509968",
          isShow: true,
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.home {
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
}
.slide-wapper {
  position:absolute;
  top:0;
  left: 0;
  height: 400px;
  width: 200px;
  border-radius: 10px;
  overflow: hidden;
}
.card-item {
  border: 1px solid #9f9070;
}
// pc
@media only screen and (min-width: 1366px) {
  .card-wapper {
    display: flex;
    position: absolute;
    width: 50%;
    box-sizing: border-box;
    bottom: 22%;
    left: 30%;
  }
}

// pad 当作pc
@media screen and (min-width: 960px) and (max-width: 1366px) {
  .card-wapper {
    display: flex;
    position: absolute;
    width: 50%;
    box-sizing: border-box;
    bottom: 30%;
    left: 43%;
  }
}

/* 所有手机竖屏 正常 */
@media screen and (orientation: portrait) and (max-width: 960px) {
  .card-wapper {
    position: absolute;
    box-sizing: border-box;
    bottom: 20%;
    left: 24%;
  }
}

// 手机横屏幕
@media screen and (min-width: 600px) and (max-width: 960px) {
  .card-wapper {
    position: absolute;
    width: 50%;
    padding: 0 20px;
    box-sizing: border-box;
    bottom: 48%;
    left: 6%;
  }
}
</style>
```