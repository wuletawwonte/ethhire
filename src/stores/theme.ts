import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const theme = ref({
    isDark: true
  })

  const toggleTheme = () => {
    theme.value.isDark = !theme.value.isDark
  }

  return { theme, toggleTheme }
})
