import Button from "./button";
import Icon from "./icon";
import Tag from "./tag";
import PageHeader from "./page-header";
import TreeModal from "./tree-modal";
import Input from "./input";

const components = {
  Button,
  Icon,
  Tag,
  PageHeader,
  TreeModal,
  Input,
};

const install = function (Vue) {
  Object.values(components).forEach((component) => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Button,
  Icon,
  Tag,
  PageHeader,
  TreeModal,
  Input,
};
