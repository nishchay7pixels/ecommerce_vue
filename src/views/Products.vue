<template>
  <div>
    <Navbar />
    <div class="album py-5 bg-light">
      <div class="container">
        <filter-panel
          @filter="handleFilter"
          @disable-filter="getAll"
        ></filter-panel>
      </div>
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-1 row-cols-md-3 g-2">
          <div class="col-sm" v-for="(product, index) in products" :key="index">
            <product-card :product="product"></product-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { db } from "../firebase";
import FilterPanel from "../components/FilterPanel.vue";
import ProductCard from "../components/ProductCard.vue";
export default {
  name: "Product",
  data() {
    return {
      genderSelected: "men",
      products: [],
      quantity: "1",
    };
  },
  components: {
    FilterPanel,
    ProductCard,
  },
  props: {},
  created() {
    this.getAll();
  },
  methods: {
    getAll() {
      (this.products = []),
        db
          .collection("Products")
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((element) => {
              if (element.data().image[0] != null) {
                this.products.push({ id: element.id, data: element.data() });
              }
            });
          });
      console.log(this.products);
    },
    handleFilter(payload) {
      console.log(payload);
      if (payload.category == "New Arrival") {
        this.getNewArrivalFor(
          payload.gender,
          payload.priceMax,
          payload.orderBy
        );
      } 
      else if(payload.category == "All"){
        this.getAllFor(payload.gender,payload.priceMax,payload.orderBy);
      }
      else {
        this.getFor(
          payload.gender,
          payload.category.toLowerCase(),
          payload.priceMax,
          payload.orderBy
        );
      }
    },
    getFor(gender, category, price, orderBy) {
      //used to fetch all items based on criteria
      this.products = [];
      db.collection("Products")
        .where("price", "<=", parseFloat(price))
        .where("gender", "==", gender)
        .where("tags", "array-contains-any", [category])
        .orderBy("price", orderBy == "desc" ? "desc" : "asc")
        .limit(20)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((element) => {
            this.products.push({ id: element.id, data: element.data() });
          });
        });
      console.log(this.products);
    },
    getNewArrivalFor(gender, price, orderBy) {
      //used to fetch new arrival items based on criteria
      this.products = [];
      db.collection("Products")
        .where("gender", "==", gender) // men women pride
        .where("is_new", "==", true) // men women pride
        .where("price", "<=", parseFloat(price))
        .orderBy("price", orderBy == "desc" ? "desc" : "asc")
        .limit(20)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((element) => {
            this.products.push({ id: element.id, data: element.data() });
          });
        });
      console.log(this.products);
    },
    getAllFor(gender,price,orderBy){
      this.products = [];
      db.collection("Products")
        .where("gender", "==", gender) // men women pride
        .where("price", "<=", parseFloat(price))
        .orderBy("price", orderBy == "desc" ? "desc" : "asc")
        .limit(20)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((element) => {
            this.products.push({ id: element.id, data: element.data() });
          });
        });
      console.log(this.products);
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
