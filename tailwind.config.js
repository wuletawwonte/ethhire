import daisyui from 'daisyui'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  plugins: [daisyui],
  darkMode: 'class',
  daisyui: {
    themes: ['light', 'dark']
  },
  safelist: [
    'bg-red-300',
    'bg-green-300',
    'bg-blue-300',
    'bg-yellow-300',
    'bg-indigo-300',
    'bg-purple-300',
    'bg-pink-300'
  ]
}
