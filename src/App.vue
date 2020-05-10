<template>
  <div id="app">
    <div class="row">
      <vm-button type="primary">btn</vm-button>
      <vm-button type="123">btn1</vm-button>
      <vm-button type="info">btn1</vm-button>
      <vm-button type="warning">btn1</vm-button>
      <vm-button type="danger">btn1</vm-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style lang="scss">
.row {
  margin-bottom: 20px;
  .vm-button {
    margin-right: 20px;
  }
}
</style>
