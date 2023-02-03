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
  UPDATE_MIN_AMOUNT,
  UPDATE_SENDING_TIME_HASH,
  UPDATE_EARNINGS_STOP,
  GET_HOME_PAGE,
  UPDATE_COMMISSION_RULE,
  UPDATE_RULES_ADS,
  GET_BUSINESSES_LIST,
  GET_BUSINESS_BY_REQUESTER,
  GET_BUSINESS_INFO,
  BUSINESS_APPROVE,
  BUSINESS_DENY,
  GET_PACKAGES_LIST,
  CREATE_PACKAGES,
  UPDATE_PACKAGES,
  DELETE_PACKAGES,
  UPDATE_SELLS_VS_BUYS,
  UPDATE_P2P_SELLS_FEE,
  DELETE_ADMIN,
  GET_BUSINESSES_CONFIG,
  UPDATE_BUSINESSES_CONFIG,
  UPDATE_BUSINESS_TYPE_NAME
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
    userProfileImg: null,
    userProfileName: null,
    isAuthenticated: !!JwtService.getToken(),
  },
  getters: {
    getUserId(state) {
      return state.userId
    },
    getUserInfo(state) {
      return state.userInfo
    },
    getUserProfileImg(state) {
      return state.userProfileImg
    },
    getUserProfileName(state) {
      return state.userProfileName
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
    getBusinessesList(state) {
      return state.businessesList
    },
    getBusinessInfo(state) {
      return state.businessInfo
    },
    getBusinessRoute(state) {
      return state.businessRoute
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
          commit('setUserRole', response.data.role)
          commit('setUserProfileImg', response.data.avatar)
          commit('setUserProfileName', response.data.username)
          commit('setUserDeleted', response.data.is_user_deleted)

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
    async updateMinAmount({ commit }, data) {
      return await axios
        .put(`${BASE_API_URL}${UPDATE_MIN_AMOUNT}`, data, {
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
    async getBusinessesList({ commit }, data) {
      return await axios
        .post(`${BASE_API_URL}${GET_BUSINESSES_LIST}`, data, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${JwtService.getToken()}`,
          },
        })
        .then((response) => {
          commit('setBusinessesList', response.data)
          return response.data
        })
        .catch((error) => {
          if (error.response) {
            return error.response.data
          }
        })
    },
    async getBusinessByRequester({ commit }, data) {
      return await axios
        .post(`${BASE_API_URL}${GET_BUSINESS_BY_REQUESTER}`, data, {
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
    async getBusinessInfo({ commit }, data) {
      return await axios
        .post(`${BASE_API_URL}${GET_BUSINESS_INFO}`, data, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${JwtService.getToken()}`,
          },
        })
        .then((response) => {
          commit('setBusinessInfo', response.data)
          return response.data
        })
        .catch((error) => {
          if (error.response) {
            return error.response.data
          }
        })
    },
    async setBusinessModalRoute({ commit }, data) {
      await commit('setBusinessRoute', data)
    },
    async approveBusiness({ commit }, data) {
      return await axios
        .put(`${BASE_API_URL}${BUSINESS_APPROVE}`, data, {
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
    async denyBusiness({ commit }, data) {
      return await axios
        .put(`${BASE_API_URL}${BUSINESS_DENY}`, data, {
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
    async getPackagesList({ commit }, data) {
      return await axios
        .get(`${BASE_API_URL}${GET_PACKAGES_LIST}`, {
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
    async createPackage({ commit }, data) {
      return await axios
        .post(`${BASE_API_URL}${CREATE_PACKAGES}`, data, {
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
    async updatePackages({ commit }, data) {
      return await axios
        .put(`${BASE_API_URL}${UPDATE_PACKAGES}`, data, {
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
    async deletePackage({ commit }, data) {
      return await axios
        .post(`${BASE_API_URL}${DELETE_PACKAGES}`, data, {
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
    async updateSellsVsBuys({ commit }, data) {
      return await axios
        .put(`${BASE_API_URL}${UPDATE_SELLS_VS_BUYS}`, data, {
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
    async updateP2PSellsFee({ commit }, data) {
      return await axios
        .put(`${BASE_API_URL}${UPDATE_P2P_SELLS_FEE}`, data, {
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
    async deleteAdmin({ commit }, data) {
      return await axios
        .post(`${BASE_API_URL}${DELETE_ADMIN}`, data, {
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
    async getBusinessesConfig({ commit }, data) {
      return await axios
        .get(`${BASE_API_URL}${GET_BUSINESSES_CONFIG}`, {
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
    async updateBusinessesConfig({ commit }, data) {
      return await axios
        .put(`${BASE_API_URL}${UPDATE_BUSINESSES_CONFIG}`, data, {
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
    async updateBusinessTypeName({ commit }, data) {
      return await axios
        .put(`${BASE_API_URL}${UPDATE_BUSINESS_TYPE_NAME}`, data, {
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
      localStorage.clear()
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
    setUserRole(state, payload) {
      localStorage.setItem('userRole', payload)
      state.userRole = payload
    },
    setUserDeleted(state, payload) {
      localStorage.setItem('userDeleted', payload)
      state.userDeleted = payload
    },
    setUserInfo(state, payload) {
      state.userInfo = payload
    },
    setUserProfileImg(state, payload) {
      localStorage.setItem('userProfileImg', payload)
      state.userProfileImg = payload
    },
    setUserProfileName(state, payload) {
      localStorage.setItem('userProfileName', payload)
      state.userProfileName = payload
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
    setBusinessesList(state, payload) {
      state.businessesList = payload
    },
    setBusinessInfo(state, payload) {
      state.businessInfo = payload
    },
    setBusinessRoute(state, payload) {
      state.businessRoute = payload
    },
    resetStateOnLogOut(state) {
      JwtService.destroyToken()
      state.user = null
      state.jwtToken = null
      state.isAuthenticated = false
    },
  },
}
