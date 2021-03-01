import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Vue from 'vue';
import vueRouter from "vue-router";
import Vuex from "vuex";
import App from './App.vue';
import { routes } from "./routes/index";
import storage from "./store/index";


Vue.use(Vuex);
const store = new Vuex.Store(storage);

Vue.use(vueRouter);



const router = new vueRouter({
  mode: "history",
  routes
})

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
