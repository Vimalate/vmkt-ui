<template>
  <div class="vm-switch" :class="{ 'is-checked': value }" @click="handleSwitch">
    <span class="vm-switch__core" ref="core">
      <span class="vm-switch__button"></span>
    </span>
    <input class="vm-switch__input" type="checkbox" :name="name" ref="input" />
  </div>
</template>

<script>
export default {
  name: "VmSwitch",
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ""
    },
    inactiveColor: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  mounted() {
    this.setColor();
    this.$refs.input.checked = this.value;
  },
  methods: {
    async handleSwitch() {
      this.$emit("input", !this.value);
      // 等待value 改变后，再修改背景颜色
      await this.$nextTick();
      this.setColor();
      this.$refs.input.checked = this.value;
    },
    setColor() {
      if (this.activeColor || this.inactiveColor) {
        let color = this.value ? this.activeColor : this.inactiveColor;
        this.$refs.core.style.borderColor = color;
        this.$refs.core.style.backgroundColor = color;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.vm-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  .vm-switch__input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  .vm-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .vm-switch__button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}
.vm-switch.is-checked {
  .vm-switch__core {
    border-color: #409eff;
    background-color: #409eff;
    .vm-switch__button {
      transform: translateX(20px);
    }
  }
}
</style>
