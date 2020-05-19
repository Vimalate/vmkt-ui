<template>
  <div class="vm-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "VmRadioGroup",
  props: {
    value: null
  },
  provide() {
    return {
      RadioGroup: this
    };
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped></style>
