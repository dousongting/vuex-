// 引入
import * as shop from '@/api/shop'

const state = {
  // 购物车数据
  // {id: 商品id, quantity: 购物车商品数量}
  items:[],
  checkoutStatus: null, // 购物车的结算状态.
  // null 
  // success
  // faild
}
const mutations = {
  pushProductItemToCart (state, payload){
    // console.log(payload)
    state.items.push({
      id: payload.id,
      quantity:1
    })
  },
  incrementItemQuantity (state,payload){
    // console.log(payload)
    const product = state.items.find(item => item.id === payload.id)
    product.quantity++
  },
  setCheckoutStatus (state,payload){
    console.log(payload)
    state.checkoutStatus = payload.status
  },
  setItems(state,payload){
    state.items = payload
  }
}

const actions = {
  checkout({state, commit},products){
    // 备份购物车数据
    const saveCartProducts = [...products]
    // console.log(saveCartProducts,'是是是')
    // 清除支付状态
    commit({
      type:'setCheckoutStatus',
      status:null
    })
    // 清空购物车
    commit('setItems',[])
    // 发起结账请求
    //   成功, 设置成功状态
    //   失败, 设置失败状态,回滚购物车数据
    shop.buyProducts(
      products,
      // 成功的回调
      () => {
        // 修改状态
        commit({
          type:'setCheckoutStatus',
          status:'successful'
        })
      },
      // 失败的回调
      () => {
        // 修改状态
        commit({
          type:'setCheckoutStatus',
          status:'failed'
        }),
        //还原购物车
        commit('setItems',saveCartProducts)
      }
    )
  },
  addProductTocart ({state,commit},product){
    console.log(product,'------')
    // 如果商品的数量>0 执行添加购物车逻辑
    //    如果购物车中已经存在该商品,则让该商品的数量+1
    //    如果没有 则添加商品到购物车
    // 最后,让商品本身的数量-1
    if(product.inventoty){
      const cartItem = state.items.find(item => item.id === product.id)
      if(cartItem) {
        // 如果购物车中已经存在该商品，则让该商品的数量+1 
        commit({
          type: 'incrementItemQuantity',
          id: product.id
        })
      }else {
        // 如果没有,则添加商品到购物车
        commit({
          type: 'pushProductItemToCart',
          id: product.id
        })
      }
      // 不管有没有 商品 我们都要让商品的数量-1
      // root :true  当我们在其他的模块中使用别的模块的mutation 时,要加上root TRUE
      // 这样才会去寻找其他模块的 不然不管我们怎么写 都不会起作用
      commit('products/decrementProductInventoty',{ id: product.id }, { root: true })
    }else {
      // 商品的库存不足了
      console.log('商品的库存已经为空了,请及时补充')
    }
  }
}
const getters = {
  // 过滤
  //rootState : 根部的state 状态
  cartProducts(state,getters,rootState) {
    return state.items.map((product) => {
      const prod = rootState.products.all.find(item => item.id === product.id)
      // console.log(prod)
      return {
        id: prod.id,
        title: prod.title,
        price: prod.price,
        quantity: product.quantity
      }
    })
  },
  totalPrice (state, getters) {
    // reduce : reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
    // 参数1: total (必传) 初始值或者计算结束后的返回值
    // 参数2: currentValue (必传) 当前元素
    // 参数3: currentIndex(可选) 短期元素的索引
    // 参数4: arr(可选) 当前元素所属的数组对象
    // 返回值: 返回计算的结果 
    return getters.cartProducts.reduce((total,prod) => {
      // console.log(prod,'[[[[ ')
      return total + prod.price * prod.quantity
    },0) 
  }

}

export default {
  //命名空间
  namespaced:true,
  state,
  mutations,
  actions,
  getters
}