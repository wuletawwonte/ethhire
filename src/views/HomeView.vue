<script setup lang="ts">
  // import { RouterLink } from 'vue-router'
import TheDropdown from '@/components/TheDropdown.vue';
import TheFilter from '@/components/TheFilter.vue';

</script>

<template>
  <TheFilter />
  <main class="flex min-h-screen justify-center pt-24">
    <TheDropdown placeholder="People" :editable="false" :bordered="false" />
  </main>
</template>
