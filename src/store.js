import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

export default new Vuex.Store({
    
    state: {
        cart:[]
    },
    mutations:{
        addToCart(state, item){
            let found = state.cart.find(product => product.productId == item.productId); //find product using id
            if(found){ 
                //if product is found increase quantity
                found.productQuantity++;
            }else{ 
                //else add the item to cart
                state.cart.push(item);
            }
        }
    },
    computed:{

    }
})