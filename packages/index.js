import PageHeader from './page-header'
import Tag from './tag'

const components = {
  PageHeader,
  Tag
}

const install = function (Vue) {
  Object.values(components).forEach(component => {
    Vue.component(component.name, component);
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  PageHeader,
  Tag
}
