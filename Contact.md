---
outline: deep
prev: false
next: false
lastUpdated: false
editLink: false
---

# Contact Us

If you have any questions or cooperation intentions regarding the Human Health Plan Foundation, please contact us through the following form.

## Leave a Message

<form id="contact-form" style="max-width: 600px; margin: 0;">
  <div style="margin-bottom: 16px;">
    <input type="text" id="name" name="name" placeholder="Your Name" required style="width: 100%; padding: 12px; border: 2px solid #ddd; border-radius: 20px; font-size: 16px;">
  </div>
  
  <div style="margin-bottom: 16px;">
    <input type="email" id="email" name="email" placeholder="Your Email" required style="width: 100%; padding: 12px; border: 2px solid #ddd; border-radius: 20px; font-size: 16px;">
  </div>
  
  <div style="margin-bottom: 16px; position: relative;">
    <!-- Custom dropdown select -->
    <div id="custom-select" style="width: 100%; border: 2px solid #ddd; border-radius: 20px; font-size: 16px; position: relative;">
      <div id="select-value" style="padding: 12px; cursor: pointer; background-color: transparent; display: flex; justify-content: space-between; align-items: center;">
        <span>Select Category</span>
        <span>▼</span>
      </div>
      <!-- Dropdown menu -->
      <div id="select-options" style="display: none; position: absolute; top: 100%; left: 0; right: 0; border: 2px solid #ddd; margin-top: -1px; z-index: 1000; background-color: transparent; backdrop-filter: blur(10px);">
        <div class="select-option" data-value="I Want to Apply" style="padding: 12px; cursor: pointer; transition: background-color 0.3s; background-color: transparent;">I Want to Apply</div>
        <div class="select-option" data-value="Volunteer Registration" style="padding: 12px; cursor: pointer; transition: background-color 0.3s; background-color: transparent;">Volunteer Registration</div>
        <div class="select-option" data-value="Business Cooperation" style="padding: 12px; cursor: pointer; transition: background-color 0.3s; background-color: transparent;">Business Cooperation</div>
        <div class="select-option" data-value="I Want to Consult" style="padding: 12px; cursor: pointer; transition: background-color 0.3s; background-color: transparent;">I Want to Consult</div>
      </div>
    </div>
    <!-- Hidden actual form field -->
    <input type="hidden" id="purpose" name="purpose" value="" required>
  </div>

  <div style="margin-bottom: 16px;">
    <textarea id="message" name="message" placeholder="Message Content" rows="6" required style="width: 100%; padding: 12px; border: 2px solid #ddd; border-radius: 20px; font-size: 16px; resize: vertical; background-color: transparent;"></textarea>
  </div>
  
  <div style="margin-bottom: 16px;">
    <button type="submit" style="background-color: var(--vp-c-brand); color: white; border: none; padding: 12px 50px; border-radius: 20px; font-size: 16px; cursor: pointer; transition: background-color 0.3s;">
      Send Message
    </button>
  </div>
  
  <div id="form-status" style="margin-top: 16px; padding: 12px; border-radius: 20px; font-weight: bold;"></div>
</form>

<script setup>
// Dynamically load EmailJS
import { onMounted } from 'vue';

onMounted(() => {
  // Initialize custom dropdown menu
  const customSelect = document.getElementById('custom-select');
  const selectValue = document.getElementById('select-value');
  const selectOptions = document.getElementById('select-options');
  const purposeInput = document.getElementById('purpose');
  const options = document.querySelectorAll('.select-option');

  // Toggle dropdown menu when clicking the select box
  selectValue.addEventListener('click', function(e) {
    e.stopPropagation(); // Prevent event bubbling
    selectOptions.style.display = selectOptions.style.display === 'block' ? 'none' : 'block';
  });

  // Select value when clicking an option
  options.forEach(option => {
    option.addEventListener('click', function(e) {
      e.stopPropagation(); // Prevent event bubbling
      const value = this.dataset.value;
      selectValue.innerHTML = `<span>${value}</span><span>▼</span>`;
      purposeInput.value = value;
      selectOptions.style.display = 'none';
      
      // Add selected effect
      options.forEach(opt => opt.style.backgroundColor = 'transparent');
      this.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    });
  });

  // Close dropdown menu when clicking elsewhere on the page
  document.addEventListener('click', function() {
    selectOptions.style.display = 'none';
  });

  // Dynamically create and load EmailJS script
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
  script.onload = () => {
    // Initialize EmailJS
    window.emailjs.init({
      publicKey: 'T7gqS8p51R7fD2hX9jK6lQ3wZ1eY4tV0mC5bN8xR2fG7hB1v', // EmailJS public key
    });

    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Show loading status
      status.textContent = 'Sending...';
      status.style.backgroundColor = '#e9ecef';
      status.style.color = '#495057';
      
      // Send email
      window.emailjs.sendForm(
        'service_9kf2b4a', // EmailJS service ID
        'template_3x7z9k1', // EmailJS template ID
        form
      )
      .then(function(response) {
        // Send success
        status.textContent = 'Message sent successfully! We will contact you as soon as possible.';
        status.style.backgroundColor = '#d4edda';
        status.style.color = '#155724';
        form.reset();
        // Reset dropdown menu display
        selectValue.innerHTML = `<span>Select Category</span><span>▼</span>`;
      }, function(error) {
        // Send failure
        status.textContent = 'Failed to send message. Please try again later or contact us directly via email.';
        status.style.backgroundColor = '#f8d7da';
        status.style.color = '#721c24';
        console.error('EmailJS sending failed:', error);
      });
    });
  };
  document.head.appendChild(script);
});
</script>

## Contact Information

- <b>Phone Number</b>： +86 177-2251-0596（Mainland China）, +852 5941-9145（Hong Kong, China）
- <b>Email Address</b>： <a href="mailto:info@hhp.foundation">info@hhp.foundation</a>
- <b>Address</b>： Building 1, Yanhuang Great Health Industrial Park, Wutong Mountain Art Town, Luohu, Shenzhen, 518114
- <b>Official Website</b>： <a href="https://www.HHP.Foundation">www.HHP.Foundation</a>
- <b>Social Media</b>： WeChat, Douyin, Xiaohongshu, <a href="https://github.com/HHPF/">Github</a>


## Working Hours

- <b>Monday to Friday</b>: 9:00 - 18:00
- <b>Saturday to Sunday</b>: Rest
