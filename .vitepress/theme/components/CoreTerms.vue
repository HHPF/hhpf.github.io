// 核心术语组件组件
<template>

  <div style="width: 100%; display: block;">
    <div v-if="props.lang === 'en'">
      <h2>Core Terms</h2>
      <div style="width: 100%; margin: 0; padding: 0; overflow: hidden;">
       <table style="width: 100% !important; border-collapse: collapse; display: table;">
         <thead>
           <tr>
             <th style="border: 1px solid rgba(221, 221, 221, 0.5); padding: 8px; text-align: center; white-space: nowrap; width: 25%;">Abbreviation</th>
             <th style="border: 1px solid rgba(221, 221, 221, 0.5); padding: 8px; text-align: center; white-space: nowrap;">Full Name</th>
           </tr>
         </thead>
         <tbody>
           <tr>
             <td style="border: 1px solid rgba(221, 221, 221, 0.5); padding: 8px; text-align: center; font-weight: bold;">HHP</td>
             <td style="border: 1px solid rgba(221, 221, 221, 0.5); padding: 8px;">Human Health Plan</td>
           </tr>
           <tr>
             <td style="border: 1px solid rgba(221, 221, 221, 0.5); padding: 8px; text-align: center; font-weight: bold;">HHPF</td>
             <td style="border: 1px solid rgba(221, 221, 221, 0.5); padding: 8px;">Human Health Plan Foundation</td>
           </tr>
           <tr>
             <td style="border: 1px solid rgba(221, 221, 221, 0.5); padding: 8px; text-align: center; font-weight: bold;">SMD</td>
             <td style="border: 1px solid rgba(221, 221, 221, 0.5); padding: 8px;">Systems Medicine Doctor</td>
           </tr>
           <tr>
             <td style="border: 1px solid rgba(221, 221, 221, 0.5); padding: 8px; text-align: center; font-weight: bold;">RA</td>
             <td style="border: 1px solid rgba(221, 221, 221, 0.5); padding: 8px;">Right Awakening</td>
           </tr>
           <tr>
             <td style="border: 1px solid rgba(221, 221, 221, 0.5); padding: 8px; text-align: center; font-weight: bold;">RAC</td>
             <td style="border: 1px solid rgba(221, 221, 221, 0.5); padding: 8px;">Right Awakening Course</td>
           </tr>
           <tr>
             <td style="border: 1px solid rgba(221, 221, 221, 0.5); padding: 8px; text-align: center; font-weight: bold;">RAT</td>
             <td style="border: 1px solid rgba(221, 221, 221, 0.5); padding: 8px;">Right Awakening Course Training</td>
           </tr>
         </tbody>
       </table>
      </div>
    </div>

    <div v-else-if="props.lang === 'zh-CN'">
    <h2>核心术语</h2>
      <div style="width: 100%; margin: 0; padding: 0; overflow: hidden;">
       <table style="width: 100% !important; border-collapse: collapse; display: table;">
         <thead>
           <tr>
             <th style="border: 1px solid rgba(221, 221, 221, 0.5); padding: 8px; text-align: center; width: 15%; white-space: nowrap;">缩写</th>
             <th style="border: 1px solid rgba(221, 221, 221, 0.5); padding: 8px; text-align: center; width: 50%; white-space: nowrap;">全称</th>
             <th style="border: 1px solid rgba(221, 221, 221, 0.5); padding: 8px; text-align: center; width: 35%; white-space: nowrap;">中文释义</th>
           </tr>
         </thead>
         <tbody>
           <tr>
             <td style="border: 1px solid rgba(221, 221, 221, 0.5); padding: 8px; text-align: center; font-weight: bold;">HHP</td>
             <td style="border: 1px solid rgba(221, 221, 221, 0.5); padding: 8px;">Human Health Plan</td>
             <td style="border: 1px solid rgba(221, 221, 221, 0.5); padding: 8px;">人类健康计划</td>
           </tr>
           <tr>
             <td style="border: 1px solid rgba(221, 221, 221, 0.5); padding: 8px; text-align: center; font-weight: bold;">HHPF</td>
             <td style="border: 1px solid rgba(221, 221, 221, 0.5); padding: 8px;">Human Health Plan Foundation</td>
             <td style="border: 1px solid rgba(221, 221, 221, 0.5); padding: 8px;">人类健康计划基金会</td>
           </tr>
           <tr>
             <td style="border: 1px solid rgba(221, 221, 221, 0.5); padding: 8px; text-align: center; font-weight: bold;">SMD</td>
             <td style="border: 1px solid rgba(221, 221, 221, 0.5); padding: 8px;">Systems Medicine Doctor</td>
             <td style="border: 1px solid rgba(221, 221, 221, 0.5); padding: 8px;">系统医学诊疗</td>
           </tr>
           <tr>
             <td style="border: 1px solid rgba(221, 221, 221, 0.5); padding: 8px; text-align: center; font-weight: bold;">RA</td>
             <td style="border: 1px solid rgba(221, 221, 221, 0.5); padding: 8px;">Right Awakening</td>
             <td style="border: 1px solid rgba(221, 221, 221, 0.5); padding: 8px;">正觉</td>
           </tr>
           <tr>
             <td style="border: 1px solid rgba(221, 221, 221, 0.5); padding: 8px; text-align: center; font-weight: bold;">RAC</td>
             <td style="border: 1px solid rgba(221, 221, 221, 0.5); padding: 8px;">Right Awakening Course</td>
             <td style="border: 1px solid rgba(221, 221, 221, 0.5); padding: 8px;">正觉课程</td>
           </tr>
           <tr>
             <td style="border: 1px solid rgba(221, 221, 221, 0.5); padding: 8px; text-align: center; font-weight: bold;">RACT</td>
             <td style="border: 1px solid rgba(221, 221, 221, 0.5); padding: 8px;">Right Awakening Course Training</td>
             <td style="border: 1px solid rgba(221, 221, 221, 0.5); padding: 8px;">正觉训练</td>
           </tr>
         </tbody>
       </table>
      </div>
    </div>

    <div v-else-if="props.lang === 'zh-TW'">
      <h2>核心術語</h2>
      <div style="width: 100%; margin: 0; padding: 0; overflow: hidden;">
       <table style="width: 100% !important; border-collapse: collapse; display: table;">
         <thead>
           <tr>
             <th style="border: 1px solid rgba(221, 221, 221, 0.5); padding: 8px; text-align: center; white-space: nowrap;">縮寫</th>
             <th style="border: 1px solid rgba(221, 221, 221, 0.5); padding: 8px; text-align: center; white-space: nowrap;">全稱</th>
             <th style="border: 1px solid rgba(221, 221, 221, 0.5); padding: 8px; text-align: center; white-space: nowrap;">中文釋義</th>
           </tr>
         </thead>
         <tbody>
           <tr>
             <td style="border: 1px solid rgba(221, 221, 221, 0.5); padding: 8px; text-align: center; font-weight: bold;">HHP</td>
             <td style="border: 1px solid rgba(221, 221, 221, 0.5); padding: 8px;">Human Health Plan</td>
             <td style="border: 1px solid rgba(221, 221, 221, 0.5); padding: 8px;">人類健康計劃</td>
           </tr>
           <tr>
             <td style="border: 1px solid rgba(221, 221, 221, 0.5); padding: 8px; text-align: center; font-weight: bold;">HHPF</td>
             <td style="border: 1px solid rgba(221, 221, 221, 0.5); padding: 8px;">Human Health Plan Foundation</td>
             <td style="border: 1px solid rgba(221, 221, 221, 0.5); padding: 8px;">人類健康計劃基金會</td>
           </tr>
           <tr>
             <td style="border: 1px solid rgba(221, 221, 221, 0.5); padding: 8px; text-align: center; font-weight: bold;">SMD</td>
             <td style="border: 1px solid rgba(221, 221, 221, 0.5); padding: 8px;">Systems Medicine Doctor</td>
             <td style="border: 1px solid rgba(221, 221, 221, 0.5); padding: 8px;">系統醫學診療</td>
           </tr>
           <tr>
             <td style="border: 1px solid rgba(221, 221, 221, 0.5); padding: 8px; text-align: center; font-weight: bold;">RA</td>
             <td style="border: 1px solid rgba(221, 221, 221, 0.5); padding: 8px;">Right Awakening</td>
             <td style="border: 1px solid rgba(221, 221, 221, 0.5); padding: 8px;">正覺</td>
           </tr>
           <tr>
             <td style="border: 1px solid rgba(221, 221, 221, 0.5); padding: 8px; text-align: center; font-weight: bold;">RAC</td>
             <td style="border: 1px solid rgba(221, 221, 221, 0.5); padding: 8px;">Right Awakening Course</td>
             <td style="border: 1px solid rgba(221, 221, 221, 0.5); padding: 8px;">正覺課程</td>
           </tr>
           <tr>
             <td style="border: 1px solid rgba(221, 221, 221, 0.5); padding: 8px; text-align: center; font-weight: bold;">RACT</td>
             <td style="border: 1px solid rgba(221, 221, 221, 0.5); padding: 8px;">Right Awakening Course Training</td>
             <td style="border: 1px solid rgba(221, 221, 221, 0.5); padding: 8px;">正覺訓練</td>
           </tr>
         </tbody>
       </table>
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
