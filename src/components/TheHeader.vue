<script setup lang="ts">
  import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="flex items-center justify-between h-16 border px-24 dark:bg-black">
    <RouterLink to="/" class="flex gap-1 items-center">
      <img src="../assets/logo.svg" alt="EthHire" class="w-8" />
      <span class="text-md font-medium">EthHire</span>
    </RouterLink>
    <nav>
      <ul class="flex gap-1">
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/about">About</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>