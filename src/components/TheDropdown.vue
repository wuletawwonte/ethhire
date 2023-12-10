<script setup lang="ts">
  // import { RouterLink } from 'vue-router'
  import { onMounted, ref } from 'vue';

  const input = ref<HTMLInputElement | null>()

  onMounted(() => {
    console.log(input.value?.className)
  });

  defineProps({
    editable: {
      type: Boolean,
      default: true
    }
  })

</script>

<template>
  <div class="h-24 border border-red-500 px-16">
    <input 
      v-if="editable" 
      type="text" 
      ref="input" 
      placeholder="Dropdown..." 
      class="Test class"
      autocomplete="off" />
    <span v-else>Dropdown ...</span>
  </div>
</template>