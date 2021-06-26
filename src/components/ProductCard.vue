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
      /><span class="card-notify-year" v-if="product.data.is_new">New</span>
      <span class="card-wishlist">
        <wishlist-button
          :name="product.data.name"
          :price="product.data.price.toString()"
          :pid="product.id"
          :image="
            Array.isArray(product.data.image) ? product.data.image[0] : null
          "
        ></wishlist-button>
      </span>
      <div class="card-body">
        <p>{{ product.data.name }}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <div>
              <view-button :itemid="product.id" :_buttontext="''"
                ><i class="fa fa-expand" aria-hidden="true"></i
              ></view-button>
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
            ><p>
              <b>${{ product.data.price }}</b>
              <s> ${{ product.data.raw_price }}</s>
            </p></small
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AddToCart from "../components/AddToCart.vue";
import ViewButton from "../components/ViewButton.vue";
import WishlistButton from "../components/WishlistButton.vue";
export default {
  name: "product-card",
  props: {
    product: null,
  },
  data() {
    return {
      quantity: "1",
    };
  },
  methods: {},
  components: {
    AddToCart,
    ViewButton,
    WishlistButton,
  },
};
</script>
<style scoped>
.price b {
  color: blue;
}
.price s {
  font-size: 12px;
}
.card-notify-year {
  position: absolute;
  right: -10px;
  top: -10px;
  background: #b42033;
  border-radius: 50%;
  text-align: center;
  color: #fff;
  font-size: 14px;
  width: 50px;
  height: 50px;
  padding: 15px 0 0 0;
}
.card-wishlist {
  position: absolute;
  left: 0%;
  top: 0%;
  border-radius: 50%;
  text-align: center;
  width: 50px;
  height: 50px;
  padding: 10px 0 0 0;
}
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 0px solid rgba(0, 0, 0, 0.125);
  border-radius: 0 rem;
}
</style>