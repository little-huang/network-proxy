import ElementUI from './element-ui';

import BaseButton from './common/BaseButton'

const components = [
  ElementUI,
  BaseButton,
];

export default {
  install(Vue) {
    components.forEach(component => Vue.use(component));
  },
};
