<template>
    <div v-if="!isLoading" class="row">
        <div class="col-md-4" v-for="product in products" :key="product.id">
            <div class="card">
                <router-link :to="{ path: `/prod/${product.id}`}">
                    <img :src="product.photo" class="card-img-top" alt="...">
                </router-link>
                <div class="card-body">
                    <h5 class="card-title">{{product.title}}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    
                    <button @click="addToCart(product)" class="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    </div>
    <h1 v-else>Loading....</h1>
</template>

<script>
import axios from "axios";


    export default {
        data(){
            return {
                isLoading: true
            }
        },
        computed: {
            products(){
                return this.$store.getters.getInventories
            }
        },
        mounted(){
            this.fetchInventory();
        },
        methods: {
            addToCart(product){
                this.$store.commit('addToCart', product)
            },
            fetchInventory(){
                axios.get("http://localhost:3000/items")
                .then(response => {
                    
                    this.$store.commit("setInventory", response.data)
                    this.isLoading = false;
                })
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>