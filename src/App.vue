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
  @apply bg-slate-50 text-slate-800 dark:bg-slate-800 dark:text-slate-50;
}
</style>
