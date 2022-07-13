<script setup lang="ts">
import { useRoute } from 'vue-router'
import { formatTime } from '../utils'
defineProps<{
  frontmatter: any
}>()
const route = useRoute()
</script>

<template>
  <main px7 py10>
    <div class="prose m-auto mb-8">
      <h1>
        {{ frontmatter.title }}
      </h1>
      <p v-if="frontmatter.date" mb-8>
        {{ formatTime(frontmatter.date) }}
      </p>
    </div>
    <article>
      <slot />
    </article>
    <div v-if="route.path !== '/'" class="prose m-auto mt-8 mb-8 ">
      <router-link
        :to="route.path.split('/').slice(0, -1).join('/') || '/'"
        class="font-mono no-underline opacity-50 hover:opacity-75"
      >
        cd ..
      </router-link>
    </div>
  </main>
</template>
