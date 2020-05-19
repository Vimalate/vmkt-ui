<template>
  <label class="vm-checkbox " :class="{ 'is-checked': isChecked }">
    <span class="vm-checkbox__input">
      <span class="vm-checkbox__inner"></span>
      <input
        type="checkbox"
        class="vm-checkbox__original"
        :name="name"
        v-model="model"
        :value="label"
      />
    </span>
    <span class="vm-checkbox__label">
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: "VmCheckbox",
  props: {
    value: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    }
  },
  computed: {
    isGroup() {
      return !!this.CheckboxGroup;
    },
    isChecked() {
      // 判断是否选中
      // console.log(this.model)
      if (this.isGroup) {
        return this.model.includes(this.label);
      } else {
        return this.model;
      }
    },
    model: {
      get() {
        return this.isGroup ? this.CheckboxGroup.value : this.value;
      },
      set(v) {
        if (this.isGroup) {
          // 修改value属性
          console.log(v, this.label);
          this.CheckboxGroup.$emit("input", v);
        } else {
          this.$emit("input", v);
        }
      }
    }
  },
  inject: {
    CheckboxGroup: {
      default: ""
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.vm-checkbox.is-checked {
  .vm-checkbox__input {
    .vm-checkbox__inner {
      background-color: #409eff;
      border-color: #409eff;
      &:after {
        transform: rotate(45deg) scaleY(1);
      }
    }
  }
  .vm-checkbox__label {
    color: #409eff;
  }
}
.vm-checkbox {
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: none;
  margin-right: 30px;
  .vm-checkbox__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .vm-checkbox__inner {
      display: inline-block;
      position: relative;
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      box-sizing: border-box;
      width: 14px;
      height: 14px;
      background-color: #fff;
      z-index: 1;
      transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
        background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
      &:after {
        box-sizing: content-box;
        content: "";
        border: 1px solid #fff;
        border-left: 0;
        border-top: 0;
        height: 7px;
        left: 4px;
        position: absolute;
        top: 1px;
        transform: rotate(45deg) scaleY(0);
        width: 3px;
        transition: transform 0.15s ease-in 0.05s;
        transform-origin: center;
      }
    }
    .vm-checkbox__original {
      opacity: 0;
      outline: none;
      position: absolute;
      left: 10px;
      margin: 0;
      width: 0;
      height: 0;
      z-index: -1;
    }
  }
  .vm-checkbox__label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
  }
}
</style>
