// 获取views文件夹下的所有.vue文件
const files = require.context("@/views/components", true, /\.vue$/);
let pages = {};
files.keys().forEach((key) => {
  pages[key.replace(/(\.\/|\.vue)/g, "")] = files(key).default;
});
console.log(pages)
// 生成路由规则
let routes = [];
Object.keys(pages).forEach((item) => {
  routes.push({
    path: `/${pages[item].name.toLowerCase()}`,
    name: pages[item].name,
    alias: pages[item].alias,
    component: pages[item]
  });
});
export default routes;
