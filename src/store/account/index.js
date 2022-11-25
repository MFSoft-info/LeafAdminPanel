import JwtService from "../jwt";

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
    isAuthenticated: !!JwtService.getToken(),
  },
  getters: {
    getUserId(state) {
      return state.userId;
    },
    getUserInfo(state){
      return state.userInfo;
    },
    isUserAuthenticated(state) {
      return state.isAuthenticated;
    },
  },
  actions: {
    async signInUser({ commit }, data) {
      return await axios
        .post(`${BASE_API_URL}admin/login`, data, 
        {
          headers:{
          'Content-Type': 'application/json',
      }})
        .then((response) => {
          commit("setSignInUsers", response.data);
          commit("setUserId", response.data.iduser);
          return response.data;
        })
        .catch((error) => {
          if (error.response) {
            return error.response.data
          }
        });
    },
    async getUserProfile({ commit }, data) {
        return await axios
          .post(`${BASE_API_URL}admin/get_user/info`, data, 
          {
            headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${JwtService.getToken()}`
        }})
          .then((response) => {
            commit("setUserInfo", response.data);
            return response.data;
          })
          .catch((error) => {
            if (error.response) {
              return error.response.data
            }
          });
      },
    async updateUserProfile({ commit }, data) {
        return await axios
          .put(`${BASE_API_URL}admin/user/update_info`, data,
          {
            headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${JwtService.getToken()}`
        }})
          .then((response) => {
            commit("setUserInfo", response.data);
            return response.data;
          })
          .catch((error) => {
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
      JwtService.saveToken(payload.token);
      state.isAuthenticated = true;
    },
    setUserId(state, payload) {
      localStorage.setItem("userId",payload)
      state.userId = payload;
    },
    setUserInfo(state, payload) {
      state.userInfo = payload;
    },
    setroutes(state, payload) {
      state.route = payload;
    },
    resetStateOnLogOut(state) {
      JwtService.destroyToken();
      state.user = null;
      state.jwtToken = null;
      state.isAuthenticated = false;
    }
  },
};
