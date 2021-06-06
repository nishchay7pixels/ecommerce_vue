import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import { fb } from '../firebase';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
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
    meta: { requiresAuth: true },
    redirect: '/admin/overview',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Admin.vue'),
    children: [
      {
        path: 'overview',
        name: 'OverviewAdmin',
        component: () => import('../components/OverviewAdmin.vue')
      },
      {
        path: 'products',
        name: 'ProductsAdmin',
        component: () => import('../components/ProductsAdmin.vue')
      },
      {
        path: 'orders',
        name: 'OrderAdmin',
        component: () => import('../components/OrderAdmin.vue')
      },
      {
        path: 'profile',
        name: 'ProfileAdmin',
        component: () => import('../components/ProfileAdmin.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

//to prevent user to access admin page if not authorized
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = fb.auth().currentUser
  if (requiresAuth && !currentUser) {
    next('/')
  } else if (requiresAuth && currentUser) {
    next()
  } else {
    next()
  }
})

export default router;
