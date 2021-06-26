<template>
  <div class="wishlist container">
    <main  v-if="wishlist.length > 0">
      <div class="album py-1 d-grid gap-1">
        <div class="row">
          <div class="col">
            <div class="header"><h4>Wishlist Items</h4></div>
          </div>
        </div>
        <div
          class="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-3"
        >
          <div class="col" v-for="(item, index) in wishlist" :key="index">
            <div class="product-card">
              <div class="card shadow-sm">
                <img
                  class="bd-placeholder-img card-img-top"
                  width="100%"
                  height="100%"
                  :src="item.productImage"
                  preserveAspectRatio="xMidYMid slice"
                  alt="image not available"
                />
                <span class="card-wishlist">
                  <wishlist-button
                    :name="item.productName"
                    :price="item.productPrice.toString()"
                    :pid="item.productId"
                    :image="item.productImage"
                  ></wishlist-button>
                </span>
                <div class="card-body">
                  <p>{{ item.productName }}</p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="btn-group">
                      <div>
                        <view-button :itemid="item.productId" :_buttontext="''"
                          ><i class="fa fa-expand" aria-hidden="true"></i
                        ></view-button>
                      </div>
                      <div @click="$emit('wishlistEvent')">
                        <add-to-cart
                          :_buttonclass="'btn btn-primary'"
                          :name="item.productName"
                          :price="item.productPrice.toString()"
                          :pid="item.productId"
                          :image="item.productImage"
                          :quantity="quantity"
                          ><i
                            class="fa fa-shopping-cart"
                            aria-hidden="true"
                          ></i>
                        </add-to-cart>
                      </div>
                    </div>
                    <small class="text-muted price"
                      ><p>
                        <b>${{ item.productPrice }}</b>
                      </p></small
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container d-grid"></div>
      </div>
    </main>
    <!-- <div class="container" v-if="!wishlist.length > 0">
      <i class="fas fa-meh-blank"></i>
    </div> -->
  </div>
</template>
<script>
import AddToCart from "../components/AddToCart.vue";
import ViewButton from "../components/ViewButton.vue";
import WishlistButton from "../components/WishlistButton.vue";

export default {
  components: { AddToCart, ViewButton, WishlistButton },
  name: "wishlist-section",
  props: {},
  data() {
    return {
      wishlist: [],
      quantity: "1",
    };
  },
  created() {
    this.getwishList();
  },
  methods: {
    getwishList() {
      this.wishlist = this.$store.state.wishlist;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wishlist {
  background: #f7f7f7;
}
.fa-meh-blank{
  font-size: 25px;
}
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
