import PageHeader from './src/index.vue'

PageHeader.install = function(Vue){
  Vue.component(PageHeader.name, PageHeader)
}

export default PageHeader
