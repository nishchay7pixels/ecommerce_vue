<template>
<div>
  <main>
    <div class="album container py-1 d-grid gap-1">
      <section class="py-1 text-center">
        <div class="row py-lg-1">
          <div class="col-lg-6 col-md-8 mx-auto">
            <h2 class="fw-light"><b>Exclusive Deals</b></h2>
          </div>
        </div>
      </section>
      <div class="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-3">
        <div class="col" v-for="(product, index) in products" :key="index">
          <product-card :product="product"></product-card>
        </div>
      </div>

      <div class="container d-grid">
        <router-link to="/products" class="btn btn-outline-primary" href="#">
          <i class="fas fa-sort-down"></i>
        </router-link>
      </div>
    </div>
  </main>
</div>
</template>
<script>
import { db } from "../firebase";
import ProductCard from "../components/ProductCard.vue";

export default {
  components: { ProductCard },
  name: "Product-section",
  props: {},
  data() {
    return {
      products: [],
      quantity: "1",
    };
  },
  created() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      db.collection("Products")
        .limit(8)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((element) => {
            this.products.push({ id: element.id, data: element.data() });
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
