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
  @apply bg-green-100 text-indigo-900 dark:bg-indigo-900 dark:text-green-100;
}
</style>
