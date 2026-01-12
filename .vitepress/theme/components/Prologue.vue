<template>

  <div class="prologue-wrapper">
    <!-- 使用 VitePress 默认的 ::: tip 样式结构 -->
    <div v-if="props.lang === 'en'" class="custom-block tip">
      <div class="custom-block-title">
        <span class="custom-block-icon">💡</span>
        Prologue
      </div>
      <div class="custom-block-content">
        <p>The Human Health Plan Foundation (HHPF) is dedicated to promoting the development of global health through the integration of medicine, technology, and humanistic care.</p>
        <p>This white paper outlines our core values, project philosophy, and implementation pathways, aiming to contribute to the health and well-being of all humanity.</p>
        <p>We believe that through key initiatives such as standardization engineering, model transformation, and theoretical deepening, we can achieve significant breakthroughs in the health field and lay the foundation for the sustainable development of human society.</p>
        <p>Join us in creating a healthy future together!</p>
      </div>
    </div>

    <div v-else-if="props.lang === 'zh-CN'" class="custom-block tip">
      <div class="custom-block-title">
        <span class="custom-block-icon">💡</span>
        序言
      </div>
      <div class="custom-block-content">
        <p>人类健康计划基金会（HHPF）致力于通过整合医学、科技和人文关怀，推动全球健康事业的发展。</p>
        <p>本白皮书阐述了我们的核心价值观、项目理念和实施路径，旨在为全人类的健康福祉贡献力量。</p>
        <p>我们相信，通过标准化工程、模式转化和理论深化等关键举措，能够实现健康领域的重大突破，为人类社会的可持续发展奠定基础。</p>
        <p>加入我们，共同开创健康未来！</p>
      </div>
    </div>

    <div v-else-if="props.lang === 'zh-TW'" class="custom-block tip">
      <div class="custom-block-title">
        <span class="custom-block-icon">💡</span>
        序言
      </div>
      <div class="custom-block-content">
        <p>人類健康計劃基金會（HHPF）致力於通過整合醫學、科技和人文關懷，推動全球健康事業的發展。</p>
        <p>本白皮書闡述了我們的核心價值觀、專案理念和實施路徑，旨在為全人類的健康福祉貢獻力量。</p>
        <p>我們相信，通過標準化工程、模式轉化和理論深化等關鍵舉措，能夠實現健康領域的重大突破，為人類社會的可持續發展奠定基礎。</p>
        <p>加入我們，共同開創健康未來！</p>
      </div>
    </div>
  </div>

</template>

<script setup>
const props = defineProps({
  lang: {
    type: String,
    default: 'en'
  }
})
</script>
