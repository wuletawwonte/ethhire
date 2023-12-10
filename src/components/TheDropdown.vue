<script setup lang="ts">
  // import { RouterLink } from 'vue-router'
  import { ref } from 'vue';

  const input = ref<HTMLInputElement | null>()
  const active = ref(false)

  defineProps({
    editable: {
      type: Boolean,
      default: true
    },
    placeholder: {
      type: String,
      default: 'Dropdown...'
    }
  })

  const onFocus = () => {
    active.value = true
  }

  const onBlur = () => {
    active.value = false
  }

</script>

<template>
  <div class="h-24 border border-red-500 px-16">
    <input 
      v-if="editable" 
      type="text"
      ref="input" 
      :placeholder="placeholder" 
      class="placeholder-gray-400 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      autocomplete="off" 
      @focus="onFocus"
      @blur="onBlur"
      />
    <span 
      v-else
      class="text-gray-400"
      >
      {{ placeholder }}
    </span>

    <!-- Dropdown menu -->
    <div v-if="active" class="z-10 bg-white rounded-lg shadow w-60 dark:bg-gray-700">

      <div class="p-3 border-b border-gray-200">
        <label for="input-group-search" class="sr-only">Search</label>
        <div class="relative">
          <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
          <input type="text" id="input-group-search" class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search user">
        </div>
      </div>
      <ul class="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSearchButton">
        <li>
          <div class="flex items-center ps-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
            <label for="checkbox-item-11" class="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Bonnie Green</label>
          </div>
        </li>
        <li>
          <div class="flex items-center ps-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
              <label for="checkbox-item-12" class="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Jese Leos</label>
            </div>
        </li>
        <li>
          <div class="flex items-center ps-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
            <label for="checkbox-item-13" class="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Michael Gough</label>
          </div>
        </li>
        <li>
          <div class="flex items-center ps-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
            <label for="checkbox-item-14" class="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Robert Wall</label>
          </div>
        </li>
        <li>
          <div class="flex items-center ps-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
            <label for="checkbox-item-15" class="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Joseph Mcfall</label>
          </div>
        </li>
        <li>
          <div class="flex items-center ps-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
            <label for="checkbox-item-16" class="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Leslie Livingston</label>
          </div>
        </li>
        <li>
          <div class="flex items-center ps-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
            <label for="checkbox-item-17" class="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Roberta Casas</label>
          </div>
        </li>
      </ul>
    </div>


  </div>
</template>