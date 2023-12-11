<script setup lang="ts">
  import TheDropdown from '@/components/TheDropdown.vue';
</script>

<template>
  <div class="flex items-center h-24 border px-16">
    <div class="px-4 py-0 border-r border-slate-800 flex items-center">      
      <font-awesome-icon :icon="['fas', 'city']" class="border border-slate-400 p-1 rounded-full w-4 h-4 text-slate-700" />
      <TheDropdown placeholder="City ..." withIcon />
    </div>
  </div>
</template>