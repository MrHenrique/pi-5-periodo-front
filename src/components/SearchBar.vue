<template>
  <form class="flex items-center">
    <input
      type="text"
      id="simple-search"
      class="bg-light border border-grey text-dark text-sm focus:ring-primary focus:border-primary-alt block w-full p-2.5 dark:bg-grey dark:text-light dark:focus:ring-primary-alt dark:focus:primary-alt"
      placeholder="Procure o nome da fazenda."
      required
    />
    <button
      type="submit"
      class="flex p-2.5 ms-4 text-sm font-medium text-dark dark:text-light bg-light rounded-lg border border-primary-alt hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary-alt dark:bg-dark-alt dark:hover:bg-primary dark:focus:ring-primary-alt"
    >
      <span class="material-icons"> search </span>
    </button>
  </form>
</template>
