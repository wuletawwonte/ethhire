<script setup lang="ts">
  import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="border">
    <nav>
      <ul class="flex">
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