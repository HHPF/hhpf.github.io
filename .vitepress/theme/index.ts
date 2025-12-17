import DefaultTheme from 'vitepress/theme'
import './index.css'
import Header from './Header.vue'

export default {
  ...DefaultTheme,
  components: {
    Header
  }
}