<script>
import DarkMode from '@/components/DarkMode.vue'

export default {
  components: {
    'dark-mode': DarkMode
  }
}
</script>
<template>
  <div class="flex p-1 justify-end hover:text-primary"><dark-mode /></div>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        class="mx-auto h-10 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=emerald&shade=400"
        alt="Your Company"
      />
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
        Entre em sua conta
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" action="#" method="POST">
        <div>
          <label for="email" class="block text-sm font-medium leading-6">Email</label>
          <div class="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Digite seu e-mail"
              autocomplete="email"
              class="ring-primary-alt focus:ring-primary block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6">Senha</label>
            <div class="text-sm">
              <a href="#" class="font-semibold hover:text-indigo-600 hover:text-primary"
                >Esqueceu sua senha?</a
              >
            </div>
          </div>
          <div class="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Digite sua senha"
              autocomplete="current-password"
              class="ring-primary-alt focus:ring-primary block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div style="margin-top: 3rem">
          <button
            @click="$router.push('/home')"
            type="submit"
            class="bg-primary-alt hover:bg-primary focus-visible: outline-primary-alt flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Entrar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
