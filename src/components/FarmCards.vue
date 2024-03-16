<template>
  <div class="flex flex-wrap justify-center p-2 sm:p-12">
    <template v-for="(item, index) in items" :key="index">
      <li
        class="li-farms bg-light text-dark dark:bg-dark-alt dark:text-light shadow-md overflow-hidden m-3 sm:m-6 w-72"
      >
        <div class="flex flex-col p-2">
          <div class="p-2">
            <img :src="item.mapUrl" />
          </div>
          <div class="px-1 sm:px-4 pb-2 max-w-72 items-start justify-between">
            <p class="text-xl font-bold text-center text-nowrap text-ellipsis ... overflow-hidden">
              {{ item.name }}
            </p>
          </div>

          <div class="flex items-center justify-center px-1 sm:px-4 pt-2 pb-4 max-w-72">
            <span v-if="!isMobile" class="material-icons">sensors</span>
            <span v-if="!isMobile" class="ml-2">{{ item.devices }}</span>
            <span v-if="!isMobile" class="material-icons"> place </span>
            <span v-if="!isMobile" class="ml-2">{{ item.talhoes }}</span>
            <span class="material-icons"> thermostat </span>
            <div class="uppercase">{{ item.temperature }}°C</div>
            <span class="material-icons"> water_drop </span>
            <span class="text-nowrap text-ellipsis ... overflow-hidden">{{ item.rain }} mm</span>
          </div>
        </div>
      </li>
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const screenWidth = ref(window.innerWidth)
const isMobile = ref(screenWidth.value < 402 ? true : false)

const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth
  isMobile.value = screenWidth.value < 402 ? true : false
}

onMounted(() => {
  window.addEventListener('resize', updateScreenWidth)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateScreenWidth)
})

const items = [
  {
    name: 'Farm 1',
    mapUrl:
      'https://azure.microsoft.com/en-us/blog/wp-content/uploads/2021/12/8d260de3-0e42-4757-ab5b-cfe7299e8aa2.webp',
    temperature: 25,
    rain: 5,
    devices: 3,
    talhoes: 2
  },
  {
    name: 'Farm 2',
    mapUrl:
      'https://azure.microsoft.com/en-us/blog/wp-content/uploads/2021/12/8d260de3-0e42-4757-ab5b-cfe7299e8aa2.webp',
    temperature: 28,
    rain: 7,
    devices: 4,
    talhoes: 3
  },
  {
    name: 'Farm 3',
    mapUrl:
      'https://azure.microsoft.com/en-us/blog/wp-content/uploads/2021/12/8d260de3-0e42-4757-ab5b-cfe7299e8aa2.webp',
    temperature: 23,
    rain: 3,
    devices: 2,
    talhoes: 1
  },
  {
    name: 'Farm 4',
    mapUrl:
      'https://azure.microsoft.com/en-us/blog/wp-content/uploads/2021/12/8d260de3-0e42-4757-ab5b-cfe7299e8aa2.webp',
    temperature: 26,
    rain: 6,
    devices: 3,
    talhoes: 2
  },
  {
    name: 'Farm 5',
    mapUrl:
      'https://azure.microsoft.com/en-us/blog/wp-content/uploads/2021/12/8d260de3-0e42-4757-ab5b-cfe7299e8aa2.webp',
    temperature: 24,
    rain: 4,
    devices: 2,
    talhoes: 1
  },
  {
    name: 'Farm 6',
    mapUrl:
      'https://azure.microsoft.com/en-us/blog/wp-content/uploads/2021/12/8d260de3-0e42-4757-ab5b-cfe7299e8aa2.webp',
    temperature: 27,
    rain: 8,
    devices: 4,
    talhoes: 3
  },
  {
    name: 'Farm 7',
    mapUrl:
      'https://azure.microsoft.com/en-us/blog/wp-content/uploads/2021/12/8d260de3-0e42-4757-ab5b-cfe7299e8aa2.webp',
    temperature: 22,
    rain: 2,
    devices: 1,
    talhoes: 1
  },
  {
    name: 'Farm 814389128371823718032710237',
    mapUrl:
      'https://azure.microsoft.com/en-us/blog/wp-content/uploads/2021/12/8d260de3-0e42-4757-ab5b-cfe7299e8aa2.webp',
    temperature: 25,
    rain: 5,
    devices: 3,
    talhoes: 2
  }
]
</script>

<style>
.li-farms {
  display: block;
}
</style>
