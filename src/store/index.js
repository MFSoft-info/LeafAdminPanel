import { createStore } from 'vuex';
// import  createPersistedState from 'vuex-persistedstate'
import data from "./api";
export default createStore({
  modules: {
    data
  },
  // plugins: [createPersistedState("testState")],
});