<template>
  <div id="app">
    <router-view/>
    <notification></notification>
  </div>
</template>
<script>
import Notification from './components/Notification.vue';
export default({
  components:{
    Notification
  }
})
</script>

<style>
#app {
  /*font-family: Titillium, Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* h2{
  font-family: Lobster;
} */

</style>
