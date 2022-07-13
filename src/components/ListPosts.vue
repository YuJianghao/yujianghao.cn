<script setup lang="ts">
import { formatTime } from '~/utils'
import all from '~pages'
const routes = all.filter(route => route.path.startsWith('/posts/')).map(route => ({
  path: route.path,
  title: route.meta.frontmatter.title,
  date: route.meta.frontmatter.date,
}))
</script>

<template>
  <ul p0>
    <router-link
      v-for="route in routes" :key="route.path" :to="route.path"
      class="item block font-normal mb-6 mt-2 no-underline"
    >
      <li class="no-underline">
        <div class="title text-lg">
          {{ route.title }}
        </div>

        <div class="time opacity-50 text-sm -mt-1">
          {{ formatTime(route.date) }}
        </div>
      </li>
    </router-link>
  </ul>
</template>
