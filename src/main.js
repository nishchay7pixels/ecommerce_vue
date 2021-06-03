import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap';
import './assets/app.scss';
import 'popper.js'
import jQuery from 'jquery'
import {fb} from './firebase';


window.$ = window.jQuery = jQuery;

Vue.config.productionTip = false
Vue.component('Navbar',require('./components/Navbar.vue').default); //making navbar global component
Vue.component('Footer',require('./components/Footer.vue').default); //making navbar global component

//to prevent from logout if user refresh page in admin panel we 
//will only create a new Vue instance when page refresh only if 
//no user is logged in.
let app =''
fb.auth().onAuthStateChanged(function(){
  if(!app){
    new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})
//otherwise if we dnt want to check it remove the above code and uncomment the below

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')
