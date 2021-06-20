<template>
  <div class="view-button">
    <button
      type="button"
      :class="_buttonclass==''?_buttonclass:'btn btn-outline-primary'"
      @click="viewDetails()"
    >
      <slot></slot>{{_buttontext}}
    </button>
  </div>
</template>
<script>
export default {
  name: "view-button",
  props: {
       itemid:String,
       _buttontext:String,
       _buttonclass:String
  },
  data() {
    return {
        productId : null
    };
  },
  methods: {
    viewDetails() {
      this.mapProductId();      
      this.$router.push({ name: "ProductDetails", params: { id: this.productId } });
    },
    mapProductId(){
        this.productId = this.itemid;
    }
  },
};
</script>
<style scoped>
</style>