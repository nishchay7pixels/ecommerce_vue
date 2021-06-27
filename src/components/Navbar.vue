<template>
  <div class="nav">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link to="/home" class="navbar-brand" href="#"
          >Shopin-io</router-link
        >
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
                >Explore</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/brands/all" class="nav-link" href="#"
                >Brands</router-link
              >
            </li>
          </ul>
          <div class="d-flex">
            <div
              class="btn-group"
              role="group"
              aria-label="Button group with nested dropdown"
            >
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#loginModal"
                v-if="!userLoggedIn"
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

              <div class="btn-group" role="group" v-if="userLoggedIn">
                <button
                  id="btnGroupDrop1"
                  type="button"
                  class="btn btn-primary dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="fa fa-user" aria-hidden="true"></i>
                </button>
                <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                  <li><router-link class="dropdown-item" href="#" :to="'/profile'">Profile</router-link></li>
                  <li>
                    <a class="dropdown-item" href="#" @click="logoutUser()"
                      >Logout</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <Login></Login>
  </div>
</template>

<script>
import Login from "./Login.vue";
import { fb } from "../firebase";

export default {
  name: "Navbar",
  props: {
    msg: String,
  },
  data() {
    return {
      userLoggedIn: false,
    };
  },
  components: {
    Login,
  },
  methods: {
    checkout() {
      this.$router.push("/checkout");
    },
    isLogin() {
      let currentUser = fb.auth().currentUser;
      console.log(currentUser);
      if (currentUser) {
        this.userLoggedIn = true;
      } else {
        this.userLoggedIn = false;
      }
    },
    logoutUser() {
      Object.assign(this.$data, this.$options.data.apply(this)); //another way to reset data
      fb.auth()
        .signOut()
        .then(() => {
          //this.$router.replace("/logout");
          var currentUrl = window.location.pathname;
          if (currentUrl === "/home") {
            window.location.replace("/home");
          } else {
            this.$router.replace("/logout");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.isLogin();
  },
};
</script>
<style scoped>
.nav {
  display: inherit;
}

 @media screen and (min-width: 980px) {
  .dropdown-menu[data-bs-popper] {
    top: 100%;
    left: -106px;
    margin-top: 0.125rem;
}
}


 @media screen and (max-width: 640px) {
  .dropdown-menu[data-bs-popper] {
    top: 100%;
    left: -44px;
    margin-top: 0.125rem;
}
}
@media screen and (max-width: 480px) {
  .dropdown-menu[data-bs-popper] {
    top: 100%;
    left: -44px;
    margin-top: 0.125rem;
  }
}
</style>

