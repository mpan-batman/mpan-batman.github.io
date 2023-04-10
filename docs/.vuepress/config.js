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
        text: '指南',
        link: '/guide/'
      },
      {
        text: '了解更多',
        ariaLabel: 'Language Menu',
        items: [
          {
            text: '分组',
            items: [
              {
                text: '分组1',
                link: 'https://github.com/ElementUI/babel-plugin-component',
                target: '_blank'
              },
              {
                text: '分组2',
                link: 'https://github.com/ElementUI/babel-plugin-component',
                target: '_blank'
              }
            ]
          },
          {
            text: '另外一个分组',
            items: [
              {
                text: '分组1',
                link: 'https://github.com/ElementUI/babel-plugin-component',
                target: '_blank'
              },
              {
                text: '分组2',
                link: 'https://github.com/ElementUI/babel-plugin-component',
                target: '_blank'
              }
            ]
          },
          {
            text: 'Github',
            link: 'https://github.com/ElementUI/babel-plugin-component',
            target: '_blank'
          },
          {
            text: 'Preview',
            link: 'https://github.com/ElementUI/babel-plugin-component',
            target: '_blank'
          }
        ]
      }
    ],
    sidebar: [
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
        children: [['/common/tooltip/', 'Tooltip 文字提示']]
      }
    ]
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': path.resolve(__dirname, 'public/assets/images')
      }
    }
  },
  evergreen: true
}
