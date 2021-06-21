<template>
  <div class="product-card">
    <div class="card shadow-sm">
      <img
        v-if="Array.isArray(product.data.image)"
        class="bd-placeholder-img card-img-top"
        width="100%"
        height="100%"
        :src="product.data.image[0]"
        preserveAspectRatio="xMidYMid slice"
        alt="image not available"
      />
      <div class="card-body">
        <p>{{ product.data.name }}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <div>
              <view-button 
              :itemid="product.id" 
              :_buttontext="View"><i class="fa fa-expand" aria-hidden="true"></i></view-button>
            </div>
            <div>
              <add-to-cart
                :_buttonclass="'btn btn-primary'"
                :name="product.data.name"
                :price="product.data.price.toString()"
                :pid="product.id"
                :image="
                  Array.isArray(product.data.image)
                    ? product.data.image[0]
                    : null
                "
                :quantity="quantity"
              ><i class="fa fa-shopping-cart" aria-hidden="true"></i>
              </add-to-cart>
            </div>
          </div>
          <small class="text-muted price"
            ><p><b>${{ product.data.price }}</b> <s>${{ product.data.raw_price }}</s></p></small
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AddToCart from "../components/AddToCart.vue";
import ViewButton from "../components/ViewButton.vue";
export default {
  name: "product-card",
  props: {
    product:null
  },
  data() {
    return {
      quantity: "1",
    };
  },
  methods: {
  },
  components:{
      AddToCart,
      ViewButton
  }
};
</script>
<style scoped>
.price b{
  color: blue;
}
</style>