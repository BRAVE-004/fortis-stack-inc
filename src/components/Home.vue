<template>
  <div>
    <HeroSection />
    <TransformSection />
    <SkillsSection />
    <ProjectsSection />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
const HeroSection = defineAsyncComponent(() => import('./HeroSection/HeroSection.vue'))
const TransformSection = defineAsyncComponent(() => import('./TransformSection.vue'))
const SkillsSection = defineAsyncComponent(() => import('./SkillsSection.vue'))
const ProjectsSection = defineAsyncComponent(() => import('./ProjectsSection.vue'))
</script> 