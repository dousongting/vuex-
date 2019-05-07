import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutation from './mutation'
import getters from './getters'
import actions from './actions'

import products from './modules/products'
import cart from './modules/cart'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutation,
  getters,
  actions,
  modules: {
    products,
    cart
  }
})