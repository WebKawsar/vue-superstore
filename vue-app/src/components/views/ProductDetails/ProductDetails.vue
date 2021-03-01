<template>
    <div v-if="product" class="row">
        <div class="col-md-6">
            <img :src="product.photo" alt="">
        </div>
        <div class="col-md-6">
            <h4>{{product.title}}</h4>
            <p>{{product.description}}</p>
           
            <div class="card-footer">
                <span>{{product.price}}</span>
                <button @click="addToCart(product)" class="float-right btn btn-primary">Add to Cart</button>
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
                product: null
            }
        },
        mounted(){
            this.fetchProductDetails()
        },
        methods: {
            fetchProductDetails(){
                axios.get(`http://localhost:3000/item/${this.$route.params.id}`)
                .then(response => {
                    
                    this.product = response.data;
                })
            },
            addToCart(product){
                this.$store.commit("addToCart", product)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>