<script setup lang="ts">
import Sidebar from '@/components/Sidebar.vue'
import Filter from '@/components/Filter.vue'
</script>

<template>
  <Filter />
  <div class="antialiased bg-gray-50 dark:bg-gray-900 flex">
    <Sidebar />
    <main class="p-4 w-full h-auto border">
      <h2 class="text-2xl font-semibold text-gray-800 dark:text-white">Home</h2>
    </main>
  </div>
</template>
