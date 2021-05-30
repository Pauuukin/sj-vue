import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Nav from '../views/Sends.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path :'/sends',
    name: 'Nav',
    component: Nav
  },
  
]

const router = new VueRouter({
  routes
})

export default router
