import daisyui from 'daisyui'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  plugins: [daisyui],
  darkMode: 'class',
  daisyui: {
    themes: ['light', 'dark']
  },
  safelist: [
    'bg-red-200',
    'bg-green-200',
    'bg-blue-200',
    'bg-yellow-200',
    'bg-indigo-200',
    'bg-purple-200',
    'bg-pink-200'
  ]
}
