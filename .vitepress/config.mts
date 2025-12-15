import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "HHPF",
  description: "Human Health Plan Foundation",
  themeConfig: {
    search: {
      provider: 'local'
    },
    logo: '/logo.webp'
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
          { icon: 'github', link: 'https://github.com/HHPF/' }
        ],
        footer: {
          copyright: 'Copyright © 2024 ~ Present Human Health Plan Foundation'
        }
      }
    },
    'zh-CN': {
      label: '简体中文',
      lang: 'zh-CN',
      description: '人类健康计划基金会',
      themeConfig: {
        nav: [
          { text: '愿景', link: '/zh-CN/1' },
          { text: '方法论', link: '/zh-CN/2' },
          { text: '人工智能', link: '#' },
          { text: 'A/B实验', link: '/zh-CN/4' },
          { text: '训练营', link: '/zh-CN/5' },
          { text: '示范项目', link: '/zh-CN/6' },
          { text: '募资', link: '/zh-CN/7' },
          { text: '团队', link: '/zh-CN/8' }
        ],
        sidebar: [
          {
            text: '愿景',
            collapsed: false,
            items: [
              { text: 'Markdown示例', link: '/zh-CN/markdown-examples' },
              { text: '运行时API示例', link: '/zh-CN/api-examples' }
            ]
          },  
          {
            text: '方法论',
            collapsed: false,
            items: [
              { text: 'Markdown示例', link: '/zh-CN/markdown-examples' },
              { text: '运行时API示例', link: '/zh-CN/api-examples' }
            ]
          },
          {
            text: '人工智能',
            collapsed: false,
            items: [
              { text: 'Markdown示例', link: '/zh-CN/markdown-examples' },
              { text: '运行时API示例', link: '/zh-CN/api-examples' }
            ]
          },
          {
            text: 'A/B实验',
            collapsed: false,
            items: [
              { text: 'Markdown示例', link: '/zh-CN/markdown-examples' },
              { text: '运行时API示例', link: '/zh-CN/api-examples' }
            ]
          },
          {
            text: '训练营',
            collapsed: false,
            items: [
              { text: 'Markdown示例', link: '/zh-CN/markdown-examples' },
              { text: '运行时API示例', link: '/zh-CN/api-examples' }
            ]
          },
          {
            text: '示范项目',
            collapsed: false,
            items: [
              { text: 'Markdown示例', link: '/zh-CN/markdown-examples' },
              { text: '运行时API示例', link: '/zh-CN/api-examples' }
            ]
          },
          {
            text: '募资',
            collapsed: false,
            items: [
              { text: 'Markdown示例', link: '/zh-CN/markdown-examples' },
              { text: '运行时API示例', link: '/zh-CN/api-examples' }
            ]
          },
          {
            text: '团队',
            collapsed: false,
            items: [
              { text: 'Markdown示例', link: '/zh-CN/markdown-examples' },
              { text: '运行时API示例', link: '/zh-CN/api-examples' }
            ]
          },
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/HHPF/' }
        ],
        footer: {
          copyright: '版权所有 © 2024 ~ 至今 人类健康计划基金会（筹）'
        }
      }
    },
    'zh-TW': {
      label: '繁體中文',
      lang: 'zh-TW',
      description: '人類健康計劃基金會（筹）',
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
        ],
        footer: {
          copyright: '版權所有 © 2024 ~ 至今 人類健康計劃基金會（筹）'
        }
      }
    }
  }
})
