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
          <svg class="w-7 h-7" fill="#1877F3" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          <span class="text-white font-semibold">Facebook:</span>
          <a href="https://facebook.com/Fortis Web" target="_blank" class="text-gray-300 hover:text-primary transition-colors">Fortis Web</a>
        </div>
        <!-- WhatsApp -->
        <div class="flex items-center space-x-4">
          <svg class="w-7 h-7" fill="#25D366" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
          <span class="text-white font-semibold">WhatsApp:</span>
          <a href="https://wa.me/2349131841446" target="_blank" rel="noopener" class="text-gray-300 hover:text-primary transition-colors">+234 913 184 1446</a>
        </div>
        <!-- Instagram -->
        <div class="flex items-center space-x-4">
          <svg class="w-7 h-7" fill="#E4405F" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
          <span class="text-white font-semibold">Instagram:</span>
          <a href="https://instagram.com/fortis_inc1" target="_blank" class="text-gray-300 hover:text-primary transition-colors">fortis_inc1</a>
        </div>
        <!-- X (formerly Twitter) -->
        <div class="flex items-center space-x-4">
          <svg class="w-7 h-7" fill="#000" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
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
// No FontAwesome dependencies needed
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