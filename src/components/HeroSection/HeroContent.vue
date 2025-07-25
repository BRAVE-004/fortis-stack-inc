<template>
  <section class="min-h-[60vh] flex items-center relative z-10">
    <div class="max-w-2xl px-2 sm:px-4 py-6 sm:py-8 text-left flex flex-col items-start">
      <h1 class="w-full text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2 sm:mb-3 break-words whitespace-pre-line leading-tight text-left">
        <div class="w-full mb-1 text-left">
          <span :class="['text-primary', typingLine === 1 ? 'typewriter' : '', 'align-baseline', 'inline']">{{ displayedText1 }}</span>
        </div>
        <div class="w-full mb-1 text-left">
        <span :class="[
          'text-white',
          typingLine === 2 ? 'typewriter' : '',
          glitchActive ? 'glitch' : '',
            glitchBurst ? 'glitch-burst' : '',
            'align-baseline', 'inline'
          ]" data-text="We are Fortis.">{{ displayedText2 }}</span>
        </div>
      </h1>
      <h2 class="w-full text-lg md:text-xl font-semibold mb-2 text-secondary break-words whitespace-pre-line leading-tight text-left">
        <span :class="[typingLine === 3 ? 'typewriter' : '', 'block']">{{ displayedText3 }}</span>
      </h2>
      <p class="text-base md:text-lg text-gray-200 font-normal italic mb-4 text-left">
        <span
          v-for="(line, i) in descriptionLines"
          :key="i"
          :class="['desc-fade', { 'desc-fade-in': i < revealedLines }]"
          style="display: block;"
        >{{ line }}</span>
      </p>
      <button
        v-if="showButton || debugAlwaysShowButton"
        :class="[
          'mt-2 px-6 py-2 font-bold rounded-full text-base md:text-lg hire-animate pulse three-d-btn bg-yellow-300 text-black',
          shineActive ? 'shine' : ''
        ]"
        @mouseenter="shineActive = false; setTimeout(() => { shineActive = true }, 50)"
        @click="$router.push('/contact')"
        style="opacity:1; text-align:left;"
      >
        Contact us
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const fullText1 = 'Hello,';
const fullText2 = 'We are Fortis.';
const fullText3 = 'A Software Startup';
const displayedText1 = ref('')
const displayedText2 = ref('')
const displayedText3 = ref('')
const typingLine = ref(1)
const glitchActive = ref(false)
const glitchBurst = ref(false)
const descriptionLines = [
  'We craft innovative digital solutions that empower businesses to thrive in a connected world.',
  'From web development to automation and design, our expertise drives measurable results for our clients.'
]
const revealedLines = ref(0)
const showButton = ref(false)
const shineActive = ref(false)
let shineInterval = null

// DEBUG: Always show the button if animation fails
const debugAlwaysShowButton = false;

function animateDescription() {
  revealedLines.value = 0
  let i = 0
  function showLine() {
    if (i < descriptionLines.length) {
      revealedLines.value = i + 1
      i++
      setTimeout(showLine, 700)
    } else {
      setTimeout(() => {
        showButton.value = true
        setTimeout(() => {
          shineActive.value = true
          // Repeat shine every 3s
          shineInterval = setInterval(() => {
            shineActive.value = false
            setTimeout(() => { shineActive.value = true }, 100)
          }, 3000)
        }, 800)
      }, 400)
    }
  }
  showLine()
}

// Clean up interval on unmount
onUnmounted(() => {
  if (shineInterval) clearInterval(shineInterval)
})

onMounted(() => {
  let i = 0, j = 0, k = 0
  function type1() {
    typingLine.value = 1
    if (i <= fullText1.length) {
      displayedText1.value = fullText1.slice(0, i)
      i++
      setTimeout(type1, 100)
    } else {
      setTimeout(type2, 400)
    }
  }
  function type2() {
    typingLine.value = 2
    if (j <= fullText2.length) {
      displayedText2.value = fullText2.slice(0, j)
      j++
      setTimeout(type2, 100)
    } else {
      setTimeout(type3, 400)
    }
  }
  function type3() {
    typingLine.value = 3
    if (k <= fullText3.length) {
      displayedText3.value = fullText3.slice(0, k)
      k++
      setTimeout(type3, 100)
    } else {
      setTimeout(() => {
        glitchActive.value = true
        setInterval(() => {
          glitchBurst.value = true
          setTimeout(() => glitchBurst.value = false, 180)
        }, 2000)
        animateDescription()
      }, 400)
    }
  }
  type1()
})
</script>

<style>
.typewriter {
  border-right: 2px solid #ffe600;
  white-space: nowrap;
  overflow: hidden;
  display: inline;
  animation: blink-caret 0.8s step-end infinite;
}
@keyframes blink-caret {
  0%, 100% { border-color: #ffe600; }
  50% { border-color: transparent; }
}
.glitch {
  position: relative;
  display: inline-block;
  color: inherit;
  animation: glitch-skew 2s infinite linear alternate-reverse;
}
.glitch::before,
.glitch::after {
  content: attr(data-text);
  position: absolute;
  left: 0;
  width: 100%;
  overflow: hidden;
  color: #ffe600;
  z-index: 1;
  clip-path: inset(0 0 50% 0);
  opacity: 0.7;
}
.glitch::after {
  color: #17bbab;
  clip-path: inset(50% 0 0 0);
  opacity: 0.7;
}
.glitch::before {
  animation: glitch-top 2s infinite linear alternate-reverse;
}
.glitch::after {
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
.glitch-burst {
  animation: glitch-burst 0.18s steps(2, end) infinite;
}
@keyframes glitch-burst {
  0% { filter: blur(0px) brightness(1); }
  20% { filter: blur(2px) brightness(1.5); transform: translate(-2px, 2px) skew(-2deg); }
  40% { filter: blur(1px) brightness(0.8); transform: translate(2px, -2px) skew(2deg); }
  60% { filter: blur(2px) brightness(1.2); transform: translate(-1px, 1px) skew(-1deg); }
  80% { filter: blur(0px) brightness(1); }
  100% { filter: blur(0px) brightness(1); transform: none; }
}
.desc-fade {
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.7s, transform 0.7s;
}
.desc-fade-in {
  opacity: 1;
  transform: translateY(0);
}
.hire-animate {
  opacity: 0;
  transform: scale(0.7);
  animation: hire-in 0.7s cubic-bezier(0.4,0,0.2,1) forwards;
  animation-fill-mode: forwards;
}
.hire-animate[style*="opacity:1"] {
  opacity: 1 !important;
}
.pulse {
  animation: pulse 1.8s infinite cubic-bezier(0.4,0,0.2,1);
}
@keyframes pulse {
  0%, 100% { transform: scale(1); box-shadow: 0 4px 24px 0 rgba(34,197,94,0.15); }
  50% { transform: scale(1.06); box-shadow: 0 8px 32px 0 rgba(34,197,94,0.25); }
}
.shine {
  position: relative;
  overflow: hidden;
}
.shine::after {
  content: '';
  position: absolute;
  top: 0;
  left: -75%;
  width: 50%;
  height: 100%;
  background: linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 60%, rgba(255,255,255,0) 100%);
  transform: skewX(-20deg);
  animation: shine-move 1.2s 1;
  pointer-events: none;
}
.hire-animate:hover, .shine:hover {
  box-shadow: 0 8px 40px 0 #ffe600, 0 2px 8px 0 #17bbab, 0 0 16px 4px #ffe60066;
  transform: scale(1.10);
  transition: box-shadow 0.3s, transform 0.3s;
  animation: pulse 0.7s;
}
@keyframes shine-move {
  0% { left: -75%; }
  100% { left: 120%; }
}
.three-d-btn {
  background: linear-gradient(180deg, #ffe600 0%, #e6c200 100%);
  color: #0C0866;
  border: 2px solid #fffbe6;
  box-shadow:
    0 4px 16px 0 #ffe60099,
    0 2px 8px 0 #17bbab99,
    0 6px 0 0 #c9b200,
    0 1.5px 0 0 #fffbe6 inset;
  position: relative;
  transition: box-shadow 0.3s, transform 0.3s;
}
.three-d-btn::before {
  content: '';
  position: absolute;
  top: 0.5rem;
  left: 1.2rem;
  right: 1.2rem;
  height: 12px;
  border-radius: 50%;
  background: linear-gradient(90deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.05) 100%);
  pointer-events: none;
  z-index: 2;
}
.three-d-btn:active {
  box-shadow:
    0 2px 8px 0 #ffe60066,
    0 1px 4px 0 #17bbab66,
    0 2px 0 0 #c9b200,
    0 1.5px 0 0 #fffbe6 inset;
  transform: scale(0.97) translateY(2px);
}
</style>
