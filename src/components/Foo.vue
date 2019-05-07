<template>
  <div class="foo">
    <h3>FOO组件</h3>
    <p>{{count}}</p>
    <p>{{message}}</p>
    <p>未完成任务数量:{{remainingA}}个</p>
    <p>第2项任务是:{{getTodoByIdA(2).text}}</p>
    <button @click="increment">增加</button>
  </div>
</template>

<script>
// 引入mapState
import {mapState, mapGetters} from 'vuex'
export default {
  name: 'Foo',
  data () {
    return {
    }
  },
  methods: {
    increment () {
    //  this.$store.state.count++
    //提交mutation
        this.$store.commit('increment')
    }
  },
  // 计算属性
  // computed: {
  //   count () {
  //     //访问store 中的count
  //     return this.$store.state.count;

  //   }
  // }
  // 当我们需要访问store中的多个状态时候 使用辅助函数 mapState 映射
  // 对象展开运算符
  // ...mapState
  computed: {
    ...mapState({
      count: state =>state.count,
      // count: 'count',
      // this.message = this.$store.state.message,
      //等价于下面的
      message: 'message',
      // remaining: state => {
      //   return state.todos.filter(item => item.done === false).length
      // }

    }),
    ...mapGetters({
      remainingA: 'remaining',
      getTodoByIdA: 'getTodoById'
    })
  }
}
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>