<script setup lang="ts">
import { useThemeStore } from '@/stores/theme'

const themeStore = useThemeStore()

const toggleDark = () => {
  themeStore.toggleTheme()
  if (themeStore.theme.isDark) {
    document.querySelector('html')?.setAttribute('data-theme', 'dark')
  } else {
    document.querySelector('html')?.removeAttribute('data-theme')
  }
}
</script>

<template>
  <div class="navbar bg-base-100 shadow-sm lg:px-16">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><a>Item 1</a></li>
          <li>
            <a>Parent</a>
            <ul class="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
      <router-link to="/" class="btn btn-ghost text-xl">Ethhire</router-link>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li><a>Item 1</a></li>
        <li>
          <details>
            <summary>Resources</summary>
            <ul class="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </details>
        </li>
        <li><a>About</a></li>
      </ul>
    </div>
    <div class="navbar-end flex gap-3">
      <label class="swap swap-rotate mr-2">
        <input
          type="checkbox"
          :checked="!themeStore.theme.isDark"
          class="theme-controller"
          value="light"
          @click="toggleDark"
        />

        <font-awesome-icon :icon="['fas', 'sun']" class="swap-off fa-lg" />
        <font-awesome-icon :icon="['fas', 'moon']" class="swap-on fa-lg" />
      </label>

      <router-link to="/login" class="btn btn-outline btn-primary">Login </router-link>
      <button type="button" class="btn btn-ghost">For Employers</button>
    </div>
  </div>
</template>
