import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    user: null,
  },
  getters: {
  },
  mutations: {
    setUser(state, user) {
      state.user = user
      if (user) {
          /* eslint-disable */
          //axios.defaults.headers.common["Authorization"] = `bearer ${token}`;
          state.isMenuVisible = true;
      } else {
          //delete axios.defaults.headers.common["Authorization"];
          state.isMenuVisible = false;
      }
    },
    setToken(state, token) {
      if (token) {
          state.token = token;
          // console.log("state.token: " + state.token);
          axios.defaults.headers.common["Authorization"] = `bearer ${token}`;
      } else {
          delete axios.defaults.headers.common["Authorization"];
      }
    },
  },
  actions: {
  },
  modules: {
  }
})
