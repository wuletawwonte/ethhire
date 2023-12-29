<script setup lang="ts">
import Sidebar from '@/components/Sidebar.vue'
import Filter from '@/components/Filter.vue'
</script>

<template>
  <Filter />
  <div class="antialiased bg-gray-50 dark:bg-gray-900">
    <Sidebar />
    <main class="p-4 md:ml-64 h-auto pt-20"></main>
  </div>
</template>
