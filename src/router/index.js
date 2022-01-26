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
    path: '/last-launch',
    name: 'NextLaunch',
    component: () => import('../components/LastLaunch.vue')
  },
  {
    path: '/next-launch',
    name: 'NextLaunch',
    component: () => import('../components/NextLaunch.vue')
  },
  {
    path: '/next-launches',
    name: 'NextLaunch',
    component: () => import('../components/NextLaunches.vue')
  },
  {
    path: '/past-launches',
    name: 'NextLaunch',
    component: () => import('../components/PastLaunches.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
