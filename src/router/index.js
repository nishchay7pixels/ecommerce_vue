import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/products',
    name: 'Product',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Products
  },
  {
    path: '/admin',
    name: 'Admin',
    redirect:'/admin/overview',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Admin.vue'),
    children : [
      {
        path:'overview',
        name: 'OverviewAdmin',
        component: () => import('../components/OverviewAdmin.vue')
      },
      {
        path:'products',
        name: 'ProductsAdmin',
        component: () => import('../components/ProductsAdmin.vue')
      },
      {
        path:'orders',
        name: 'OrderAdmin',
        component: () => import('../components/OrderAdmin.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
