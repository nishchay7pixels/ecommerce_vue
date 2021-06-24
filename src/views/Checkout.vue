<template>
  <div class="checkout">
    <Navbar />
    <div class="container" v-if="!emptyCart">
      <br />
      <div class="row">
        <div class="col-md-8 col-sm-12">
          <div class="header"><h4>Cart Items</h4></div>
          <div class="row-cols-sm-1 row-cols-md-2 g-3">
            <table class="table">
              <thead>
                <tr class="row">
                  <th class="col-2"></th>
                  <th class="col-4">Name</th>
                  <th class="col-2">Price</th>
                  <th class="col-2">Quantity</th>
                  <th class="col-2"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(product, index) in cart" class="row" :key="index">
                  <td class="col-2">
                    <img :src="product.productImage" style="width: 50px" />
                  </td>
                  <td class="col-4">{{ product.productName }}</td>
                  <td class="col-2">{{ product.productPrice }}</td>
                  <td class="col-2">{{ product.productQuantity }}</td>
                  <td class="col-2">
                    <button
                      @click="deleteProduct(product)"
                      class="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col">
          <div class="container bill-layout">
            <div class="body">
              <h4 style="margin-top: ">
                Subtotal({{ totalQuantity }} items): ${{ total.toFixed(2) }}
              </h4>
              <table class="table">
                <thead>
                  <tr style="text-align: left">
                    <th class="col-8">Price Details</th>
                    <th class="col"></th>
                    <th class="col-2"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="text-align: left">
                    <td class="col-8"><b>Price</b></td>
                    <td class="col"></td>
                    <td class="col-2">${{ total.toFixed(2) }}</td>
                  </tr>
                  <tr style="text-align: left"  v-if="discount!=0">
                    <td class="col-8"><b>Discount</b></td>
                    <td class="col"></td>
                    <td class="col-2">-$0</td>
                  </tr>
                  <tr style="text-align: left">
                    <td class="col-8"><b>Delivery Charges</b></td>
                    <td class="col"></td>
                    <td class="col-2">Free</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr style="text-align: left">
                    <td class="col-8"><b>Total</b></td>
                    <td class="col"></td>
                    <td class="col-2">${{ total.toFixed(2) }}</td>
                  </tr>
                </tfoot>
              </table>
              <div class="row">
                <div class="col">
                  <router-link
                    class="btn btn-primary btn-lg"
                    style="width: 100%; margin-bottom: 10px"
                    :to="'/place-order'"
                  >
                    Proceed to Buy
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container center" v-if="emptyCart">
      <i class="fas fa-shopping-cart fa-3x"></i>
      <h1>Cart Empty</h1>
    </div>
    
  </div>
</template>
<script>
import { EventBus } from '../main'
export default {
  name: "Checkout",
  data() {
    return {
      cart: [],
      total: null,
      totalQuantity: 0,
      emptyCart : true,
      discount : 0 //Need to also pass raw_price to calculate it. Skip for now.
    };
  },
  created() {
    //fetch products
    this.cart = this.$store.state.cart;
    this.calculateTotalPrice();
    this.calculateTotalQuantity();
    this.checkQuantity();
  },
  methods: {
    checkQuantity(){
      if(this.totalQuantity==0){
        this.emptyCart = true;
      }else{
        this.emptyCart = false;
      }
    },
    deleteProduct(item) {
      if (parseInt(item.productQuantity) - 1 == 0) {
        this.$store.commit("deleteFromCart", item.productId);
      } else {
        let index = this.cart.findIndex(
          (product) => product.productId == item.productId
        );
        this.cart[index].productQuantity = this.cart[index].productQuantity - 1;
      }
      this.total = this.total - parseFloat(item.productPrice);
      this.totalQuantity = this.totalQuantity - 1;
      this.checkQuantity();
      EventBus.$emit('notification-error', "Item deleted!");
    },
    calculateTotalQuantity() {
      this.cart.forEach((item) => {
        this.totalQuantity =
          this.totalQuantity + parseInt(item.productQuantity);
      });
    },
    calculateTotalPrice() {
      this.cart.forEach((item) => {
        this.total =
          this.total +
          parseInt(item.productQuantity) * parseFloat(item.productPrice);
      });
    },
  },
};
</script>
<style scoped>
.bill-layout {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  height: auto;
  border: 2px solid #afafaf;
  background: #d9dbda;
}
.center {
  padding: 70px 0;
  text-align: center;
}
</style>