import ElementUI from './element-ui';

const components = [
  ElementUI,
];

export default {
  install(Vue) {
    components.forEach(component => Vue.use(component));
  },
};
