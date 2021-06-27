 
<template>
  <div class="profile">
    <navbar></navbar>
    <br/>
    <main class="page-content container">
      <router-view />
    </main>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import { fb, db } from "../firebase";

export default {
  name: "Profile",
  data() {
    return {
      name: null,
      email: null,
      userid: null,
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
  components: { Navbar },
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
