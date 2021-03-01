<template>
  <div>
    

    <Header @searchByKeyword="search"></Header>
    <div class="container">
      <div class="row">
        <div class="col-md-9">
          
           <router-view></router-view>
          
        </div>
        <div class="col-md-3">
          <Cart @removeFromCart="removeCart" :carts="carts"></Cart>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Header from './components/Header/Header.vue'
import Cart from "./components/Cart/Cart";
import FakeData from "./FakeData/FakeData";

  export default {
    data() {
      return {
        products: [],
        carts: []
      }

    },
    components: {
      Header,
      Cart
    },
    mounted(){
      this.products = FakeData
    },
    methods: {
      addToCart(product){
        this.carts.push(product)
      },
      removeCart(index){
        
        this.carts.splice(index, 1)
      },
      search(keyword){
        this.products = FakeData.filter(product => product.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1 )
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>