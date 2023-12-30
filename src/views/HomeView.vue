<script setup lang="ts">
import Sidebar from '@/components/Sidebar.vue'
import Filter from '@/components/Filter.vue'
import { jobs } from '@/data/jobs.ts'
</script>

<template>
  <Filter />
  <div class="antialiased bg-gray-50 dark:bg-gray-900 flex max-w-screen">
    <Sidebar />
    <main class="p-4 h-auto border w-full">
      <div class="flex items-center gap-2">
        <h2 class="text-2xl font-semibold text-gray-800 dark:text-white">Featured Jobs</h2>
        <div class="badge badge-outline">128</div>
      </div>

      <div class="flex mt-4 gap-4 flex-wrap">
        <div
          v-for="job in jobs.featured"
          :key="job.id"
          class="card w-64 shadow-md border bg-white glass p-1"
        >
          <div class="card-body p-4 rounded-xl shadow-sm" :class="'bg-' + job.color + '-200'">
            <div class="flex">
              <div class="badge bg-white py-3">Feb 24, 2023</div>
            </div>
            <h2 class="card-title">{{ job.title }}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="flex gap-1 flex-wrap">
              <div class="badge badge-outline py-3 px-2 border-stone-400">default</div>
              <div class="badge badge-outline py-3 px-2 border-stone-400">primary</div>
              <div class="badge badge-outline py-3 px-2 border-stone-400">secondary</div>
              <div class="badge badge-outline py-3 px-2 border-stone-400">accent</div>
            </div>
          </div>
          <div class="flex p-4 items-center justify-between">
            <div class="flex flex-col">
              <div class="font-bold">$25/hr</div>
              <div class="stat-title">Downloads</div>
            </div>
            <button class="btn btn-primary btn-sm rounded-full">Button</button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
