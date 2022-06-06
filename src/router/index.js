import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/authentication/Register.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/authentication/Login.vue'),
  },
  {
    path: '/users',
    name: 'users',
    component: () => import('../views/admin/Users.vue'),
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/Profile.vue'),
  },
  {
    path: '/requests',
    name: 'request',
    component: () => import('../views/requests/AllRequests.vue'),
  },
  ,
  {
    path: '/equipment',
    name: 'equipment',
    component: () => import('../views/equipment/Equipment.vue'),
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

