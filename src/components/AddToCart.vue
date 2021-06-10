<template>
  <div class="add-to-cart">
    <button class="btn btn-primary" @click="addToCart()">Add to cart</button>
  </div>
</template>
<script>
export default {
  name: "add-to-card",
  props: {
    name: String,
    price: String,
    pid: String,
    image: null,
    quantity:String
  },
  data() {
    return {
      item: {
        productId: this.pid,
        productPrice: this.price,
        productName: this.name,
        productImage: this.image,
        productQuantity: this.quantity
      },
    };
  },
  methods: {
    addToCart() {
      this.$store.commit("addToCart", this.item);
      console.log(this.item);
    },
  },
};
</script>
<style scoped>
</style>