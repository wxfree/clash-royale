import Vuex from 'vuex'
import Vue from 'vue'
// import axios from 'axios'
Vue.use(Vuex)
const state = {
  cards: [],
  num: 1
}

const mutations = {
  addCard (state, cards) {
    state.cards = cards
  },
  addNum (state) {
    state.num += 1
  }
}
const actions = {}
export default new Vuex.Store({
  state,
  mutations,
  actions
})
