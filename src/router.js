import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkExactActiveClass: 'is-active',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/queue',
      name: 'queue',
      component: () => import(/* webpackChunkName: "queue" */ './views/Queue.vue')
    },
    {
      path: '/recent',
      name: 'recent',
      component: () => import(/* webpackChunkName: "queue" */ './views/Recent.vue')
    }
  ],
});
