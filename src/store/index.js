/* eslint no-param-reassign: ["error", { "props": false }] */
import Vue from 'vue';
import Vuex from 'vuex';

import NavBar from './modules/navBar';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  strict: debug,
  state: {
    // queue: [],
  },
  getters: {
    // queue: state => state.queue,
  },
  mutations: {
    // getQueue(state) {
    //   this.$axios
    //     .get('http://127.0.0.1:8000/queue')
    //     .then((response) => {
    //       state.queue = response.data;
    //     });
    // },
  },
  actions: {
    // getQueue({ commit }) {
    //   commit('getQueue');
    // },
  },
  modules: {
    NavBar,
  },
});
