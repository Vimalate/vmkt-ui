import Vue from "vue";
import App from "./App.vue";
import VmButton from "./components/button.vue";
import VmDialog from "./components/dialog.vue";
import VmInput from "./components/input.vue";
import VmSwitch from "./components/switch.vue";
import VmRadio from "./components/radio.vue";
import VmRadioGroup from "./components/radio-group.vue";
import VmCheckbox from "./components/checkbox.vue";
import VmCheckboxGroup from "./components/checkbox-group.vue";
import "./assets/fonts/font.scss";
Vue.config.productionTip = false;
Vue.component(VmButton.name, VmButton);
Vue.component(VmDialog.name, VmDialog);
Vue.component(VmInput.name, VmInput);
Vue.component(VmSwitch.name, VmSwitch);
Vue.component(VmRadio.name, VmRadio);
Vue.component(VmRadioGroup.name, VmRadioGroup);
Vue.component(VmCheckbox.name, VmCheckbox);
Vue.component(VmCheckboxGroup.name, VmCheckboxGroup);

new Vue({
  render: h => h(App)
}).$mount("#app");
