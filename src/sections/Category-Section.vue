<!--
Allow user to directly filter products belonging to a particulat category. 
This category is in DB in Category where you'll find the products id beloging 
to that category. then your can just search for those product id in product db.
-->
<template>
  <div>
    <main>
      <div class="album container py-1 d-grid gap-1">
        <section class="py-1 text-center">
        </section>
        <div
          class="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-3"
        >
          <div class="col" v-for="(offer, index) in offers" :key="index">
            <category-card
              class="card"
              :image="offer.image"
              :offerText="offer.offer_text"
              :redirectTo="'#'"
            ></category-card>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import CategoryCard from "../components/CategoryCard.vue";
import { db } from "../firebase";

export default {
  components: { CategoryCard },
  name: "category-section",
  props: {},
  data() {
    return {
      brands: [],
      offers: [
        {
          offer_text: "Bestseller",
          image:
            "https://firebasestorage.googleapis.com/v0/b/ecommerce-vue-29c36.appspot.com/o/offerAssets%2Fbestseller.PNG?alt=media&token=14689c9e-3178-4c79-b9a5-f7b7b5e3c5ad",
        },
        {
          offer_text: "Heavy Discount!",
          image:
            "https://firebasestorage.googleapis.com/v0/b/ecommerce-vue-29c36.appspot.com/o/offerAssets%2Fdiscount.PNG?alt=media&token=fba384d6-6920-4aa8-a147-76350a551cb8",
        },
        {
          offer_text: "My Polo",
          image:
            "https://firebasestorage.googleapis.com/v0/b/ecommerce-vue-29c36.appspot.com/o/offerAssets%2Fpolo.PNG?alt=media&token=8bf65e9a-ca03-4eef-a85d-972ef3362c4d",
        },
        {
          offer_text: "Best of Pride",
          image:
             "https://firebasestorage.googleapis.com/v0/b/ecommerce-vue-29c36.appspot.com/o/offerAssets%2Fpride.PNG?alt=media&token=d2e5700a-359d-427b-a367-e0686f3c8899",
        }
      ],
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
.card {
  margin: 20px 20px;
}
</style>
