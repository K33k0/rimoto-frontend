import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    queue: [],
    updatingQueue: false
  },
  mutations: {
    toggleUpdatingState(state, bool) {state.updatingQueue = bool},
    updateQueue(state) {
      const dataUrl = "http://127.0.0.1:8000/queue";
      axios.get(dataUrl).then(resp => {
        state.queue = resp.data;
      })
    },
    addToQueue(state, path) {
      const dataUrl = "http://127.0.0.1:8000/scan"
      axios.post(dataUrl, {file_path: path})
      .then(resp => {
      })
    },
    deleteFromQueue(state, path) {
      const dataUrl = "http://127.0.0.1:8000/delete"
      axios.post(dataUrl, {file_path: path})
      .then(resp => {
      })
    }
  },
  actions: {
    updateQueue ({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('updateQueue')
          resolve()
        }, 1000)
      })
    },
    deleteFromQueue ({ commit }, payload) {
      return new Promise((resolve, reject) => {
        commit('deleteFromQueue', payload.path)
        resolve()
      })
    },
    addToQueue({commit}, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        commit('addToQueue', payload.path)
        resolve()
      })
    }
  },
  getters: {
    queue: state => state.queue,
  }
});

export default store;
