import { ref } from 'vue'
import { defineStore } from 'pinia'
import { jobs as importedJobs } from '../data/jobs'

export const useGlobalStore = defineStore('global', () => {
  const jobs = ref(importedJobs)

  return { jobs }
})
