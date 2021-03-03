module.exports = {
  base: "/docs/",
  title: "Nx-website-component",
  dest: "dist",
  description: "Vue component for nx-website.",
  themeConfig: {
    editLinks: false,
    docsDir: "docs",
    nav: [],
    sidebar: [
      {
        title: "Install",
        collapsable: false,
        children: [["chapter1/", "Introduction"], "chapter1/dev"],
      },
      {
        title: "NxBg 背景图",
        collapsable: false,
        children: ["chapter2/Props&Event", "chapter2/demo", "chapter2/problem"],
      },
      {
        title: "NxCard 卡片",
        collapsable: false,
        children: ["chapter3/entry", "chapter3/demo"],
      },
      {
        title: "NxFooter 底部",
        collapsable: false,
        children: ["chapter4/entry"],
      },
      {
        title: "NxArt 文章",
        collapsable: false,
        children: ["chapter5/entry"],
      },
      {
        title: "NxSlide 幻灯片",
        collapsable: false,
        children: ["chapter6/entry", "chapter6/demo", "chapter6/feat"],
      },
      {
        title: "版本记录",
        collapsable: false,
        children: ["chapter7/entry"],
      },
      {
        title: "HTTP",
        collapsable: false,
        children: ["http/diff"],
      },
      {
        title: "CSS",
        collapsable: false,
        children: ["css/GPU", "css/backflow"],
      },
      {
        title: "渲染优化",
        collapsable: false,
        children: [
          "browser/chapter1.md",
          "browser/chapter2.md",
          "browser/chapter3.md",
          "browser/chapter4.md",
          "browser/chapter5.md",
          "browser/chapter6.md",
          "browser/chapter7.md",
        ],
      },
      {
        title: "HTML&CSS优化",
        collapsable: false,
        children: [
          "htmlOptimization/chapter1.md",
          "htmlOptimization/chapter2.md",
        ],
      },
      {
        title: "代码优化",
        collapsable: false,
        children: [
          "jsOptimization/chapter1.md",
          "jsOptimization/chapter2.md",
          "jsOptimization/chapter3.md",
          "jsOptimization/chapter4.md",
        ],
      },
      {
        title: "资源压缩",
        collapsable: false,
        children: [
          "sourcelOptimization/chapter1.md",
          "sourcelOptimization/chapter2.md",
        ],
      },
      {
        title:"Webpack优化",
        collapsable: false,
        children: [
          "webpack/chapter1.md",
          "webpack/chapter2.md",
          "webpack/chapter3.md",
          "webpack/chapter4.md",
          "webpack/chapter5.md",
          "webpack/chapter6.md",
        ]
      },
      {
        title:"传输加载优化",
        collapsable: false,
        children: [
          "transmission/chapter1.md",
          "transmission/chapter2.md",
          "transmission/chapter3.md"
        ]
      },
      {
        title: "js",
        collapsable: false,
        children: [
          "js/object",
          "js/offset",
          "js/client",
          "js/scroll",
          "js/page",
          "js/bodyOffset",
          "js/getSize",
          "js/notification",
          "js/getBoundingClientRect",
          "js/draggable",
          "js/getImgSize",
          "js/node",
          "js/fade",
          "js/location",
          "js/decode",
          "js/loadingImg",
          "js/urlSearchParams",
          "js/getComputedStyle",
          "js/videoToImg.md",
          "js/cloneDeep",
          "js/promise",
          "js/bind",
          "js/modules",
          "js/eventLoop",
          "js/requestAnimationFrame",
        ],
      },
      {
        title: "红宝书",
        collapsable: false,
        children: [
          "redbook/function",
          "redbook/designMode",
          "redbook/packingType",
        ],
      },
      {
        title: "web socket",
        collapsable: false,
        children: ["socket/pubNabVue", "socket/hello"],
      },
      {
        title: "nodejs",
        collapsable: false,
        children: [
          "nodejs/base.md",
          "nodejs/zip",
          "nodejs/unZip",
          "nodejs/inspect",
        ],
      },
      {
        title: "perfect",
        collapsable: false,
        children: [
          "performance/target.md",
          "performance/RAIL",
          "performance/webPageTest",
          "performance/lightHouse",
          "performance/apis",
          "performance/Rendering",
        ],
      },
      {
        title: "koa",
        collapsable: false,
        children: ["koa/core"],
      },
      {
        title: "vue",
        collapsable: false,
        children: [
          "vue/defineReactive",
          "vue/$nextTick",
          "vue-source/chapter1.md",
          "vue-source/chapter2.md",
        ],
      },
    ],
  },
};
