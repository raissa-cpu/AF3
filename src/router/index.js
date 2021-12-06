import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dishes from '../views/Dishes.vue'
import Candies from '../views/Candies.vue'
import Juices from '../views/Juices.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Dishes',
    name: 'Dishes',
    component: Dishes
  },
  {
    path:'/Candies',
    name:'Candies',
    component: Candies
  },
  {
    path:'/Juices',
    name:'Juices',
    component: Juices
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
