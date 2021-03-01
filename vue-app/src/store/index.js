const storage = {
    state: {
        inventory: [],
        carts: []
    },
    getters: {
        getInventories(state){
            return state.inventory;
        },
        getCarts(state){
            return state.carts;
        }
    },
    mutations: {
        addToCart(state, payload){
            state.carts.push(payload);
        }, 
        removeFromCart(state, payload){
            state.carts.splice(payload, 1);
        },
        setInventory(state, payload){
            state.inventory = payload;
        },
        clearCart(state){
            state.carts = [];
        }
    }
}


export default storage;