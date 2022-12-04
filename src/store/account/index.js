import JwtService from "../jwt";

import axios from 'axios'
import { BASE_API_URL, LOGIN_API, USER_INFO, USERS_LIST, UPDATE_USER_INFO, ADD_BALANCE,BLOCK_USER, DECREASE_BALANCE, MAKE_ADMIN, HANDLE_SWITCHES, UN_BLOCK_USER, GET_WITHDRAWLS, GET_ADVERTISES_LIST, UPDATE_ADS_CONFIG  } from '../../../constants'
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
        .post(`${BASE_API_URL}${LOGIN_API}`, data, 
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
        .post(`${BASE_API_URL}${USER_INFO}`, data, 
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
  
    async getUsersList({ commit }, data) {
        return await axios
          .post(`${BASE_API_URL}${USERS_LIST}`, data,
          {
            headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${JwtService.getToken()}`
        }})
          .then((response) => {
            commit("setUsersList", response.data);
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
          .put(`${BASE_API_URL}${UPDATE_USER_INFO}`, data,
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
    async addBalance({ commit }, data) {
        return await axios
          .post(`${BASE_API_URL}${ADD_BALANCE}`, data,
          {
            headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${JwtService.getToken()}`
        }})
          .then((response) => {
            return response.data;
          })
          .catch((error) => {
            if (error.response) {
              return error.response.data
            }
          });
      },
    async removeBalance({ commit }, data) {
        return await axios
          .post(`${BASE_API_URL}${DECREASE_BALANCE}`, data,
          {
            headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${JwtService.getToken()}`
        }})
          .then((response) => {
            return response.data;
          })
          .catch((error) => {
            if (error.response) {
              return error.response.data
            }
          });
      },
    async makeAdmin({ commit }, data) {
        return await axios
          .post(`${BASE_API_URL}${MAKE_ADMIN}`, data,
          {
            headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${JwtService.getToken()}`
        }})
          .then((response) => {
            return response.data;
          })
          .catch((error) => {
            if (error.response) {
              return error.response.data
            }
          });
      }, 
    async blockUser({ commit }, data) {
        return await axios
          .post(`${BASE_API_URL}${BLOCK_USER}`, data,
          {
            headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${JwtService.getToken()}`
        }})
          .then((response) => {
            return response.data;
          })
          .catch((error) => {
            if (error.response) {
              return error.response.data
            }
          });
      },
      
    async handleSwitches({ commit }, data) {
        return await axios
          .post(`${BASE_API_URL}${HANDLE_SWITCHES}`, data,
          {
            headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${JwtService.getToken()}`
        }})
          .then((response) => {
            return response.data;
          })
          .catch((error) => {
            if (error.response) {
              return error.response.data
            }
          });
      }, 
    async unBlockUser({ commit }, data) {
        return await axios
          .post(`${BASE_API_URL}${UN_BLOCK_USER}`, data,
          {
            headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${JwtService.getToken()}`
        }})
          .then((response) => {
            return response.data;
          })
          .catch((error) => {
            if (error.response) {
              return error.response.data
            }
          });
      }, 
      
    async getWithdrawlsList({ commit }, data) {
        return await axios
          .post(`${BASE_API_URL}${GET_WITHDRAWLS}`, data,
          {
            headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${JwtService.getToken()}`
        }})
          .then((response) => {
            commit("setWithdrawlsList", response.data);
            return response.data;
          })
          .catch((error) => {
            if (error.response) {
              return error.response.data
            }
          });
      },
      async getAdvertisesList({ commit }, data) {
        return await axios
          .post(`${BASE_API_URL}${GET_ADVERTISES_LIST}`, data,
          {
            headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${JwtService.getToken()}`
        }})
          .then((response) => {
            commit("setAdvertisesList", response.data);
            return response.data;
          })
          .catch((error) => {
            if (error.response) {
              return error.response.data
            }
          });
      },
      async updateAdsConfig({ commit }, data) {
        return await axios
          .put(`${BASE_API_URL}${UPDATE_ADS_CONFIG}`, data,
          {
            headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${JwtService.getToken()}`
        }})
          .then((response) => {
            commit("setAdsConfig", response.data);
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
    setUsersList(state, payload) {
      state.usersList = payload;
    },
    setWithdrawlsList(state, payload) {
      state.withdrawlsList = payload;
    },
    setAdvertisesList(state, payload) {
      state.advertisesList = payload;
    },
    setAdsConfig(state, payload) {
      state.adsConfig = payload;
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
