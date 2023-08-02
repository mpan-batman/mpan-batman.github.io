# 描述字段

> 展示一些描述性的字段, UI 参考 element description 组件,

## 开发背景

有一些描述性的字段展示，多行省略显示。支持 html 样式显示。

## 使用

::: demo 适用于一些字段的展示

```html
<template>
  <div class="block">
    <ClientOnly>
      <melody-description-item :label="label" :content="content" />
    </ClientOnly>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        label: '标题',
        content:
          'This page will give you an introduction to the 80% of React concepts that you will use on a daily basis.'
      }
    }
  }
</script>
```

:::

## Attributes

| 参数    | 说明     | 类型   | 默认值 |
| ------- | -------- | ------ | ------ |
| label   | 描述标题 | string | ''     |
| content | 描述内容 | string | '-'    |
| lines   | 显示行数 | number | 1      |
