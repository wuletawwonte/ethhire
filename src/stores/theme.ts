import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const theme = ref({
    isDark: false
  })

  const toggleTheme = () => {
    theme.value.isDark = !theme.value.isDark
    localStorage.setItem('isDark', JSON.stringify(theme.value.isDark))
  }

  const initializeTheme = () => {
    const storedTheme = localStorage.getItem('isDark')
    if (storedTheme) {
      theme.value.isDark = JSON.parse(storedTheme)
    } else {
      localStorage.setItem('isDark', JSON.stringify(theme.value.isDark))
    }
  }

  return { theme, toggleTheme, initializeTheme }
})
