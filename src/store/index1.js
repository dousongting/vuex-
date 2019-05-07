import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 10,
    message: 'hello vuex',
    todos: [
      {id: 1, text: '吃饭', done: true},
      {id: 2, text: '睡觉', done: true},
      {id: 3, text: '打豆豆', done: false},
      {id: 4, text: '写代码', done: false}
    ]
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  // getter store 的计算属性
  getters : {
    remaining: state => {
      return state.todos.filter(item => item.done === false).length
    },
    // 函数 getters 也可以返回一个函数
    getTodoById: state => {
      return id => {
        return state.todos.find(item => item.id === id)
      }
    }
  }
})

export default store