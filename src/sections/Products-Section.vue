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
            <product-card :product="product"></product-card>
          </div>
        </div>
      </div>
    </div>
  </main>
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
        .limit(10)
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
