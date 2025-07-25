<template>
  <section class="min-h-[50vh] flex flex-col items-center justify-center px-2 py-6 my-8">
    <h2 class="text-2xl md:text-3xl font-extrabold text-center mb-6 glitchy-title" data-text="Our Services">Our Services</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl w-full mx-auto">
      <!-- Web Development -->
      <div class="service-card p-4">
        <span class="service-icon bg-primary/20 text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 18l6-6-6-6M8 6l-6 6 6 6" /></svg>
        </span>
        <h3 class="service-title">Web Development</h3>
        <p class="service-desc">Modern, responsive websites and web apps using the latest technologies and best practices.</p>
      </div>
      <!-- SEO Optimization -->
      <div class="service-card p-4">
        <span class="service-icon bg-green-200 text-green-700">
          <!-- Magnifying glass for SEO -->
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8"><circle cx="11" cy="11" r="7" stroke-width="2"/><line x1="21" y1="21" x2="16.65" y2="16.65" stroke-width="2" stroke-linecap="round"/></svg>
        </span>
        <h3 class="service-title">SEO Optimization</h3>
        <p class="service-desc">Boost your search engine rankings and drive organic traffic to your website.</p>
      </div>
      <!-- Branding -->
      <div class="service-card">
        <span class="service-icon bg-yellow-100 text-yellow-700">
          <!-- Badge/star for Branding -->
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-10 h-10"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
        </span>
        <h3 class="service-title">Branding</h3>
        <p class="service-desc">We craft beautiful, impactful brand identities and designs that captivate your audience.</p>
      </div>
      <!-- UI/UX Design -->
      <div class="service-card">
        <span class="service-icon bg-pink-100 text-pink-700">
          <!-- Layout/wireframe for UI/UX -->
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-10 h-10"><rect x="3" y="3" width="18" height="18" rx="2" stroke-width="2"/><rect x="7" y="7" width="3" height="3" rx="1" stroke-width="2"/><rect x="14" y="7" width="3" height="3" rx="1" stroke-width="2"/><rect x="7" y="14" width="10" height="3" rx="1" stroke-width="2"/></svg>
        </span>
        <h3 class="service-title">UI/UX Design</h3>
        <p class="service-desc">Intuitive, user-centered interfaces and experiences that delight and engage users.</p>
      </div>
      <!-- Gmail Automation -->
      <div class="service-card">
        <span class="service-icon bg-red-100 text-red-700">
          <!-- Gmail envelope -->
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-10 h-10"><rect x="3" y="5" width="18" height="14" rx="2" stroke-width="2"/><polyline points="3,7 12,13 21,7" stroke-width="2" fill="none"/></svg>
        </span>
        <h3 class="service-title">Gmail Automation</h3>
        <p class="service-desc">Automate your email workflows, follow-ups, and notifications with smart Gmail integrations.</p>
      </div>
      <!-- Google Business Profile Setup -->
      <div class="service-card">
        <span class="service-icon bg-blue-200 text-blue-800">
          <!-- Map pin/storefront for Google Business Profile -->
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-10 h-10"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z"/></svg>
        </span>
        <h3 class="service-title">Google Business Profile Setup</h3>
        <p class="service-desc">Get your business found on Google with a professional Business Profile—maps, reviews, and more.</p>
      </div>
      <!-- Business Automation -->
      <div class="service-card">
        <span class="service-icon bg-purple-100 text-purple-700">
          <!-- Standard automation/flowchart icon -->
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-10 h-10">
            <rect x="3" y="3" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="2"/>
            <rect x="15" y="3" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="2"/>
            <rect x="9" y="15" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="2"/>
            <path d="M9 6h6M6 9v6m12-6v6M12 15v-3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          </span>
        <h3 class="service-title">Business Automation</h3>
        <p class="service-desc">Streamline your operations and boost productivity with smart automation solutions tailored to your business.</p>
        </div>
      <!-- Ads Placement -->
      <div class="service-card">
        <span class="service-icon bg-blue-100 text-blue-700">
          <!-- Modern clock icon for Running Ads -->
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" stroke="currentColor" class="w-10 h-10">
            <circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="2.5" fill="#fff" />
            <circle cx="16" cy="16" r="10" stroke="#3b82f6" stroke-width="2" fill="none" />
            <line x1="16" y1="16" x2="16" y2="10" stroke="#3b82f6" stroke-width="2.5" stroke-linecap="round" />
            <line x1="16" y1="16" x2="22" y2="16" stroke="#3b82f6" stroke-width="2.5" stroke-linecap="round" />
            <circle cx="16" cy="16" r="1.5" fill="#3b82f6" />
          </svg>
          </span>
        <h3 class="service-title">Ads Placemnt</h3>
        <p class="service-desc">Reach your target audience with effective Google, Facebook, and Instagram ad campaigns.</p>
        </div>
      <!-- Tech Support -->
      <div class="service-card">
        <span class="service-icon bg-gray-200 text-gray-700">
          <!-- Headphone with mic for Tech Support -->
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" stroke="currentColor" class="w-10 h-10">
            <path d="M8 28v-4a16 16 0 0132 0v4" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <rect x="4" y="28" width="8" height="12" rx="4" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <rect x="36" y="28" width="8" height="12" rx="4" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M40 40a4 4 0 01-4 4h-8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="24" cy="44" r="2" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </span>
        <h3 class="service-title">Tech Support</h3>
        <p class="service-desc">Fast, friendly help for all your tech needs—setup, troubleshooting, and advice.</p>
      </div>
      <!-- Convincing message for clients -->
      <div class="col-span-full flex flex-col items-center justify-center mt-4">
        <div class="bg-primary/10 border-2 border-primary/40 rounded-2xl px-8 py-6 max-w-2xl shadow-xl text-center animate-pulse-slow">
          <h4 class="text-2xl md:text-3xl font-bold text-primary mb-2">Ready to Elevate Your Business?</h4>
          <p class="text-lg text-gray-100 mb-2">Partner with us to unlock your brand’s full potential. Whether you need a stunning website, a powerful brand identity, or seamless tech solutions, we’re here to help you succeed.</p>
          <p class="text-base text-primary font-semibold">Let’s build something amazing together. <span class='animate-pulse'>🚀</span></p>
        </div>
      </div>
    </div>
  </section>
</template> 

<style scoped>
.glitchy-title {
  position: relative;
  color: #ffe600;
  display: inline-block;
  animation: glitch-skew 2s infinite linear alternate-reverse;
  text-shadow: 0 0 8px #ffe600, 0 0 16px #17bbab99, 0 0 2px #fff, 0 0 32px #17bbab44;
}
.glitchy-title::before,
.glitchy-title::after {
  content: attr(data-text);
  position: absolute;
  left: 0;
  width: 100%;
  overflow: hidden;
  z-index: 1;
  opacity: 0.7;
}
.glitchy-title::before {
  color: #17bbab;
  clip-path: inset(0 0 50% 0);
  animation: glitch-top 2s infinite linear alternate-reverse;
}
.glitchy-title::after {
  color: #fff;
  clip-path: inset(50% 0 0 0);
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
.service-card {
  @apply bg-white/10 rounded-2xl p-8 flex flex-col items-center shadow-lg border-2 border-white/20 transition-transform duration-300;
  backdrop-filter: blur(6px);
  transition: box-shadow 0.3s, border-color 0.3s, transform 0.3s, filter 0.3s;
}
.service-card:hover {
  border-color: #ffe600;
  box-shadow: 0 0 0 3px #ffe60055, 0 8px 32px 0 #ffe60033, 0 2px 16px 0 #17bbab33;
  transform: scale(1.045) translateY(-6px) rotate(-1deg);
  filter: brightness(1.07) saturate(1.1);
}
.service-icon {
  @apply p-4 rounded-full mb-4 flex items-center justify-center text-3xl shadow-md;
}
.service-title {
  @apply text-xl font-bold text-primary mb-2 text-center;
}
.service-desc {
  @apply text-gray-200 text-center text-base;
}
@keyframes pulse-slow {
  0%, 100% { box-shadow: 0 0 24px 0 #ffe60044; }
  50% { box-shadow: 0 0 48px 8px #ffe60099; }
}
.animate-pulse-slow {
  animation: pulse-slow 2.5s infinite;
}
</style> 