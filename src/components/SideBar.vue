<template>
  <aside
    :class="`${is_expanded ? 'is-expanded' : ''} bg-light-alt text-dark dark:bg-dark-alt dark:text-light h-screen sticky top-0`"
  >
    <div class="logo">
      <img :src="logoURL" alt="Vue" />
    </div>

    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="ToggleMenu">
        <span class="material-icons hover:text-primary">keyboard_double_arrow_right</span>
      </button>
    </div>

    <h3 class="text-darker-grey dark:text-grey">Menu</h3>
    <div class="menu">
      <router-link to="/" class="button hover:text-primary">
        <span class="material-icons hover:text-primary">home</span>
        <span class="text">Home</span>
      </router-link>
      <router-link to="/about" class="button hover:text-primary">
        <span class="material-icons hover:text-primary">description</span>
        <span class="text">About</span>
      </router-link>
      <router-link to="/team" class="button hover:text-primary">
        <span class="material-icons">group</span>
        <span class="text">Team</span>
      </router-link>
      <router-link to="/contact" class="button hover:text-primary">
        <span class="material-icons">email</span>
        <span class="text">Contact</span>
      </router-link>
    </div>

    <div class="flex"></div>
    <div class="menu">
      <div class="button hover:text-primary">
        <DarkMode />
      </div>
      <router-link to="/settings" class="button hover:text-primary">
        <span class="material-icons">settings</span>
        <span class="text">Settings</span>
      </router-link>
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue'
import logoURL from '../assets/logoS.png'
import DarkMode from './DarkMode.vue'

const is_expanded = ref(localStorage.getItem('is_expanded') === 'true')

const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value
  localStorage.setItem('is_expanded', is_expanded.value)
}
</script>

<style>
aside {
  display: flex;
  flex-direction: column;

  width: calc(2rem + 32px);
  overflow: hidden;
  min-height: 100vh;
  padding: 1rem;

  transition: 0.075s ease-in-out;

  .flex {
    flex: 1 1 0%;
  }

  .logo {
    margin-bottom: 1rem;

    img {
      width: 2rem;
    }
  }

  .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;

    position: relative;
    top: 0;
    transition: 0.075s ease-in-out;

    .menu-toggle {
      transition: 0.075s ease-in-out;
      .material-icons {
        font-size: 1.5rem;
        transition: 0.075s ease-out;
      }

      &:hover {
        .material-icons {
          transform: translateX(0.5rem);
        }
      }
    }
  }

  h3,
  .button .text {
    opacity: 0;
    transition: opacity 0.1s ease-in-out;
  }

  h3 {
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }

  .menu {
    margin: 0 -1rem;

    .button {
      display: flex;
      align-items: center;
      text-decoration: none;

      transition: 0.075s ease-in-out;
      padding: 0.5rem 1rem;

      .material-icons {
        font-size: 1.5rem;
        transition: 0.075s ease-in-out;
      }
      .text {
        transition: 0.075s ease-in-out;
      }

      &.router-link-exact-active {
        background-color: #dee2e6;
        border-right: 4px solid #4ade80;
      }
      .dark &.router-link-exact-active {
        background-color: #495057;
        border-right: 4px solid #4ade80;
      }
    }
  }
  .footer {
    opacity: 0;
    transition: opacity 0.1s ease-in-out;

    p {
      font-size: 0.875rem;
    }
  }

  &.is-expanded {
    width: var(--sidebar-width);

    .menu-toggle-wrap {
      top: -3rem;

      .menu-toggle {
        transform: rotate(-180deg);
      }
    }

    h3,
    .button .text {
      opacity: 1;
    }

    .button {
      .material-icons {
        margin-right: 1rem;
      }
    }

    .footer {
      opacity: 0;
    }
  }

  @media (max-width: 1024px) {
    /* position: absolute; */
    z-index: 100;
  }
}
</style>
