<template>
  <div class="vm-input " :class="{ 'vm-input--suffix': showSuffix }">
    <input
      class="vm-input__inner"
      :class="{ 'is-disabled': disabled }"
      :placeholder="placeholder"
      :type="showPassword ? (passwordVisibale ? 'text' : 'password') : type"
      :name="name"
      :disabled="disabled"
      :value="value"
      @input="handleInput"
    />
    <span class="vm-input__suffix" v-if="showSuffix && value">
      <i
        class="vm-input__icon vm-icon-circle-close"
        v-if="clearable"
        @click="clear"
      ></i>
      <i
        class="vm-input__icon vm-icon-view"
        :class="{ 'vm-icon-view-active': passwordVisibale }"
        v-if="showPassword"
        @click="handlePassword"
      ></i>
    </span>
  </div>
</template>

<script>
export default {
  name: "VmInput",
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    name: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ""
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      passwordVisibale: false
    };
  },
  computed: {
    showSuffix() {
      return this.showPassword || this.clearable;
    }
  },
  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
    },
    clear() {
      this.$emit("input", "");
    },
    handlePassword() {
      this.passwordVisibale = !this.passwordVisibale;
    }
  }
};
</script>
<style lang="scss">
.vm-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .vm-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #409eff;
    }
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
.vm-input--suffix {
  .vm-input__inner {
    padding-right: 30px;
  }
  .vm-input__suffix {
    position: absolute;
    height: 100%;
    right: 10px;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    .vm-icon-view-active {
      color: blue;
    }
  }
}
</style>
