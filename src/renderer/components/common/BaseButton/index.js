import BaseButton from './BaseButton.vue';

BaseButton.install = function(Vue){
  Vue.component(BaseButton.name, BaseButton);
};

export default BaseButton;