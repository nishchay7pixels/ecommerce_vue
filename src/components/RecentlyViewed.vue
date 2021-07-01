<template>
  <div class="container" v-if="recentId.length>3">
    <h2 class="fw-light"><b>Recently viewed</b></h2>
    <div class="row web-browser">
      <div class="col-md-12">
        <div id="Carousel" class="carousel slide" data-bs-ride="carousel">
          <!-- Carousel items -->
          <div class="carousel-inner">
            <div class="carousel-item active" v-if="recentId.length>0">
              <div class="row">
                <div
                  class="col-md-3"
                  v-for="(product, index) in recentProducts.row1"
                  :key="index"
                >
                  <brands-card
                    :image="product.data.image[0]"
                    :redirectTo="'productdetail/' + product.id"
                  ></brands-card>
                </div>
              </div>
              <!--.row-->
            </div>
            <!--.item-->
            <div class="carousel-item"  v-if="recentId.length>4">
              <div class="row">
                <div
                  class="col-md-3"
                  v-for="(product, index) in recentProducts.row2"
                  :key="index"
                >
                  <brands-card
                    :image="product.data.image[0]"
                    :redirectTo="'productdetail/' + product.id"
                  ></brands-card>
                </div>
              </div>
              <!--.row-->
            </div>
            <!--.item-->
            <div class="carousel-item" v-if="recentId.length>8">
              <div class="row">
                <div
                  class="col-md-3"
                  v-for="(product, index) in recentProducts.row3"
                  :key="index"
                >
                  <brands-card
                    :image="product.data.image[0]"
                    :redirectTo="'productdetail/' + product.id"
                  ></brands-card>
                </div>
              </div>
              <!--.row-->
            </div>
            <!--.item-->
          </div>
          <!--.carousel-inner-->

          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#Carousel"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#Carousel"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <!--.Carousel-->
      </div>
    </div>
    <!--Mobile view-->


    <div class="row mobile-browser">
      <div class="col-md-12">
        <div id="mCarousel" class="carousel slide" data-bs-ride="mcarousel">
          <!-- Carousel items -->
          <div class="carousel-inner">
            <div class="carousel-item active" v-if="recentId.length>0">
              <div class="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-3">
                <div
                  class="col"
                  v-for="(product, index) in recentProducts.row1.slice(0,2)"
                  :key="index"
                >
                  <brands-card
                    :image="product.data.image[0]"
                    :redirectTo="'productdetail/' + product.id"
                  ></brands-card>
                </div>
              </div>
              <!--.row-->
            </div>
            <!--.item-->
            <div class="carousel-item"  v-if="recentId.length>2">
              <div class="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-3">
                <div
                  class="col"
                  v-for="(product, index) in recentProducts.row1.slice(2,recentProducts.row1.length)"
                  :key="index"
                >
                  <brands-card
                    :image="product.data.image[0]"
                    :redirectTo="'productdetail/' + product.id"
                  ></brands-card>
                </div>
              </div>
              <!--.row-->
            </div>
            <!--.item-->
            <div class="carousel-item" v-if="recentId.length>4">
              <div class="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-3">
                <div
                  class="col"
                  v-for="(product, index) in recentProducts.row2.slice(0,2)"
                  :key="index"
                >
                  <brands-card
                    :image="product.data.image[0]"
                    :redirectTo="'productdetail/' + product.id"
                  ></brands-card>
                </div>
              </div>
              <!--.row-->
            </div>
            <!--.item-->
            <div class="carousel-item" v-if="recentId.length>6">
              <div class="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-3">
                <div
                  class="col"
                  v-for="(product, index) in recentProducts.row2.slice(2,recentProducts.row2.length)"
                  :key="index"
                >
                  <brands-card
                    :image="product.data.image[0]"
                    :redirectTo="'productdetail/' + product.id"
                  ></brands-card>
                </div>
              </div>
              <!--.row-->
            </div>
            <!--.item-->
            <div class="carousel-item" v-if="recentId.length>8">
              <div class="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-3">
                <div
                  class="col"
                  v-for="(product, index) in recentProducts.row3.slice(0,2)"
                  :key="index"
                >
                  <brands-card
                    :image="product.data.image[0]"
                    :redirectTo="'productdetail/' + product.id"
                  ></brands-card>
                </div>
              </div>
              <!--.row-->
            </div>
            <div class="carousel-item" v-if="recentId.length>10">
              <div class="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-3">
                <div
                  class="col"
                  v-for="(product, index) in recentProducts.row3.slice(2,recentProducts.row3.length)"
                  :key="index"
                >
                  <brands-card
                    :image="product.data.image[0]"
                    :redirectTo="'productdetail/' + product.id"
                  ></brands-card>
                </div>
              </div>
              <!--.row-->
            </div>
          </div>
          <!--.carousel-inner-->

          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#mCarousel"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#mCarousel"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <!--.Carousel-->
      </div>
    </div>
    
  </div>
  <!--.container-->
</template>
<script>
import { db } from "../firebase";
import BrandsCard from "./BrandsCard.vue";
export default {
  components: { BrandsCard },
  name: "recently-viewed",
  props: {},
  data() {
    return {
      recentId: null,
      recentProducts: {
        row1: [],
        row2: [],
        row3: [],
      },
    };
  },
  created() {
    this.recentId = this.$store.state.recent;
    console.log(this.recentId);
    this.getRecentlyViewed();
  },

  methods: {
    getRecentlyViewed() {
      for (let index = 0; index < this.recentId.length; index++) {
        console.log(this.recentId[index]);
        db.collection("Products")
          .doc(this.recentId[index])
          .get()
          .then((doc) => {
            if (doc.exists) {
              if (index < 4) {
                this.recentProducts.row1.push({
                  id: this.recentId[index],
                  data: doc.data(),
                });
              } else if (index < 8 && index >= 4) {
                this.recentProducts.row2.push({
                  id: this.recentId[index],
                  data: doc.data(),
                });
              } else {
                this.recentProducts.row3.push({
                  id: this.recentId[index],
                  data: doc.data(),
                });
              }

              console.log("Document data:", doc.data());
            } else {
              console.log("No such document!");
            }
          });
      }
    },
  },
};
</script>
<style scoped>
.container{
  margin-top: 15px;
}
.carousel {
  margin-bottom: 0px;
  padding-left: 40px;
  padding-right: 40px;
}
/* The controlsy */
.carousel-control-prev {
  height: 40px;
  width: 40px;
  background: none repeat scroll 0 0 #2222222c;
  border: 4px solid #ffffff;
  border-radius: 23px 23px 23px 23px;
  margin-top: auto ;
  margin-bottom: auto ;
}
.carousel-control-next {
  height: 40px;
  width: 40px;
  background: none repeat scroll 0 0 #2222222c;
  border: 4px solid #ffffff;
  border-radius: 23px 23px 23px 23px;
  margin-top: auto ;
  margin-bottom: auto ;
}

/* The colour of the indicators */
.carousel-indicators li {
  background: #cecece;
}
.carousel-indicators .active {
  background: #428bca;
}

.mobile-browser{
  display: none;
}
@media (min-width: 0px) and (max-width: 813px) {
  .web-browser {
    display: none;
  } 

  .mobile-browser{
  display: inline;
  }

  .carousel-control-prev {
  height: 30px;
  width: 30px;
  background: none repeat scroll 0 0 #2222222c;
  border: 4px solid #ffffff;
  border-radius: 23px 23px 23px 23px;
 
}
.carousel-control-next {
  height: 30px;
  width: 30px;
  background: none repeat scroll 0 0 #2222222c;
  border: 4px solid #ffffff;
  border-radius: 23px 23px 23px 23px;
  
}
}
</style>