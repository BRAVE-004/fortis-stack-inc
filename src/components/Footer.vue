<template>
  <footer class="relative z-10 bg-gradient-to-b from-transparent to-black/20 backdrop-blur-sm border-t border-white/10 mt-8">
    <div class="max-w-7xl mx-auto px-6 py-16">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <!-- Brand Section -->
        <div class="col-span-1 md:col-span-2">
          <h3 class="font-bold text-white mb-4 glow-text text-lg">
            FORTIS-STACK INC.
          </h3>
          <p class="text-gray-300 text-lg mb-6 max-w-md">
            Transforming ideas into digital reality. Specializing in modern web development, 
            stunning designs, and innovative solutions that drive results.
          </p>
          <div class="flex space-x-1 items-center">
            <span class="font-bold text-white text-xl">FORTIS FORTUNA ADIUVAT</span>
            <img :src="fortImg" alt="Company Logo" class="w-28 h-28 object-contain" />
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-xl font-semibold text-white mb-6 glow-text">Quick Links</h4>
          <ul class="space-y-3">
            <li><router-link to="/" class="footer-link">Home</router-link></li>
            <li><router-link to="/about" class="footer-link">About</router-link></li>
            <li><router-link to="/services" class="footer-link">Services</router-link></li>
            <li><router-link to="/projects" class="footer-link">Projects</router-link></li>
            <li><router-link to="/contact" class="footer-link">Contact</router-link></li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="text-xl font-semibold text-white mb-6 glow-text">Get In Touch</h4>
          <div class="space-y-4">
            <div class="flex items-center space-x-3">
              <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=fortis7379@gmail.com" target="_blank" rel="noopener" class="text-gray-300 hover:text-primary transition-colors">fortis7379@gmail.com</a>
            </div>
            <div class="flex items-center space-x-3">
              <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <a href="tel:+2348147451325" class="text-gray-300 hover:text-primary transition-colors">+234 814 745 1325</a>
            </div>
            <div class="flex items-center space-x-3">
              <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <span class="text-gray-300">Lagos, Nigeria</span>
            </div>
            <!-- WhatsApp -->
            <div class="flex items-center space-x-3">
              <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.52 3.48A12.07 12.07 0 0012 0C5.37 0 0 5.37 0 12a11.93 11.93 0 001.64 6.06L0 24l6.31-1.65A12.09 12.09 0 0012 24c6.63 0 12-5.37 12-12a11.93 11.93 0 00-3.48-8.52zM12 22a10.09 10.09 0 01-5.19-1.43l-.37-.22-3.75.98 1-3.65-.24-.38A10.08 10.08 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.26-.1-.45-.14-.64.14-.19.28-.74.9-.91 1.08-.17.19-.34.21-.62.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.19-.28.28-.47.09-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.56-.47-.48-.64-.49-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1-1 2.43s1.02 2.82 1.16 3.02c.14.2 2.01 3.08 4.88 4.2.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/>
              </svg>
              <a href="https://wa.me/2349131841446" target="_blank" class="text-gray-300 hover:text-primary transition-colors">+234 913 184 1446</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p class="text-gray-400 text-sm">
          © 2025 FORTIS-STACK INC. All rights reserved.
        </p>
        <div class="flex space-x-6 mt-4 md:mt-0">
          <router-link to="/privacy" class="text-gray-400 hover:text-primary transition-colors text-sm">Privacy Policy</router-link>
          <router-link to="/terms" class="text-gray-400 hover:text-primary transition-colors text-sm">Terms of Service</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import fortImg from '../assets/fort12.png'
</script>

<style scoped>
.glow-text {
  text-shadow: 0 0 8px #ffe600, 0 0 16px #ffe60099;
}

.social-link {
  @apply text-gray-400 hover:text-primary transition-all duration-300 p-2 rounded-full hover:bg-white/10 hover:scale-110;
  text-shadow: 0 0 8px transparent;
}

.social-link:hover {
  text-shadow: 0 0 8px #ffe600, 0 0 16px #17bbab;
  box-shadow: 0 0 16px rgba(255, 230, 0, 0.3);
}

.footer-link {
  @apply text-gray-400 hover:text-primary transition-colors duration-300 relative;
}

.footer-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -2px;
  left: 0;
  background: linear-gradient(90deg, #ffe600, #17bbab);
  transition: width 0.3s ease;
}

.footer-link:hover::after {
  width: 100%;
}
</style> 