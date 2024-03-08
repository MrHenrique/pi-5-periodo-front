import { createRouter, createWebHashHistory } from 'vue-router'
import LoginPage from '@/views/LoginPage.vue'
import HelloWorld from '@/views/HelloWorld.vue'

const routes = [
  { path: '/', component: LoginPage },
  { path: '/home', component: HelloWorld }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
