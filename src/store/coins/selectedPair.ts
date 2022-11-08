export default {
  namespaced: true,
  state () {
    return {
      pair: {
        give: 'Bitcoin',
        get: 'Monobank',
        course: 820959.1751,
        rezerv: 30000,
        min: 2500,
        max: 29000
      }
    }
  },
  getters: {
    activeGiveCoin (state: any) {
      return state.pair.give
    },
    activeGetCoin (state: any) {
      return state.pair.get
    },
    getPair (state: any) {
      return state.pair.get
    }
  }
}
