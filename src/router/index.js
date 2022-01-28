import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LastLaunch from '../views/LastLaunch.vue'
import NextLaunch from '../views/NextLaunch.vue'
import NextLaunches from '../views/NextLaunches.vue'
import PastLaunches from '../views/PastLaunches.vue'

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
    component: LastLaunch
  },
  {
    path: '/next-launch',
    name: 'NextLaunch',
    component: NextLaunch
  },
  {
    path: '/next-launches',
    name: 'NextLaunch',
    component: NextLaunches
  },
  {
    path: '/past-launches',
    name: 'NextLaunch',
    component: PastLaunches
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
