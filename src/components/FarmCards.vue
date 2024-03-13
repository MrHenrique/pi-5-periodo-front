<template>
  <div class="flex flex-wrap justify-start p-2 sm:p-12">
    <SearchBar class="w-full m-2" />
    <li
      v-for="(item, index) in items"
      :key="index"
      class="li-farms bg-light text-dark dark:bg-dark-alt dark:text-light shadow-md overflow-hidden m-5 w-48"
    >
      <div class="p-4 flex flex-col items-center justify-between">
        <div class="px-4 max-w-48">
          <p class="text-4xl font-bold text-nowrap text-ellipsis ... overflow-hidden">
            {{ item.name }}
          </p>
        </div>
        <div class="flex items-center m-1"></div>
        <div class="flex items-center m-1">
          <span class="material-icons">sensors</span><span class="ml-2">{{ item.devices }}</span>
          <span class="material-icons"> place </span><span class="ml-2">{{ item.talhoes }}</span>
        </div>
        <div class="flex items-center m-1">
          <span class="material-icons"> thermostat </span>
          <div class="uppercase tracking-wide text-sm font-semibold">{{ item.temperature }}°C</div>
          <span class="material-icons"> water_drop </span>
          <span class="tracking-wide text-sm font-semibold">{{ item.rain }} mm</span>
        </div>
      </div>
    </li>
  </div>
</template>

<script setup>
import SearchBar from './SearchBar.vue'

const items = [
  { name: 'Farm 1', temperature: 25, rain: 5, devices: 3, talhoes: 2 },
  { name: 'Farm 2', temperature: 28, rain: 7, devices: 4, talhoes: 3 },
  { name: 'Farm 3', temperature: 23, rain: 3, devices: 2, talhoes: 1 },
  { name: 'Farm 4', temperature: 26, rain: 6, devices: 3, talhoes: 2 },
  { name: 'Farm 5', temperature: 24, rain: 4, devices: 2, talhoes: 1 },
  { name: 'Farm 6', temperature: 27, rain: 8, devices: 4, talhoes: 3 },
  { name: 'Farm 7', temperature: 22, rain: 2, devices: 1, talhoes: 1 },
  { name: 'Farm 814389128371823718032710237', temperature: 25, rain: 5, devices: 3, talhoes: 2 }
]
</script>

<style>
.li-farms {
  display: block;
}
</style>
