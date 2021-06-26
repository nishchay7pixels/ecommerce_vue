<template>
  <div class="place-order">
    <Navbar />
    <div class="container">
      <div class="py-5 text-center">
        <h2>Place Order form</h2>
      </div>

      <div class="row">
        <div class="col-md-4 order-md-2 mb-4">
          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-muted">Your cart</span>
            <span class="badge badge-secondary badge-pill">3</span>
          </h4>
          <ul class="list-group mb-3">
            <li
              class="
                list-group-item
                d-flex
                justify-content-left
              "
              v-for="(product, index) in cart"
              :key="index"
            >
              <div class="row">
                <h6 class="col-8">{{ product.productName.substring(0, 25) }}</h6>
                <h6 class="col-2">X {{ product.productQuantity }}</h6>
                <span class="text-muted col-2">${{ product.productPrice*product.productQuantity }}</span>
              </div>
            </li>

            <li class="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>$20</strong>
            </li>
          </ul>

          <!-- <form class="card p-2">
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                placeholder="Promo code"
              />
              <div class="input-group-append">
                <button type="submit" class="btn btn-secondary">Redeem</button>
              </div>
            </div>
          </form> -->
        </div>
        <div class="col-md-8 order-md-1">
          <h4 class="mb-3">Billing address</h4>
          <form class="needs-validation" novalidate>
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="firstName">First name</label>
                <input
                  type="text"
                  class="form-control"
                  id="firstName"
                  placeholder=""
                  value=""
                  required
                />
                <div class="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <label for="lastName">Last name</label>
                <input
                  type="text"
                  class="form-control"
                  id="lastName"
                  placeholder=""
                  value=""
                  required
                />
                <div class="invalid-feedback">Valid last name is required.</div>
              </div>
            </div>
            <div class="mb-3">
              <label for="email"
                >Email <span class="text-muted">(Optional)</span></label
              >
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="you@example.com"
              />
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div class="mb-3">
              <label for="address">Address</label>
              <input
                type="text"
                class="form-control"
                id="address"
                placeholder="Enter valid address"
                required
              />
              <div class="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div class="row">
              <div class="col-md-5 mb-3">
                <label for="country">Country</label>
                <select class="form-select" id="country" required>
                  <option value="">Choose...</option>
                  <option>India</option>
                </select>
                <div class="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>
              <div class="col-md-4 mb-3">
                <label for="state">State</label>
                <select class="form-select" id="state" required>
                  <option value="">Choose...</option>
                  <option>Uttar Pradesh</option>
                </select>
                <div class="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>
              <div class="col-md-3 mb-3">
                <label for="zip">Pincode</label>
                <input
                  type="text"
                  class="form-control"
                  id="pincode"
                  placeholder=""
                  required
                />
                <div class="invalid-feedback">Pincode code required.</div>
              </div>
            </div>
            <hr class="mb-4" />
            <div class="custom-control input-group">
              <input
                type="checkbox"
                class="custom-control-input"
                id="same-address"
              />
              <label class="custom-control-label" for="same-address"
                >Shipping address is the same as my billing address</label
              >
            </div>

            <div class="custom-control input-group">
              <input
                type="checkbox"
                class="custom-control-input"
                id="save-info"
              />
              <label class="custom-control-label" for="save-info"
                >Save this information for next time</label
              >
            </div>

            <hr class="mb-4" />
            <button class="btn btn-primary btn-lg btn-block" type="submit">
              Continue to checkout
            </button>
          </form>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "place-order",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      cart: null,
    };
  },
  created() {
    this.cart = this.$store.state.cart;
    this.fetchProductPrice();
  },
  methods: {
    fetchProductPrice() {
      console.log("method called");
    },
  },
};
</script>
<style scoped>
</style>