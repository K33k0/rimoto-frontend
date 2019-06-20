import Vue from 'vue';
import Buefy from 'buefy';
import axios from 'axios';
import VueTimers from 'vue-timers';

import App from './App.vue';
import router from './router';
import store from './store'
import './assets/scss/app.scss';


Vue.use(VueTimers);
Vue.use(Buefy);
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
