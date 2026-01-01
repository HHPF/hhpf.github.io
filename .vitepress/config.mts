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
      siteTitle: false,
      // 将默认模式设置为暗黑模式
      darkMode: 'dark'
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

        // 配置最后更新时间文本
        lastUpdatedText: 'Last updated on',
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Whitepaper', 
            items: [
              { text: 'Vision', link: '/Whitepaper/Project-Origins' },
              { text: 'Methodology', link: '/Whitepaper/Model-Transformation' },
              { text: 'Projects', link: '/Whitepaper/Physical-Demonstration-Projects' },
              { text: 'Fundraising', link: '/Whitepaper/Public-Welfare-Fundraising' },
              { text: 'Team Building', link: '/Whitepaper/HHPF-Values' },
              { text: 'Copyright Statement', link: '/Whitepaper/Copyright-Statement' },
            ]
          },
          { text: 'Blog', link: '/Blog/' },
          { text: 'Contact', link: '/Contact' },
        ],
        // 英文版内容侧边栏设置
        sidebar: [
          {
            text: 'Vision',
            collapsed: true,
            items: [
              { text: 'Project Origins', link: '/Whitepaper/Project-Origins' },
              { text: 'Theoretical Deepening', link: '/Whitepaper/Theoretical-Deepening' },
              { text: 'Therapy Integration', link: '/Whitepaper/Therapy-Integration' },
              { text: 'Model Transformation', link: '/Whitepaper/Model-Transformation' },
            ]
          },  
          {
            text: 'Methodology',
            collapsed: true,
            items: [
              { text: 'First Principles of Health', link: '/Whitepaper/FPH' },
              { text: 'Health Engineering Methodology', link: '/Whitepaper/MHE' },
              { text: 'Systems Theory of Life', link: '/Whitepaper/STL' },
            ]
          },
          {
            text: 'Projects',
            collapsed: true,
            items: [
              { text: 'HHPF Standardization Engineering', link: '/Whitepaper/Standardization-Engineering' },
              { text: 'SMD Artificial Intelligence', link: '/Whitepaper/SMD-AI' },
              { text: 'SMD Right Consciousness Training Camp', link: '/Whitepaper/Right-Consciousness-Training-Camp' },
              { text: 'HHPF Physical Demonstration Projects', link: '/Whitepaper/Physical-Demonstration-Projects' }
            ]
          },          

          {
            text: 'Fundraising',
            collapsed: true,
            items: [
              { text: 'Public Welfare Fundraising', link: '/Whitepaper/Public-Welfare-Fundraising' },
              { text: 'Commercial Projects', link: '/Whitepaper/Commercial-Projects' }
            ]
          },

          {
            text: 'Team Building',
            collapsed: true,
            items: [
              { text: 'HHPF Values', link: '/Whitepaper/HHPF-Values' },
              { text: 'Volunteer Recruitment', link: '/Whitepaper/Volunteer-Recruitment' },
              { text: 'Talent Recruitment', link: '/Whitepaper/Talent-Recruitment' }
            ]
          },
          {
             text: 'Copyright Statement',
             collapsed: true,
             items: [
              { text: 'Copyright Statement', link: '/Whitepaper/Copyright-Statement' },
              { text: 'Intellectual Property', link: '/Whitepaper/Intellectual-Property' },
              { text: 'Licensing Model', link: '/Whitepaper/Licensing-Model' },
            ]
          },
          { text: 'Blog', link: '/Blog/' },
          { text: 'Contact', link: '/Contact' },
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

        // 配置最后更新时间文本
        lastUpdatedText: '最后更新于',
        nav: [
          { text: '首页', link: '/zh-CN/' },
          { text: '白皮书', 
            items: [
              { text: '愿景', link: '/zh-CN/Whitepaper/Project-Origins' },
              { text: '方法论', link: '/zh-CN/Whitepaper/Model-Innovation' },
              { text: '项目', link: '/zh-CN/Whitepaper/Project-Origins' },
              { text: '募资', link: '/zh-CN/Whitepaper/Public-Welfare-Fundraising' },
              { text: '团队建设', link: '/zh-CN/Whitepaper/HHPF-Values' },
              { text: '版权声明', link: '/zh-CN/Whitepaper/Copyright-Statement' },
            ]
          },
          { text: '博客', link: '/zh-CN/Blog/' },
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
              { text: '模式变革', link: '/zh-CN/Whitepaper/Model-Transformation' },
            ]
          },  
          {
            text: '方法论',
            collapsed: true,
            items: [
              { text: '健康的第一原理', link: '/zh-CN/Whitepaper/FPH' },
              { text: '健康工程方法论', link: '/zh-CN/Whitepaper/MHE' },
              { text: '生命系统论', link: '/zh-CN/Whitepaper/STL' },
            ]
          },
          {
            text: '项目',
            collapsed: true,
            items: [
              { text: 'HHPF标准化工程', link: '/zh-CN/Whitepaper/Standardization-Engineering' },
              { text: 'SMD人工智能', link: '/zh-CN/Whitepaper/SMD-AI' },
              { text: 'SMD正觉训练营', link: '/zh-CN/Whitepaper/Right-Consciousness-Training-Camp' },
              { text: 'HHPF实体示范项目', link: '/zh-CN/Whitepaper/Physical-Demonstration-Projects' }
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
            text: '团队建设',
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
              { text: '著作权申明', link: '/zh-CN/Whitepaper/Copyright-Statement' },
              { text: '知识产权', link: '/zh-CN/Whitepaper/Intellectual-Property' },
              { text: '授权方式', link: '/zh-CN/Whitepaper/Licensing-Model' },
            ]
          },
          { text: '博客', link: '/zh-CN/Blog/' },
          { text: '联系', link: '/zh-CN/Contact' },
        ],
        // 中文版首页社交链接设置
        socialLinks: [
          { icon: 'github', link: 'https://github.com/HHPF/' }
        ],
        // 中文版首页页脚设置
        footer: {
          message: '<img src="/logo-green.png" style="height: 30px; margin:auto;"><br>',
          copyright: '版权所有 © 2025 ~ Present 人类健康计划基金会'
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

        // 配置最后更新时间文本
        lastUpdatedText: '最後更新於',
        nav: [
          { text: '首頁', link: '/zh-TW/' },
          { text: '白皮書', 
            items: [
              { text: '願景', link: '/zh-TW/Whitepaper/Project-Origins' },
              { text: '方法論', link: '/zh-TW/Whitepaper/Model-Transformation' },
              { text: '項目', link: '/zh-TW/Whitepaper/Physical-Demonstration-Projects' },
              { text: '募資', link: '/zh-TW/Whitepaper/Public-Welfare-Fundraising' },
              { text: '團隊建設', link: '/zh-TW/Whitepaper/HHPF-Values' },
              { text: '版權聲明', link: '/zh-TW/Whitepaper/Copyright-Statement' },
            ]
          },
          { text: '新聞', link: '/zh-TW/Blog/' },
          { text: '聯繫', link: '/zh-TW/Contact' },
        ],
        // 繁体中文内容侧边栏设置
        sidebar: [
          {
            text: '願景',
            collapsed: true,
            items: [
              { text: '項目緣起', link: '/zh-TW/Whitepaper/Project-Origins' },
              { text: '理論深化', link: '/zh-TW/Whitepaper/Theoretical-Deepening' },
              { text: '療法整合', link: '/zh-TW/Whitepaper/Therapy-Integration' },
              { text: '模式變革', link: '/zh-TW/Whitepaper/Model-Transformation' },
            ]
          },  
          {
            text: '方法論',
            collapsed: true,
            items: [
              { text: '健康的第一原理', link: '/zh-TW/Whitepaper/FPH' },
              { text: '健康工程方法論', link: '/zh-TW/Whitepaper/MHE' },
              { text: '生命系統論', link: '/zh-TW/Whitepaper/STL' },
            ]
          },
          {
            text: '項目',
            collapsed: true,
            items: [
              { text: 'HHPF標準化工程', link: '/zh-TW/Whitepaper/Standardization-Engineering' },
              { text: 'SMD人工智能', link: '/zh-TW/Whitepaper/SMD-AI' },
              { text: 'SMD正覺訓練營', link: '/zh-TW/Whitepaper/Right-Consciousness-Training-Camp' },
              { text: 'HHPF示範性實體項目', link: '/zh-TW/Whitepaper/Physical-Demonstration-Projects' }
            ]
          },          

          {
            text: '募資',
            collapsed: true,
            items: [
              { text: '公益籌資', link: '/zh-TW/Whitepaper/Public-Welfare-Fundraising' },
              { text: '商業項目', link: '/zh-TW/Whitepaper/Commercial-Projects' }
            ]
          },

          {
            text: '團隊建設',
            collapsed: true,
            items: [
              { text: 'HHPF價值觀', link: '/zh-TW/Whitepaper/HHPF-Values' },
              { text: '志願者招募', link: '/zh-TW/Whitepaper/Volunteer-Recruitment' },
              { text: '誠聘英才', link: '/zh-TW/Whitepaper/Talent-Recruitment' }
            ]
          },
          {
             text: '版權聲明',
             collapsed: true,
             items: [
              { text: '著作權聲明', link: '/zh-TW/Whitepaper/Copyright-Statement' },
              { text: '知識產權', link: '/zh-TW/Whitepaper/Intellectual-Property' },
              { text: '授權方式', link: '/zh-TW/Whitepaper/Licensing-Model' },
            ]
          },
          { text: '新聞', link: '/zh-TW/Blog/' },
          { text: '聯繫', link: '/zh-TW/Contact' },
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

// 日语设置--------------------------------------------------------------------------
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

        // 配置最后更新时间文本
        lastUpdatedText: '最終更新日',
        nav: [
          { text: 'ホーム', link: '/ja-JP/' },
          { text: '白書', 
            items: [
              { text: 'ビジョン', link: '/ja-JP/Whitepaper/Project-Origins' },
              { text: '方法論', link: '/ja-JP/Whitepaper/Model-Transformation' },
              { text: 'プロジェクト', link: '/ja-JP/Whitepaper/Physical-Demonstration-Projects' },
              { text: '資金調達', link: '/ja-JP/Whitepaper/Public-Welfare-Fundraising' },
              { text: 'チームビルディング', link: '/ja-JP/Whitepaper/HHPF-Values' },
              { text: '著作権声明', link: '/ja-JP/Whitepaper/Copyright-Statement' },
            ]
          },
          { text: 'ニュース', link: '/ja-JP/Blog/' },
          { text: 'お問い合わせ', link: '/ja-JP/Contact' },
        ],
        sidebar: [
          {
            text: 'ビジョン',
            collapsed: true,
            items: [
              { text: 'プロジェクトの起源', link: '/ja-JP/Whitepaper/Project-Origins' },
              { text: '理論の深化', link: '/ja-JP/Whitepaper/Theoretical-Deepening' },
              { text: '療法の統合', link: '/ja-JP/Whitepaper/Therapy-Integration' },
              { text: 'モデルの変革', link: '/ja-JP/Whitepaper/Model-Transformation' },
            ]
          },  
          {
            text: '方法論',
            collapsed: true,
            items: [
              { text: '健康の第一原理', link: '/ja-JP/Whitepaper/FPH' },
              { text: '健康工学方法論', link: '/ja-JP/Whitepaper/MHE' },
              { text: '生命システム論', link: '/ja-JP/Whitepaper/STL' },
            ]
          },
          {
            text: 'プロジェクト',
            collapsed: true,
            items: [
              { text: 'HHPF標準化エンジニアリング', link: '/ja-JP/Whitepaper/Standardization-Engineering' },
              { text: 'SMD人工知能', link: '/ja-JP/Whitepaper/SMD-AI' },
              { text: 'SMD正覚トレーニングキャンプ', link: '/ja-JP/Whitepaper/Right-Consciousness-Training-Camp' },
              { text: 'HHPF実証実体プロジェクト', link: '/ja-JP/Whitepaper/Physical-Demonstration-Projects' }
            ]
          },          

          {
            text: '資金調達',
            collapsed: true,
            items: [
              { text: '公益資金調達', link: '/ja-JP/Whitepaper/Public-Welfare-Fundraising' },
              { text: '商用プロジェクト', link: '/ja-JP/Whitepaper/Commercial-Projects' }
            ]
          },

          {
            text: 'チームビルディング',
            collapsed: true,
            items: [
              { text: 'HHPFの価値観', link: '/ja-JP/Whitepaper/HHPF-Values' },
              { text: 'ボランティア募集', link: '/ja-JP/Whitepaper/Volunteer-Recruitment' },
              { text: '人材募集', link: '/ja-JP/Whitepaper/Talent-Recruitment' }
            ]
          },
          {
             text: '著作権声明',
             collapsed: true,
             items: [
              { text: '著作権声明', link: '/ja-JP/Whitepaper/Copyright-Statement' },
              { text: '知的財産', link: '/ja-JP/Whitepaper/Intellectual-Property' },
              { text: 'ライセンスモデル', link: '/ja-JP/Whitepaper/Licensing-Model' },
            ]
          },
          { text: 'ニュース', link: '/ja-JP/Blog/' },
          { text: 'お問い合わせ', link: '/ja-JP/Contact' },
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/HHPF/' }
        ],
        footer: {
          message: '<img src="/logo-green.png" style="height: 30px; margin:auto;"><br>',          
          copyright: '著作権所有 © 2025 ~ 現在 人間健康計画財団'
        }
      }
    }
  }
})
