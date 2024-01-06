<script setup lang="ts">
import Sidebar from '@/components/Sidebar.vue'
import Filter from '@/components/Filter.vue'
import { useJobStore } from '@/stores/job'
import { storeToRefs } from 'pinia'

const jobStore = useJobStore()
const { coloredJobs } = storeToRefs(jobStore)

console.log(coloredJobs)

const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
}
</script>

<template>
  <Filter />
  <div class="antialiased grow bg-base-100 flex max-w-screen h-full">
    <Sidebar />
    <main class="p-4 h-auto w-full">
      <div class="flex items-center gap-2">
        <h2 class="text-2xl font-semibold">Featured Jobs</h2>
        <div class="badge badge-outline">128</div>
      </div>

      <div class="flex mt-4 gap-4 flex-wrap">
        <div
          v-for="job in coloredJobs"
          :key="job.id"
          class="card w-64 shadow-md bg-base-100 border border-base-300 p-1"
        >
          <div class="card-body p-4 rounded-xl shadow-sm" :class="'bg-' + job.color + '-300'">
            <div class="flex">
              <div class="badge badge-sm bg-base-100 p-2">{{ formatDate(job.created_at) }}</div>
            </div>
            <h2 class="card-title text-info-content">{{ job.title }}</h2>
            <p class="text-info-content">If a dog chews shoes whose shoes does he choose?</p>
            <div class="flex gap-1 flex-wrap">
              <div class="badge badge-outline badge-sm py-2 px-2 border-base-100">default</div>
              <div class="badge badge-outline badge-sm py-2 px-2 border-base-100">primary</div>
              <div class="badge badge-outline badge-sm py-2 px-2 border-base-100">secondary</div>
              <div class="badge badge-outline badge-sm py-2 px-2 border-base-100">accent</div>
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
