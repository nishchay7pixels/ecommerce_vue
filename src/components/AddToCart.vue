<template>
  <div class="add-to-cart">
      <button class="btn btn-primary">Add to cart</button>
  </div>
</template>
<script>
export default {
  name: "add-to-card",
  props:{
      name:String,
      price:String,
      pid:String,
      image:null,
      product:{}
  },
  data(){
      return{
          productId : this.pid
      }
  }
};
</script>
<style scoped>
</style>