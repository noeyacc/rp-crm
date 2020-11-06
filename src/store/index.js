import Vue from "vue";
import Vuex from "vuex";
import Menu from "@M/Menu";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    Menu
  },
  strict: debug
});