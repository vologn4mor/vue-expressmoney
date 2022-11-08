import Vue from 'vue'
import Vuex from 'vuex'
import coins from './coins/coins'

Vue.use(Vuex)

export default new Vuex.Store({
  state () {
    return {}
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    coins
  }
})
