import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "HHPF",
  description: "Human Health Plan Foundation",
  themeConfig: {
    search: {
      provider: 'local'
    }
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      description: 'Human Health Plan Foundation',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Examples', link: '/markdown-examples' }
        ],
        sidebar: [
          {
            text: 'Examples',
            items: [
              { text: 'Markdown Examples', link: '/markdown-examples' },
              { text: 'Runtime API Examples', link: '/api-examples' }
            ]
          }
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/HHPF/hhpf.github.io' }
        ]
      }
    },
    'zh-CN': {
      label: '简体中文',
      lang: 'zh-CN',
      description: '人类健康计划基金会',
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh-CN/' },
          { text: '示例', link: '/zh-CN/markdown-examples' }
        ],
        sidebar: [
          {
            text: '示例',
            items: [
              { text: 'Markdown示例', link: '/zh-CN/markdown-examples' },
              { text: '运行时API示例', link: '/zh-CN/api-examples' }
            ]
          }
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/HHPF/hhpf.github.io' }
        ]
      }
    },
    'zh-TW': {
      label: '繁體中文',
      lang: 'zh-TW',
      description: '人類健康計劃基金會',
      themeConfig: {
        nav: [
          { text: '首頁', link: '/zh-TW/' },
          { text: '範例', link: '/zh-TW/markdown-examples' }
        ],
        sidebar: [
          {
            text: '範例',
            items: [
              { text: 'Markdown範例', link: '/zh-TW/markdown-examples' },
              { text: '執行時API範例', link: '/zh-TW/api-examples' }
            ]
          }
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/HHPF/hhpf.github.io' }
        ]
      }
    }
  }
})
