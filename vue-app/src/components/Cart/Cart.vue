<template>
    <div>
        <ul class="list-group">
            <li class="list-group-item">
                <span class="name">Name</span>
                <span class="price float-right">Price</span>
            </li>
            <hr>
            <li class="list-group-item" v-for="(cart, index) in carts" :key="index">
                <span class="name">{{cart.title}} <span @click="removeItem(index)" class="btn btn-danger">-</span></span>
                <span class="price float-right">{{cart.price}}</span>
            </li>
            <hr>
            <li class="list-group-item">
                <span class="name">Total</span>
                <span class="price float-right">${{total}}</span>
            </li>
            <li v-if="carts.length" class="list-group-item">
                <button @click="checkout" class="btn btn-success btn-block">Checkout</button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return {

            }
        },
        
        computed: {
            total(){
               return this.carts.reduce((total, cart) => parseFloat(cart.price) + total, 0).toFixed(2)
            },
            carts(){
                return this.$store.getters.getCarts
            }
        },
        methods: {
            removeItem(index){
                this.$store.commit("removeFromCart", index)
            },
            checkout(){

                if(confirm("Are you sure you want to checkout")){
                    this.$store.commit("clearCart")
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>