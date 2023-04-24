---
home: true
tagline: null
actions:
  - text: 写作指南
    link: /guide/
    type: primary
    size: large
  - text: 安装
    link: /quick-start/
    type: primary
    ghost: true
    size: large
features:
  - title: 为什么要有文档？
    details: 没有组件库说明文档，一方面组件的相关API, Attributes都不清楚，其他人复用需要问开发组件的人。另外一方面规范组件开发风格。
  - title: 做了什么？
    details: 1. 二次封装element-ui, 自定义一些样式，修复element-ui的一些bug。2. 封装一些业务组件，给出具体使用的位置和使用效果。
  - title: 不足
    details: 大量待完善内容，开发标准完善，内容完善，组件库完善，组件性能优化
footerWrap:
  - headline: 生态系统
    items:
      - title: ElementUi
        link: https://element.eleme.io/#/zh-CN/
        details: Element 文档
      - title: Vue2
        link: https://v2.cn.vuejs.org/
        details: Vue2文档
  - headline: 资源链接
    items:
      - title: 代码规范
        link: https://msh-frontend.yuque.com/org-wiki-msh-frontend-oykvbf/vogdow/cy2a630uygw0kb0w
      - title: Code Review 规范
        link: https://msh-frontend.yuque.com/org-wiki-msh-frontend-oykvbf/vogdow/dxf62e7dn0hmbix4
footer: MIT Licensed | Copyright © 2020-present MelodyUI
---

## 已接入项目

<p></p> 
<!-- 必须要有个空行p标签 -->
<el-row>
  <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
    <el-card :body-style="{ padding: '0px' }">
      <!-- <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" :style="{width: '100%'}"> -->
      <div :style="{
        padding: '14px',
        backgroundImage: 'url(https://cdn.pixabay.com/photo/2023/04/16/09/54/bird-7929733_1280.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }">
        <span>某个使用了此组件的项目</span>
        <div class="bottom clearfix">
          <el-button type="text" class="button">去看看</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>
