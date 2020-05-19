<template>
  <div class="vm-form-item">
    <label class="vm-form-item__label" :style="labelStyle">{{ label }}</label>
    <div class="vm-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "VmFormItem",
  props: {
    label: {
      type: String,
      default: ""
    }
  },
  inject: ["Form"],
  computed: {
    labelStyle() {
      return {
        width: this.Form.labelWidth
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.vm-form-item {
  margin-bottom: 25px;
  .vm-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .vm-form-item__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    overflow: hidden;
  }
}
</style>
