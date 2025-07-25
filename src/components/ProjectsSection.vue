<template>
  <section class="py-10 sm:py-20 relative z-10">
    <h2 class="text-2xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8 sm:mb-12 projects-title-glow">
      <span class="glitchy-title" data-text="My Projects">My Projects</span>
    </h2>
    <div class="relative max-w-full sm:max-w-5xl mx-auto px-2 sm:px-0">
      <button @click="prev" class="carousel-btn carousel-btn-left flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 hover:bg-yellow-300 transition mr-2" aria-label="Previous">
        <span class="text-2xl">«</span>
      </button>
      <div class="carousel-3d flex items-center justify-center min-h-[200px] sm:min-h-[320px]">
        <div
          v-for="(project, i) in visibleProjects"
          :key="project.title"
          class="carousel-item"
          :style="getItemStyle(i)"
        >
          <div class="project-card-glass">
            <img :src="project.image" :alt="project.title" class="w-28 h-40 sm:w-40 sm:h-60 md:w-48 md:h-72 object-cover rounded-xl shadow-xl border-2 border-white/20" />
          </div>
        </div>
      </div>
      <button @click="next" class="carousel-btn carousel-btn-right flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 hover:bg-yellow-300 transition ml-2" aria-label="Next">
        <span class="text-2xl">»</span>
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import weatherAppImg from '../assets/weather1.jpg'
import shoppingImg from '../assets/shopping.jpg'
import fashionImg from '../assets/fashion.jpg'
import bookingImg from '../assets/booking.jpg'
import chattyImg from '../assets/chatty.jpg'
import logicImg from '../assets/logic.jpg'
const projects = [
  { title: 'Weather App', image: weatherAppImg },
  { title: 'Electronics Shop', image: shoppingImg },
  { title: 'Fashion Store', image: fashionImg },
  { title: 'Booking Platform', image: bookingImg },
  { title: 'Chatty App', image: chattyImg },
  { title: 'Logic Builder', image: logicImg },
]
const current = ref(0)
const visibleCount = 5
const visibleProjects = computed(() => {
  // Show 5 projects, centered on current
  const arr = []
  for (let i = -2; i <= 2; i++) {
    let idx = (current.value + i + projects.length) % projects.length
    arr.push(projects[idx])
  }
  return arr
})
function prev() {
  current.value = (current.value - 1 + projects.length) % projects.length
}
function next() {
  current.value = (current.value + 1) % projects.length
}
function getItemStyle(i) {
  // i: -2 to 2
  const base = i - 2
  const angle = base * 25
  const scale = 1 - Math.abs(base) * 0.18
  const z = 10 - Math.abs(base)
  const x = base * 120
  return {
    transform: `translateX(-50%) translateX(${x}px) scale(${scale}) rotateY(${angle}deg)`,
    zIndex: z,
    opacity: scale < 0.7 ? 0.3 : 1,
    transition: 'transform 0.7s cubic-bezier(0.4,0,0.2,1), opacity 0.5s',
    position: 'absolute',
    left: '50%',
    top: '0',
    pointerEvents: scale < 0.7 ? 'none' : 'auto',
  }
}
</script>

<style scoped>
.projects-title-glow {
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
.carousel-3d {
  position: relative;
  height: 200px;
  min-height: 200px;
  @media (min-width: 640px) {
    height: 320px;
    min-height: 320px;
  }
  perspective: 1200px;
  width: 100%;
  max-width: 100vw;
  margin: 0 auto;
}
.carousel-item {
  position: absolute;
  top: 0;
  left: 50%;
  width: 112px;
  height: 160px;
  @media (min-width: 640px) {
    width: 160px;
    height: 240px;
  }
  @media (min-width: 768px) {
    width: 200px;
    height: 320px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  will-change: transform, opacity;
}
.project-card-glass {
  background: rgba(20, 20, 40, 0.45);
  border-radius: 1.2rem;
  box-shadow: 0 4px 32px 0 #ffe60044, 0 2px 8px 0 #17bbab44, 0 0 16px 4px #ffe60022;
  padding: 0.5rem;
  backdrop-filter: blur(6px);
  border: 1.5px solid #fffbe6;
  transition: box-shadow 0.3s;
}
.project-card-glass:hover {
  box-shadow: 0 8px 40px 0 #ffe600, 0 2px 8px 0 #17bbab, 0 0 16px 4px #ffe60066;
}
.carousel-btn {
  background: linear-gradient(90deg, #ffe600 0%, #17bbab 100%);
  color: #0C0866;
  border: 2px solid #fffbe6;
  border-radius: 9999px;
  padding: 0.5rem 1.2rem;
  font-weight: bold;
  font-size: 1.3rem;
  box-shadow: 0 2px 8px 0 #ffe60066, 0 1px 4px 0 #17bbab66;
  transition: box-shadow 0.2s, transform 0.2s;
  outline: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
}
.carousel-btn-left {
  left: -2.5rem;
}
.carousel-btn-right {
  right: -2.5rem;
}
@media (max-width: 900px) {
  .carousel-btn-left { left: -1rem; }
  .carousel-btn-right { right: -1rem; }
}
@media (max-width: 640px) {
  .carousel-btn-left { left: 0.2rem; }
  .carousel-btn-right { right: 0.2rem; }
}
</style> 