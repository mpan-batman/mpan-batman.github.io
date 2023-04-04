# 带弹窗选择框

test

> 带弹窗选择框，可以远程搜索，也可以在弹窗里面更加精细的搜索。

## 业务背景

表单中一些字段选择比较复杂，选择的对象要显示的字段较多，例如医疗服务商的选择，既需要知道医疗服务商的名称，还需要看到医疗服务商签约状态，医院等级，医院属性等信息，如果用传统的 select 模糊搜索一方面不方便精确查找，另外一方面不好显示医院等级等信息。为了解决以上问题，业务上封装了 element select/dialog, 在 dialog 里面做精确的搜索和详细的信息展示。

## 预览

![Image from alias](~@alias/select-with-dialog.gif)

## 使用

::: demo 适用广泛的基础单选

```html
<template>
  <el-select v-model="value" placeholder="请选择">
    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
  export default {
    data() {
      return {
        options: [
          {
            value: '选项1',
            label: '黄金糕'
          },
          {
            value: '选项2',
            label: '双皮奶'
          }
        ],
        value: ''
      }
    }
  }
</script>
```

:::

## Attributes

| 参数         | 说明                              | 类型   | 默认值 |
| ------------ | --------------------------------- | ------ | ------ |
| option-value | select 中 option value 的映射属性 | string | value  |
| option-label | select 中 option label 的映射属性 | string | label  |
| title        | Dialog 的 title                   | string | -      |

## Events

| 事件名称         | 说明                     | 回调参数             |
| ---------------- | ------------------------ | -------------------- |
| handleComfirm    | 处理 Dialog 确定按钮回调 | Object: 目前选中的值 |
| handleShowDialog | 点击 handle              | some value           |

## Slots

| 名称   | 说明                        |
| ------ | --------------------------- |
| option | select 组件下 option 的内容 |
| table  | Dialog 中 table 的内容      |
