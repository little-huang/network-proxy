import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index-view',
      component: require('@/views/IndexView.vue').default,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
