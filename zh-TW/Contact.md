---
outline: deep
prev: false
next: false
lastUpdated: false
editLink: false
---

# 聯繫我們

如果您對人類健康計劃基金會有任何問題或合作意向，請通過以下表單與我們聯繫。

## 我要留言

<form id="contact-form" style="max-width: 600px; margin: 0;">
  <div style="margin-bottom: 16px;">
    <input type="text" id="name" name="name" placeholder="您的姓名" required style="width: 100%; padding: 12px; border: 2px solid #ddd; border-radius: 20px; font-size: 16px;">
  </div>
  
  <div style="margin-bottom: 16px;">
    <input type="email" id="email" name="email" placeholder="您的郵箱" required style="width: 100%; padding: 12px; border: 2px solid #ddd; border-radius: 20px; font-size: 16px;">
  </div>
  
  <div style="margin-bottom: 16px; position: relative;">
    <!-- 自訂下拉選擇框 -->
    <div id="custom-select" style="width: 100%; border: 2px solid #ddd; border-radius: 20px; font-size: 16px; position: relative;">
      <div id="select-value" style="padding: 12px; cursor: pointer; background-color: transparent; display: flex; justify-content: space-between; align-items: center;">
        <span>選擇類別</span>
        <span>▼</span>
      </div>
      <!-- 下拉菜單 -->
      <div id="select-options" style="display: none; position: absolute; top: 100%; left: 0; right: 0; border: 2px solid #ddd; margin-top: -1px; z-index: 1000; background-color: transparent; backdrop-filter: blur(10px);">
        <div class="select-option" data-value="我要應聘" style="padding: 12px; cursor: pointer; transition: background-color 0.3s; background-color: transparent;">我要應聘</div>
        <div class="select-option" data-value="報名志願者" style="padding: 12px; cursor: pointer; transition: background-color 0.3s; background-color: transparent;">報名志願者</div>
        <div class="select-option" data-value="商務合作" style="padding: 12px; cursor: pointer; transition: background-color 0.3s; background-color: transparent;">商務合作</div>
        <div class="select-option" data-value="我要咨詢" style="padding: 12px; cursor: pointer; transition: background-color 0.3s; background-color: transparent;">我要咨詢</div>
      </div>
    </div>
    <!-- 隱藏的實際表單字段 -->
    <input type="hidden" id="purpose" name="purpose" value="" required>
  </div>

  <div style="margin-bottom: 16px;">
    <textarea id="message" name="message" placeholder="留言內容" rows="6" required style="width: 100%; padding: 12px; border: 2px solid #ddd; border-radius: 20px; font-size: 16px; resize: vertical; background-color: transparent;"></textarea>
  </div>
  
  <div style="margin-bottom: 16px;">
    <button type="submit" style="background-color: var(--vp-c-brand); color: white; border: none; padding: 12px 50px; border-radius: 20px; font-size: 16px; cursor: pointer; transition: background-color 0.3s;">
      發送留言
    </button>
  </div>
  
  <div id="form-status" style="margin-top: 16px; padding: 12px; border-radius: 20px; font-weight: bold;"></div>
</form>

<script setup>
// 使用動態加載方式引入 EmailJS
import { onMounted } from 'vue';

onMounted(() => {
  // 初始化自訂下拉菜單
  const customSelect = document.getElementById('custom-select');
  const selectValue = document.getElementById('select-value');
  const selectOptions = document.getElementById('select-options');
  const purposeInput = document.getElementById('purpose');
  const options = document.querySelectorAll('.select-option');

  // 點擊選擇框切換下拉菜單
  selectValue.addEventListener('click', function(e) {
    e.stopPropagation(); // 阻止事件冒泡
    selectOptions.style.display = selectOptions.style.display === 'block' ? 'none' : 'block';
  });

  // 點擊選項選擇值
  options.forEach(option => {
    option.addEventListener('click', function(e) {
      e.stopPropagation(); // 阻止事件冒泡
      const value = this.dataset.value;
      selectValue.innerHTML = `<span>${value}</span><span>▼</span>`;
      purposeInput.value = value;
      selectOptions.style.display = 'none';
      
      // 添加選中效果
      options.forEach(opt => opt.style.backgroundColor = 'transparent');
      this.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    });
  });

  // 點擊頁面其他地方關閉下拉菜單
  document.addEventListener('click', function() {
    selectOptions.style.display = 'none';
  });

  // 動態創建並加載 EmailJS 腳本
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
  script.onload = () => {
    // 初始化 EmailJS
    window.emailjs.init({
      publicKey: 'T7gqS8p51R7fD2hX9jK6lQ3wZ1eY4tV0mC5bN8xR2fG7hB1v', // EmailJS 公鑰
    });

    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // 顯示加載狀態
      status.textContent = '發送中...';
      status.style.backgroundColor = '#e9ecef';
      status.style.color = '#495057';
      
      // 發送郵件
      window.emailjs.sendForm(
        'service_9kf2b4a', // EmailJS 服務 ID
        'template_3x7z9k1', // EmailJS 模板 ID
        form
      )
      .then(function(response) {
        // 發送成功
        status.textContent = '留言發送成功！我們會盡快與您聯繫。';
        status.style.backgroundColor = '#d4edda';
        status.style.color = '#155724';
        form.reset();
        // 重置下拉菜單顯示
        selectValue.innerHTML = `<span>選擇類別</span><span>▼</span>`;
      }, function(error) {
        // 發送失敗
        status.textContent = '留言發送失敗，請稍後重試或直接通過郵箱聯繫我們。';
        status.style.backgroundColor = '#f8d7da';
        status.style.color = '#721c24';
        console.error('EmailJS 發送失敗:', error);
      });
    });
  };
  document.head.appendChild(script);
});
</script>

## 聯繫方式

- <b>聯繫電話</b>： +86 177-2251-0596（中國大陸）， +852 5941-9145（中國香港）
- <b>郵件信箱</b>： <a href="mailto:info@HHP.Foundation">info@HHP.Foundation</a>
- <b>聯繫地址</b>： 深圳 · 羅湖 · 梧桐山藝術小鎮炎黃大健康產業園1號樓，  郵編：518114
- <b>官方網站</b>： <a href="https://www.HHP.Foundation">www.HHP.Foundation</a>
- <b>社交媒體</b>： 微信、抖音、小紅書、<a href="https://github.com/HHPF/">Github</a>


## 工作時間

- <b>周一至周五</b>: 9:00 - 18:00
- <b>周六至周日</b>: 休息\n