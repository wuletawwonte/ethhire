<script setup lang="ts">
  import { onMounted, ref } from 'vue';

  const input = ref<HTMLInputElement | null>()
  const focused = ref(false)
  const dropdownMenuContainer = ref<HTMLDivElement | null>()

  defineProps({
    editable: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: 'Dropdown...'
    },
    searchable: {
      type: Boolean,
      default: false
    },
    bordered: {
      type: Boolean,
      default: false
    },
    withIcon: {
      type: Boolean,
      default: false
    }
  })

  const onFocus = () => {
    focused.value = true
  }

  const onBlur = () => {
    focused.value = false
  }

  const toggleDropdown = () => {
    focused.value = !focused.value
  }

  onMounted(() => {
    document.addEventListener('click', (e) => {
      if (!dropdownMenuContainer.value?.contains(e.target as Node)) {
        focused.value = false
      }
    })
  })

</script>

<template>
  <div ref="dropdownMenuContainer">
    <div class="relative">
      <input 
        v-if="editable" 
        type="text"
        ref="input" 
        :placeholder="placeholder"
        class="relative w-60 origin-top-left outline-none focus:ring-2 placeholder-gray-400 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500/50 focus:border-blue-500 focus:bg-transparent p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        :class="{'bg-gray-50 border-2 border-gray-300': bordered, 'border-transparent': !bordered}"
        autocomplete="off" 
        @focus="onFocus"
        @blur="onBlur"
        />
      <span 
        v-else
        class="relative block w-60 origin-top-left text-gray-400 cursor-pointer text-sm rounded-lg p-2.5 dark:bg-gray-700 dark:text-white"
        :class="{'border-2 border-gray-400': bordered, 'border-transparent': !bordered, 'text-gray-900': focused}"
        @click="toggleDropdown"
        @blur="onBlur"
        >
        {{ placeholder }}
      </span>

      <!-- Dropdown icon -->
      <font-awesome-icon 
        v-if="withIcon"
        :icon="['fas', 'chevron-down']" 
        class="absolute right-3 top-3 text-gray-500 dark:text-gray-400 cursor-pointer" 
        @click="toggleDropdown"
        />


    </div>

    <!-- Dropdown menu -->
    <Transition 
      enter-class="-translate-y-1/2 scale-y-0 opacity-0"
      enter-to-class="translate-y-0 scale-y-100 opacity-100"      
      enter-active-class="transform transition duration-500 ease-and-out"
      >
      <div v-if="focused" class="z-10 bg-white rounded-lg shadow w-60 dark:bg-gray-700">

        <div v-if="searchable" class="p-3 border-b border-gray-200 bg-slate-100">
          <label for="input-group-search" class="sr-only">Search</label>
          <div class="relative">
            <input type="text" id="input-group-search" class="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search user">
            <font-awesome-icon :icon="['fas', 'filter']" class="w-4 h-4 text-gray-500 absolute right-3 top-3 dark:text-gray-400 ps-3 cursor-auto" />
          </div>
        </div>

        <ul class="h-48 px-3 py-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSearchButton">
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
    </Transition>

  </div>
</template>