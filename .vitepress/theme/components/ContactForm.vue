<template>
  <div>
    <form id="contact-form" style="max-width: 600px; margin: 0;">
      <div style="margin-bottom: 16px;">
        <input type="text" id="name" name="name" :placeholder="placeholders.name" required style="width: 98%; margin-left: 2px; padding: 12px; border: 2px solid #ddd; border-radius: 20px; font-size: 16px;">
      </div>
      
      <div style="margin-bottom: 16px;">
        <input type="email" id="email" name="email" :placeholder="placeholders.email" required style="width: 98%; margin-left: 2px; padding: 12px; border: 2px solid #ddd; border-radius: 20px; font-size: 16px;">
      </div>
      
      <div style="margin-bottom: 16px; position: relative;">
        <!-- 自定义下拉选择框 -->
        <div id="custom-select" style="width: 98%; margin-left: 2px; font-size: 16px; position: relative;">
          <div id="select-value" style="padding: 12px; cursor: pointer; background-color: transparent; display: flex; justify-content: space-between; align-items: center; width: 100%; box-sizing: border-box; border: 2px solid #ddd; border-radius: 20px;">
            <span style="flex: 1; text-align: left;">{{ placeholders.category }}</span>
            <span data-v-0009425e="" class="vpi-chevron-right caret-icon" style="transform: rotate(90deg);"></span>
          </div>
          <!-- 下拉菜单 -->
          <div id="select-options" style="display: none; width: 100%; position: absolute; top: 100%; left: 0; border: 2px solid #ddd; margin-top: 0; z-index: 1000; background-color: transparent; backdrop-filter: blur(10px); box-sizing: border-box; border-radius: 10px;">
            <div v-for="option in options" :key="option.value" class="select-option" :data-value="option.value" style="padding: 12px; cursor: pointer; transition: background-color 0.3s; background-color: transparent;">{{ option.label }}</div>
          </div>
        </div>
        <!-- 隐藏的实际表单字段 -->
        <input type="hidden" id="title" name="title" value="" required>
      </div>

      <div style="margin-bottom: 16px;">
        <textarea id="message" name="message" :placeholder="placeholders.message" rows="6" required style="width: 98%; margin-left: 2px; padding: 12px; border: 2px solid #ddd; border-radius: 20px; font-size: 16px; resize: vertical; background-color: transparent;"></textarea>
      </div>
      
      <div style="margin-bottom: 16px;">
        <button type="submit" style="background-color: var(--vp-c-brand); color: white; border: none; padding: 12px 50px; border-radius: 20px; font-size: 16px; cursor: pointer; transition: filter 0.3s;" onmouseover="this.style.filter = 'brightness(60%)'" onmouseout="this.style.filter = 'brightness(100%)'">
          {{ placeholders.submit }}
        </button>
      </div>
      
      <div id="form-status" style="margin-top: 16px; padding: 12px; border-radius: 20px; font-weight: bold;"></div>
    </form>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';
import emailjs from '@emailjs/browser';

// 定义组件属性
const props = defineProps({
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
  },
  // 语言选项
  language: {
    type: String,
    default: 'en'
  }
});

// 占位符文本
const placeholders = computed(() => {
  switch (props.language) {
    case 'zh-CN':
      return {
        name: '您的姓名',
        email: '您的邮箱',
        category: '选择类别',
        message: '留言内容',
        submit: '发送留言'
      };
    case 'zh-TW':
      return {
        name: '您的姓名',
        email: '您的郵箱',
        category: '選擇類別',
        message: '留言內容',
        submit: '發送留言'
      };
    default:
      return {
        name: 'Your Name',
        email: 'Your Email',
        category: 'Select Category',
        message: 'Message Content',
        submit: 'Send Message'
      };
  }
});

// 下拉菜单选项
const options = computed(() => {
  switch (props.language) {
    case 'zh-CN':
      return [
        { value: '我要应聘', label: '我要应聘' },
        { value: '报名志愿者', label: '报名志愿者' },
        { value: '商务合作', label: '商务合作' },
        { value: '我要咨询', label: '我要咨询' }
      ];
    case 'zh-TW':
      return [
        { value: '我要應聘', label: '我要應聘' },
        { value: '報名志願者', label: '報名志願者' },
        { value: '商務合作', label: '商務合作' },
        { value: '我要咨詢', label: '我要咨詢' }
      ];
    default:
      return [
        { value: 'I Want to Apply', label: 'I Want to Apply' },
        { value: 'Volunteer Registration', label: 'Volunteer Registration' },
        { value: 'Business Cooperation', label: 'Business Cooperation' },
        { value: 'I Want to Consult', label: 'I Want to Consult' }
      ];
  }
});

// 状态消息
const statusMessages = computed(() => {
  switch (props.language) {
    case 'zh-CN':
      return {
        sending: '发送中...',
        success: '留言发送成功！我们会尽快与您联系。',
        error: '留言发送失败，请稍后重试或直接通过邮箱联系我们。'
      };
    case 'zh-TW':
      return {
        sending: '發送中...',
        success: '留言發送成功！我們會盡快與您聯繫。',
        error: '留言發送失敗，請稍後重試或直接通過郵箱聯繫我們。'
      };
    default:
      return {
        sending: 'Sending...',
        success: 'Message sent successfully! We will contact you as soon as possible.',
        error: 'Failed to send message. Please try again later or contact us directly via email.'
      };
  }
});

onMounted(() => {
  // 初始化 EmailJS
  emailjs.init({
    publicKey: props.publicKey
  });

  // 初始化自定义下拉菜单
  const customSelect = document.getElementById('custom-select');
  const selectValue = document.getElementById('select-value');
  const selectOptions = document.getElementById('select-options');
  const titleInput = document.getElementById('title');
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
          selectValue.innerHTML = `<span style="flex: 1; text-align: left;">${value}</span><span data-v-0009425e="" class="vpi-chevron-right caret-icon" style="transform: rotate(90deg);"></span>`;
          titleInput.value = value;
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

  // 表单提交处理
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // 显示加载状态
      status.textContent = statusMessages.value.sending;
      status.style.backgroundColor = 'transparent';
      status.style.color = '#cccccc';
      status.style.border = 'none';
    
    // 发送邮件
    emailjs.sendForm(
      props.serviceId,
      props.templateId,
      form
    )
    .then(function(response) {
      // 发送成功
      status.textContent = statusMessages.value.success;
      status.style.backgroundColor = 'transparent';
      status.style.color = '#cccccc';
      status.style.border = 'none';
      form.reset();
      // 重置下拉菜单显示
      selectValue.innerHTML = `<span style="flex: 1; text-align: left;">${placeholders.value.category}</span><span data-v-0009425e="" class="vpi-chevron-right caret-icon" style="transform: rotate(90deg);"></span>`;
      // 重置title输入字段
      titleInput.value = '';
    }, function(error) {
      // 发送失败
      status.textContent = statusMessages.value.error;
      status.style.backgroundColor = 'transparent';
      status.style.color = '#cccccc';
      status.style.border = 'none';
      console.error('EmailJS sending failed:', error);
    });
  });
});
</script>

<style scoped>
/* 组件样式 */
</style>
