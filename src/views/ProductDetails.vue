<template>
  <div class="product-details">
    <Navbar />
    <div class="sample" v-if="product != null">
      <div class="container">
        <br />
        <hr />

        <div class="card">
          <div class="row row-cols-md-1 row-cols-lg-2">
            <aside class="col border-right">
              <article class="gallery-wrap">
                <div class="img-big-wrap">
                  <div>
                    <a href="#"><img :src="product.image[0]" /></a>
                  </div>
                </div>
                <!-- slider-product.// -->
                <div class="img-small-wrap">
                  <div
                    class="item-gallery"
                    v-for="(image, Index) in product.image"
                    :key="Index"
                  >
                    <img :src="image" />
                  </div>
                </div>
                <!-- slider-nav.// -->
              </article>
              <!-- gallery-wrap .end// -->
            </aside>
            <aside class="col">
              <article class="card-body p-5">
                <h3 class="title mb-3">
                  {{ product.name }}
                </h3>

                <p class="price-detail-wrap">
                  <span class="price h3 text-warning">
                    <span class="currency">US $</span
                    ><span class="num">{{ product.price }}</span>
                  </span>
                  <!-- <span>/per kg</span> -->
                </p>
                <!-- price-detail-wrap .// -->
                <dl class="item-property">
                  <dt>Description</dt>
                  <dd>
                    <p>
                      {{ product.description }}
                    </p>
                  </dd>
                </dl>

                <!-- item-property-hor .// -->

                <hr />
                <div class="row">
                  <div class="col-sm-5">
                    <dl class="param param-inline">
                      <dt>Quantity:</dt>
                      <dd>
                        <select
                          class="form-control form-control-sm form-check-inline"
                          style="width: 70px"
                          v-model="quantity"
                        >
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                        </select>
                      </dd>
                    </dl>
                  </div>
                  <!-- col.// -->
                  <div class="col">
                    <dl class="param param-inline">
                      <dt>Size:</dt>
                      <dd>
                        <label class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio2"
                            value="option2"
                          />
                          <span class="form-check-label">SM</span>
                        </label>
                        <label class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio2"
                            value="option2"
                          />
                          <span class="form-check-label">MD</span>
                        </label>
                        <label class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio2"
                            value="option2"
                          />
                          <span class="form-check-label">XXL</span>
                        </label>
                      </dd>
                    </dl>
                    <!-- item-property .// -->
                  </div>
                  <!-- col.// -->
                </div>
                <!-- row.// -->
                <hr />
                <add-to-cart
                  :_buttonclass="'btn btn btn-outline-primary text-uppercase'"
                  :name="product.name"
                  :price="product.price.toString()"
                  :pid="this.id"
                  :image="
                    Array.isArray(product.image) ? product.image[0] : null
                  "
                  :quantity="quantity"
                >
                  <i class="fas fa-shopping-cart"></i>
                </add-to-cart>
              </article>
              <!-- card-body.// -->
            </aside>
            <!-- col.// -->
          </div>
          <!-- row.// -->
        </div>
        <!-- card.// -->
      </div>
      <!--container.//-->

      <br /><br /><br />
    </div>
  </div>
</template>
<script>
import AddToCart from "../components/AddToCart.vue";
import { db } from "../firebase";
export default {
  components: { AddToCart },
  name: "ProductDetails",
  props: {
    id: String,
  },
  data() {
    return {
      product: null,
      quantity: "1",
    };
  },
  created() {
    console.log("Created");
    this.fetchDetails();
    console.log(this.product);
  },
  methods: {
    async fetchDetails() {
      console.log(this.id);
      try {
        await db
          .collection("Products")
          //.where("id", "==", parseInt(this.id))
          .doc(this.id)
          .get()
          .then((doc) => {
            if (doc.exists) {
              this.product = doc.data();
              console.log("Document data:", this.product);
            } else {
              console.log("No such document!");
            }
          });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style scoped>
.gallery-wrap .img-big-wrap img {
  height: 450px;
  width: auto;
  display: inline-block;
  cursor: zoom-in;
}

.gallery-wrap .img-small-wrap .item-gallery {
  width: 60px;
  height: 60px;
  border: 1px solid #ddd;
  margin: 7px 2px;
  display: inline-block;
  overflow: hidden;
}

.gallery-wrap .img-small-wrap {
  text-align: center;
}
.gallery-wrap .img-small-wrap img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  border-radius: 4px;
  cursor: zoom-in;
}
</style>