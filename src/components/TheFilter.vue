<script setup lang="ts">
  import TheDropdown from '@/components/TheDropdown.vue';
</script>

<template>
  <div class="flex items-center justify-between h-24 border px-16">
    <div class="px-4 py-0 border-r border-slate-800 flex items-center">      
      <font-awesome-icon :icon="['fas', 'city']" class="border border-slate-400 p-1 rounded-full w-4 h-4 text-slate-700" />
      <TheDropdown placeholder="Location" withIcon />
    </div>
    <div class="px-4 py-0 border-r border-slate-800 flex items-center">      
      <font-awesome-icon :icon="['fas', 'briefcase']" class="border border-slate-400 p-1 rounded-full w-4 h-4 text-slate-700" />
      <TheDropdown placeholder="Experience" withIcon />
    </div>
    <div class="px-4 py-0 border-r border-slate-800 flex items-center">      
      <font-awesome-icon :icon="['fas', 'hand-holding-dollar']" class="border border-slate-400 p-1 rounded-full w-4 h-4 text-slate-700" />
      <TheDropdown placeholder="Per month" withIcon />
    </div>
    <div class="px-4 py-0 self-start pt-1">      

      <div class="flex flex-col w-64 m-auto items-center h-16 justify-center">
        <h2 class="self-start text-slate-700">Salary Range</h2>  
        <div class="py-1 relative min-w-full">
              <div class="h-2 bg-gray-200 rounded-full">
                  <div class="absolute h-2 rounded-full bg-blue-600 w-0" style="width: 24.1935%; left: 11.2903%;"></div>
                  <div class="absolute h-4 flex items-center justify-center w-4 rounded-full bg-white shadow border border-gray-300 -ml-2 top-0 cursor-pointer" unselectable="on" onselectstart="return false;" style="left: 11.2903%;">
                  </div>
                  <div class="absolute h-4 flex items-center justify-center w-4 rounded-full bg-white shadow border border-gray-300 -ml-2 top-0 cursor-pointer" unselectable="on" onselectstart="return false;" style="left: 35.4839%;">
                  </div>
                  <div class="absolute text-gray-800 text-xs -ml-0 bottom-0 left-0 -mb-4">$500</div>
                  <div class="absolute text-gray-800 text-xs -mr-0 bottom-0 right-0 -mb-4">$5000</div>
              </div>
          </div>
      </div>

    </div>
  </div>
</template>