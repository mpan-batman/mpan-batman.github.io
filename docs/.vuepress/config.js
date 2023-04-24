const path = require('path')

module.exports = {
  title: 'Melody 组件库',
  description: 'Melody 组件库文档',
  theme: 'antdocs',
  plugins: ['demo-container'],
  themeConfig: {
    sidebarDepth: 0,
    nav: [
      {
        text: '写作指南',
        link: '/guide/'
      },
      {
        text: '了解更多',
        ariaLabel: 'Language Menu',
        items: [
          {
            text: '资源',
            items: [
              {
                text: 'element文档',
                link: 'https://element.eleme.io/#/zh-CN',
                target: '_blank'
              },
              {
                text: '文档主题',
                link: 'https://antdocs.js.org/',
                target: '_blank'
              }
            ]
          },
          {
            text: '帮助',
            items: [
              {
                text: '文档写作模板',
                link: '/example/'
              }
            ]
          }
        ]
      }
    ],
    sidebar: [
      {
        title: '安装',
        path: '/quick-start/',
        collapsable: false
      },
      {
        title: '医生库',
        path: '/doctor/',
        collapsable: false,
        children: [['/doctor/select-with-dialog/', 'SelectWithDialog 带弹窗选择器']]
      },
      {
        title: '公共组件',
        path: '/common/',
        collapsable: false,
        children: [['/common/dialog/', 'Dialog 对话框']]
      }
    ]
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': path.resolve(__dirname, 'public/assets/images')
      }
    }
  }
}
