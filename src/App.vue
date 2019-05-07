<template>
  <div id="app">
    <h1>shopping cart example</h1>
    <!-- <HelloWorld/> -->
    <!-- <hr> -->
    <!-- <Foo/> -->
    <!-- <hr> -->
    <!-- <Bar/> -->
    <Product/>
    <hr>
    <Cart/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Foo from './components/Foo'
// import Bar from './components/Bar'
import Cart from './components/cart'
import Product from './components/product'

export default {
  name: 'app',
  components: {
    // HelloWorld,
    // Foo,
    // Bar,
    Cart,
    Product
  }
}
</script>

<style>

</style>
