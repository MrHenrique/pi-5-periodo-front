import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import NewFarm from '@/components/NewFarm.vue'
import LoginPage from '@/views/LoginPage.vue'
import FarmPage from '@/views/FarmPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/login', component: LoginPage },
  { path: '/novaFazenda', component: NewFarm },
  { path: '/farm/:id?', component: FarmPage }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
