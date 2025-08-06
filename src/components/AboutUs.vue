<template>
  <section class="min-h-[50vh] flex flex-col items-center justify-center bg-transparent py-6 px-2 my-8">
    <div class="max-w-2xl w-full mx-auto text-left">
      <h1 class="text-2xl md:text-3xl font-extrabold mb-3 glitchy-title" data-text="About Us">About Us</h1>
      <p class="text-base md:text-lg text-gray-200 mb-4">
        <span class="text-primary font-bold">Fortis-Stack</span> is a forward-thinking software startup dedicated to empowering businesses and entrepreneurs with innovative digital solutions. We believe in the power of technology to transform ideas into impactful realities.
      </p>
      <div class="bg-white/10 rounded-2xl shadow-xl p-4 md:p-6 border border-white/20 mb-4">
        <h2 class="text-lg font-bold text-primary mb-2">Our Role in Your Project</h2>
        <ul class="text-left text-gray-100 space-y-2 list-disc list-inside">
          <li><span class="font-semibold text-secondary">Consultation & Discovery:</span> We listen to your vision, analyze your needs, and propose tailored solutions that align with your goals.</li>
          <li><span class="font-semibold text-secondary">Design & Development:</span> Our team crafts beautiful, functional, and scalable web applications, automations, and digital experiences using the latest technologies.</li>
          <li><span class="font-semibold text-secondary">Collaboration:</span> We work closely with you at every stage, ensuring transparency, regular updates, and a true partnership approach.</li>
          <li><span class="font-semibold text-secondary">Delivery & Support:</span> We deliver on time, provide thorough testing, and offer ongoing support to ensure your project's long-term success.</li>
        </ul>
      </div>
      <div class="text-gray-300 text-base md:text-md">
        <p class="mb-1">At Fortis, your success is our mission. Whether you need a stunning website, business automation, or a complete digital transformation, we are here to help you thrive in a connected world.</p>
        <p class="font-semibold text-primary">Let's build something extraordinary together.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
// No script logic needed for static About Us page
</script>

<style scoped>
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
</style> 