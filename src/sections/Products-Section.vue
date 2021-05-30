<template>
<main>
<div class="album py-5 bg-light">
    <div class="container">
        <section class="py-5 text-center container">
            <div class="row py-lg-5">
                <div class="col-lg-6 col-md-8 mx-auto">
                    <h1 class="fw-light">Exclusive Deals</h1>
                </div>
            </div>
        </section>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col">
          <div class="card shadow-sm">
            <img class="bd-placeholder-img card-img-top" width="100%" height="225" src="../assets/product1.jpg"/>
            <div class="card-body">
              <p class="card-header">Macbook pro with Apple M1 Chip</p>
              <p class="card-text">Price: $250</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-danger">View</button>
                  <button type="button" class="btn btn-sm btn-outline-primary">Add to cart</button>
                </div>
                <!-- <small class="text-muted">9 mins</small> -->
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <img class="bd-placeholder-img card-img-top" width="100%" height="225" src="../assets/product2.jpg"/>

            <div class="card-body">
              <p class="card-header">Macbook pro with Apple Intel I7 Chip</p>
              <p class="card-text">Price: $280</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-danger">View</button>
                  <button type="button" class="btn btn-sm btn-outline-primary">Add to cart</button>
                </div>
                <!-- <small class="text-muted">9 mins</small> -->
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <img class="bd-placeholder-img card-img-top" width="100%" height="225" src="../assets/product3.jpg"/>
            <div class="card-body">
              <p class="card-header">Macbook air with Apple M1 Chip</p>
              <p class="card-text">Price: $150</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-danger">View</button>
                  <button type="button" class="btn btn-sm btn-outline-primary">Add to cart</button>
                </div>
                <!-- <small class="text-muted">9 mins</small> -->
              </div>
            </div>
          </div>
        </div>
    </div>
</div>
</div>
</main>
</template>
<script>
export default {
  name: 'Product-section',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
