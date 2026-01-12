import DefaultTheme from 'vitepress/theme'
import './index.css'
import Prologue from './components/Prologue.vue'
import ContactForm from './components/ContactForm.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Prologue', Prologue)
    app.component('ContactForm', ContactForm)
  }
}
