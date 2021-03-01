import Inventory from "../components/views/Inventory/Inventory.vue";
import ProductDetails from "../components/views/ProductDetails/ProductDetails.vue";


export const routes = [
    {
        path: "/",
        component: Inventory
    },
    {
        path: "/prod/:id",
        component: ProductDetails
    }
]