<template>
  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Product</th>
          <th scope="col">Quantity</th>
          <th scope="col">Date</th>
          <th scope="col">Price</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(order, index) in orders" :key="index">
          <th scope="row">{{index+1}}</th>
          <td>{{order.products.product_name}}</td>
          <td>{{order.products.product_quantity}}</td>
          <td>{{Date(order.timestamp).toString().substring(4,15).replace(" ",", ")}}</td>
          <td>{{order.products.product_price}}</td>
          <td><view-button :itemid="order.products.id" :_buttontext="''"
                >View</view-button></td>
        </tr>
        
      </tbody>
    </table>
  </div>
</template>

<script>
import { fb, db } from "../firebase";
import ViewButton from './ViewButton.vue';
export default {
  components: { ViewButton },
  name: "order-list",
  data() {
    return {
      userId: null,
      orders: [],
    };
  },
  beforeMount() {
    this.user = fb.auth().currentUser;

    db.collection("Orders")
      .where("user_id", "==", this.user.uid)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((element) => {
          this.orders.push(element.data());
          console.log(element.data());
        });
      });
  },
};
</script>

<style>
</style>