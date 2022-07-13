<script setup lang="ts">
import { useRoute } from 'vue-router'
import { formatTime } from '../utils'
defineProps<{
  frontmatter: any
}>()
const route = useRoute()
const backRoute = `${route.path.split('/').slice(0, 2).join('/')}/`
</script>

<template>
  <main>
    <div class="prose m-auto mb-8">
      <h1>
        {{ frontmatter.title }}
      </h1>
      <p mb-8>
        {{ formatTime(frontmatter.date) }}
      </p>
    </div>
    <article mb-8>
      <slot />
    </article>
    <div class="prose m-auto font-mono no-underline opacity-50 hover:opacity-75">
      <router-link :to="backRoute">
        cd ..
      </router-link>
    </div>
  </main>
</template>
