<script setup lang="ts">
</script>

<template>
  <div h-60px flex items-center px-4>
    <span op80>
      <img img-dark src="../assets/logo-white.png" alt="logo" class="logo-img">
      <img img-light src="../assets/logo-black.png" alt="logo" class="logo-img">
    </span>
    <nav class="nav" flex="~ gap4" flex-1 items-center op60 cursor-pointer>
      <div flex-1 />
      <a href="https://github.com/YuJianghao" target="_blank" title="GitHub">
        <div i-uil-github-alt />
      </a>
      <ToggleTheme />
    </nav>
  </div>
</template>

<style scoped>
.logo-img {
  height: 2em;
}

.nav a {
  transition: opacity 0.2s ease;
  color: inherit;
}

.nav a:hover {
  opacity: 1;
  text-decoration-color: inherit;
}
</style>
