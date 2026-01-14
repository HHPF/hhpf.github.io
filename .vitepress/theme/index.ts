import DefaultTheme from 'vitepress/theme'
import './index.css'
import CoreTerms from './components/CoreTerms.vue'
import ContactForm from './components/ContactForm.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('CoreTerms', CoreTerms)
    app.component('ContactForm', ContactForm)
  }
}
