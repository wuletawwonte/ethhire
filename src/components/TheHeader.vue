<script setup lang="ts">
  import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="flex items-center justify-between h-16 border px-24">
    <RouterLink to="/" class="flex gap-2 items-center">
      <img src="../assets/logo.svg" alt="EthHire" width="45px" />
      <span class="text-xl font-medium">EthHire</span>
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