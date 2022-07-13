<script setup lang="ts">
import { computed } from 'vue'
import { routerKey, useRoute } from 'vue-router'
import { formatTime } from '../utils'
defineProps<{
  frontmatter: any
}>()
const route = useRoute()

const hasBack = computed(() => route.path !== '/posts/')
</script>

<template>
  <main>
    <div class="prose m-auto mb-8">
      <h1>
        {{ frontmatter.title }}
      </h1>
      <p v-if="frontmatter.date" mb-8>
        {{ formatTime(frontmatter.date) }}
      </p>
    </div>
    <article mb-8>
      <slot />
    </article>
    <div v-if="hasBack" class="prose m-auto font-mono no-underline opacity-50 hover:opacity-75">
      <router-link to="/posts/">
        cd ..
      </router-link>
    </div>
  </main>
</template>
