import { createStore } from 'vuex';
// import  createPersistedState from 'vuex-persistedstate'
import accounts from "./account";
export default createStore({
  modules: {
    accounts
  },
  // plugins: [createPersistedState("testState")],

});