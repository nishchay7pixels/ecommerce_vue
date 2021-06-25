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
          <div class="col" v-for="(tile, index) in categoryTiles" :key="index">
            <category-card
              class="card"
              :image="tile.data.categoryImage"
              :offerText="tile.data.categoryTitle"
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
      categoryTiles: []
    };
  },
  created() {
    this.getAllCategoryTiles();
  },
  methods: {
    getAllCategoryTiles() {
      db.collection("TiledCategory")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((element) => {
            this.categoryTiles.push({ id: element.id, data: element.data() });
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
