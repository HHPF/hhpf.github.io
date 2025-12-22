import { defineConfig } from 'vitepress'

// 网站全局配置-----------------------------------------------------------------------
export default defineConfig({
    // 配置网站最后更新时间
    lastUpdated: true,
    // 配置网站favicon
    head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
    // 配置网站搜索功能
    themeConfig: {
      search: {
        provider: 'local'
      },
      // 配置网站logo
      logo: {
        light: '/logo-light.png',
        dark: '/logo-dark.png',
        alt: 'HHPF Logo'
      },
      siteTitle: false
    },

// 英文版设置-------------------------------------------------------------------------- 
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: "HHPF - Human Health Plan Foundation",
      description: "Committed to Building Human Health Infrastructure for the AI Era.",
      // 英文版首页导航设置
      themeConfig: {
        outlineTitle: 'On this page',
        returnToTopLabel: 'Return to top ↑',
        sidebarMenuLabel: 'Menu',
        // 配置编辑链接
        editLink: {
          pattern: 'https://github.com/HHPF/hhpf.github.io/edit/main/:path',
          text: 'Edit this page on GitHub'
        },
        // 配置仓库链接
        repo: 'HHPF/hhpf.github.io',
        // 配置最后更新时间文本
        lastUpdatedText: 'Last updated on',
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Examples', link: '/markdown-examples' }
        ],
        // 英文版内容侧边栏设置
        sidebar: [
          {
            text: 'Examples',
            items: [
              { text: 'Markdown Examples', link: '/markdown-examples' },
              { text: 'Runtime API Examples', link: '/api-examples' }
            ]
          }
        ],
        // 英文版首页社交链接设置
        socialLinks: [
          { icon: 'github', link: 'https://github.com/HHPF/' }
        ],
        // 英文版首页页脚设置
        footer: {
          message: '<img src="/logo-green.png" style="height: 30px; margin:auto;"><br>',          
          copyright: 'Copyright © 2025 ~ Present Human Health Plan Foundation'
        }
      }
    },

// 中文版设置--------------------------------------------------------------------------
    'zh-CN': {
      label: '简体中文',
      lang: 'zh-CN',
      title: "HHPF - 人类健康计划基金会",
      description: "致力于为AI时代构建人类健康基础设施。",      
      // 中文版首页导航设置
      themeConfig: {
        outlineTitle: '本页导航',
        returnToTopLabel: '回到顶部 ↑',
        sidebarMenuLabel: '菜单',
        // 配置编辑链接
        editLink: {
          pattern: 'https://github.com/HHPF/hhpf.github.io/edit/main/:path',
          text: '在GitHub上编辑此页面'
        },
        // 配置仓库链接
        repo: 'HHPF/hhpf.github.io',
        // 配置最后更新时间文本
        lastUpdatedText: '最后更新于',
        nav: [
          { text: '首页', link: '/zh-CN/' },
          { text: '白皮书', 
            items: [
              { text: '愿景', link: '/zh-CN/Whitepaper/Project-Origins' },
              { text: '方法论', link: '/zh-CN/Whitepaper/Model-Innovation' },
              { text: '项目', link: '/zh-CN/Whitepaper/Theory-Advancement' },
              { text: '募资', link: '/zh-CN/Whitepaper/Therapy-Upgrading' },
              { text: '团队', link: '/zh-CN/Whitepaper/HHPF-Values' },
              { text: '版权声明', link: '/zh-CN/Whitepaper/Copyright-Statement' },
            ]
          },
          { text: '新闻', link: '/zh-CN/News/' },
          { text: '联系', link: '/zh-CN/Contact' },
        ],
        // 中文版内容侧边栏设置
        sidebar: [
          {
            text: '愿景',
            collapsed: true,
            items: [
              { text: '项目缘起', link: '/zh-CN/Whitepaper/Project-Origins' },
              { text: '理论深化', link: '/zh-CN/Whitepaper/Theoretical-Deepening' },
              { text: '疗法整合', link: '/zh-CN/Whitepaper/Therapy-Integration' },
              { text: '模式创新', link: '/zh-CN/Whitepaper/Model-Innovation' },
            ]
          },  
          {
            text: '方法论',
            collapsed: true,
            items: [
              { text: '生命系统论', link: '/zh-CN/Whitepaper/Life-Systems-Theory' },
              { text: '自愈定理', link: '/zh-CN/Whitepaper/First-Principles' },
              { text: '九维健康标准', link: '/zh-CN/Whitepaper/9D-Health-Standards' },
              { text: '系统医学', link: '/zh-CN/Whitepaper/Systems-Medicine' },
              { text: '系统疗法', link: '/zh-CN/Whitepaper/Systems-Therapy' }
            ]
          },
          {
            text: '项目',
            collapsed: true,
            items: [
              { text: '标准化工程', link: '/zh-CN/Whitepaper/AB-Testing' },
              { text: '人工智能', link: '/zh-CN/Whitepaper/SMD-AI' },
              { text: '健康训练营', link: '/zh-CN/Whitepaper/Training-Program' },
              { text: '实体示范项目', link: '/zh-CN/Whitepaper/Training-Program' }
            ]
          },          

          {
            text: '募资',
            collapsed: true,
            items: [
              { text: '公益筹资', link: '/zh-CN/Whitepaper/Public-Welfare-Fundraising' },
              { text: '商业项目', link: '/zh-CN/Whitepaper/Commercial-Projects' }
            ]
          },

          {
            text: '团队',
            collapsed: true,
            items: [
              { text: 'HHPF价值观', link: '/zh-CN/Whitepaper/HHPF-Values' },
              { text: '志愿者招募', link: '/zh-CN/Whitepaper/Volunteer-Recruitment' },
              { text: '诚聘英才', link: '/zh-CN/Whitepaper/Talent-Recruitment' }
            ]
          },
          {
             text: '版权声明',
             collapsed: true,
             items: [
              { text: '著作权申明', link: '/zh-CN/Whitepaper/News-and-Events' },
              { text: '知识产权', link: '/zh-CN/Whitepaper/Copyright-Statement' },
              { text: '授权方式', link: '/zh-CN/Whitepaper/Contact-Us' },
            ]
          },
          { text: '新闻', link: '/zh-CN/News/' },
          { text: '联系', link: '/zh-CN/Contact' },
        ],
        // 中文版首页社交链接设置
        socialLinks: [
          { icon: 'github', link: 'https://github.com/HHPF/' }
        ],
        // 中文版首页页脚设置
        footer: {
          message: '<img src="/logo-green.png" style="height: 30px; margin:auto;"><br>',
          copyright: '版权所有 © 2025 ~ Present 人类健康计划基金会<br><br><span style="font-size: 11px; color: #888;">Powered by <a href="https://vitepress.dev/" target="_blank">VitePress</a></span>'
        }
      }
    },

// 繁体中文设置--------------------------------------------------------------------------
    'zh-TW': {
      label: '繁體中文',
      lang: 'zh-TW',
      description: '人類健康計劃基金會（筹）',
      // 繁体中文首页导航设置
      themeConfig: {
        outlineTitle: '本頁目錄',
        returnToTopLabel: '回到頂部 ↑',
        sidebarMenuLabel: '菜單',
        // 配置编辑链接
        editLink: {
          pattern: 'https://github.com/HHPF/hhpf.github.io/edit/main/:path',
          text: '在GitHub上編輯此頁面'
        },
        // 配置仓库链接
        repo: 'HHPF/hhpf.github.io',
        // 配置最后更新时间文本
        lastUpdatedText: '最後更新於',
        nav: [
          { text: '首頁', link: '/zh-TW/' },
          { text: '範例', link: '/zh-TW/markdown-examples' }
        ],
        // 繁体中文内容侧边栏设置
        sidebar: [
          {
            text: '範例',
            items: [
              { text: 'Markdown範例', link: '/zh-TW/markdown-examples' },
              { text: '執行時API範例', link: '/zh-TW/api-examples' }
            ]
          }
        ],
        // 繁体中文首页社交链接设置
        socialLinks: [
          { icon: 'github', link: 'https://github.com/HHPF/hhpf.github.io' }
        ],
        // 繁体中文首页页脚设置
        footer: {
          copyright: '版權所有 © 2024 ~ 至今 人類健康計劃基金會（筹）'
        }
      }
    },

// 日语设置
    'ja-JP': {
      label: '日本語',
      lang: 'ja-JP',
      description: '人間健康計画財団',
      themeConfig: {
        outlineTitle: 'このページ',
        returnToTopLabel: '上部に戻る ↑',
        sidebarMenuLabel: 'メニュー',
        // 配置编辑链接
        editLink: {
          pattern: 'https://github.com/HHPF/hhpf.github.io/edit/main/:path',
          text: 'GitHubでこのページを編集する'
        },
        // 配置仓库链接
        repo: 'HHPF/hhpf.github.io',
        // 配置最后更新时间文本
        lastUpdatedText: '最終更新日',
        nav: [
          { text: 'ホーム', link: '/ja-JP/' },
          { text: '概要', link: '/ja-JP/Project-Origins' },
          { text: 'ニュース', link: '/ja-JP/News-and-Events' },
          { text: '著作権', link: '/ja-JP/Copyright-Statement' },
          { text: 'お問い合わせ', link: '/ja-JP/Contact-Us' }
        ],
        sidebar: [
          {
            text: 'ビジョン',
            collapsed: true,
            items: [
              { text: 'プロジェクトの起源', link: '/ja-JP/Project-Origins' },
              { text: 'モデルイノベーション', link: '/ja-JP/Model-Innovation' },
              { text: '理論の深化', link: '/ja-JP/Theory-Advancement' },
              { text: '療法のアップグレード', link: '/ja-JP/Therapy-Upgrading' }
            ]
          },  
          {
            text: '方法論',
            collapsed: true,
            items: [
              { text: '生命システム論', link: '/ja-JP/Life-Systems-Theory' },
              { text: 'ファーストプリンシプル', link: '/ja-JP/First-Principles' },
              { text: '9次元健康基準', link: '/ja-JP/9D-Health-Standards' },
              { text: 'システム医学', link: '/ja-JP/Systems-Medicine' },
              { text: 'システム療法', link: '/ja-JP/Systems-Therapy' }
            ]
          },
          {
            text: '人工知能',
            collapsed: true,
            items: [
              { text: '診療SOP', link: '/ja-JP/Clinical-SOPs' },
              { text: 'ケースライブラリーRAG', link: '/ja-JP/Case-RAG' },
              { text: '無料AIトリアージ', link: '/ja-JP/Free-AI-Triage' }
            ]
          },
          {
            text: '標準化',
            collapsed: true,
            items: [
              { text: 'A/B実験', link: '/ja-JP/AB-Testing' },
              { text: 'トレーニングプログラム', link: '/ja-JP/Training-Program' }
            ]
          },
          {
            text: 'トレーニングキャンプ',
            collapsed: true,
            items: [
              { text: '正覚療法', link: '/ja-JP/Right-Awareness-Therapy' },
              { text: '正覚生活瞑想', link: '/ja-JP/Right-Awareness-Mindful-Living' }
            ]
          },
          {
            text: 'デモンストレーションプロジェクト',
            collapsed: true,
            items: [
              { text: '医館', link: '/ja-JP/Medical-Hall' },
              { text: '介護センター', link: '/ja-JP/Nursing-Center' },
              { text: '高齢者介護と終末期ケア', link: '/ja-JP/Elderly-Care-and-Hospice-Services' },
              { text: 'コミュニティ健康総合施設', link: '/ja-JP/Community-Wellness-Complex' },
              { text: '健康産業公園', link: '/ja-JP/Health-Industry-Park' },
              { text: '生命健康学院', link: '/ja-JP/Life-Health-College' }
            ]
          },
          {
            text: '資金調達',
            collapsed: true,
            items: [
              { text: '公益資金調達', link: '/ja-JP/Public-Welfare-Fundraising' },
              { text: '商用プロジェクト', link: '/ja-JP/Commercial-Projects' }
            ]
          },
          {
            text: 'チーム',
            collapsed: true,
            items: [
              { text: '価値観', link: '/ja-JP/Talent-Recruitment' },
              { text: 'ボランティア募集', link: '/ja-JP/Volunteer-Recruitment' },
              { text: '人材募集', link: '/ja-JP/Talent-Recruitment' }
            ]
          },
          {
             text: 'その他',
             collapsed: true,
             items: [
              { text: 'ニュースとイベント', link: '/ja-JP/News-and-Events' },
              { text: '著作権に関する声明', link: '/ja-JP/Copyright-Statement' },
              { text: 'お問い合わせ', link: '/ja-JP/Contact-Us' },
            ]
          }
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/HHPF/' }
        ],
        footer: {
          message: '<img src="/logo-green.png" style="height: 30px; margin:auto;"><br>',          
          copyright: '著作権所有 © 2024 ~ 現在 人間健康計画財団（準備中）'
        }
      }
    }
  }
})
