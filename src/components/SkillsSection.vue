<template>
  <section ref="sectionRef" class="py-10 relative z-10 my-8">
    <h2 class="text-4xl md:text-5xl font-extrabold text-center mb-16 skills-title-glow">
      <span class="glitchy-title" data-text="Our Skills">Our Skills</span>
    </h2>
    <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-10 max-w-6xl mx-auto">
      <div v-for="(skill, idx) in skills" :key="skill.name" class="flex flex-col items-center skill-animate" :style="{ animationDelay: (0.1 * idx) + 's' }">
        <div class="relative w-24 h-24 sm:w-32 sm:h-32 mb-4">
          <svg class="w-full h-full" viewBox="0 0 120 120">
            <circle
              class="text-gray-700/40"
              cx="60" cy="60" r="52" stroke-width="12"
              fill="none" stroke="currentColor"
            />
            <circle
              :class="'skill-progress-' + skill.color"
              cx="60" cy="60" r="52" stroke-width="12"
              fill="none"
              :stroke-dasharray="circumference"
              :stroke-dashoffset="circumference - (animatedPercents[idx] / 100) * circumference"
              stroke-linecap="round"
              :stroke="'url(#gradient-' + skill.color + ')'"
              style="transition: stroke-dashoffset 1.2s cubic-bezier(0.4,0,0.2,1)"
            />
            <defs>
              <linearGradient :id="'gradient-' + skill.color" x1="0" y1="0" x2="120" y2="120">
                <stop offset="0%" :stop-color="skill.gradient[0]" />
                <stop offset="100%" :stop-color="skill.gradient[1]" />
              </linearGradient>
            </defs>
            <text x="60" y="68" text-anchor="middle" font-size="1.2rem" font-weight="bold" fill="#ffe600" class="drop-shadow-glow">{{ animatedPercents[idx] }}%</text>
          </svg>
        </div>
        <span class="text-base sm:text-lg font-semibold text-white mt-2">{{ skill.name }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
const circumference = 2 * Math.PI * 52
const skills = ref([
  { name: 'Frontend Development', percent: 92, color: 'frontend', gradient: ['#38bdf8', '#ffe600'] },
  { name: 'Backend Development', percent: 90, color: 'backend', gradient: ['#3c873a', '#ffe600'] },
  { name: 'Problem Solving', percent: 97, color: 'problem', gradient: ['#ffe600', '#17bbab'] },
  { name: 'Digital Advertising', percent: 90, color: 'ads', gradient: ['#fff', '#3b82f6'] },
  { name: 'Process Automation', percent: 93, color: 'automation', gradient: ['#a78bfa', '#17bbab'] },
  { name: 'UI/UX Design', percent: 80, color: 'uiux', gradient: ['#f472b6', '#ffe600'] },
  { name: 'Graphic Design', percent: 85, color: 'graphic', gradient: ['#fbbf24', '#6366f1'] },
  { name: 'Data Analysis', percent: 87, color: 'data', gradient: ['#6366f1', '#38bdf8'] },
])
const animatedPercents = ref(skills.value.map(() => 0))
const sectionRef = ref(null)
let hasAnimated = false

function animateRings() {
  if (hasAnimated) return
  hasAnimated = true
  skills.value.forEach((skill, idx) => {
    let start = 0
    const end = skill.percent
    const duration = 1200
    const step = 16
    const increment = (end / (duration / step))
    function animate() {
      start += increment
      if (start < end) {
        animatedPercents.value[idx] = Math.round(start)
        requestAnimationFrame(animate)
      } else {
        animatedPercents.value[idx] = end
      }
    }
    setTimeout(animate, idx * 120)
  })
}

onMounted(async () => {
  await nextTick()
  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    const observer = new window.IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateRings()
        observer.disconnect()
      }
    }, { threshold: 0.3 })
    if (sectionRef.value) observer.observe(sectionRef.value)
  } else {
    // Fallback: animate immediately
    animateRings()
  }
})
</script>

<style scoped>
.skills-title-glow {
  text-shadow: 0 0 16px #ffe600, 0 0 32px #17bbab, 0 0 2px #fff;
  letter-spacing: 2px;
}
.glitchy-title {
  position: relative;
  color: #fff;
  display: inline-block;
  animation: glitch-skew 2s infinite linear alternate-reverse;
}
.glitchy-title::before,
.glitchy-title::after {
  content: attr(data-text);
  position: absolute;
  left: 0;
  width: 100%;
  overflow: hidden;
  color: #ffe600;
  z-index: 1;
  clip-path: inset(0 0 50% 0);
  opacity: 0.7;
}
.glitchy-title::after {
  color: #17bbab;
  clip-path: inset(50% 0 0 0);
  opacity: 0.7;
}
.glitchy-title::before {
  animation: glitch-top 2s infinite linear alternate-reverse;
}
.glitchy-title::after {
  animation: glitch-bottom 2s infinite linear alternate-reverse;
}
@keyframes glitch-top {
  0% { transform: translate(0, 0); }
  20% { transform: translate(-2px, -2px); }
  40% { transform: translate(-2px, 2px); }
  60% { transform: translate(2px, -2px); }
  80% { transform: translate(2px, 2px); }
  100% { transform: translate(0, 0); }
}
@keyframes glitch-bottom {
  0% { transform: translate(0, 0); }
  20% { transform: translate(2px, 2px); }
  40% { transform: translate(2px, -2px); }
  60% { transform: translate(-2px, 2px); }
  80% { transform: translate(-2px, -2px); }
  100% { transform: translate(0, 0); }
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
.drop-shadow-glow {
  filter: drop-shadow(0 0 8px #ffe600) drop-shadow(0 0 2px #17bbab);
}

/* Progress bar color classes */
.skill-progress-frontend { stroke: url(#gradient-frontend); }
.skill-progress-backend { stroke: url(#gradient-backend); }
.skill-progress-problem { stroke: url(#gradient-problem); }
.skill-progress-ads { stroke: url(#gradient-ads); }
.skill-progress-automation { stroke: url(#gradient-automation); }
.skill-progress-uiux { stroke: url(#gradient-uiux); }
.skill-progress-graphic { stroke: url(#gradient-graphic); }
.skill-progress-data { stroke: url(#gradient-data); }
.skill-animate {
  opacity: 0;
  transform: translateY(32px) scale(1);
  animation: skill-fade-in-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
@keyframes skill-fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(32px) scale(1);
  }
  80% {
    opacity: 1;
    transform: translateY(-4px) scale(1.08);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
.skill-animate:hover {
  filter: drop-shadow(0 0 12px #ffe600cc) drop-shadow(0 0 16px #17bbab99);
  transform: scale(1.08) translateY(-2px);
  transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1), filter 0.25s;
}
</style> 