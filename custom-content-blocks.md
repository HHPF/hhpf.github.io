# 如何在 VitePress 中插入自定义内容块

## 方法一：使用 VitePress 内置的 Callout 组件

VitePress 提供了内置的 Callout 组件，可以创建不同类型的提示块：

### 基本用法

```markdown
::: info 序言
这是一个使用 info 类型的 Callout 组件创建的序言内容块。
你可以在这里添加序言的详细内容，包括项目背景、目标等信息。
:::

::: tip 提示
这是一个提示类型的 Callout 组件。
这是一个提示类型的 Callout 组件。
这是一个提示类型的 Callout 组件。
这是一个提示类型的 Callout 组件。
这是一个提示类型的 Callout 组件。
这是一个提示类型的 Callout 组件。
这是一个提示类型的 Callout 组件。
这是一个提示类型的 Callout 组件。
:::

::: warning 警告
这是一个警告类型的 Callout 组件。
:::

::: danger 危险
这是一个危险类型的 Callout 组件。
:::

::: details 详情
这是一个可展开的详情类型的 Callout 组件。
:::
```

### 效果示例

::: info 序言
这是一个使用 info 类型的 Callout 组件创建的序言内容块。
你可以在这里添加序言的详细内容，包括项目背景、目标等信息。
:::

::: tip 提示
这是一个提示类型的 Callout 组件。
这是一个提示类型的 Callout 组件。
这是一个提示类型的 Callout 组件。
这是一个提示类型的 Callout 组件。
这是一个提示类型的 Callout 组件。
这是一个提示类型的 Callout 组件。
这是一个提示类型的 Callout 组件。
这是一个提示类型的 Callout 组件。
这是一个提示类型的 Callout 组件。
:::

::: warning 警告
这是一个警告类型的 Callout 组件。
:::

::: danger 危险
这是一个危险类型的 Callout 组件。
:::

::: details 详情
这是一个可展开的详情类型的 Callout 组件。
:::

## 方法二：使用自定义 CSS 创建样式化内容块

你可以在项目的 CSS 文件中添加自定义样式，然后在 Markdown 中使用这些样式：

### 步骤 1：在 CSS 文件中添加样式

在 `.vitepress/theme/index.css` 文件中添加以下样式：

```css
/* 自定义序言内容块样式 */
.prologue-block {
  background-color: rgba(51, 153, 0, 0.1);
  border-left: 4px solid #339900;
  padding: 20px;
  margin: 20px 0;
  border-radius: 4px;
}

.prologue-block h3 {
  color: #339900;
  margin-top: 0;
  font-size: 1.2rem;
}

/* 自定义引言内容块样式 */
.quote-block {
  background-color: #f8f9fa;
  border-left: 4px solid #6c757d;
  padding: 20px;
  margin: 20px 0;
  border-radius: 4px;
  font-style: italic;
}
```

### 步骤 2：在 Markdown 中使用自定义样式

```markdown
<div class="prologue-block">
  <h3>项目序言</h3>
  <p>这是一个使用自定义CSS样式创建的序言内容块。</p>
  <p>你可以在这里添加更详细的序言内容，包括项目的起源、发展历程、核心价值等。</p>
  <p>通过自定义CSS，你可以完全控制内容块的外观和样式。</p>
</div>

<div class="quote-block">
  <p>这是一个使用自定义CSS样式创建的引言内容块，适合用于引用重要观点或名人名言。</p>
</div>
```

## 方法三：创建自定义 Vue 组件

对于更复杂的内容块，你可以创建自定义 Vue 组件：

### 步骤 1：创建组件文件

在 `.vitepress/theme/components` 目录下创建 `Prologue.vue` 文件：

```vue
<template>
  <div class="prologue-component">
    <h3>{{ title }}</h3>
    <div class="prologue-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "序言",
  },
});
</script>

<style scoped>
.prologue-component {
  background: linear-gradient(
    135deg,
    rgba(51, 153, 0, 0.1),
    rgba(51, 153, 0, 0.05)
  );
  border: 1px solid rgba(51, 153, 0, 0.2);
  border-radius: 8px;
  padding: 24px;
  margin: 20px 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.prologue-component h3 {
  color: #339900;
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 1.3rem;
  font-weight: 600;
}

.prologue-content {
  line-height: 1.6;
}
</style>
```

### 步骤 2：注册组件

在 `.vitepress/theme/index.ts` 文件中注册组件：

```typescript
import DefaultTheme from "vitepress/theme";
import "./index.css";
import Prologue from "./components/Prologue.vue";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component("Prologue", Prologue);
  },
};
```

### 步骤 3：在 Markdown 中使用组件

```markdown
<Prologue title="项目序言">
这是一个使用自定义Vue组件创建的序言内容块。

通过 Vue 组件，你可以实现更复杂的交互功能和更灵活的样式控制。

例如，你可以添加动画效果、条件渲染等高级功能。
</Prologue>
```

## 方法四：使用 Markdown 的原生功能

你也可以使用 Markdown 的原生功能来创建简单的内容块：

### 引用块

```markdown
> ## 序言
>
> 这是一个使用 Markdown 引用块创建的序言。
>
> 引用块是 Markdown 的原生功能，使用简单，适合创建基本的内容块。
```

### 代码块

对于代码或其他需要等宽字体的内容，你可以使用代码块：

````markdown
```
这是一个使用Markdown代码块创建的内容块。
适合用于展示代码、配置文件等内容。
```
````

## 最佳实践建议

1. **根据内容类型选择合适的方法**：

   - 简单的提示或警告使用内置的 Callout 组件
   - 需要特定样式的内容使用自定义 CSS
   - 复杂的交互式内容使用 Vue 组件

2. **保持一致性**：

   - 在整个项目中使用统一的风格和方法
   - 为不同类型的内容块建立明确的使用规范

3. **考虑可访问性**：

   - 确保内容块的样式不会影响可读性
   - 为自定义组件添加适当的 ARIA 属性

4. **性能考虑**：
   - 对于简单内容，优先使用内置功能或 CSS
   - 仅在必要时使用 Vue 组件，以避免性能开销

## 示例：完整的序言实现

以下是一个完整的序言实现示例，结合了自定义 CSS 和 Markdown 内容：

<div class="prologue-block">
  <h3>项目序言</h3>
  <p>人类健康计划基金会（HHPF）致力于通过整合医学、科技和人文关怀，推动全球健康事业的发展。</p>
  <p>本白皮书阐述了我们的核心价值观、项目理念和实施路径，旨在为全人类的健康福祉贡献力量。</p>
  <p>我们相信，通过标准化工程、模式转化和理论深化等关键举措，能够实现健康领域的重大突破，为人类社会的可持续发展奠定基础。</p>
  <p>加入我们，共同开创健康未来！</p>
</div>
