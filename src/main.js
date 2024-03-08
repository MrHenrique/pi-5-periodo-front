import './assets/main.css'
import './index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
library.add(faMoon, faSun)
createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
