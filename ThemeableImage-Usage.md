# ThemeableImage 类型使用说明

## 类型定义分析

`ThemeableImage` 是一个 TypeScript 联合类型（Union Type），它允许图片以三种不同的格式进行定义：

```typescript
type ThemeableImage = 
   | string 
   | { src: string; alt?: string } 
   | { light: string; dark: string; alt?: string }
```

## 使用方式示例

### 1. 字符串格式
最简单的使用方式，直接提供图片 URL：

```typescript
// 示例 1: 字符串格式
const logo: ThemeableImage = '/images/logo.png';
```

### 2. 单图对象格式
提供图片 URL 和可选的替代文本：

```typescript
// 示例 2: 单图对象格式
const avatar: ThemeableImage = {
  src: '/images/avatar.jpg',
  alt: '用户头像'
};
```

### 3. 主题切换格式
提供深色模式和浅色模式下的不同图片 URL，以及可选的替代文本：

```typescript
// 示例 3: 主题切换格式
const heroImage: ThemeableImage = {
  light: '/images/hero-light.png',
  dark: '/images/hero-dark.png',
  alt: '网站英雄图'
};
```

## 在 VitePress 中的应用

### 在主题配置中使用

```typescript
// .vitepress/config.mts
import { defineConfig } from 'vitepress';

export default defineConfig({
  themeConfig: {
    // 使用单图对象格式
    logo: {
      src: '/logo.svg',
      alt: '网站 Logo'
    },
    // 或者使用主题切换格式
    logo: {
      light: '/logo-light.svg',
      dark: '/logo-dark.svg',
      alt: '网站 Logo'
    }
  }
});
```

### 在组件中使用

```vue
<!-- 自定义图片组件 -->
<template>
  <img 
    :src="getImageSrc(image)" 
    :alt="image.alt || ''" 
  />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useTheme } from 'vitepress';

// 定义 ThemeableImage 类型
interface ThemeableImage {
  src?: string;
  light?: string;
  dark?: string;
  alt?: string;
}

const props = defineProps<{
  image: string | ThemeableImage;
}>();

const theme = useTheme();

// 根据当前主题和图片类型返回正确的图片 URL
const getImageSrc = (image: string | ThemeableImage): string => {
  if (typeof image === 'string') {
    return image;
  }
  
  if ('src' in image) {
    return image.src;
  }
  
  return theme.value.dark ? image.dark : image.light;
};
</script>
```

### 在 Markdown 中使用（需要自定义组件支持）

```markdown
<!-- 使用自定义图片组件 -->
<ThemeableImage image="/images/banner.png" />

<!-- 或使用主题切换格式 -->
<ThemeableImage 
  :image="{
    light: '/images/banner-light.png',
    dark: '/images/banner-dark.png',
    alt: '网站横幅'
  }" 
/>
```

## 实现原理

ThemeableImage 类型的核心价值在于它提供了一种灵活的方式来处理图片资源，特别是在支持深色/浅色主题切换的应用中。通过联合类型，它允许开发者根据实际需求选择最适合的图片定义方式。

在实现层面，需要一个函数（如上面的 `getImageSrc`）来解析这个联合类型，并根据当前主题环境返回正确的图片 URL。