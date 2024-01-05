import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useJobStore = defineStore('job', () => {
  const jobs = ref([])

  const fetchJobs = () => {}

  return { jobs, fetchJobs }
})
