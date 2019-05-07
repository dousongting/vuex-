<template>
  <div class="cart">
    <h2>cart</h2>
    <p v-show="!cartProducts.length">Please add some products to cart.</p>
    <ul>
      <li v-for="(item,index) in cartProducts" :key="index">
        <span>{{item.title}}</span>
        -
        <span>{{item.price}}</span>
        x
        <span>{{item.quantity}}</span>
      </li>
    </ul>
    <p>Total:{{totalPrice}}</p>
    <button :disabled="!cartProducts.length" @click="checkout(cartProducts)">Checkout</button>
    <p v-show="checkoutStatus">Checkout {{checkoutStatus}}.</p>
  </div>
</template>

<script>
import {mapState,mapGetters,mapActions} from 'Vuex'
export default {
  name:"",
  components: {},
  props: {},
  data() {
    return {

    };
  },
  created() {},
  methods: {
    ...mapActions('cart',['checkout'])
  },
  computed: {
    ...mapState('cart',['checkoutStatus']),
    ...mapGetters('cart',['cartProducts','totalPrice'])
  }
};
</script>

<style lang="less" scoped>

</style>
