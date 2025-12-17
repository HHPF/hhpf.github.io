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
          { text: '首页', link: '/zh-CN/' },
          { text: '白皮书', link: '/zh-CN/Project-Origins' },
          { text: '新闻', link: '/zh-CN/News-and-Events' },
          { text: '版权', link: '/zh-CN/Copyright-Statement' },
          { text: '联系', link: '/zh-CN/Contact-Us' },

        ],
        sidebar: [
          {
            text: '愿景',
            collapsed: true,
            items: [
              { text: '项目缘起', link: '/zh-CN/Project-Origins' },
              { text: '模式创新', link: '/zh-CN/Model-Innovation' },
              { text: '理论深化', link: '/zh-CN/Theory-Advancement' },
              { text: '疗法升级', link: '/zh-CN/Therapy-Upgrading' }
            ]
          },  
          {
            text: '方法论',
            collapsed: true,
            items: [
              { text: '生命系统论', link: '/zh-CN/Life-Systems-Theory' },
              { text: '第一原理', link: '/zh-CN/First-Principles' },
              { text: '九维健康标准', link: '/zh-CN/9D-Health-Standards' },
              { text: '系统医学', link: '/zh-CN/Systems-Medicine' },
              { text: '系统疗法', link: '/zh-CN/Systems-Therapy' }
            ]
          },
          {
            text: '人工智能',
            collapsed: true,
            items: [
              { text: '诊疗SOP', link: '/zh-CN/Clinical-SOPs' },
              { text: '案例库RAG', link: '/zh-CN/Case-RAG' },
              { text: '免费AI问诊计划', link: '/zh-CN/Free-AI-Triage' }
            ]
          },
          {
            text: '标准化',
            collapsed: true,
            items: [
              { text: 'A/B实验', link: '/zh-CN/AB-Testing' },
              { text: '培训班', link: '/zh-CN/Training-Program' }
            ]
          },
          {
            text: '训练营',
            collapsed: true,
            items: [
              { text: '正觉疗法', link: '/zh-CN/Right-Awareness-Therapy' },
              { text: '正觉生活禅修', link: '/zh-CN/Right-Awareness-Mindful-Living' }
            ]
          },
          {
            text: '示范项目',
            collapsed: true,
            items: [
              { text: '医馆', link: '/zh-CN/Medical-Hall' },
              { text: '疗养院', link: '/zh-CN/Nursing-Center' },
              { text: '养老与临终关怀', link: '/zh-CN/Elderly-Care-and-Hospice-Services' },
              { text: '社区大健康综合体', link: '/zh-CN/Community-Wellness-Complex' },
              { text: '大健康产业园', link: '/zh-CN/Health-Industry-Park' },
              { text: '生命健康学院', link: '/zh-CN/Life-Health-College' }
            ]
          },
          {
            text: '募资',
            collapsed: true,
            items: [
              { text: '公益筹资', link: '/zh-CN/Public-Welfare-Fundraising' },
              { text: '商业项目', link: '/zh-CN/Commercial-Projects' }
            ]
          },
          {
            text: '团队',
            collapsed: true,
            items: [
              { text: '价值观', link: '/zh-CN/Talent-Recruitment' },
              { text: '义工招募', link: '/zh-CN/Volunteer-Recruitment' },
              { text: '诚聘英才', link: '/zh-CN/Talent-Recruitment' }
            ]
          },
          {
             text: '其他',
             collapsed: true,
             items: [
              { text: '新闻活动', link: '/zh-CN/News-and-Events' },
              { text: '版权申明', link: '/zh-CN/Copyright-Statement' },
              { text: '联系我们', link: '/zh-CN/Contact-Us' },
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
