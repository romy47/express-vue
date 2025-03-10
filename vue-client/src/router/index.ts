import Dashboard from '@/views/Dashboard.vue'
import Payment from '@/views/Payment.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/payment',
      name: 'payment',
      component: Payment,
    },
  ],
})

export default router
