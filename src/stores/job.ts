import { onBeforeMount, ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

interface Job {
  id: number
  title: string
  color: string
  description: string
  location: string
  salary: string
  job_type: string
  created_at: string
  updated_at: string
}

export const useJobStore = defineStore('job', () => {
  const jobs = ref([] as Job[])

  const fetchJobs = () => {
    axios
      .get('http://localhost:3000/api/v1/jobs')
      .then((res) => {
        jobs.value = res.data
      })
      .catch((error: string) => {
        console.error('Error fetching jobs: ', error)
      })
  }

  onBeforeMount(() => {
    fetchJobs()
  })

  return { jobs, fetchJobs }
})
