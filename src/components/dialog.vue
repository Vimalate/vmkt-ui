<template>
  <transition name="dialog-fade">
    <!-- .stop 阻止冒泡 .self 仅点击自己 -->
    <div class="vm-dialog__wrapper" v-show="visible" @click.self="handleClose">
      <div class="vm-dialog" :style="{ width: width, marginTop: top }">
        <div class="vm-dialog__header">
          <slot name="title">
            <span class="vm-dialog__title">{{ title }}</span>
          </slot>
          <button class="vm-dialog__headerbtn" @click="handleClose">
            <i class="vm-icon-close"></i>
          </button>
        </div>
        <div class="vm-dialog__body">
          <span>
            <!-- 默认插槽 -->
            <slot></slot>
          </span>
        </div>
        <div class="vm-dialog__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "VmDialog",
  props: {
    title: {
      type: String,
      default: "提示"
    },
    width: {
      type: String,
      default: "50%"
    },
    top: {
      type: String,
      default: "15vh"
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {
    handleClose() {
      console.log(123);
      this.$emit("update:visible", false);
    }
  }
};
</script>
<style lang="scss">
.vm-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0, 0, 0, 0.5);

  .vm-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;

    &__header {
      padding: 20px 20px 10px;
      .vm-dialog__title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .vm-dialog__headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .el-icon-close {
          color: #909399;
        }
      }
    }

    &__body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &__footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      .vm-button:first-child {
        margin-right: 20px;
      }
    }
  }
}
.dialog-fade-enter-active {
  animation: fade 0.3s;
  transform: translateY(-20px);
}
.dialog-fade-leave-active {
  animation: fade 0.3s reverse;
  transform: translateY(0px);
}
@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
