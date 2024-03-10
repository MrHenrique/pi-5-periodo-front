<script setup>
import SideBar from './components/SideBar.vue'
import LoginPage from './views/LoginPage.vue'
var logged = true
</script>

<template>
  <div v-if="logged" class="app">
    <SideBar />
    <router-view />
  </div>
  <LoginPage v-else />
</template>

<style>
html.dark {
  color-scheme: dark;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fira sans', sans-serif;
}

body {
  @apply bg-light text-dark dark:bg-dark dark:text-light;
}
button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.app {
  display: flex;

  main {
    flex: 1 1 0;
    padding: 2rem;

    @media (max-width: 1024px) {
      padding-left: 6rem;
    }
  }
}
</style>
