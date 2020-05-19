<template>
  <div class="vm-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "VmCheckboxGroup",
  data() {
    return {};
  },
  props: {
    value: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  provide() {
    return {
      CheckboxGroup: this
    };
  }
};
</script>
<style lang="scss" scoped></style>
