<script setup lang="ts">
import { useDark } from '@vueuse/core'
const isDark = useDark()
</script>

<template>
  <div h-60px flex items-center px-4>
    <span op80>
      <img img-dark src="../assets/logo-white.png" alt="logo" class="logo-img">
      <img img-light src="../assets/logo-black.png" alt="logo" class="logo-img">
    </span>
  </div>
</template>

<style scoped>
.logo-img {
  height: 2em;
}
</style>
