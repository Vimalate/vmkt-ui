import Vue from "vue";
import App from "./App.vue";
import VmUI from '../packages'
Vue.config.productionTip = false;
Vue.use(VmUI)

new Vue({
  render: h => h(App)
}).$mount("#app");
