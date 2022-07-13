<script setup lang='ts'>
import { isDark } from '~/logics'

function toggleDark() {
  isDark.value = !isDark.value
}
</script>

<template>
  <a class="select-none" title="Toggle Color Scheme" @click="toggleDark">
    <i v-show="isDark" class="i-ri-moon-line" />
    <i v-show="!isDark" class="i-ri-sun-line" />
  </a>
</template>
