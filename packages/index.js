import Button from './button'
import Tag from './tag'
import PageHeader from './page-header'

const components = {
  Button,
  Tag,
  PageHeader
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
  Button,
  Tag,
  PageHeader
}
