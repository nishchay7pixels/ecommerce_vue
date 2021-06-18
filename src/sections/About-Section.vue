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
        <h1 class="display-4 fw-bold lh-1">About Ecommerce</h1>
        <p class="lead">
          A store for the developers. We provide eveything that a developer
          might need from electronics to Graphics for you wall. You want it we
          deliver it.
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
          <router-link
            to="/about"
            class="btn btn-outline-primary btn-lg px-4 me-md-2 fw-bold"
            href="#"
            >About us</router-link
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
