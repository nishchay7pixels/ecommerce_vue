<template>
  <div class="Notification"></div>
</template>
<script>
import { EventBus } from "../main";
export default {
  name: "Notification",
  props: {},
  created() {
    //On event - success
    EventBus.$on("notification-success", (data) => {
      this.$toast(data, {
        position: "bottom-left",
        timeout: 1000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: false,
        icon: true,
        rtl: false,
      });
    });
    //On event - error
    EventBus.$on("notification-error", (data) => {
      this.$toast.error(data, {
        position: "bottom-left",
        timeout: 1000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: false,
        icon: true,
        rtl: false,
      });
    });
    //On event - warning
    EventBus.$on("notification-warning", (data) => {
      this.$toast.warning(data, {
        position: "bottom-left",
        timeout: 1000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: false,
        icon: true,
        rtl: false,
      });
    });
    //On event - information
    EventBus.$on("notification-info", (data) => {
      this.$toast.info(data, {
        position: "bottom-left",
        timeout: 1000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: false,
        icon: true,
        rtl: false,
      });
    });
  },
};
</script>
<style scoped>
</style>