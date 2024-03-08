<script setup></script>

<template>
  <router-view />
</template>

<style>
html.dark {
  color-scheme: dark;
}

body {
  @apply bg-gray-100 text-gray-950 dark:bg-gray-950 dark:text-gray-100;
}
</style>
./views/LoginPage.vue
