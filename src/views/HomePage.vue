<script setup>
import FarmCards from '@/components/FarmCards.vue'
import HomePageCarousel from '@/components/HomePageCarousel.vue'
</script>

<template>
  <div class="container mx-auto">
    <div class="mx-8 sm:mx-20 mt-4">
      <HomePageCarousel />
    </div>
    <div class="mx-8 sm:mx-20 pt-8">
      <div class="mx-8 flex flex-row justify-between items-center">
        <span class="text-4xl">Fazendas</span>
        <router-link to="/novaFazenda" class="flex items-center cursor-pointer group">
          <span
            class="material-icons hover:text-primary bg-light dark:bg-dark-alt group-hover:bg-light-alt dark:group-hover:bg-darker-grey p-1 text-lg rounded-lg"
          >
            add
          </span></router-link
        >
      </div>

      <FarmCards />
    </div>
  </div>
</template>

<style scoped></style>
