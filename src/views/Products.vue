<template>
  <div>
    <Navbar />
    <div class="album py-5 bg-light">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div class="col" v-for="(product, index) in products" :key="index">
            <div class="card shadow-sm">
              <img
                v-if="Array.isArray(product.data.image)"
                class="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                :src="product.data.image[0]"
                alt="Image"
                preserveAspectRatio="xMidYMid slice"
              />

              <div class="card-body">
                <h5>{{ product.data.name }}</h5>
                <p class="card-text">{{ product.data.description }}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button
                      type="button"
                      class="btn btn-sm btn-secondary"
                    >
                      View
                    </button>
                    <add-to-cart 
                      :name="product.data.name"
                      :price="product.data.price.toString()"
                      :pid="product.id"
                      :image="Array.isArray(product.data.image)?product.data.image[0]:null"
                      :quantity="quantity">
                    </add-to-cart>
                  </div>
                  <small class="text-muted"
                    ><b
                      ><h5>Price: ${{ product.data.price }}</h5></b
                    ></small
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { db } from "../firebase";
import AddToCart from "../components/AddToCart.vue";
export default {
  name: "Product",
  data() {
    return {
      genderSelected: "men",
      products: [],
      quantity: "1"
    };
  },
  components:{
    AddToCart
  },
  props: {},
  created() {
    this.getAll();
  },
  methods: {
    getAll() {
      db.collection("Products")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((element) => {
            this.products.push({ id: element.id, data: element.data() });
          });
        });
      console.log(this.products);
    },
    getFor(gender) {
      db.collection("Products")
        .where("gender", "==", gender) // men women pride
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
