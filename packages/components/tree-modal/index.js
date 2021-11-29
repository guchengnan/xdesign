import TreeModal from './src/index.vue'

TreeModal.install = function(Vue){
  Vue.component(TreeModal.name, TreeModal)
}

export default TreeModal
