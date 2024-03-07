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
  @apply bg-teal-50 text-teal-900 dark:bg-teal-900 dark:text-teal-50;
}
</style>
