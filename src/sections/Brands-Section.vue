<template>
  <div>
    <main>
      <div class="album container py-1 d-grid gap-1">
        <section class="py-1 text-center">
          <div class="row py-lg-1">
            <div class="col-lg-6 col-md-8 mx-auto">
              <h2 class="fw-light"><b>Brands</b></h2>
            </div>
          </div>
        </section>
        <div
          class="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-3"
        >
          <div class="col" v-for="(brand, index) in brands" :key="index">
            <brands-card
              :image="brand.data.brand_logo"
              :redirectTo="'brands/' + brand.data.brand_code"
            ></brands-card>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import BrandsCard from "../components/BrandsCard.vue";
import { db } from "../firebase";

export default {
  components: { BrandsCard },
  name: "brands-section",
  props: {},
  data() {
    return {
      brands: [],
      quantity: "1",
    };
  },
  created() {
    this.getAllBrands();
  },
  methods: {
    getAllBrands() {
      db.collection("Brands")
        .limit(8)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((element) => {
            this.brands.push({ id: element.id, data: element.data() });
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
