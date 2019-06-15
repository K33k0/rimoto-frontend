/* eslint no-param-reassign: ["error", { "props": false }] */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  strict: debug,
  state: {
    mainNavVis: false,
  },
  mutations: {
    toggleMainNavVis(state) {
      state.mainNavVis = !state.mainNavVis;
    },
  },
  getters: {
    mainNavVis: state => state.mainNavVis,
  },
  actions: {
    toggleMainNavVis({ commit }) {
      commit('toggleMainNavVis');
    },
  },
});
