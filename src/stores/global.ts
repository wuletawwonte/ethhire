import { ref } from 'vue'
import { defineStore } from 'pinia'
import { jobs as importedJobs } from '../data/jobs'

export const useJobStore = defineStore('job', () => {
  const jobs = ref(importedJobs)

  return { jobs }
})
