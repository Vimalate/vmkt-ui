import Vue from "vue";
import App from "./App.vue";
import VmButton from "./components/button.vue";
Vue.config.productionTip = false;
Vue.component(VmButton.name, VmButton);
new Vue({
  render: h => h(App)
}).$mount("#app");
