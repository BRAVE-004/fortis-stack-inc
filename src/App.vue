
<template>
  <div class="relative overflow-x-hidden max-w-[100vw]">
    <Nav />
    <transition :name="$route.meta.transition ? 'page-' + $route.meta.transition : 'page-fade'" mode="out-in">
      <router-view />
    </transition>
    <Footer />
    <ThreeBackground />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
const ThreeBackground = defineAsyncComponent(() => import('./components/ThreeBackground.vue'))
const Nav = defineAsyncComponent(() => import('./components/Nav.vue'))
const Footer = defineAsyncComponent(() => import('./components/Footer.vue'))
</script>

<style>
/* Fade */
.page-fade-enter-active, .page-fade-leave-active {
  transition: opacity 0.5s cubic-bezier(0.4,0,0.2,1);
}
.page-fade-enter-from, .page-fade-leave-to {
  opacity: 0;
}
.page-fade-enter-to, .page-fade-leave-from {
  opacity: 1;
}

/* Zoom-Rotate */
.page-zoom-rotate-enter-active, .page-zoom-rotate-leave-active {
  transition: opacity 0.6s cubic-bezier(0.4,0,0.2,1),
              transform 0.6s cubic-bezier(0.4,0,0.2,1);
}
.page-zoom-rotate-enter-from {
  opacity: 0;
  transform: scale(1.08) rotate(8deg);
}
.page-zoom-rotate-enter-to {
  opacity: 1;
  transform: scale(1) rotate(0deg);
}
.page-zoom-rotate-leave-from {
  opacity: 1;
  transform: scale(1) rotate(0deg);
}
.page-zoom-rotate-leave-to {
  opacity: 0;
  transform: scale(0.92) rotate(-8deg);
}

/* Slide-Left */
.page-slide-left-enter-active, .page-slide-left-leave-active {
  transition: opacity 0.5s, transform 0.5s cubic-bezier(0.4,0,0.2,1);
}
.page-slide-left-enter-from {
  opacity: 0;
  transform: translateX(60px);
}
.page-slide-left-enter-to {
  opacity: 1;
  transform: translateX(0);
}
.page-slide-left-leave-from {
  opacity: 1;
  transform: translateX(0);
}
.page-slide-left-leave-to {
  opacity: 0;
  transform: translateX(-60px);
}

/* Slide-Up */
.page-slide-up-enter-active, .page-slide-up-leave-active {
  transition: opacity 0.5s, transform 0.5s cubic-bezier(0.4,0,0.2,1);
}
.page-slide-up-enter-from {
  opacity: 0;
  transform: translateY(60px);
}
.page-slide-up-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.page-slide-up-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.page-slide-up-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}

/* Flip */
.page-flip-enter-active, .page-flip-leave-active {
  transition: opacity 0.7s, transform 0.7s cubic-bezier(0.4,0,0.2,1);
  backface-visibility: hidden;
}
.page-flip-enter-from {
  opacity: 0;
  transform: rotateY(90deg) scale(0.95);
}
.page-flip-enter-to {
  opacity: 1;
  transform: rotateY(0deg) scale(1);
}
.page-flip-leave-from {
  opacity: 1;
  transform: rotateY(0deg) scale(1);
}
.page-flip-leave-to {
  opacity: 0;
  transform: rotateY(-90deg) scale(0.95);
}
</style>
