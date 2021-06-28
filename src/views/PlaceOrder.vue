<template>
  <div class="place-order">
    <Navbar />
    <billing-address-form
      :cart="cart"
      :userId="account.userId"
      :firstname="profile.fullname.split(' ')[0]"
      :lastname="profile.fullname.split(' ')[1]"
      :phone="this.profile.phone"
      :address="this.profile.address"
      :email="this.account.email"
      :postcode="this.profile.postcode"
    ></billing-address-form>
    <Footer />
  </div>
</template>
<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import BillingAddressForm from "../components/BillingAddressForm.vue";
import { fb, db } from "../firebase";
export default {
  name: "place-order",
  components: {
    Navbar,
    BillingAddressForm,
    Footer,
  },
  data() {
    return {
      cart: null,
      account: {
        userId: null,
        username: null,
        email: null,
      },
      profile: {
        fullname: "",
        phone: "",
        address: "",
        postcode: "",
      },
    };
  },
  created() {
    this.cart = this.$store.state.cart;
    this.fetchProductPrice();
    this.fetchUserInformation();
  },
  methods: {
    fetchProductPrice() {
      console.log("method called");
    },
    fetchUserInformation() {
      let user = fb.auth().currentUser;
      if (user) {
        this.account.userId = user.uid;
        this.account.email = user.email;
        console.log(this.account.userId);
        //var docRef = db.collection("Profile").doc(this.account.userId);
        db.collection("Profile")
          .doc(this.account.userId)
          .get()
          .then((doc) => {
            if (doc.exists) {
              this.profile = doc.data();
            } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
            }
          })
          .catch((error) => {
            console.log("Error getting document:", error);
          });
        db.collection("Account")
          .doc(this.account.userId)
          .get()
          .then((doc) => {
            if (doc.exists) {
              this.account = doc.data();
            } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
            }
          })
          .catch((error) => {
            console.log("Error getting document:", error);
          });
      }
    },
  },
};
</script>
<style scoped>
</style>