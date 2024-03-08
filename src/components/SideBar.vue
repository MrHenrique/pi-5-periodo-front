<script setup>
import DarkMode from './DarkMode.vue'
defineProps({
  msg: {
    type: String,
    required: true
  }
})
var menuOpen = true
function toggleMenu() {
  menuOpen = !menuOpen
  console.log(menuOpen)
}
</script>

<template>
  <div class="fixed bottom-0 left-0 right-0 flex justify-center">
    <div class="bottom-0">
      <div
        class="flex justify-center items-center gap-4 p-4 rounded-t-3xl bg-gray-50 dark:bg-gray-950"
      >
        <div @click="toggleMenu">
          <font-awesome-icon
            v-if="!menuOpen"
            class="rounded-t-2xl bg-gray-950 p-2"
            icon="fa-solid fa-arrow-up"
          />
          <font-awesome-icon
            v-if="menuOpen"
            class="rounded-t-2xl bg-gray-950 p-2"
            icon="fa-solid fa-arrow-down"
          />
        </div>
        <div v-if="menuOpen" class="flex items-center">
          <div class="flex border-gray-900">
            <img
              alt=""
              src="../assets/img/1647004419044.jpg"
              class="w-10 h-10 rounded-full object-cover"
            />
            <div class="pl-2">
              <p class="text-sm">
                <strong class="block font-medium">Éder Santana</strong>
                <span> Fazenda Unipam </span>
              </p>
            </div>
          </div>
          <span class="px-5">Inicio</span>
          <span class="px-5">Áreas</span>
          <span class="px-5">Dispositivos</span>
          <span class="px-5">Teste2</span>
          <span class="pl-5 pr-2"><DarkMode /></span>
          <span class="px-2"><font-awesome-icon icon="fa-solid fa-gears" /></span>
          <span class="px-2"><font-awesome-icon icon="fa-solid fa-door-closed" /></span>
        </div>
      </div>
    </div>
  </div>
</template>
