import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/emp',
    name: 'employe',
    component: () => import('../views/employee/index.vue')
  },
  {
    path: '/upload',
    name: 'upload',
    component: () => import('../views/uploadTest/index.vue')
  },
  {
    path: '/shopping',
    name: 'employe',
    component: () => import('../views/shoppingCart/index.vue')
  },
  {
    path: '/auth',
    name: 'authentication',
    component: () => import('../views/authentication/index.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
