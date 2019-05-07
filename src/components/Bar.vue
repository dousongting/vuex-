<template>
  <div class="bar">
    <h3>Bar组件</h3>
    <p>{{countA}}</p>
    <p>{{message}}</p>
    <p>{{remaining}}</p>
    <p>{{getTodoById(4).text}}</p>
    <!-- <p>{{$store.state.count}}</p> -->
    <button @click="increment">增加</button>
  </div>
</template>

<script>
// 引入mapState 
import {mapState, mapGetters} from 'vuex'

export default {
  name:"Bar",
  components: {},
  props: {},
  data() {
    return {
    };
  },
  created() {},
  methods: {
    increment () {
      // 不要在组件中直接修改容器中的数据
      //为什么: 因为无法被调试工具记录到
      // this.$store.state.count++
      // 提交mutation
      this.$store.commit('increment')
    }
  },
  //计算属性
  computed: {
    // 自己的message
    message () {
      return 'hello Bar'
    },
    ...mapState({
      countA:'count',
      // remaining: state => {
      //   return state.todos.filter(item => item.done === false).length
      // }
    }),
    ...mapGetters(['remaining','getTodoById'])
  }
};
</script>

<style lang="less" scoped>

</style>


