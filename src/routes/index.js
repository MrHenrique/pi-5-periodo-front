import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import FarmPage from '@/views/FarmPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/login' },
  { path: '/farm/:id?', component: FarmPage }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
