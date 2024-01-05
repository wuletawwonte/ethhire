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

export const jobs: Job[] = [
  {
    id: 46,
    title: 'Administration Planner',
    color: 'blue',
    description: 'Advertising',
    location: 'Roccoton',
    salary: '40994.0',
    job_type: 'temporary',
    created_at: '2023-07-19T04:47:14.557Z',
    updated_at: '2023-07-19T04:47:14.557Z'
  },
  {
    id: 47,
    title: 'Product Retail Executive',
    color: 'red',
    description: 'Manufacturing',
    location: 'Carolinport',
    salary: '36011.0',
    job_type: 'internship',
    created_at: '2023-07-19T04:47:14.565Z',
    updated_at: '2023-07-19T04:47:14.565Z'
  },
  {
    id: 48,
    title: 'Principal Orchestrator',
    color: 'green',
    description: 'IT',
    location: 'West Tereasa',
    salary: '72358.0',
    job_type: 'part_time',
    created_at: '2023-07-19T04:47:14.570Z',
    updated_at: '2023-07-19T04:47:14.570Z'
  },
  {
    id: 49,
    title: 'Product Sales Manager',
    color: 'pink',
    description: 'Real-Estate',
    location: 'West Donald',
    salary: '96996.0',
    job_type: 'internship',
    created_at: '2023-07-19T04:47:14.577Z',
    updated_at: '2023-07-19T04:47:14.577Z'
  },
  {
    id: 50,
    title: 'Senior Design Supervisor',
    color: 'blue',
    description: 'Accounting',
    location: 'West Joesphchester',
    salary: '17485.0',
    job_type: 'full_time',
    created_at: '2023-07-19T04:47:14.582Z',
    updated_at: '2023-07-19T04:47:14.582Z'
  }
]
