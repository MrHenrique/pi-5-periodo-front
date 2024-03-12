<template>
  <form class="flex items-center">
    <input
      type="text"
      id="simple-search"
      class="bg-light border border-grey text-dark text-sm rounded-lg focus:ring-primary focus:border-primary-alt block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Procure o nome da fazenda."
      required
    />
    <button
      type="submit"
      class="flex p-2.5 ms-2 text-sm font-medium text-dark dark:text-light bg-light rounded-lg border border-primary-alt hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary-alt dark:bg-dark-alt dark:hover:bg-primary dark:focus:ring-primary-alt"
    >
      <span class="material-icons"> search </span>
    </button>
  </form>
</template>
