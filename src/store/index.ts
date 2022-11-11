import Vue from 'vue'
import Vuex from 'vuex'
import coins from './coins/coins'

Vue.use(Vuex)

const state = {}

export const rootState = state

export default new Vuex.Store({
  state,
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    coins
  }
})
