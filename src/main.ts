import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createHead } from '@vueuse/head'
import AppVue from './App.vue'
import routes from '~pages'
import 'uno.css'
import './styles/markdown.css'

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
const head = createHead()

createApp(AppVue)
  .use(router)
  .use(head)
  .mount('#app')
