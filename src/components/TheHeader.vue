<script setup lang="ts">
  import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="flex items-center justify-between border px-16 dark:bg-gray-900">
    <div class="flex items-center gap-24">
      <RouterLink to="/" class="flex gap-1 items-center">
        <img src="../assets/logo.svg" alt="EthHire" class="w-8" />
        <span class="text-md font-medium">EthHire</span>
      </RouterLink>
      <nav class="text-sm font-medium text-center text-gray-500 dark:text-gray-400 dark:border-gray-700">
        <ul class="flex flex-wrap -mb-px">
          <li class="me-2">
            <RouterLink to="/" class="inline-block p-4 border-b-2 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" active-class="text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500">Home</RouterLink>
          </li>
          <li class="me-2">
            <RouterLink to="/about" class="inline-block p-4 border-b-2 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" active-class="text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500">About</RouterLink>
          </li>
          <li class="me-2">
            <RouterLink to="/contact" class="inline-block p-4 border-b-2 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" active-class="text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500">Contact</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
    
    <div class="flex gap-24 items-center">
      <input type="text" placeholder="Search" class="bg-gray-200 focus:bg-white border-transparent focus:border focus:border-blue-400 rounded px-4 py-1 outline-none" />

      <div class="flex gap-1 items-center">
        <button class="border rounded px-2 py-1">Login</button>
        <button class="border rounded px-2 py-1">Sign Up</button>
      </div>
    </div>
  </header>
</template>