import Vue from "vue";
import Vuex from "vuex";
import Menu from "@M/Menu";
import Patients from "@M/Patients";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    Menu,
    Patients
  },
  strict: debug
});