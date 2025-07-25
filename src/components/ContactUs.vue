<template>
  <section class="min-h-screen flex flex-col items-center justify-center px-4 py-12">
    <div class="contact-card w-full max-w-xs sm:max-w-md aspect-square bg-white/10 rounded-2xl shadow-xl p-8 sm:p-12 border border-white/20 flex flex-col items-center justify-center animate-bounce-in card-hover-effect">
      <h2 class="text-3xl font-bold text-center text-primary mb-8 glitchy-title" data-text="Contact Us">Contact Us</h2>
      <div class="space-y-6 w-full">
        <!-- Email -->
        <div class="flex items-center space-x-4">
          <svg class="w-7 h-7" fill="none" stroke="#EA4335" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
          <span class="text-white font-semibold">Email:</span>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=fortis7379@gmail.com" target="_blank" rel="noopener" class="text-gray-300 hover:text-primary transition-colors">fortis7379@gmail.com</a>
        </div>
        <!-- Phone -->
        <div class="flex items-center space-x-4">
          <svg class="w-7 h-7 text-primary" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span class="text-white font-semibold">Phone:</span>
          <a href="tel:+234 814 745 1325" class="text-gray-300 hover:text-primary transition-colors">+234 814 745 1325</a>
        </div>
        <!-- Facebook -->
        <div class="flex items-center space-x-4">
          <font-awesome-icon :icon="['fab', 'facebook']" class="w-7 h-7" style="color: #1877F3;" />
          <span class="text-white font-semibold">Facebook:</span>
          <a href="https://facebook.com/Fortis Web" target="_blank" class="text-gray-300 hover:text-primary transition-colors">Fortis Web</a>
        </div>
        <!-- WhatsApp -->
        <div class="flex items-center space-x-4">
          <font-awesome-icon :icon="['fab', 'whatsapp']" class="w-7 h-7" style="color: #25D366;" />
          <span class="text-white font-semibold">WhatsApp:</span>
          <a href="https://wa.me/2349131841446" target="_blank" rel="noopener" class="text-gray-300 hover:text-primary transition-colors">+234 913 184 1446</a>
        </div>
        <!-- Instagram -->
        <div class="flex items-center space-x-4">
          <font-awesome-icon :icon="['fab', 'instagram']" class="w-7 h-7" style="color: #E4405F;" />
          <span class="text-white font-semibold">Instagram:</span>
          <a href="https://instagram.com/fortis_inc1" target="_blank" class="text-gray-300 hover:text-primary transition-colors">fortis_inc1</a>
        </div>
        <!-- X (formerly Twitter) -->
        <div class="flex items-center space-x-4">
          <font-awesome-icon :icon="['fab', 'x-twitter']" class="w-7 h-7" style="color: #000;" />
          <span class="text-white font-semibold">   X:</span>
          <a href="https://twitter.com/Fortis_Inc7" target="_blank" class="text-gray-300 hover:text-primary transition-colors">Fortis_Inc7</a>
        </div>
      </div>
      <div class="mt-auto w-full text-center text-lg text-white pt-4 border-t border-white/20">
        <span class="typing-text">Let's connect on any platform above!</span>
      </div>
    </div>
  </section>
</template>

<script setup>
// FontAwesome icons are globally registered in main.js
</script>

<style scoped>
@keyframes bounce-in {
  0% {
    opacity: 0;
    transform: translateY(60px) scale(0.95);
  }
  60% {
    opacity: 1;
    transform: translateY(-12px) scale(1.03);
  }
  80% {
    transform: translateY(4px) scale(0.98);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
.animate-bounce-in {
  animation: bounce-in 1s cubic-bezier(0.22, 1, 0.36, 1);
}
.icon-glow-fb:hover :deep(svg) {
  filter: drop-shadow(0 0 12px #1877F3);
}
.icon-glow-ig:hover :deep(svg) {
  filter: drop-shadow(0 0 12px #E4405F);
}
.icon-glow-wa:hover :deep(svg) {
  filter: drop-shadow(0 0 12px #25D366);
}
.icon-glow-threads:hover :deep(svg) {
  filter: drop-shadow(0 0 12px #000);
}
.icon-glow-tw:hover :deep(svg) {
  filter: drop-shadow(0 0 12px #1DA1F2);
}
.icon-glow-mail:hover :deep(svg) {
  filter: drop-shadow(0 0 12px #EA4335);
}
.typing-text {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid #ffe600;
  animation: typing 2.5s steps(36, end) 1s 1 normal both, blink-caret 0.8s step-end infinite;
  font-family: inherit;
}
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}
@keyframes blink-caret {
  0%, 100% { border-color: #ffe600; }
  50% { border-color: transparent; }
}
.glitchy-title {
  position: relative;
  color: #ffe600;
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
/* Card hover effect */
.card-hover-effect {
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}
.card-hover-effect:hover {
  transform: translateY(-8px) scale(1.03);
  box-shadow: 0 8px 32px 0 #17bbab33, 0 1.5px 8px 0 #ffe60033;
}
</style> 