// 获取views文件夹下的所有.vue文件
const files = require.context("@/views/components", true, /\.vue$/);
let pages = {};
files.keys().forEach((key) => {
  pages[key.replace(/(\.\/|\.vue)/g, "")] = files(key).default;
});
// 生成路由规则
let routes = [];
Object.keys(pages).forEach((item) => {
  routes.push({
    path: `/${pages[item].name.toLowerCase()}`,
    name: pages[item].name,
    component: pages[item]
  });
});
// 优化左侧菜单顺序，排序路由列表
routes.sort((a, b) => {
  return a.component.order - b.component.order
})

export default routes;
