<template>
  <div class="checkout">
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
          <td class="col-2"><img :src="product.productImage" style="width:50px"/></td>
          <td class="col-4">{{ product.productName }}</td>
          <td class="col-2">{{ product.productPrice }}</td>
          <td class="col-2">{{ product.productQuantity }}</td>
          <td class="col-2">
            <button
              @click="deleteProduct(product.productId)"
              class="btn btn-danger"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "Checkout",
  data() {
    return {
      cart: [],
    };
  },
  created() {
    //fetch products
    this.cart = this.$store.state.cart;
  },
  methods: {
    deleteProduct(pid) {
      console.log(pid);
    },
  },
};
</script>
<style scoped>
</style>