<template>
  <div>
    <Navbar />
    <div class="album py-5 bg-light">
      <div class="container">
        <filter-panel @filter="handleFilter" @disable-filter="getAll"></filter-panel>
      </div>
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-1 row-cols-md-3 g-2">
          <div class="col-sm" v-for="(product, index) in products" :key="index">
            <div class="card shadow-sm">
              <img
                v-if="Array.isArray(product.data.image)"
                class="bd-placeholder-img card-img-top"
                width="100%"
                height="100%"
                :src="product.data.image[0]"
                preserveAspectRatio="xMidYMid slice"
                alt="image not available"
                :id="index"
              />
              <div class="card-body">
                <h5>{{ product.data.name }}</h5>
                <p class="card-text">{{ product.data.description }}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button
                      type="button"
                      class="btn btn-sm btn-secondary"
                      @click="viewDetails(product.id)"
                    >
                      View
                    </button>
                    <add-to-cart 
                      :_buttonclass="'btn btn-primary'"
                      :name="product.data.name"
                      :price="product.data.price.toString()"
                      :pid="product.id"
                      :image="Array.isArray(product.data.image)?product.data.image[0]:null"
                      :quantity="quantity">
                    </add-to-cart>
                  </div>
                  <small class="text-muted"
                    ><b><h5>Price: ${{ product.data.price }}</h5></b
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
import FilterPanel from '../components/FilterPanel.vue';
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
    AddToCart,
    FilterPanel
  },
  props: {},
  created() {
    this.getAll();
  },
  methods: {
    viewDetails(itemid){
      console.log(itemid);
      this.$router.push({ name: 'ProductDetails', params: { id: itemid }});
    },
    getAll() {
      this.products= [],
      db.collection("Products")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((element) => {
            if(element.data().image[0]!=null){
              this.products.push({ id: element.id, data: element.data() });
            }
            
          });
        });
      console.log(this.products);
    },
    handleFilter(payload){
      console.log(payload);
      if(payload.category=="New Arrival"){
        this.getNewArrivalFor(payload.gender,payload.priceMax,payload.orderBy);
      }else{
        this.getFor(payload.gender,payload.category.toLowerCase(),payload.priceMax,payload.orderBy);
      }
    },
    getFor(gender,category,price,orderBy) {
      //used to fetch all items based on criteria
      this.products=[];
      db.collection("Products")
        .where("price", "<=", parseFloat(price))
        .where("gender", "==", gender)
        .where("tags", "array-contains-any", [category])
        .orderBy("price", (orderBy=="desc"?"desc":"asc"))
        .limit(20)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((element) => {
            this.products.push({ id: element.id, data: element.data() });
          });
        });
      console.log(this.products);
    },
    getNewArrivalFor(gender,price,orderBy) {
      //used to fetch new arrival items based on criteria
      this.products=[];
      db.collection("Products")
        .where("gender", "==", gender)// men women pride
        .where("new_arrival", "==", true)// men women pride
        .where("price", "<=", parseFloat(price))
        .orderBy("price", (orderBy=="desc"?"desc":"asc"))
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
