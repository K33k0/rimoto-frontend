import Vue from 'vue';
import './plugins/axios';
import Buefy from 'buefy';
import axios from 'axios';

import App from './App.vue';
import router from './router';
import store from './store/index';
import './assets/scss/app.scss';


Vue.use(Buefy);
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
