import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Map from '../views/Map.vue'
import HomeClip from '../views/HomeClip.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },

  {
    path: "/maps/:name",
    name: "Map",
    component: Map,
    props: true,
  },
  {
    path: '/:id',
    name: 'HomeClip',
    component: HomeClip,
    props: true
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
