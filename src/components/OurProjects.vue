<template>
  <section class="min-h-[50vh] flex flex-col items-center justify-center px-2 py-6 my-8">
    <h2 class="text-2xl md:text-3xl font-extrabold text-center mb-6 skills-title-glow">
      <span class="glitchy-title" data-text="Our Projects">Our Projects</span>
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl w-full mx-auto">
      <div v-for="project in projects" :key="project.title" class="project-card-glass flex flex-col items-center p-3">
        <img :src="project.image" :alt="project.title" class="w-20 h-28 sm:w-28 sm:h-36 md:w-32 md:h-44 object-cover rounded-xl shadow-xl border-2 border-white/20 mb-2" />
        <h3 class="text-lg font-bold text-primary mb-1 text-center">{{ project.title }}</h3>
        <p class="text-gray-200 text-center text-sm">{{ project.achievement }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import weatherAppImg from '../assets/weather1.jpg'
import shoppingImg from '../assets/shopping.jpg'
import fashionImg from '../assets/fashion.jpg'
import bookingImg from '../assets/booking.jpg'
import chattyImg from '../assets/chatty.jpg'
import logicImg from '../assets/logic.jpg'
const projects = [
  {
    title: 'Weather App',
    image: weatherAppImg,
    achievement: 'Enabled users to get real-time weather updates worldwide with a sleek, intuitive interface and advanced location features.'
  },
  {
    title: 'Electronics Shop',
    image: shoppingImg,
    achievement: 'Helped our client launch a scalable e-commerce platform, boosting sales and customer engagement with seamless shopping experiences.'
  },
  {
    title: 'Fashion Store',
    image: fashionImg,
    achievement: 'Transformed the client’s online presence with a visually stunning, mobile-friendly storefront that increased brand loyalty.'
  },
  {
    title: 'Booking Platform',
    image: bookingImg,
    achievement: 'Built a robust booking system that streamlined reservations and improved customer satisfaction for a growing business.'
  },
  {
    title: 'Chatty App',
    image: chattyImg,
    achievement: 'Developed a real-time chat application with secure messaging and a modern UI, enhancing community engagement for our client.'
  },
  {
    title: 'Logic',
    image: logicImg,
    achievement: 'An AI-powered assistant leveraging the Ollama 3 module to help users make informed technical decisions quickly and efficiently.'
  },
]
</script>

<style scoped>
.skills-title-glow {
  text-shadow: 0 0 16px #ffe600, 0 0 32px #17bbab, 0 0 2px #fff;
  letter-spacing: 2px;
}
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
.text-primary { color: #ffe600; }
.project-card-glass {
  background: rgba(20, 20, 40, 0.45);
  border-radius: 1.2rem;
  box-shadow: 0 4px 32px 0 #ffe60044, 0 2px 8px 0 #17bbab44, 0 0 16px 4px #ffe60022;
  padding: 0.5rem;
  backdrop-filter: blur(6px);
  border: 1.5px solid #fffbe6;
  transition: box-shadow 0.3s;
}
.project-card-glass:hover {
  box-shadow: 0 8px 40px 0 #ffe600, 0 2px 8px 0 #17bbab, 0 0 16px 4px #ffe60066;
}
</style> 