 
<template>
  <div class="admin">
    <div class="page-wrapper default-theme sidebar-bg bg1 toggled">
      <a
        id="show-sidebar"
        @click="closeMenu"
        class="btn btn-sm btn-dark"
        href="#"
      >
        <i class="fas fa-bars"></i>
      </a>
      <nav id="sidebar" class="sidebar-wrapper">
        <div class="sidebar-content">
          <!-- sidebar-brand  -->
          <div class="sidebar-item sidebar-brand">
            <a href="#">ECommerce</a>
            <div id="close-sidebar" @click="closeMenu()">
              <i class="fas fa-times"></i>
            </div>
          </div>

          <h3>Hi {{ name }}</h3>
          <!-- sidebar-menu  -->
          <div class="sidebar-item sidebar-menu">
            <ul>
              <li class="header-menu">
                <span>Menu</span>
              </li>

              <li class="d-flex">
                <router-link to="/admin/overview">
                  <i class="fa fa-chart-line"></i>
                  <span>Overview</span>
                </router-link>
              </li>
              <li class="d-flex">
                <router-link to="/admin/products">
                  <i class="fab fa-amazon"></i>
                  <span>Products</span>
                </router-link>
              </li>
              <li class="d-flex">
                <router-link to="/admin/orders">
                  <i class="fa fa-shopping-cart"></i>
                  <span>Orders</span>
                </router-link>
              </li>
              <li class="d-flex">
                <router-link to="/admin/profile">
                  <i class="fa fa-user"></i>
                  <span>Profile</span>
                </router-link>
              </li>
              <li class="d-flex">
                <a href="#" @click="logout()">
                  <i class="fa fa-power-off"></i>
                  <span>Logout</span>
                </a>
              </li>
            </ul>
          </div>
          <!-- sidebar-menu  -->
        </div>
      </nav>
      <!-- sidebar-content  -->
      <main class="page-content">
        <router-view />
      </main>
      <!-- page-content" -->
    </div>
    <!-- page-wrapper -->
  </div>
</template>

<script>
import { fb, db } from "../firebase";

export default {
  name: "Admin",
  data() {
    return {
      name: null,
      email: null,
      userid:null
    };
  },
  created() {
    var user = fb.auth().currentUser;
    this.email = user.email;
    this.userid = user.uid;
    db.collection("Profile")
      .doc(this.userid)
      .get()
      .then((doc) => {
        if (doc.exists) {
          this.name = doc.data().fullname;
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  },
  components: {},
  methods: {
    closeMenu() {
      window.$(".page-wrapper").toggleClass("toggled");
    },
    logout() {
      Object.assign(this.$data, this.$options.data.apply(this)); //another way to reset data
      fb.auth()
        .signOut()
        .then(() => {
          this.$router.replace("/logout");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
</style>
