import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap';
import './assets/app.scss';
import 'popper.js'
import jQuery from 'jquery'


window.$ = window.jQuery = jQuery;

Vue.config.productionTip = false
Vue.component('Navbar',require('./components/Navbar.vue').default); //making navbar global component
Vue.component('Footer',require('./components/Footer.vue').default); //making navbar global component
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
