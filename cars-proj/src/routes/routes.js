import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import HomeAll from '../components/HomeAll.vue'
import AllCars from '../views/AllCars.vue'

const routes = [
  { path: '/AllCars', component: AllCars },
  { path: '/', component: HomeAll },
  { path: '/about', component: About },
  { path: '/contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router