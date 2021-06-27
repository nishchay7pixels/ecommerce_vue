<template>
  <div>
    <Navbar />
    <div class="album py-5 bg-light">
      <div class="container">
        <!-- <brands-section></brands-section> -->
        <main>
          <div class="album container py-1 d-grid gap-1">
            <section class="py-1 text-center">
              <div class="row py-lg-1">
                <div class="col-lg-6 col-md-8 mx-auto">
                  <h2 class="fw-light"><b>Shop by brand</b></h2>
                </div>
              </div>
            </section>
            <!-- <div
              class="
                row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-4
                g-3
              "
            >
              <div class="col" v-for="(brand, index) in brands" :key="index">
                <brands-card
                  :image="brand.data.brand_logo"
                  :redirectTo="'/home'"
                ></brands-card>
              </div>
            </div> -->
            <br/>
            <div class="container">
              <div class="row row-cols-2 row-cols-sm-2 row-cols-md-4 g-2">
                <div
                  class="col-sm"
                  v-for="(product, index) in products"
                  :key="index"
                >
                  <product-card :product="product"></product-card>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>
<script>
import { db } from "../firebase";
import ProductCard from "../components/ProductCard.vue";
export default {
  name: "Brands",
  data() {
    return {
      genderSelected: "men",
      brands: [],
      products: [],
      quantity: "1",
    };
  },
  components: {
    // BrandsSection,
    ProductCard,
    //BrandsCard,
  },
  props: {
    brand_code: null,
  },
  created() {
    console.log(this.brand_code);
    if (this.brand_code.toString() == "all") {
      //this.getAllBrands();
      this.getAll();
    } else {
      this.getThisBrands();
      this.getOfBrand();
    }
  },
  methods: {
    getAllBrands() {
      db.collection("Brands")
        .limit(8)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((element) => {
            this.brands.push({ id: element.id, data: element.data() });
          });
        });
    },
    getThisBrands() {
      db.collection("Brands")
        .where("brand_code", "==", this.brand_code)
        .limit(8)
        .get()
        .then((querySnapshot) => {
          if (querySnapshot.empty) {
            window.location.replace("/error");
          }
          querySnapshot.forEach((element) => {
            this.brands.push({ id: element.id, data: element.data() });
          });
        });
    },
    getOfBrand() {
      this.products = [];
      db.collection("Products")
        .where("brand", "==", this.brand_code)
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
    getAll() {
      this.products = [];
      db.collection("Products")
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
      } else if (payload.category == "All") {
        this.getAllFor(payload.gender, payload.priceMax, payload.orderBy);
      } else {
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
    getAllFor(gender, price, orderBy) {
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
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
