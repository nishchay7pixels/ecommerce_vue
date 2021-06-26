import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

let localCart = window.localStorage.getItem('cart');
let wishList = window.localStorage.getItem('wishlist');

export default new Vuex.Store({

    state: {
        cart: localCart ? JSON.parse(localCart) : [],
        wishlist: wishList ? JSON.parse(wishList) : []
    },
    mutations: {
        wishlistItem(state, item){
            let found = state.wishlist.find(product => product.productId == item.productId);
            if(found){
                let index = state.wishlist.findIndex(product => product.productId == item.productId);
                state.wishlist.splice(index, 1);
            }else{
                state.wishlist.push(item);
            }
            this.commit('savaToWishlist');
        },
        addToCart(state, item) {
            let found = state.cart.find(product => product.productId == item.productId); //find product using id
            if (found) {
                //if product is found increase quantity
                if(parseInt(item.productQuantity)>1){
                    console.log("Greater than 1");
                    found.productQuantity=parseInt(found.productQuantity)+parseInt(item.productQuantity);
                }else{
                    console.log("Equal to 1");
                    found.productQuantity++;
                }
                
            } else {
                //else add the item to cart
                console.log("New Item added");
                state.cart.push(item);
            }
            this.commit('savaToLocal');
        },
        deleteFromCart(state, pid) {
            console.log("QuantityLeft "+state.cart.find(product => product.productId == pid).productQuantity);
            let index = state.cart.findIndex(product => product.productId == pid);
            state.cart.splice(index, 1);
            this.commit('savaToLocal');
        },
        reduceQuantity(state,pid){
            let found = state.cart.find(product => product.productId == pid);
            found.productQuantity--;
            this.commit('savaToLocal');
        },
        savaToLocal(state) {
            window.localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        savaToWishlist(state) {
            window.localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
        },
    },
    computed: {

    }
})