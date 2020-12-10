module.exports = {
  base: "/docs/",
  title: "Nx-website-component",
  dest: 'dist',
  themeConfig: {
    editLinks: false,
    docsDir: "docs",
    nav: [],
    sidebar: [
      {
        title: 'Install',
        collapsable: false,
        children: [
          ['chapter1/', 'Introduction'],
          'chapter1/dev'
        ]
      },
      {
        title: 'NxBg 背景图',
        collapsable: false,
        children: [
          'chapter2/Props&Event',
          'chapter2/demo',
          'chapter2/problem',
        ]
      },
      {
        title: 'NxCard 卡片',
        collapsable: false,
        children: [
          'chapter3/entry',
          'chapter3/demo'
        ]
      },
      {
        title: 'NxFooter 底部',
        collapsable: false,
        children: [
          'chapter4/entry'
        ]
      },
      {
        title: 'NxArt 文章',
        collapsable: false,
        children: [
          'chapter5/entry'
        ]
      },
      {
        title: '版本记录',
        collapsable: false,
        children: [
          'chapter6/entry'
        ]
      },
    ]
  },
};
