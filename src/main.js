import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// XDesign组件引用
import XDesign from '../packages/index'
Vue.use(XDesign)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
