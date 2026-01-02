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
    <input type="text" id="name" name="name" placeholder="您的姓名" required style="width: 100%; padding: 12px; border: 2px solid #ddd; border-radius: 20px; font-size: 16px;">
  </div>
  
  <div style="margin-bottom: 16px;">
    <input type="email" id="email" name="email" placeholder="您的邮箱" required style="width: 100%; padding: 12px; border: 2px solid #ddd; border-radius: 20px; font-size: 16px;">
  </div>
  
  <div style="margin-bottom: 16px; position: relative;">
    <!-- 自定义下拉选择框 -->
    <div id="custom-select" style="width: 100%; border: 2px solid #ddd; border-radius: 20px; font-size: 16px; position: relative;">
      <div id="select-value" style="padding: 12px; cursor: pointer; background-color: transparent; display: flex; justify-content: space-between; align-items: center;">
        <span>选择类别</span>
        <span>▼</span>
      </div>
      <!-- 下拉菜单 -->
      <div id="select-options" style="display: none; position: absolute; top: 100%; left: 0; right: 0; border: 2px solid #ddd; margin-top: -1px; z-index: 1000; background-color: transparent; backdrop-filter: blur(10px);">
        <div class="select-option" data-value="我要应聘" style="padding: 12px; cursor: pointer; transition: background-color 0.3s; background-color: transparent;">我要应聘</div>
        <div class="select-option" data-value="报名志愿者" style="padding: 12px; cursor: pointer; transition: background-color 0.3s; background-color: transparent;">报名志愿者</div>
        <div class="select-option" data-value="商务合作" style="padding: 12px; cursor: pointer; transition: background-color 0.3s; background-color: transparent;">商务合作</div>
        <div class="select-option" data-value="我要咨询" style="padding: 12px; cursor: pointer; transition: background-color 0.3s; background-color: transparent;">我要咨询</div>
      </div>
    </div>
    <!-- 隐藏的实际表单字段 -->
    <input type="hidden" id="purpose" name="purpose" value="" required>
  </div>

  <div style="margin-bottom: 16px;">
    <textarea id="message" name="message" placeholder="留言内容" rows="6" required style="width: 100%; padding: 12px; border: 2px solid #ddd; border-radius: 20px; font-size: 16px; resize: vertical; background-color: transparent;"></textarea>
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
  // 初始化自定义下拉菜单
  const customSelect = document.getElementById('custom-select');
  const selectValue = document.getElementById('select-value');
  const selectOptions = document.getElementById('select-options');
  const purposeInput = document.getElementById('purpose');
  const options = document.querySelectorAll('.select-option');

  // 点击选择框切换下拉菜单
  selectValue.addEventListener('click', function(e) {
    e.stopPropagation(); // 阻止事件冒泡
    selectOptions.style.display = selectOptions.style.display === 'block' ? 'none' : 'block';
  });

  // 点击选项选择值
  options.forEach(option => {
    option.addEventListener('click', function(e) {
      e.stopPropagation(); // 阻止事件冒泡
      const value = this.dataset.value;
      selectValue.innerHTML = `<span>${value}</span><span>▼</span>`;
      purposeInput.value = value;
      selectOptions.style.display = 'none';
      
      // 添加选中效果
      options.forEach(opt => opt.style.backgroundColor = 'transparent');
      this.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    });
  });

  // 点击页面其他地方关闭下拉菜单
  document.addEventListener('click', function() {
    selectOptions.style.display = 'none';
  });

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
        // 重置下拉菜单显示
        selectValue.innerHTML = `<span>选择类别</span><span>▼</span>`;
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

## 联系方式

- <b>联系电话</b>： +86 177-2251-0596（中国大陆）， +852 5941-9145（中国香港）
- <b>邮件信箱</b>： <a href="mailto:info@HHP.Foundation">info@HHP.Foundation</a>
- <b>联系地址</b>： 深圳 · 罗湖 · 梧桐山艺术小镇炎黄大健康产业园1号楼，  邮编：518114
- <b>官方网站</b>： <a href="https://www.HHP.Foundation">www.HHP.Foundation</a>
- <b>社交媒体</b>： 微信、抖音、小红书、<a href="https://github.com/HHPF/">Github</a>


## 工作时间

- <b>周一至周五</b>: 9:00 - 18:00
- <b>周六至周日</b>: 休息\n