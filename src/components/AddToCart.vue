<template>
  <div class="add-to-cart">
    <button :class="_buttonclass" @click="addToCart()">
      <slot></slot>{{_buttontext}}
    </button>
  </div>
</template>
<script>
import { EventBus } from '../main'
export default {
  name: "add-to-cart",
  props: {
    name: String,
    price: String,
    pid: String,
    image: null,
    quantity: String,
    _buttonclass: String,
    _buttontext:String
  },
  data() {
    return {
      item: {
        productId: null,
        productPrice: null,
        productName: null,
        productImage: null,
        productQuantity: null,
      },
    };
  },
  methods: {
    addToCart() {
      this.setItem();
      console.log(this.item);
      console.log(this.quantity);
      this.$store.commit("addToCart", this.item);
      EventBus.$emit('notification-success', "Item added!");
    },
    setItem() {
      this.item.productId = this.pid;
      this.item.productPrice = this.price;
      this.item.productName = this.name;
      this.item.productImage = this.image;
      this.item.productQuantity = this.quantity;
    },
  },
};
</script>
<style scoped>
</style>