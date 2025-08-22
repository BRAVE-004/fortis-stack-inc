<template>
  <!-- Nav Bar: always visible, sticky at top, with absolute hamburger and logo -->
  <div class="sticky top-0 left-0 z-30 bg-black/40 backdrop-blur-md w-full h-16 md:h-20 flex items-center justify-center px-4 md:px-6 mb-4">
    <!-- Hamburger Button (absolute left) -->
    <button
      v-if="!isOpen"
      @click="isOpen = !isOpen"
      aria-label="Open menu"
      class="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-primary z-40 border border-white/30"
    >
      <svg class="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
    </button>
    <!-- Logo moved to right end -->
    <div class="absolute right-0 top-1/2 -translate-y-1/2 pr-2 md:pr-0">
      <img :src="fortImg" alt="Company Logo" class="w-20 h-20 md:w-32 md:h-32 object-contain" />
    </div>
  </div>
  <!-- Overlay Menu: sibling, not child, of nav bar -->
      <div
        v-if="isOpen"
    class="fixed inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center z-50 min-h-screen min-w-full"
      >
        <!-- Close Button -->
        <button
          @click="isOpen = false"
          aria-label="Close menu"
          class="absolute top-4 left-4 md:top-5 md:left-5 bg-white bg-opacity-20 rounded-full p-2 hover:bg-opacity-40 transition"
        >
          <svg class="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
    <!-- Menu Items -->
        <nav class="flex flex-col space-y-8">
          <ul class="space-y-12">
            <li
              v-for="(item, i) in menuItems"
              :key="item"
              v-show="i < revealedCount"
              :class="['text-white text-xl md:text-2xl font-bold cursor-pointer menu-item list-none', { visible: i < revealedCount, 'menu-item-animate': i < revealedCount }]"
            >
          <span class="menu-link-underline">
            <template v-if="item.toLowerCase().includes('contact')">
              <router-link to="/contact" class="text-white" @click="isOpen = false">Contact us</router-link>
            </template>
            <template v-else-if="item.toLowerCase().includes('home')">
              <router-link to="/" class="text-white" @click="isOpen = false">Home</router-link>
            </template>
            <template v-else-if="item.toLowerCase().includes('services')">
              <router-link to="/services" class="text-white" @click="isOpen = false">Services</router-link>
            </template>
            <template v-else-if="item.toLowerCase().includes('skills')">
              <router-link to="/skills" class="text-white" @click="isOpen = false">Skills</router-link>
            </template>
            <template v-else-if="item.toLowerCase().includes('projects')">
              <router-link to="/projects" class="text-white" @click="isOpen = false">Projects</router-link>
            </template>
            <template v-else-if="item.toLowerCase().includes('about')">
              <router-link to="/about" class="text-white" @click="isOpen = false">About us</router-link>
            </template>
            <template v-else>
              {{ item }}
            </template>
          </span>
            </li>
          </ul>
        </nav>
  </div>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue'
import fortImg from '../assets/fort12.png'
const isOpen = ref(false)
const menuItems = ['Home', 'Services', 'Skills', 'About us', 'Projects', 'Contact us']
const revealedCount = ref(0)

function goHome() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  isOpen.value = false;
}

// Sequentially reveal menu items one after another
async function revealSequentially() {
  revealedCount.value = 1; // Show the first item immediately
  await nextTick(); // Wait for overlay and items to be in DOM
  for (let i = 1; i < menuItems.length; i++) {
    await new Promise(resolve => setTimeout(resolve, 250)); // 250ms per item for a slower effect
    revealedCount.value = i + 1;
  }
}

watch(isOpen, (open) => {
  if (open) {
    revealSequentially();
    document.body.style.overflow = 'hidden';
  } else {
    revealedCount.value = 0;
    document.body.style.overflow = '';
  }
});
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
/* Sliding door effect for menu overlay */
.menu-slide-enter-active, .menu-slide-leave-active {
  transition: transform 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.5s cubic-bezier(0.4,0,0.2,1);
}
.menu-slide-enter-from, .menu-slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
.menu-slide-enter-to, .menu-slide-leave-from {
  transform: translateX(0);
  opacity: 1;
}
.menu-item {
  opacity: 0;
  transition: opacity 1.2s linear;
}
.menu-item.visible {
  opacity: 1;
}
.menu-stagger-enter-active {
  /* No additional transition needed, handled by .menu-item */
}
.menu-stagger-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.menu-stagger-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.menu-stagger-leave-active {
  transition: none !important;
}
.menu-stagger-leave-from,
.menu-stagger-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
/* Animated underline effect for menu items */
.menu-link {
  @apply relative transition-colors duration-300;
}

.menu-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 3px;
  bottom: -4px;
  left: 0;
  background: linear-gradient(90deg, #ffe600, #17bbab);
  transition: width 0.3s ease;
}

.menu-link:hover::after {
  width: 100%;
}
.menu-item-animate {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeSlideIn 0.7s cubic-bezier(0.4,0,0.2,1) forwards;
}
@keyframes fadeSlideIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.menu-link-underline {
  position: relative;
  display: inline-block;
}
.menu-link-underline::after {
  content: '';
  display: block;
  height: 3px;
  background: linear-gradient(90deg, #ffe600, #17bbab);
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 0;
  transition: width 0.3s ease;
}
.menu-link-underline:hover::after,
.menu-link-underline:focus-within::after {
  width: 100%;
}
</style>