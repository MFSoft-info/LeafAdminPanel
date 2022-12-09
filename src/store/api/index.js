import JwtService from '../jwt'

import axios from 'axios'
import {
  BASE_API_URL,
  LOGIN_API,
  USER_INFO,
  USERS_LIST,
  UPDATE_USER_INFO,
  GET_USER_BY_USERNAME,
  ADD_BALANCE,
  BLOCK_USER,
  DECREASE_BALANCE,
  MAKE_ADMIN,
  HANDLE_SWITCHES,
  UN_BLOCK_USER,
  GET_WITHDRAWLS,
  GET_WITHDRAWLS_INFO,
  WITHDRAWL_APPROVE,
  WITHDRAWL_DENY,
  GET_ADVERTISES_LIST,
  GET_ADVERTISES_INFO,
  ADVERTISE_DENY,
  ADVERTISE_APPROVE,
  GET_TEAM,
  GET_TEAM_BY_USERNAME,
  GET_ADVERTISE_BY_REQUESTER,
  GET_WITHDRAWL_BY_REQUESTER,
  GET_ADS_SETTINGS,
  UPDATE_ADS_CONFIG,
  GET_P2P_SETTINGS,
  GET_SPLIT_SETTINGS,
  UPDATE_SPLIT_SETTINGS,
  UPDATE_LEAL_VALUE,
  UPDATE_SELL_WITHDRAWAL_MIN_AMOUNT,
  UPDATE_SENDING_TIME_HASH,
  UPDATE_EARNINGS_STOP,
  GET_HOME_PAGE,
  UPDATE_COMMISSION_RULE,
  UPDATE_RULES_ADS,
} from '../../../constants'
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
      return state.userId
    },
    getUserInfo(state) {
      return state.userInfo
    },
    getAdvertiseInfo(state) {
      return state.advertiseInfo
    },
    getWithdrawlInfo(state) {
      return state.withdrawlInfo
    },
    getAdsRoute(state) {
      return state.adsRoute
    },
    getWithdrawlsRoute(state) {
      return state.withdrawlsRoute
    },
    isUserAuthenticated(state) {
      return state.isAuthenticated
    },
  },
  actions: {
    async signInUser({ commit }, data) {
      return await axios
        .post(`${BASE_API_URL}${LOGIN_API}`, data, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          commit('setSignInUsers', response.data)
          commit('setUserId', response.data.iduser)
          return response.data
        })
        .catch((error) => {
          if (error.response) {
            return error.response.data
          }
        })
    },
    async getUserProfile({ commit }, data) {
      return await axios
        .post(`${BASE_API_URL}${USER_INFO}`, data, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${JwtService.getToken()}`,
          },
        })
        .then((response) => {
          commit('setUserInfo', response.data)
          return response.data
        })
        .catch((error) => {
          if (error.response) {
            return error.response.data
          }
        })
    },

    async getUsersList({ commit }, data) {
      return await axios
        .post(`${BASE_API_URL}${USERS_LIST}`, data, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${JwtService.getToken()}`,
          },
        })
        .then((response) => {
          commit('setUsersList', response.data)
          return response.data
        })
        .catch((error) => {
          if (error.response) {
            return error.response.data
          }
        })
    },
    async updateUserProfile({ commit }, data) {
      return await axios
        .put(`${BASE_API_URL}${UPDATE_USER_INFO}`, data, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${JwtService.getToken()}`,
          },
        })
        .then((response) => {
          commit('setUserInfo', response.data)
          return response.data
        })
        .catch((error) => {
          if (error.response) {
            return error.response.data
          }
        })
    },
    async addBalance({ commit }, data) {
      return await axios
        .post(`${BASE_API_URL}${ADD_BALANCE}`, data, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${JwtService.getToken()}`,
          },
        })
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          if (error.response) {
            return error.response.data
          }
        })
    },
    async removeBalance({ commit }, data) {
      return await axios
        .post(`${BASE_API_URL}${DECREASE_BALANCE}`, data, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${JwtService.getToken()}`,
          },
        })
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          if (error.response) {
            return error.response.data
          }
        })
    },
    async makeAdmin({ commit }, data) {
      return await axios
        .post(`${BASE_API_URL}${MAKE_ADMIN}`, data, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${JwtService.getToken()}`,
          },
        })
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          if (error.response) {
            return error.response.data
          }
        })
    },
    async blockUser({ commit }, data) {
      return await axios
        .post(`${BASE_API_URL}${BLOCK_USER}`, data, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${JwtService.getToken()}`,
          },
        })
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          if (error.response) {
            return error.response.data
          }
        })
    },

    async handleSwitches({ commit }, data) {
      return await axios
        .post(`${BASE_API_URL}${HANDLE_SWITCHES}`, data, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${JwtService.getToken()}`,
          },
        })
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          if (error.response) {
            return error.response.data
          }
        })
    },
    async unBlockUser({ commit }, data) {
      return await axios
        .post(`${BASE_API_URL}${UN_BLOCK_USER}`, data, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${JwtService.getToken()}`,
          },
        })
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          if (error.response) {
            return error.response.data
          }
        })
    },

    async getWithdrawlList({ commit }, data) {
      return await axios
        .post(`${BASE_API_URL}${GET_WITHDRAWLS}`, data, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${JwtService.getToken()}`,
          },
        })
        .then((response) => {
          commit('setWithdrawlsList', response.data)
          return response.data
        })
        .catch((error) => {
          if (error.response) {
            return error.response.data
          }
        })
    },
    async getWithdrawlInfo({ commit }, data) {
      return await axios
        .post(`${BASE_API_URL}${GET_WITHDRAWLS_INFO}`, data, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${JwtService.getToken()}`,
          },
        })
        .then((response) => {
          commit('setWithdrawlInfo', response.data)

          return response.data
        })
        .catch((error) => {
          if (error.response) {
            return error.response.data
          }
        })
    },
    async getWithdrawlByRequester({ commit }, data) {
      return await axios
        .post(`${BASE_API_URL}${GET_WITHDRAWL_BY_REQUESTER}`, data, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${JwtService.getToken()}`,
          },
        })
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          if (error.response) {
            return error.response.data
          }
        })
    },
    async approveWithdrawl({ commit }, data) {
      return await axios
        .post(`${BASE_API_URL}${WITHDRAWL_APPROVE}`, data, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${JwtService.getToken()}`,
          },
        })
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          if (error.response) {
            return error.response.data
          }
        })
    },
    async denyWithdrawl({ commit }, data) {
      return await axios
        .post(`${BASE_API_URL}${WITHDRAWL_DENY}`, data, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${JwtService.getToken()}`,
          },
        })
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          if (error.response) {
            return error.response.data
          }
        })
    },
    async getAdvertisesList({ commit }, data) {
      return await axios
        .post(`${BASE_API_URL}${GET_ADVERTISES_LIST}`, data, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${JwtService.getToken()}`,
          },
        })
        .then((response) => {
          commit('setAdvertisesList', response.data)
          return response.data
        })
        .catch((error) => {
          if (error.response) {
            return error.response.data
          }
        })
    },
    async getAdvertiseInfo({ commit }, data) {
      return await axios
        .post(`${BASE_API_URL}${GET_ADVERTISES_INFO}`, data, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${JwtService.getToken()}`,
          },
        })
        .then((response) => {
          commit('setAdevertiseInfo', response.data)
          return response.data
        })
        .catch((error) => {
          if (error.response) {
            return error.response.data
          }
        })
    },
    async getAdvertiseByRequester({ commit }, data) {
      return await axios
        .post(`${BASE_API_URL}${GET_ADVERTISE_BY_REQUESTER}`, data, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${JwtService.getToken()}`,
          },
        })
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          if (error.response) {
            return error.response.data
          }
        })
    },
    async approveAdvertise({ commit }, data) {
      return await axios
        .post(`${BASE_API_URL}${ADVERTISE_APPROVE}`, data, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${JwtService.getToken()}`,
          },
        })
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          if (error.response) {
            return error.response.data
          }
        })
    },
    async denyAdvertise({ commit }, data) {
      return await axios
        .post(`${BASE_API_URL}${ADVERTISE_DENY}`, data, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${JwtService.getToken()}`,
          },
        })
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          if (error.response) {
            return error.response.data
          }
        })
    },
    async getTeam({ commit }, data) {
      return await axios
        .get(`${BASE_API_URL}${GET_TEAM}`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${JwtService.getToken()}`,
          },
        })
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          if (error.response) {
            return error.response.data
          }
        })
    },
    async getTeamByUserName({ commit }, data) {
      return await axios
        .post(`${BASE_API_URL}${GET_TEAM_BY_USERNAME}`, data, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${JwtService.getToken()}`,
          },
        })
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          if (error.response) {
            return error.response.data
          }
        })
    },
    async setAdsModalRoute({ commit }, data) {
      await commit('setAdsRoute', data)
    },
    async setWithdrawlsModalRoute({ commit }, data) {
      await commit('setWithdrawlsRoute', data)
    },
    async getP2PSettings({ commit }, data) {
      return await axios
        .get(`${BASE_API_URL}${GET_P2P_SETTINGS}`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${JwtService.getToken()}`,
          },
        })
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          if (error.response) {
            return error.response.data
          }
        })
    },
    async getAdsSettings({ commit }, data) {
      return await axios
        .get(`${BASE_API_URL}${GET_ADS_SETTINGS}`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${JwtService.getToken()}`,
          },
        })
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          if (error.response) {
            return error.response.data
          }
        })
    },
    async updateAdsConfig({ commit }, data) {
      return await axios
        .put(`${BASE_API_URL}${UPDATE_ADS_CONFIG}`, data, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${JwtService.getToken()}`,
          },
        })
        .then((response) => {
          commit('setAdsConfig', response.data)
          return response.data
        })
        .catch((error) => {
          if (error.response) {
            return error.response.data
          }
        })
    },
    async getSplitSettings({ commit }, data) {
      return await axios
        .get(`${BASE_API_URL}${GET_SPLIT_SETTINGS}`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${JwtService.getToken()}`,
          },
        })
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          if (error.response) {
            return error.response.data
          }
        })
    },
    async updateSplitSettings({ commit }, data) {
      return await axios
        .put(`${BASE_API_URL}${UPDATE_SPLIT_SETTINGS}`, data, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${JwtService.getToken()}`,
          },
        })
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          if (error.response) {
            return error.response.data
          }
        })
    },
    async updateLealValue({ commit }, data) {
      return await axios
        .put(`${BASE_API_URL}${UPDATE_LEAL_VALUE}`, data, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${JwtService.getToken()}`,
          },
        })
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          if (error.response) {
            return error.response.data
          }
        })
    },
    async updateSellWithdrawalMinAmount({ commit }, data) {
      return await axios
        .put(`${BASE_API_URL}${UPDATE_SELL_WITHDRAWAL_MIN_AMOUNT}`, data, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${JwtService.getToken()}`,
          },
        })
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          if (error.response) {
            return error.response.data
          }
        })
    },
    async updateSendingTimeHash({ commit }, data) {
      return await axios
        .put(`${BASE_API_URL}${UPDATE_SENDING_TIME_HASH}`, data, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${JwtService.getToken()}`,
          },
        })
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          if (error.response) {
            return error.response.data
          }
        })
    },
    async updateEarningsStop({ commit }, data) {
      return await axios
        .put(`${BASE_API_URL}${UPDATE_EARNINGS_STOP}`, data, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${JwtService.getToken()}`,
          },
        })
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          if (error.response) {
            return error.response.data
          }
        })
    },
    async getHomePage({ commit }, data) {
      return await axios
        .get(`${BASE_API_URL}${GET_HOME_PAGE}`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${JwtService.getToken()}`,
          },
        })
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          if (error.response) {
            return error.response.data
          }
        })
    },
    async updateCommissionRule({ commit }, data) {
      return await axios
        .post(`${BASE_API_URL}${UPDATE_COMMISSION_RULE}`, data, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${JwtService.getToken()}`,
          },
        })
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          if (error.response) {
            return error.response.data
          }
        })
    },
    async updateRulesAds({ commit }, data) {
      return await axios
        .post(`${BASE_API_URL}${UPDATE_RULES_ADS}`, data, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${JwtService.getToken()}`,
          },
        })
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          if (error.response) {
            return error.response.data
          }
        })
    },
    async getUserByUsername({ commit }, data) {
      return await axios
        .post(`${BASE_API_URL}${GET_USER_BY_USERNAME}`, data, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${JwtService.getToken()}`,
          },
        })
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          if (error.response) {
            return error.response.data
          }
        })
    },
    async logOut({ commit }) {
      await commit('resetStateOnLogOut')
    },
    routes({ commit }, payload) {
      commit('setroutes', payload)
    },
  },
  mutations: {
    setSignInUsers(state, payload) {
      state.user = payload
      JwtService.saveToken(payload.token)
      state.isAuthenticated = true
    },
    setUserId(state, payload) {
      localStorage.setItem('userId', payload)
      state.userId = payload
    },
    setUserInfo(state, payload) {
      state.userInfo = payload
    },
    setAdevertiseInfo(state, payload) {
      state.advertiseInfo = payload
    },
    setWithdrawlInfo(state, payload) {
      state.withdrawlInfo = payload
    },
    setUsersList(state, payload) {
      state.usersList = payload
    },
    setWithdrawlsList(state, payload) {
      state.withdrawlsList = payload
    },
    setAdvertisesList(state, payload) {
      state.advertisesList = payload
    },
    setAdsConfig(state, payload) {
      state.adsConfig = payload
    },
    setroutes(state, payload) {
      state.route = payload
    },
    setAdsRoute(state, payload) {
      state.adsRoute = payload
    },
    setWithdrawlsRoute(state, payload) {
      state.withdrawlsRoute = payload
    },
    resetStateOnLogOut(state) {
      JwtService.destroyToken()
      state.user = null
      state.jwtToken = null
      state.isAuthenticated = false
    },
  },
}
