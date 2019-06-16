export default {
  state: {
    mainNavVis: false,
  },
  mutations: {
    toggleMainNavVis(state) {
      state.mainNavVis = !state.mainNavVis;
    },
  },
  actions: {
    toggleMainNavVis({ commit  }) {
      commit('toggleMainNavVis');
    },
  },
  getters: {
    mainNavVis: state => state.mainNavVis,
  }
};
