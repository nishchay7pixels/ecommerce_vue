<template>
  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col"></th>
          <th scope="col">Product</th>
          <th scope="col">Quantity</th>
          <th scope="col">Date</th>
          <th scope="col">Price</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(order, index) in orders" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <th scope="row"><img class="product-image" :src="order.image"/></th>
          <td>{{ order.data.products.product_name }}</td>
          <td>{{ order.data.products.product_quantity }}</td>
          <td>
            {{
              Date(order.data.timestamp)
                .toString()
                .substring(4, 15)
                .replace(" ", ", ")
            }}
          </td>
          <td>{{ order.data.products.product_price }}</td>
          <td>
            <view-button :itemid="order.data.products.id" :_buttontext="''"
              >View</view-button
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { fb, db } from "../firebase";
import ViewButton from "./ViewButton.vue";
export default {
  components: { ViewButton },
  name: "order-list",
  data() {
    return {
      userId: null,
      orders: [],
      products:[]
    };
  },
  beforeMount() {
    this.user = fb.auth().currentUser;

    db.collection("Orders")
      .where("user_id", "==", this.user.uid)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((element) => {
          //this.orders.push(element.data());
          console.log(element.data());
          db.collection("Products")
            .doc(element.data().products.id)
            .get()
            .then((doc) => {
              if (doc.exists) {
                let order ={"data":element.data(),"image":doc.data().image[0]};
                this.orders.push(order);
                console.log("Document data:", order);
              } else {
                console.log("No such document!");
              }
            });
        });
      });
    
  },
};
</script>

<style>
.product-image{
  width: 50px;
}
</style>