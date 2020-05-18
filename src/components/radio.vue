<template>
  <label class="vm-radio " :class="{ 'is-checked': label === value }">
    <span class="vm-radio__input">
      <span class="vm-radio__inner"></span>
      <input
        class="vm-radio__original"
        :value="label"
        :name="name"
        v-model="model"
        type="radio"
      />
    </span>
    <span class="vm-radio__label">
      <slot>
        <template v-if="!$slots.default">{{ label }}</template>
      </slot>
    </span>
  </label>
</template>

<script>
export default {
  name: "VmRadio",
  props: {
    label: {
      type: [String, Boolean, Number],
      default: ""
    },
    value: null,
    name: {
      type: String,
      default: ""
    }
  },
  computed: {
    // 控制内部 value，子组件不能改变父组件，额外提供 model
    // v-model 双向数据绑定，得提供 get 和set
    model: {
      get() {
        return this.value;
      },
      set(v) {
        this.$emit("input", v);
      }
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.vm-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  .vm-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .vm-radio__inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.15s ease-in;
      }
    }
    .vm-radio__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0px;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .vm-radio__label {
    font-size: 14px;
    padding-left: 10px;
  }
}
.vm-radio.is-checked {
  .vm-radio__input {
    .vm-radio__inner {
      border-color: #409eff;
      background: #409eff;
      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  .vm-radio__label {
    color: #409eff;
  }
}
</style>
