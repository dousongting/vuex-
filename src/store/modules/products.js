import * as shop from '@/api/shop'

const state = {
  all:[]
}
const mutations = {
  setProducts (state,payload){
    // console.log(payload)
    state.all = payload.products
  },
  decrementProductInventoty (state, payload){
    // console.log(payload)
    const product = state.all.find (item => item.id === payload.id)
    product.inventoty--
  }
}

const actions = {
  // 我们要在actions 中发起异步请求 提交mutation 来修改state
  // 组件发起actions actions 执行异步操作 异步操作执行成功  然后提交mutation mutation当中去修改state state 发生改变 然后我们组件随之更新
  async getAllProducts ({commit}) {
    const products = await shop.getAllProducts()
    // console.log(products)
    commit({
      type:'setProducts',
      products
    })

  }
}

const getters = {}

export default {
  //命名空间
  namespaced:true,
  state,
  mutations,
  actions,
  getters
}