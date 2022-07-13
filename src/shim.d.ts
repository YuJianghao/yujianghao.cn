// vite-env.d.ts
/// <reference types="vite-plugin-pages/client" />

declare module "*.vue" {
  import type { ComponentOptions } from "vue"
  const Component: ComponentOptions
  export default Component
}

declare module "*.md" {
  import type { ComponentOptions } from "vue"
  const Component: ComponentOptions
  export default Component
}

declare module 'vue-router' {
  interface RouteMeta {
    frontmatter: any
  }
}