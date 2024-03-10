<script setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark({
  onChanged(isDark) {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
})
const toggleDark = useToggle(isDark)
</script>

<template>
  <button class="test" v-if="isDark" @click="toggleDark()">
    <span class="material-icons">light_mode</span>
    <span class="text">Light</span>
  </button>
  <button class="test" v-else @click="toggleDark()">
    <span class="material-icons">dark_mode</span>
    <span class="text">Dark</span>
  </button>
</template>

<style>
.test {
  display: flex;
  align-items: center;
}
.material-icons {
  font-size: 2rem;
  transition: 0.2s ease-in-out;
}
</style>
