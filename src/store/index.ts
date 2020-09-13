import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isLightTheme: true,
  },
  getters: {
    isLightTheme: (state) => {
      return state.isLightTheme;
    },
  },
  mutations: {
    toggleTheme(state) {
      state.isLightTheme = !state.isLightTheme;
    },
  },
});

export default store;
