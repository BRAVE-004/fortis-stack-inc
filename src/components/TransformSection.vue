<template>
  <section class="py-15 px-4 w-full bg-transparent">
    <h2 class="text-3xl md:text-5xl font-extrabold text-center mb-16 glitchy-title">
      Transform Your Digital Experience
    </h2>
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Web Development -->
      <div :class="['bg-white/10 rounded-2xl p-8 flex flex-col items-center shadow-lg card-animate', revealed[0] && 'card-animate-in']">
        <span class="bg-blue-200/20 text-blue-500 p-4 rounded-full mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-10 h-10">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
          </svg>
        </span>
        <h3 class="text-xl font-bold text-primary mb-2">Web Development</h3>
        <p class="text-gray-200 text-center">Creating stunning, responsive websites that deliver results for your business.</p>
      </div>
      <!-- SEO Optimization (highlighted) -->
      <div :class="['bg-white/10 rounded-2xl p-8 flex flex-col items-center shadow-lg border-2 border-primary/80 relative z-10 card-animate', revealed[1] && 'card-animate-in']">
        <span class="bg-green-200/20 text-green-600 p-4 rounded-full mb-4">
          <!-- Simple Magnifying Glass (Lens) SVG -->
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-10 h-10">
            <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2" fill="none" />
            <line x1="16.5" y1="16.5" x2="21" y2="21" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          </svg>
        </span>
        <h3 class="text-xl font-bold text-primary mb-2">SEO Optimization</h3>
        <p class="text-gray-200 text-center">Boost your search engine rankings and drive organic traffic to your website.</p>
      </div>
      <!-- Branding & Design -->
      <div :class="['bg-white/10 rounded-2xl p-8 flex flex-col items-center shadow-lg card-animate', revealed[2] && 'card-animate-in']">
        <span class="bg-pink-200/20 text-pink-500 p-4 rounded-full mb-4">
          <!-- Branding Icon: Star -->
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" class="w-10 h-10">
            <polygon stroke="currentColor" stroke-width="2" fill="currentColor" points="12,2 15,9 22,9.5 17,14.5 18.5,22 12,18.5 5.5,22 7,14.5 2,9.5 9,9" />
          </svg>
        </span>
        <h3 class="text-xl font-bold text-primary mb-2">Branding & Design</h3>
        <p class="text-gray-200 text-center">We craft beautiful, impactful brand identities and designs that captivate.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const revealed = ref([false, false, false])
onMounted(() => {
  revealed.value.forEach((_, i) => {
    setTimeout(() => revealed.value[i] = true, 200 + i * 200)
  })
})
</script>

<style>
.glitchy-title {
  color: #fff;
  text-shadow:
    0 0 8px #ffe600,
    0 0 16px #ffe60099,
    0 0 2px #fff,
    0 0 32px #17bbab44;
  position: relative;
  letter-spacing: 2px;
  animation: glitchy-flicker 2.5s infinite alternate;
}
@keyframes glitchy-flicker {
  0%, 100% { opacity: 1; text-shadow: 0 0 8px #ffe600, 0 0 16px #ffe60099, 0 0 2px #fff, 0 0 32px #17bbab44; }
  10% { opacity: 0.85; text-shadow: 0 0 12px #ffe600, 0 0 24px #17bbab; }
  20% { opacity: 1; text-shadow: 0 0 8px #ffe600, 0 0 16px #ffe60099, 0 0 2px #fff, 0 0 32px #17bbab44; }
  25% { opacity: 0.7; text-shadow: 0 0 24px #ffe600, 0 0 32px #17bbab; }
  30% { opacity: 1; }
  40% { opacity: 0.9; }
  50% { opacity: 1; }
  60% { opacity: 0.8; }
  70% { opacity: 1; }
  80% { opacity: 0.95; }
  90% { opacity: 1; }
}
/* Stronger card animation for visibility */
.card-animate {
  opacity: 0;
  transform: translateY(100px) scale(0.8);
  transition: opacity 1.2s, transform 1.2s;
}
.card-animate-in {
  opacity: 1;
  transform: translateY(0) scale(1);
}
/* Hover effects for cards */
.card-animate-in:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 40px rgba(255, 230, 0, 0.3), 0 8px 16px rgba(23, 187, 171, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
</style> 