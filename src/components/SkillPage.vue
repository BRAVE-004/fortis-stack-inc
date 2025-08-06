<template>
  <section class="min-h-screen flex flex-col items-center justify-center px-4 py-12">
    <div class="w-full max-w-5xl mx-auto mb-12">
      <SkillsSection />
    </div>
    <h2 class="text-4xl md:text-5xl font-extrabold text-center mb-10 glitchy-title" data-text="How We Use Our Skills">How We Use Our Skills</h2>
    <div class="max-w-3xl w-full mx-auto text-lg text-gray-200 mb-12 text-center">
      <p>
        At Fortis-Stack Inc. , our multidisciplinary expertise enables us to deliver exceptional results for every client. We specialize in <span class="text-primary font-semibold">Frontend</span> and <span class="text-primary font-semibold">Backend Development</span> to create robust, scalable, and high-performance web solutions.<br class="hidden md:inline" />
        <br />
        Our proficiency in <span class="text-primary font-semibold">UI/UX Design</span>, <span class="text-primary font-semibold">Graphic Design</span>, and <span class="text-primary font-semibold">Data Analysis</span> ensures that every project is visually compelling, user-centric, and insight-driven. <span class="text-primary font-semibold">Process Automation</span> and <span class="text-primary font-semibold">Problem Solving</span> empower us to optimize workflows and overcome complex business challenges. <span class="text-primary font-semibold">Digital Advertising</span> amplifies our clients' reach and impact in the digital landscape.<br /><br />
        Our commitment to excellence, innovation, and measurable value makes us a trusted partner for organizations seeking to elevate their digital presence and achieve lasting success.
      </p>
    </div>
  </section>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
const SkillsSection = defineAsyncComponent(() => import('./SkillsSection.vue'))
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

.glitchy-title {
  position: relative;
  color: #ffe600;
  display: inline-block;
  animation: glitch-skew 2s infinite linear alternate-reverse;
  text-shadow: 0 0 8px #ffe600, 0 0 16px #17bbab99, 0 0 2px #fff, 0 0 32px #17bbab44;
  font-family: 'Poppins', Arial, sans-serif;
}
@keyframes glitch-skew {
  0% { transform: skew(0deg); }
  10% { transform: skew(2deg); }
  20% { transform: skew(-2deg); }
  30% { transform: skew(1deg); }
  40% { transform: skew(-1deg); }
  50% { transform: skew(0deg); }
  100% { transform: skew(0deg); }
}
.text-primary { color: #ffe600; }

section, .max-w-3xl, .max-w-2xl, .text-lg, .text-base, p, span, div, h2, h4 {
  font-family: 'Poppins', Arial, sans-serif;
}
</style> 