---
outline: deep
---

# 執行時API範例

本頁演示了VitePress提供的一些執行時API的用法。

主要的`useData()` API可用於訪問當前頁面的站點、主題和頁面數據。它可以在`.md`和`.vue`文件中使用：

```md
<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>

## 結果

### 主題數據
<pre>{{ theme }}</pre>

### 頁面數據
<pre>{{ page }}</pre>

### 頁面前置數據
<pre>{{ frontmatter }}</pre>
```

<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
</script>

## 結果

### 主題數據
<pre>{{ theme }}</pre>

### 頁面數據
<pre>{{ page }}</pre>

### 頁面前置數據
<pre>{{ frontmatter }}</pre>

## 更多

查看[完整的執行時API列表](https://vitepress.dev/reference/runtime-api#usedata)文檔。