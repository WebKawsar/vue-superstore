<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <router-link class="navbar-brand" :to="{ path: '/'}">Super Store</router-link>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <form class="d-flex" @submit.prevent="search">
                        <input v-model="keyword" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>

    </div>
</template>

<script>
import axios from "axios";


    export default {
        data(){
            return {
                keyword: ""
            }
        },
        methods: {
            search(){
                axios.get("http://localhost:3000/search/" + this.keyword)
                .then( response => {

                    this.$store.commit("setInventory", response.data)
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>