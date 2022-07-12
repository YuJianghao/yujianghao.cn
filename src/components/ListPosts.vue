<script setup lang="ts">
import all from '~pages'
const routes = all.filter(route => route.path.startsWith('/posts/'))
</script>

<template>
  <div v-for="route in routes" :key="route.path">
    {{ route }}
  </div>
</template>
