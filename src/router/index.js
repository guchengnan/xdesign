import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/home/index.vue"),
  },
  // Button标签
  {
    path: "/button",
    name: "Button",
    component: () =>
      import(/* webpackChunkName: "button" */ "../views/button/index.vue"),
  },
  // Icon标签
  {
    path: "/icon",
    name: "Icon",
    component: () =>
      import(/* webpackChunkName: "icon" */ "../views/icon/index.vue"),
  },
  // Tag标签
  {
    path: "/tag",
    name: "Tag",
    component: () =>
      import(/* webpackChunkName: "tag" */ "../views/tag/index.vue"),
  },
  // Input输入框
  {
    path: "/input",
    name: "Input",
    component: () =>
      import(/* webpackChunkName: "input" */ "../views/input/index.vue"),
  },
  // PageHeader页头
  {
    path: "/page-header",
    name: "TitleBar",
    component: () =>
      import(
        /* webpackChunkName: "pageheader" */ "../views/page-header/index.vue"
      ),
  },
  // TreeModal页头
  {
    path: "/tree-modal",
    name: "TreeModal",
    component: () =>
      import(
        /* webpackChunkName: "pageheader" */ "../views/tree-modal/index.vue"
      ),
  },
  // 致谢
  {
    path: "/thanks",
    name: "Thanks",
    component: () =>
      import(/* webpackChunkName: "thanks" */ "../views/thanks/index.vue"),
  },
  // 关于
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/about/index.vue"),
  },
  // 404
  {
    path: "*",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "thanks" */ "../views/not-found/index.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
