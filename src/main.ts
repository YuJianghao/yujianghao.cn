import { ViteSSG } from 'vite-ssg'
import AppVue from './App.vue'
import routes from '~pages'
import 'uno.css'
import './styles/main.css'
import './styles/prose.css'
import './styles/markdown.css'

export const createApp = ViteSSG(
  // the root component
  AppVue,
  // vue-router options
  { routes },
)
