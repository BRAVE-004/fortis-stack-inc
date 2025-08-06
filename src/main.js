
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createHead } from '@vueuse/head'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(),
  routes
})

const head = createHead()

createApp(App)
  .use(router)
  .use(head)
  .mount('#app')
