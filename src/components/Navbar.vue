<template>
  <div class="nav">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">ECommerce</a>
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
              <router-link
                to="/home"
                class="nav-link"
                aria-current="page"
                href="#"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/products" class="nav-link" href="#"
                >Products</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link" href="#"
                >About</router-link
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
              Login
            </button>
            
            <button @click="checkout" style="margin-left: 3px;" class="btn btn-secondary"
              >Checkout</button>
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
  methods:{
    checkout(){
      this.$router.push('/checkout');
    }
  }
};
</script>
<style scoped>
.nav {
  display: inherit;
}

</style>

