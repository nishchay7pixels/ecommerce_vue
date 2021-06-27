<template>
  <div class="overview">
    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          class="nav-link active"
          id="pills-profile-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-profile"
          type="button"
          role="tab"
          aria-controls="pills-profile"
          aria-selected="true"
        >
          Profile
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="pills-orders-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-orders"
          type="button"
          role="tab"
          aria-controls="pills-orders"
          aria-selected="false"
        >
          My Orders
        </button>
      </li>
    </ul>
    <div class="tab-content" id="pills-tabContent">
      <div
        class="tab-pane fade show active"
        id="pills-profile"
        role="tabpanel"
        aria-labelledby="pills-profile-tab"
      >
        <profile-user></profile-user>
      </div>
      <div
        class="tab-pane fade"
        id="pills-orders"
        role="tabpanel"
        aria-labelledby="pills-orders-tab"
      >
        <h1>My Orders</h1>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileUser from "./ProfileUser.vue"
export default {
  name: "OverviewUser",
  props: {},
  components:{
    ProfileUser
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
