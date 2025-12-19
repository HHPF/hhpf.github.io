---
outline: deep
prev: false
next: false
lastUpdated: false
editLink: false
---

# 联系我们

如果您对人类健康计划基金会有任何问题或合作意向，请通过以下表单与我们联系。

## 我要留言

<form id="contact-form" style="max-width: 600px; margin: 0;">
  <div style="margin-bottom: 16px;">
    <input type="text" id="name" name="name" placeholder="您的姓名" required style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 20px; font-size: 16px;">
  </div>
  
  <div style="margin-bottom: 16px;">
    <input type="email" id="email" name="email" placeholder="您的邮箱" required style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 20px; font-size: 16px;">
  </div>
  
  <div style="margin-bottom: 16px;">
    <textarea id="message" name="message" placeholder="留言内容" rows="6" required style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 20px; font-size: 16px; resize: vertical;"></textarea>
  </div>
  
  <div style="margin-bottom: 16px;">
    <button type="submit" style="background-color: var(--vp-c-brand); color: white; border: none; padding: 12px 50px; border-radius: 20px; font-size: 16px; cursor: pointer; transition: background-color 0.3s;">
      发送留言
    </button>
  </div>
  
  <div id="form-status" style="margin-top: 16px; padding: 12px; border-radius: 20px; font-weight: bold;"></div>
</form>

<script setup>
// 使用动态加载方式引入 EmailJS
import { onMounted } from 'vue';

onMounted(() => {
  // 动态创建并加载 EmailJS 脚本
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
  script.onload = () => {
    // 初始化 EmailJS
    window.emailjs.init({
      publicKey: 'T7gqS8p51R7fD2hX9jK6lQ3wZ1eY4tV0mC5bN8xR2fG7hB1v', // EmailJS 公钥
    });

    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // 显示加载状态
      status.textContent = '发送中...';
      status.style.backgroundColor = '#e9ecef';
      status.style.color = '#495057';
      
      // 发送邮件
      window.emailjs.sendForm(
        'service_9kf2b4a', // EmailJS 服务 ID
        'template_3x7z9k1', // EmailJS 模板 ID
        form
      )
      .then(function(response) {
        // 发送成功
        status.textContent = '留言发送成功！我们会尽快与您联系。';
        status.style.backgroundColor = '#d4edda';
        status.style.color = '#155724';
        form.reset();
      }, function(error) {
        // 发送失败
        status.textContent = '留言发送失败，请稍后重试或直接通过邮箱联系我们。';
        status.style.backgroundColor = '#f8d7da';
        status.style.color = '#721c24';
        console.error('EmailJS 发送失败:', error);
      });
    });
  };
  document.head.appendChild(script);
});
</script>

## 其他联系方式

- **邮箱**： ocean.x@hhpf.org
- **电话**： +86 177-2251-0596（中国大陆）， +852 5941-9145（中国香港）
- **地址**： 深圳 · 罗湖 · 梧桐山智慧康养小镇  邮编：518114

## 工作时间

- **周一至周五**: 9:00 - 18:00
- **周六至周日**: 休息
