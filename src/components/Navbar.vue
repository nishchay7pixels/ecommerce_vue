<template>
  <div class="nav">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link  to="/home" class="navbar-brand" href="#">Shopin-io</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul
            class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
            style="--bs-scroll-height: 100px"
          >
            <li class="nav-item">
              <router-link to="/products" class="nav-link" href="#"
                >Women</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/products" class="nav-link" href="#"
                >Men</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/products" class="nav-link" href="#"
                >Pride</router-link
              >
            </li>
          </ul>
          <div class="d-flex">
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#loginModal"
            >
             <i class="fas fa-sign-in-alt" aria-hidden="true"></i>
            </button>

            <button
              @click="checkout"
              style="margin-left: 3px"
              class="btn btn-outline-primary"
            >
              <i class="fas fa-shopping-cart"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
    <Login></Login>
  </div>
</template>

<script>
import Login from "./Login.vue";

export default {
  name: "Navbar",
  props: {
    msg: String,
  },
  components: {
    Login,
  },
  methods: {
    checkout() {
      this.$router.push("/checkout");
    },
  },
};
</script>
<style scoped>
.nav {
  display: inherit;
}
</style>

