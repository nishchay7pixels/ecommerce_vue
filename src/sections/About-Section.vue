<template>
  <div class="container my-5">
    <div
      class="
        row
        p-4
        pb-0
        pe-lg-0
        pt-lg-5
        align-items-center
        rounded-3
        border
        shadow-lg
      "
    >
      <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 class="display-4 fw-bold lh-1">About Shopin-io</h1>
        <p class="lead">
          I am building a fullscale ecommerce application which can be used by
          business (small/large) to develop and launch their own online store.
          The aim is to build it in a developer friendly manner with everything
          ready, packed and set for developers to modify and use.
        </p>
        <div
          class="d-grid gap-2 d-md-flex justify-content-md-center mb-4 mb-lg-3"
        >
          <router-link
            to="/products"
            class="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
            href="#"
            >Our products</router-link
          >
        </div>
      </div>
      <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
        <img
          class="rounded-lg-3"
          src="../assets/graphic.svg"
          alt=""
          width="720"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About-section",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow: inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}

@media (min-width: 992px) {
  .rounded-lg-3 {
    border-radius: 0.3rem;
  }
}
</style>
