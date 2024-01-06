import { onBeforeMount, ref, computed } from 'vue'
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
  category_id: number
  created_at: string
  updated_at: string
}

export const useJobStore = defineStore('job', () => {
  const JOBCOLORS = ['blue', 'green', 'red', 'yellow', 'purple', 'pink']
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

  const coloredJobs = computed(() => {
    return jobs.value.map((job) => {
      return {
        ...job,
        color: JOBCOLORS[job.category_id % JOBCOLORS.length]
      }
    })
  })

  onBeforeMount(() => {
    fetchJobs()
  })

  return { jobs, fetchJobs, coloredJobs }
})
