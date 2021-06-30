<template>
  <div class="container order-page">
    <h1>My Orders</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col">Product</th>
          <!-- <th scope="col">Quantity</th> -->
          <th scope="col">Date</th>
          <!-- <th scope="col">Price</th> -->
        </tr>
      </thead>
      <tbody>
        <tr
          class="item-list-row"
          v-for="(order, index) in orders"
          :key="index"
          @click="viewDetails(order.data.products.id)"
        >
          <th scope="col">{{index+1}}</th>
          <td scope="row"><img class="product-image" :src="order.image" /></td>
          <td>{{ order.data.products.product_name.substring(0, 20) }}</td>
          <!-- <td>{{ order.data.products.product_quantity }}</td> -->
          <td>
            {{
              new Date(order.data.timestamp).toLocaleDateString("en-us", {
                weekday: "long",
                year: "numeric",
                month: "short",
                day: "numeric",
              })
            }}
          </td>
          <!-- <td>$ {{ order.data.products.product_price }}</td> -->
        </tr>
      </tbody>
    </table>   
  </div>
</template>

<script>
import { fb, db } from "../firebase";
export default {
  name: "order-list",
  data() {
    return {
      userId: null,
      orders: [],
      products: [],
    };
  },
  beforeMount() {
    this.user = fb.auth().currentUser;

    db.collection("Orders")
      .where("user_id", "==", this.user.uid)
      .orderBy("timestamp", "desc")
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
                let order = {
                  data: element.data(),
                  image: doc.data().image[0],
                };
                this.orders.push(order);
                console.log("Document data:", order);
              } else {
                console.log("No such document!");
              }
            });
        });
      });
  },
  methods: {
    viewDetails(pid) {
      this.$router.push({ name: "ProductDetails", params: { id: pid } });
    },
  },
};
</script>

<style>
.product-image {
  width: 50px;
}
.order-page {
  background-color: rgba(248, 248, 248, 0.501);
}
.item-list-row {
  cursor: pointer;
}
.table {
  font-size: 15px;
}
.item-list-row{
  box-shadow: 0 2px 6px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}
.item-list-row:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

</style>