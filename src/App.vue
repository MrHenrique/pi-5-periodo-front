<script setup>
import LoginPage from './components/LoginPage.vue'
</script>

<template>
  <LoginPage />
</template>

<style>
html.dark {
  color-scheme: dark;
}

body {
  @apply bg-green-50 text-indigo-950 dark:bg-indigo-950 dark:text-green-50;
}
</style>
