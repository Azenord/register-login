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
  ,
  {
    path: '/users/:username',
    name: 'UserProfile',
    component: () => import('../views/admin/User.vue')
  },
  {
    path: '/users/change/:username',
    name: 'ChangeUserProfile',
    component: () => import('../views/admin/ChangeUser.vue')
  },
  {
    path: '/equip/:equipment',
    name: 'EqupmentProfile',
    component: () => import('../views/equipment/Equip.vue')
  },
  {
    path: '/equip/change/:equipment',
    name: 'ChangeEquip',
    component: () => import('../views/equipment/ChangeEquip.vue')
  },
  {
    path: '/createEquip',
    name: 'CreateEquip',
    component: () => import('../views/equipment/CreateEquip.vue')
  },
  {
    path: '/request/:id',
    name: 'RequestsProfile',
    component: () => import('../views/requests/Request.vue')
  },
  {
    path: '/request/change/:id',
    name: 'RequestsProfile',
    component: () => import('../views/requests/ChangeRequest.vue')
  },
  {
    path: '/createRequest',
    name: 'RequestsProfile',
    component: () => import('../views/requests/CreateRequest.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

