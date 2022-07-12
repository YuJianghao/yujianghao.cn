import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import AppVue from './App.vue'

import routes from '~pages'

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

createApp(AppVue).use(router).mount('#app')
