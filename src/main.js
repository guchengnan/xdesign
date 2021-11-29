import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import XDesign from "@packages/components";
// 按需导入
// Vue.use(XDesign.Button)
// 全量导入
Vue.use(XDesign);

import "@/assets/styles/index.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
