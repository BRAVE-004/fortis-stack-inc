<template>
  <section class="min-h-[60vh] flex items-center justify-center relative z-1 pt-2 pb-6 overflow-x-hidden mb-8" ref="section" id="home">
    <div class="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-16">
      <div class="flex-1 flex flex-col justify-center items-start text-left">
        <HeroContent />
      </div>
      <div class="flex-1 flex flex-col items-center md:items-end justify-center">
        <img :src="heroImg" alt="Hero" class="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-cover rounded-full shadow-2xl border-4 border-yellow-300 bg-white/10 transition-all duration-300 hero-glow hero-float" />
      </div>
    </div>
  </section>
</template>

<script setup>
import HeroContent from './HeroContent.vue'
import heroImg from '../../assets/team A.jpg'
</script>