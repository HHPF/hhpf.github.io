import DefaultTheme from 'vitepress/theme'
import './index.css'
import Prologue from './components/Prologue.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Prologue', Prologue)
  }
}
