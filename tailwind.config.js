import daisyui from 'daisyui'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  plugins: [daisyui],
  darkMode: 'class',
  daisyui: {
    themes: ['light', 'dark']
  },
  safelist: [
    'bg-red-100',
    'bg-green-100',
    'bg-blue-100',
    'bg-yellow-100',
    'bg-indigo-100',
    'bg-purple-100',
    'bg-pink-100'
  ]
}
