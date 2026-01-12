# EmailJS 使用说明

本文档详细介绍了如何在 HHPF（人类健康计划基金会）项目中配置和使用 EmailJS 进行邮件发送。

## 1. EmailJS 简介

EmailJS 是一个纯前端的邮件发送解决方案，允许您直接从客户端 JavaScript 发送电子邮件，无需后端服务器。

### 为什么选择 EmailJS？
- **无需后端代码**：完全在浏览器中运行，适合静态网站
- **易于集成**：简单的 API 和完善的文档
- **安全可靠**：由 EmailJS 服务器处理邮件发送
- **支持模板**：可创建和管理邮件模板
- **多语言支持**：与 HHPF 项目的多语言需求完美匹配

## 2. EmailJS 账号配置

### 2.1 注册 EmailJS 账号
1. 访问 [EmailJS 官网](https://www.emailjs.com/)
2. 点击 "Sign Up" 注册账号
3. 验证邮箱地址

### 2.2 创建邮件服务
1. 登录 EmailJS 控制台
2. 点击 "Email Services" → "Add New Service"
3. 选择邮箱服务提供商（如 Gmail、Outlook 等）
4. 填写服务名称和相关配置
5. 点击 "Create Service" 完成创建
6. 复制生成的 **Service ID**（在 HHPF 项目中使用：`service_gmail`）

### 2.3 创建邮件模板
1. 点击 "Email Templates" → "Create New Template"
2. 填写模板名称（建议使用：`HHPF_template`）
3. 设计邮件内容，使用以下变量：
   - `{{name}}`：发送者姓名
   - `{{email}}`：发送者邮箱
   - `{{title}}`：邮件主题（来自下拉选择）
   - `{{message}}`：邮件内容
4. 设置收件人邮箱地址（建议使用基金会官方邮箱）
5. 点击 "Save Template" 完成创建
6. 复制生成的 **Template ID**（在 HHPF 项目中使用：`HHPF_template`）

### 2.4 获取公钥
1. 点击 "Account" → "API Keys"
2. 复制生成的 **Public Key**（在 HHPF 项目中使用：`W0m4iaMF_-hyk9hqB`）

## 3. 项目集成

### 3.1 安装依赖
```bash
npm install @emailjs/browser
```

### 3.2 创建 ContactForm 组件
HHPF 项目中的 `ContactForm.vue` 组件位于：
```
.vitepress/theme/components/ContactForm.vue
```

### 3.3 配置参数
在 `ContactForm.vue` 组件中，配置以下参数：

```javascript
// EmailJS 配置
serviceId: {
  type: String,
  default: 'service_gmail'
},
templateId: {
  type: String,
  default: 'HHPF_template'
},
publicKey: {
  type: String,
  default: 'W0m4iaMF_-hyk9hqB'
}
```

### 3.4 注册全局组件
在 `.vitepress/theme/index.ts` 中注册 ContactForm 组件：

```javascript
import ContactForm from './components/ContactForm.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('ContactForm', ContactForm)
  }
}
```

### 3.5 在页面中使用
在联系方式页面中使用 ContactForm 组件：

```vue
<!-- 英文版本 -->
<ContactForm language="en" />

<!-- 简体中文版本 -->
<ContactForm language="zh-CN" />

<!-- 繁体中文版本 -->
<ContactForm language="zh-TW" />
```

## 4. 密钥管理

### 4.1 公钥安全
- **公钥是安全的**：EmailJS 的公钥设计为可以公开的，不会泄露敏感信息
- **不要分享私钥**：私钥应严格保密，仅在 EmailJS 控制台使用

### 4.2 密钥存储
在 HHPF 项目中，密钥存储在 `ContactForm.vue` 组件的默认属性中：

```javascript
// 这些值可以在组件使用时通过属性覆盖
const props = defineProps({
  serviceId: {
    type: String,
    default: 'service_gmail'
  },
  templateId: {
    type: String,
    default: 'HHPF_template'
  },
  publicKey: {
    type: String,
    default: 'W0m4iaMF_-hyk9hqB'
  }
})
```

### 4.3 密钥更新
如需更新密钥，请按照以下步骤操作：
1. 在 EmailJS 控制台获取新的密钥
2. 更新 `ContactForm.vue` 组件中的默认值
3. 提交更改并推送到远程仓库

## 5. 使用说明

### 5.1 前端表单使用
1. 访问 HHPF 网站的联系方式页面
2. 填写以下信息：
   - **姓名**：您的姓名
   - **邮箱**：您的联系邮箱
   - **类别**：从下拉菜单中选择（如 "我要应聘"、"商务合作" 等）
   - **留言**：您的具体留言内容
3. 点击 "发送留言" 按钮
4. 等待发送状态反馈

### 5.2 发送状态反馈
- **发送中**：显示 "发送中..." 提示
- **发送成功**：显示 "留言发送成功！我们会尽快与您联系。" 提示
- **发送失败**：显示 "留言发送失败，请稍后重试或直接通过邮箱联系我们。" 提示

### 5.3 后端邮件接收
1. 当用户提交表单后，EmailJS 会处理邮件发送
2. 邮件会发送到您在模板中设置的收件人邮箱
3. 邮件内容包括用户填写的所有信息，格式化为易于阅读的形式

## 6. 故障排除

### 6.1 常见问题及解决方案

#### 6.1.1 邮件发送失败
- **检查网络连接**：确保用户网络连接正常
- **验证 EmailJS 配置**：确认服务 ID、模板 ID 和公钥正确
- **查看浏览器控制台**：检查是否有 JavaScript 错误
- **检查 EmailJS 控制台**：登录 EmailJS 查看发送记录和错误信息

#### 6.1.2 邮件未收到
- **检查垃圾邮件文件夹**：邮件可能被标记为垃圾邮件
- **验证收件人邮箱**：确保模板中的收件人邮箱正确
- **检查 EmailJS 发送限制**：免费版有发送数量限制

#### 6.1.3 表单验证失败
- **检查必填字段**：确保所有必填字段都已填写
- **验证邮箱格式**：确保邮箱地址格式正确

### 6.2 调试技巧
- **开启 EmailJS 调试模式**：在开发环境中使用
- **添加 console.log**：在关键位置添加日志输出
- **使用 EmailJS 测试功能**：在控制台中测试模板

## 7. 最佳实践

### 7.1 安全性
- **使用环境变量**：在生产环境中，考虑使用环境变量存储密钥
- **添加验证码**：防止恶意提交
- **设置发送限制**：在 EmailJS 控制台设置发送频率限制

### 7.2 用户体验
- **提供清晰的反馈**：使用不同状态的提示信息
- **添加加载动画**：在发送过程中提供视觉反馈
- **优化表单设计**：确保表单易于填写和提交

### 7.3 性能优化
- **延迟加载**：只在需要时加载 EmailJS 库
- **表单验证**：在客户端进行表单验证，减少无效提交
- **错误处理**：优雅处理各种错误情况

## 8. 配置参考

### 8.1 HHPF 项目中的 EmailJS 配置

| 配置项 | 值 | 说明 |
|-------|-----|------|
| Service ID | `service_gmail` | EmailJS 服务标识符 |
| Template ID | `HHPF_template` | EmailJS 模板标识符 |
| Public Key | `W0m4iaMF_-hyk9hqB` | EmailJS API 公钥 |
| 字段映射 | `name`, `email`, `title`, `message` | 表单字段到模板变量的映射 |

### 8.2 支持的语言
- **英文**：`language="en"`
- **简体中文**：`language="zh-CN"`
- **繁体中文**：`language="zh-TW"`

## 9. 相关文件

- **组件文件**：`.vitepress/theme/components/ContactForm.vue`
- **主题配置**：`.vitepress/theme/index.ts`
- **联系方式页面**：
  - 英文：`Contact.md`
  - 简体中文：`zh-CN/Contact.md`
  - 繁体中文：`zh-TW/Contact.md`

## 10. 结论

EmailJS 是一个强大而易用的前端邮件发送解决方案，非常适合 HHPF 项目的静态网站需求。通过正确配置和使用 EmailJS，您可以为用户提供一个便捷的联系方式，同时保持代码的简洁性和安全性。

如果您在使用过程中遇到任何问题，请参考本文档的故障排除部分，或联系技术支持团队获取帮助。