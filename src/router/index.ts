import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import '../assets/main.css'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Index.vue'),
      // component: App,
    },
    {
      path: '/get-quote',
      name: 'get-quote',
      component: () => import('../views/GetQuote.vue'),
    },
  ],
})

export default router
