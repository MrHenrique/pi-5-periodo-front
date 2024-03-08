<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
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
  <div>
    <button v-if="isDark" @click="toggleDark()">
      <font-awesome-icon icon="fa-solid fa-sun" />
    </button>
    <button v-else @click="toggleDark()">
      <font-awesome-icon icon="fa-solid fa-moon" size="lg" />
    </button>
  </div>
</template>
