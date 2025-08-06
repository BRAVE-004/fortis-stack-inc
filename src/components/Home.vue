<template>
  <div>
    <HeroSection />
    <TransformSection />
    <SkillsSection />
    <ProjectsSection />
  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'Fortis-Stack INC. | Innovative Software Solutions',
  meta: [
    { name: 'description', content: 'Fortis-Stack INC. is a leading software startup offering web development, automation, branding, and digital solutions. We empower businesses to thrive in a connected world.' },
    { name: 'keywords', content: 'Fortis-Stack, Fortis Stack, Fortis, Stack, Software, Web Development, Digital Solutions, Automation, Branding, Startup, Nigeria' },
    { property: 'og:title', content: 'Fortis-Stack INC. | Innovative Software Solutions' },
    { property: 'og:description', content: 'Fortis-Stack INC. is a leading software startup offering web development, automation, branding, and digital solutions. We empower businesses to thrive in a connected world.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://fortis-stack.pages.dev/' },
    { property: 'og:image', content: 'https://fortis-stack.pages.dev/og-image.png' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Fortis-Stack INC. | Innovative Software Solutions' },
    { name: 'twitter:description', content: 'Fortis-Stack INC. is a leading software startup offering web development, automation, branding, and digital solutions.' },
    { name: 'twitter:image', content: 'https://fortis-stack.pages.dev/og-image.png' }
  ]
})
import { defineAsyncComponent } from 'vue'
const HeroSection = defineAsyncComponent(() => import('./HeroSection/HeroSection.vue'))
const TransformSection = defineAsyncComponent(() => import('./TransformSection.vue'))
const SkillsSection = defineAsyncComponent(() => import('./SkillsSection.vue'))
const ProjectsSection = defineAsyncComponent(() => import('./ProjectsSection.vue'))
</script> 