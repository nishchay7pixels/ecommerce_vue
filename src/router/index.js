import Vue from 'vue'
import VueRouter from 'vue-router'

import { fb } from '../firebase';


Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: 'Error',
    component: () => import(/* webpackChunkName: "error-404" */ '../views/Error.vue')
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
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
    component: () => import(/* webpackChunkName: "products" */ '../views/Products.vue')
  },
  {
    path: '/brands/:brand_code',
    name: 'Brands',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "products" */ '../views/Brands.vue')
  },
  {
    path: "/productdetail/:id",
    name: 'ProductDetails',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "products" */ '../views/ProductDetails.vue')
  },
  {
    path: '/checkout',
    name: 'Checkout',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "checkout" */ '../views/Checkout.vue')
  },
  {
    path: '/place-order',
    name: 'PlaceOrder',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "products" */ '../views/PlaceOrder.vue')
  },
  {
    path: '/logout',
    name: 'Logout',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "checkout" */ '../views/LogoutSuccess.vue')
  },
  {
    path: '/order-success',
    name: 'OrderPlaced',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "checkout" */ '../views/OrderPlaced.vue')
  },
  {
    path: '/order-failed',
    name: 'OrderFailed',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "checkout" */ '../views/OrderFailed.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: { requiresAuth: true },
    redirect: '/profile/overview',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "admin" */ '../views/Profile.vue'),
    children: [
      {
        path: 'overview',
        name: 'OverviewUser',
        component: () => import('../components/OverviewUser.vue')
      },
    ]
  },
  {
    path: '/admin',
    name: 'Admin',
    meta: { requiresAuth: true },
    redirect: '/admin/overview',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "admin" */ '../views/Admin.vue'),
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
  mode: 'history',
  routes,
})

//to prevent user to access admin page if not authorized
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = fb.auth().currentUser
  if (requiresAuth && !currentUser) {
    next('*')
  } else if (requiresAuth && currentUser) {
    next()
  } else {
    next()
  }
})

export default router;
