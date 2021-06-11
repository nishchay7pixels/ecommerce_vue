<template>
  <div class="checkout">
    <Navbar />
    <div class="container">
      <br />
      <div class="row">
        <div class="col-8">
          <div class="header"><h4>Cart Items</h4></div>
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
                    @click="
                      deleteProduct(
                        product.productId,
                        product.productPrice,
                        product.productQuantity
                      )
                    "
                    class="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col">
          <div class="container bill-layout">
            <div class="header">
              <h4>Subtotal: ${{ total }}</h4>
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
                    <td class="col-2">${{ total }}</td>
                  </tr>
                  <tr style="text-align: left">
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
                    <td class="col-2">${{ total }}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Checkout",
  data() {
    return {
      cart: [],
      total: null,
    };
  },
  created() {
    //fetch products
    this.cart = this.$store.state.cart;
    this.calculateTotalPrice();
  },
  methods: {
    deleteProduct(pid, price, quantity) {
      this.$store.commit("deleteFromCart", pid);
      this.total = this.total - parseInt(price) * parseInt(quantity);
    },
    calculateTotalPrice() {
      this.cart.forEach((item) => {
        this.total =
          this.total +
          parseInt(item.productQuantity) * parseInt(item.productPrice);
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
</style>