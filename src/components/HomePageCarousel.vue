<template>
  <div id="controls-carousel" class="relative" data-carousel="static">
    <div class="h-56 overflow-hidden md:h-96">
      <div
        v-for="(item, index) in carouselItems"
        :key="index"
        :class="{
          hidden: selectedIndex !== index,
          'duration-700': true,
          'ease-in-out': true
        }"
        data-carousel-item="active"
        class="flex items-center justify-center"
      >
        <div class="text-center bg-light dark:bg-dark-alt m-6 w-[90%] h-80 rounded-3xl">
          <p class="text-ellipsis overflow-hidden ...">{{ item.title }}</p>
          <p class="text-ellipsis overflow-hidden ...">{{ item.content }}</p>
        </div>
      </div>
    </div>
    <button
      type="button"
      class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      @click="prevSlide"
    >
      <span
        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-light dark:bg-darker-grey group-hover:bg-light-alt dark:group-hover:bg-dark-alt group-focus:ring-2 group-focus:ring-primary group-focus:outline-none group-focus:text-primary"
      >
        <span class="material-icons hover:text-primary"> chevron_left </span>
        <span class="sr-only">Voltar</span>
      </span>
    </button>
    <button
      type="button"
      class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      @click="nextSlide"
    >
      <span
        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-light dark:bg-darker-grey group-hover:bg-light-alt dark:group-hover:bg-dark-alt group-focus:ring-2 group-focus:ring-primary group-focus:outline-none group-focus:text-primary"
      >
        <span class="material-icons hover:text-primary"> chevron_right </span>
        <span class="sr-only">Próximo</span>
      </span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedIndex: 0,
      carouselItems: [
        { title: 'Teste', content: 'TESTE' },
        { title: 'teste2', content: 'TESTE2' }
      ]
    }
  },
  methods: {
    prevSlide() {
      this.selectedIndex =
        (this.selectedIndex - 1 + this.carouselItems.length) % this.carouselItems.length
    },
    nextSlide() {
      this.selectedIndex = (this.selectedIndex + 1) % this.carouselItems.length
    }
  }
}
</script>
