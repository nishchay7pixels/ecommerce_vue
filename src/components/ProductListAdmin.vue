<template>
  <div class="product-list-admin">
    <h3>Product List</h3>
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Modify</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(pro, index) in productList" :key="index">
          <td>{{ pro.data.name }}</td>
          <td>${{ pro.data.price }}</td>
          <td>
            <button @click="editProduct(pro)" class="btn btn-primary">
              Edit
            </button>
            <button @click="deleteProduct(pro.id)" class="btn btn-danger">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { EventBus } from '../main';
export default {
  name: "product-list-admin",
  data() {
    return {
      products: null,
    };
  },
  props: {
    productList: null,
  },
  created(){
    this.products = this.productList
  },
  methods:{
      editProduct(pro){
          EventBus.$emit('editProduct',pro);
      },
      deleteProduct(id){
        EventBus.$emit('deleteProduct',id);
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
