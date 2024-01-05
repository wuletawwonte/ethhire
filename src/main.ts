import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {
  faUserSecret,
  faSun,
  faFilter,
  faChevronDown,
  faCity,
  faBriefcase,
  faHandHoldingDollar,
  faHashtag,
  faCode
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faFacebook, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import App from './App.vue'
import router from './router'
import { useThemeStore } from './stores/theme'

/* add icons to the library */
library.add(faUserSecret)
library.add(faSun)
library.add(faFilter)
library.add(faChevronDown)
library.add(faCity)
library.add(faBriefcase)
library.add(faHandHoldingDollar)
library.add(faHashtag)
library.add(faCode)
library.add(faGithub)
library.add(faFacebook)
library.add(faYoutube)
library.add(faLinkedin)

const app = createApp(App)

app.use(createPinia())
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)

const store = useThemeStore()

store.initializeTheme()

if (store.theme.isDark) {
  document.querySelector('html')?.setAttribute('data-theme', 'dark')
} else {
  document.querySelector('html')?.setAttribute('data-theme', '')
}

app.mount('#app')
