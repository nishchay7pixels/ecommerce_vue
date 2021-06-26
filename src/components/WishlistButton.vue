<template>
  <div class="wishlist-button">
    <button button class="btn" @click="addToWishlist()">
      <i :class="(toggle?'fas pink-heart':'far white-heart')+' fa-heart'"></i
      ><!--(toggle?'fas pink-heart':'far white-heart')+' fa-heart'-->
    </button>
  </div>
</template>
<script>
export default {
  name: "wishlist-button",
  props: {
    name: String,
    price: String,
    pid: String,
    image: null,
  },
  data() {
    return {
      item: {
        productId: null,
        productPrice: null,
        productName: null,
        productImage: null,
      },
      toggle: null,
    };
  },
  created(){
    let exist = this.$store.state.wishlist.find(product => product.productId == this.pid)?true:false;
    this.toggle=exist;
  },
  methods: {
    addToWishlist() {
      this.toggle = !this.toggle;
      this.setItem();
      this.$store.commit("wishlistItem", this.item);
    },
    setItem() {
      this.item.productId = this.pid;
      this.item.productPrice = this.price;
      this.item.productName = this.name;
      this.item.productImage = this.image;
    },
  },
};
</script>
<style scoped>
.btn:focus,
.btn:active {
  outline: none !important;
  box-shadow: none;
}
.pink-heart {
  color: rgb(255, 83, 111);
  font-size: 20px;
}
.white-heart {
  color: rgb(0, 0, 0);
  font-size: 20px;
}
.fa-heart:focus,
.fa-heart:active {
  color: rgb(255, 49, 83);
  font-size: 30px;
}
</style>