<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/" class="mr-3">Home</RouterLink>
    <RouterLink to="/powerball">Powerball</RouterLink>
  </nav>

  <RouterView />
</template>

<style scoped>
</style>
