<template>
  <div class="product">
    <h2>products</h2>
    <ul>
      <li v-for='(item,index) in products' :key='index'>
        <span>{{item.title}}</span>
        -
        <span>{{item.price}}</span>
        <br>
        <button @click="addProductTocart(item)" :disabled="item.inventoty === 0">Add to cart</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState ,mapActions} from 'vuex'
export default {
  name:"",
  components: {},
  props: {},
  data() {
    return {
      msg:'llll'
    };
  },
  created() {
    this.$store.dispatch('products/getAllProducts')
    console.log(this.msg,',=====',this.products)
  },
  methods: {
    ...mapActions('cart',['addProductTocart'])
    
  },
  computed:{
    ...mapState('products',{
      products: 'all'
    }),
  }
};
</script>

<style lang="less" scoped>

</style>
