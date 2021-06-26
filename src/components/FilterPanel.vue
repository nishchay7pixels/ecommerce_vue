<template>
  <div class="filter-panel">
    <div class="accordion" id="accordionExample">
      <div class="accordion-item ">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button collapsed "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="false"
            aria-controls="collapseOne"
          >
            Filter Results
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <div class="row row-cols-sm-3 row-cols-md-3 row-cols-lg-3">
              <div class="col">
                <div class="form-check form-switch">
                  <span>
                  <label class="form-check-label" for="flexSwitchCheckDefault"
                    >Click to {{ applyfilter ? "Disable" : "Enable" }}</label
                  >
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                    v-model="applyfilter"
                    @change="toggleFilter"
                  />
                  </span>
                </div>
              </div>
            </div>
            <div
              class="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-3"
              @change="
                $emit('filter', {
                  category: category,
                  gender: gender,
                  priceMax: priceMax,
                  orderBy: orderBy,
                })
              "
            >
              <div class="col">
                <div class="input-group mb-3">
                  <label class="input-group-text" for="inputGroupSelect01"
                    >Gender</label
                  >
                  <select
                    class="form-select"
                    id="inputGroupSelect01"
                    v-model="gender"
                    :disabled="!applyfilter"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="pride">Pride</option>
                  </select>
                </div>
              </div>
              <div class="col">
                <div class="input-group mb-3">
                  <label class="input-group-text" for="inputGroupSelect01"
                    >Size</label
                  >
                  <select
                    class="form-select"
                    id="inputGroupSelect01"
                    v-model="size"
                    :disabled="!applyfilter"
                  >
                    <option value="xsmall">XS</option>
                    <option value="small">S</option>
                    <option value="medium">M</option>
                    <option value="large">L</option>
                    <option value="xlarge">XL</option>
                  </select>
                </div>
              </div>
              <div class="col">
                <div class="input-group mb-3">
                  <label class="input-group-text" for="inputGroupSelect01"
                    >Category</label
                  >
                  <select
                    class="form-select"
                    id="inputGroupSelect01"
                    v-if="gender == 'male' ? true : false"
                    v-model="category"
                    :disabled="!applyfilter"
                  >
                    <option
                      :value="item"
                      v-for="(item, index) in maleCategoryList"
                      :key="index"
                    >
                      {{ item }}
                    </option>
                  </select>
                  <select
                    class="form-select"
                    id="inputGroupSelect01"
                    v-if="gender == 'female' ? true : false"
                    v-model="category"
                    :disabled="!applyfilter"
                  >
                    <option
                      :value="item"
                      v-for="(item, index) in femaleCategoryList"
                      :key="index"
                    >
                      {{ item }}
                    </option>
                  </select>
                  <select
                    class="form-select"
                    id="inputGroupSelect01"
                    v-if="gender == 'pride' ? true : false"
                    v-model="category"
                    :disable="applyfilter"
                  >
                    <option
                      :value="item"
                      v-for="(item, index) in prideCategoryList"
                      :key="index"
                    >
                      {{ item }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="col">
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1"
                    >Price : upto ${{ priceMax }}</span
                  >
                  <div
                    class="btn-group"
                    role="group"
                    aria-label="Basic radio toggle button group"
                  >
                    <input
                      type="radio"
                      class="btn-check"
                      name="btnradio"
                      id="btnradio1"
                      autocomplete="off"
                      v-model="orderBy"
                      value="asen"
                      checked
                      :disabled="!applyfilter"
                    />
                    <label class="btn btn-outline-primary" for="btnradio1"
                      >Low to High</label
                    >

                    <input
                      type="radio"
                      class="btn-check"
                      name="btnradio"
                      id="btnradio2"
                      autocomplete="off"
                      v-model="orderBy"
                      value="desc"
                      :disabled="!applyfilter"
                    />
                    <label class="btn btn-outline-primary" for="btnradio2"
                      >High to Low</label
                    >
                  </div>
                  <input
                    v-model="priceMax"
                    type="range"
                    class="form-range"
                    min="10"
                    max="10000"
                    id="customRange2"
                    :disabled="!applyfilter"
                  />
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
export default {
  name: "filter-panel",
  props: {
    filterGender: String,
    filterCategory: String,
    filterPriceMax: Number,
  },
  data() {
    return {
      gender: "male",
      size: "small",
      priceMax: 1500,
      maleCategoryList: ["New Arrival", "All", "Deals", "T-shirts", "Shirts", "Jeans", "Beauty"],
      femaleCategoryList: [
        "New Arrival",
        "All", 
        "Deals",
        "Tops & T-shirts",
        "Shirts & Blouse",
        "Jeans",
        "Beauty"
      ],
      prideCategoryList: [
        "New Arrival",
        "All", 
        "Deals",
        "Tops & T-shirts",
        "Shirts & Blouse",
        "Jeans",
        "Dresses",
        "Beauty"
      ],
      category: "All",
      orderBy: "desc",
      applyfilter: false,
    };
  },
  methods: {
    toggleFilter() {
      if (this.applyfilter == true) {
        console.log("Enabled");
      } else {
        this.$emit("disable-filter");
      }
    },
  },
};
</script>
<style scoped>
</style>