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
    <div class="prose">
      <h1>
        {{ frontmatter.title }}
      </h1>
      <p>
        {{ formatTime(frontmatter.date) }}
      </p>
    </div>
    <article>
      <slot />
    </article>
    <router-link :to="backRoute">
      cd ..
    </router-link>
  </main>
</template>
