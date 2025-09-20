import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import slides from '../slides.md'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('./layouts/default.vue'),
      children: [
        {
          path: '',
          component: () => import('./pages/slides.vue')
        }
      ]
    }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
