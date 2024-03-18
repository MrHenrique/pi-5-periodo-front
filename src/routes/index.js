import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import NewFarm from '@/components/NewFarm.vue'
import LoginPage from '@/views/LoginPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/login', component: LoginPage },
  { path: '/novaFazenda', component: NewFarm }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
