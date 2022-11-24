import axios from 'axios'
import { BASE_API_URL } from '../../../constants'
export default {
  state: {
    user: [],
    jwtToken: null,
    role: null,
    email: null,
    name: null,
    route: null,
    userId: null,
  },
  getters: {
    userDetails(state) {
      return state.user;
    },
    isUserAuthenticated(state) {
      return state.isAuthenticated;
    },
  },
  actions: {
    async signInUser({ commit, getters, dispatch }, data) {
    console.log("DATA-->", data)

      console.log("SIGN IN IS CALLED ", `${BASE_API_URL}admin/login`)
      return await axios
        .post(`${BASE_API_URL}admin/login`, data, 
        {
          headers:{
          'Content-Type': 'application/json',
      }})
        .then((response) => {
          commit("setSignInUsers", response.data);
          return response.data;
        })
        .catch((error) => {
          console.log("ERRRO", error)
          if (error.response) {
            return error.response.data
          }
        });
    },
    async logOut({ commit }) {

      await commit("resetStateOnLogOut");
    },
    routes({ commit }, payload) {
      commit("setroutes", payload);
    },
  },
  mutations: {
    setSignInUsers(state, payload) {
      state.user = payload;
      state.isAuthenticated = true;
    },
    setroutes(state, payload) {
      state.route = payload;
    },
  },
};
