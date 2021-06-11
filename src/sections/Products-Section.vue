<template>
  <main>
    <div class="album py-5 bg-light">
      <div class="container">
        <section class="py-5 text-center container">
          <div class="row py-lg-5">
            <div class="col-lg-6 col-md-8 mx-auto">
              <h1 class="fw-light">Exclusive Deals</h1>
            </div>
          </div>
        </section>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div class="col" v-for="(product, index) in products" :key="index">
            <div class="card shadow-sm">
              <img
                class="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                :src="product.data.image[0]"
                alt="Image"
              />
              <div class="card-body">
                <p class="card-header">{{ product.data.name }}</p>
                <p class="card-text">Price: ${{ product.data.price }}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <!-- <button type="button" class="btn btn-sm btn-outline-danger">
                      View
                    </button> -->
                    <add-to-cart 
                      :name="product.data.name"
                      :price="product.data.price"
                      :pid="product.id"
                      :image="product.data.image[0]"
                      :quantity="quantity">
                    </add-to-cart>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import AddToCart from "../components/AddToCart.vue";
import { db } from "../firebase";
export default {
  components: { AddToCart },
  name: "Product-section",
  props: {},
  data() {
    return {
      products: [],
      quantity: "1"
    };
  },
  created() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      db.collection("Products")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((element) => {
            this.products.push({id:element.id , data:element.data()});
            console.log(element.id);
          });
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
