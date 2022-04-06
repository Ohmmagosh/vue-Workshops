import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogged:false,
    username:""
  },
  mutations: {
    SET_LOGGED_IN(state) {
      state.isLogged = true;
    },
    SET_LOGGED_out(state) {
      state.isLogged = false;
    },
    SET_USERNAME(state, value) {
      state.username = value;
    }
  },
  actions: {
    doLogin({ commit, dispatch }, { username}) {
      let result = true//await api.login({ username, password});
      if (result == true) {
        commit("SET_LOGGED_IN");
        commit("SET_USERNAME", username);
      }else {
        dispatch("doLogout", {});
      }
    },
    async doLogout({ commit }){
      //api.logout();
      commit("SET_LOGGED_OUT");
      commit("SET_USERNAME", "");
    }
  },
  modules: {
  }
})
