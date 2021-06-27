import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Sends from '../views/Sends.vue'
import Gallery from '../views/Gallery.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path :'/sends',
    name: 'Sends',
    component: Sends
  },
  {
    path :'/gallery',
    name: 'Gallery',
    component: Gallery
  },
  
]

const router = new VueRouter({
  routes
})

export default router
