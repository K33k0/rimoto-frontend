import Vue from 'vue';
import Router from 'vue-router';
import Queue from './views/Queue.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'queue',
      component: Queue
    }
  ],
});
