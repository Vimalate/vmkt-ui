<template>
  <div id="app">
    <!-- <vm-dialog title="title"></vm-dialog>
    <vm-dialog>
      <template v-slot:title><h3>title</h3> </template>
    </vm-dialog> -->
    <!-- .sync 语法糖，通过 updata：xxx -->
    <!-- <vm-dialog width="30%" top="150px" :visible.sync="visible"
      >对话框
      <template v-slot:footer>
        <vm-button @click="visible = false">取消</vm-button>
        <vm-button type="primary" @click="visible = false">确定</vm-button>
      </template>
    </vm-dialog>
    <vm-button @click="visible = true" type="primary">显示</vm-button> -->
    <!-- <vm-input placeholder="请输入" v-model="username"></vm-input> -->
    <!-- <vm-input
      type="text"
      :value="username"
      @input="username = $event.target.value"
    ></vm-input> -->
    <!-- <vm-input placeholder="请输入" v-model="username" clearable></vm-input>
    <vm-input
      placeholder="请输入"
      type="password"
      v-model="username"
      show-password
    ></vm-input> -->
    <!-- <vm-switch v-model="active"></vm-switch>
    <vm-switch
      v-model="active"
      active-color="#13ce66"
      inactive-color="#ff4949"
      name="username"
    >
    </vm-switch> -->
    <!-- <vm-radio label="1" v-model="gender">男</vm-radio>
    <vm-radio label="0" v-model="gender">女</vm-radio> -->
    <!-- <vm-radio label="1" v-model="gender"></vm-radio>
    <vm-radio label="0" v-model="gender"></vm-radio>
    <vm-radio-group v-model="gender">
      <vm-radio label="1">男</vm-radio>
      <vm-radio label="0">女</vm-radio>
    </vm-radio-group> -->
    <!-- <vm-checkbox v-model="active">123 </vm-checkbox>
    <vm-checkbox-group v-model="hobby">
      <vm-checkbox label="抽烟"></vm-checkbox>
      <vm-checkbox label="喝酒"></vm-checkbox>
      <vm-checkbox label="烫头"></vm-checkbox>
    </vm-checkbox-group> -->
    <!-- model 数据双向绑定 -->
    <vm-form :model="model" label-width="80px">
      <vm-form-item label="用户名">
        <vm-input
          placeholder="请输入用户名"
          v-model="model.username"
        ></vm-input>
      </vm-form-item>
      <vm-form-item label="选择">
        <vm-switch v-model="model.active"></vm-switch>
      </vm-form-item>
    </vm-form>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      model: {
        username: "12",
        active: true
      },
      visible: false,
      gender: "1",
      hobby: ["抽烟", "喝酒", "烫头"]
    };
  },
  methods: {
    fn() {
      console.log(123);
    }
    // close(v) {
    //   this.visible = v;
    // }
  }
};
</script>

<style lang="scss">
.row {
  margin-bottom: 20px;
  .vm-button {
    margin-right: 20px;
  }
}
#app {
  .vm-input {
    width: 180px;
  }
}
</style>
