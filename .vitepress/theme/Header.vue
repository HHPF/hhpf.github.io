<template>
  <header class="VPNav" :class="{ 'VPNav--has-sidebar': showSidebar }">
    <div class="VPNav-inner">
      <div class="VPNav-left">
        <!-- 修改LOGO和文字链接，根据当前语言动态生成 -->
        <a :href="homeLink" class="VPNav-brand">
          <span class="VPNav-logo">
            <img v-if="theme.logo" :src="theme.logo" :alt="site.title" />
          </span>
          <span class="VPNav-title">{{ site.title }}</span>
        </a>
        
        <!-- 直接渲染导航链接，不依赖vitepress内部组件 -->
        <div class="VPNav-nav">
          <a
            v-for="item in nav"
            :key="item.text + (item.link || '')"
            :href="item.link"
            :class="{ 'VPNavItem': true, 'VPNavItem--active': item.active }"
          >
            {{ item.text }}
          </a>
        </div>
      </div>
      
      <div class="VPNav-right">
        <slot name="right" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { DefaultTheme } from 'vitepress'
import { useRoute } from 'vitepress'

const route = useRoute()

const props = defineProps<{
  theme: DefaultTheme.Config
  site: any
  nav: DefaultTheme.NavItem[]
  showSidebar: boolean
}>()

// 根据当前语言动态生成首页链接
const homeLink = computed(() => {
  // 获取当前语言路径前缀
  const lang = route.path.split('/')[1]
  
  // 根据不同语言返回对应的首页链接
  if (lang === 'ZH-CN') {
    return '/ZH-CN/'
  } else if (lang === 'ZH-TW') {
    return '/ZH-TW/'
  } else if (lang === 'JA-JP') {
    return '/JA-JP/'
  } else {
    return '/EN/' // 默认返回英文首页
  }
})
</script>