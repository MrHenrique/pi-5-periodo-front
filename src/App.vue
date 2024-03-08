<script setup></script>

<template>
  <router-view />
</template>

<style>
html.dark {
  color-scheme: dark;
}

body {
  @apply bg-gray-200 text-gray-900 dark:bg-gray-900 dark:text-gray-200;
}
</style>
