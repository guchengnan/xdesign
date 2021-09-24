import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/home/index.vue"),
  },
  // Tag标签
  {
    path: "/tag",
    name: "Tag",
    component: () =>
      import(/* webpackChunkName: "tag" */ "../views/tag/index.vue"),
  },
  // PageHeader页头
  {
    path: "/pageheader",
    name: "TitleBar",
    component: () =>
      import(
        /* webpackChunkName: "pageheader" */ "../views/page-header/index.vue"
      ),
  },
  // 致谢
  {
    path: "/thanks",
    name: "Thanks",
    component: () =>
      import(
        /* webpackChunkName: "thanks" */ "../views/thanks/index.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
