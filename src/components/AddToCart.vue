<template>
  <div class="add-to-cart">
    <button :class="_buttonclass" @click="addToCart()"><slot></slot> Add to cart</button>
  </div>
</template>
<script>
export default {
  name: "add-to-cart",
  props: {
    name: String,
    price: String,
    pid: String,
    image: null,
    quantity:String,
    _buttonclass:String
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