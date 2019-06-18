import Vue from 'vue';
import Buefy from 'buefy';
import axios from 'axios';

import App from './App.vue';
import router from './router';
import './assets/scss/app.scss';


Vue.use(Buefy);
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
