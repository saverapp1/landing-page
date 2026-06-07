<script setup lang="ts">
import { ref, onMounted } from 'vue'
import HeaderView from '@/components/HeaderView.vue';
import AboutSaver from '@/components/AboutSaver.vue';
import FeaturesSaver from '@/components/FeaturesSaver.vue';
import WhySaver from '@/components/WhySaver.vue';
import HowSaver from '@/components/HowSaver.vue';
import FaqSaver from '@/components/FaqSaver.vue';
import FooterPage from '@/components/FooterPage.vue';
import SkeletonLoader from '@/components/SkeletonLoader.vue'
import gsap from 'gsap'
import { useParallax, useFloating } from '@/composables/useAnimation'

const heroTitle = ref<HTMLElement | null>(null)
const heroSubtitle = ref<HTMLElement | null>(null)
const heroForm = ref<HTMLElement | null>(null)
const heroFrame = ref<HTMLElement | null>(null)
const emailInput = ref<HTMLInputElement | null>(null)
const waitlistStatus = ref<'idle' | 'loading' | 'success' | 'error'>('idle')

useFloating(heroFrame, { y: 12, duration: 3.5 })

async function joinWaitlist() {
  const email = emailInput.value?.value.trim()
  if (!email) return
  waitlistStatus.value = 'loading'
  try {
    const res = await fetch('https://api.universalsaver.com/api/waitlist/join', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    })
    if (!res.ok) throw new Error('Request failed')
    waitlistStatus.value = 'success'
    if (emailInput.value) emailInput.value.value = ''
  } catch {
    waitlistStatus.value = 'error'
  }
  setTimeout(() => { waitlistStatus.value = 'idle' }, 3000)
}

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
  tl.fromTo(heroTitle.value, { y: 100, opacity: 0, scale: 0.9 }, { y: 0, opacity: 1, scale: 1, duration: 1.2 })
    .fromTo(heroSubtitle.value, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, '-=0.6')
    .fromTo(heroForm.value, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.4')
    .fromTo(heroFrame.value, { y: 60, opacity: 0, scale: 0.85 }, { y: 0, opacity: 1, scale: 1, duration: 1 }, '-=0.3')
})
</script>

<template>
  <main>
    <div class="hero w-full h-full mb-[68px] md:mb-[116px]">
      <HeaderView />
      <div class="px-[20px] md:px-[0px]">
        <div ref="heroTitle"
          class="w-full mx-auto md:w-[60%] lg:w-[676px] text-center text-[#fff] text-[24px] md:text-[54px] font-[800] tracking-[-0.48px] md:tracking-[-1.08px] mb-[20px] md:mb-[24px] md:leading-[58px]">
          Transform your <span class="text-[#ffd214]">university Experience</span> with Saver
        </div>
        <div ref="heroSubtitle"
          class="w-full md:w-[50%] lg:w-[648px] mx-auto text-[#fff] text-center text-[14px] md:text-[28px] font-[300] md:tracking-[-0.56px] mb-[24px] md:mb-[32px]">
          The ultimate app for Nigerian students— connect, learn, and thrive all in one place.
        </div>
          <div ref="heroForm"
            class="w-fit lg:w-[416px] mx-auto bg-[#fff] rounded-[100px] md:rounded-[119px] py-[5px] pl-[13.5px] pr-[5px] flex items-center space-x-[9px] mb-[48px] md:mb-[45px]">
            <div><img src="/mail.svg" /></div>
            <div class="w-fit lg:pr-[36px]">
              <input ref="emailInput" placeholder="contact@universalsaver.com" type="email"
                class="text-[#667085] text-[14px] md:text-[18px] md:tracking-[-0.36px] font-[400] leading-[24px] focus:outline-none lg:w-[202px]" />
            </div>
            <button @click="joinWaitlist" :disabled="waitlistStatus === 'loading'"
              class="w-fit bg-[#ffd214] rounded-[100px] md:rounded-[119px] py-[11.5px] px-[14px] md:py-[13.96px] md:px-[16.9px] md:cursor-pointer text-[#7d4ec6] text-[14px] md:text-[16px] font-[500] tracking-[-0.28px] md:tracking-[-0.3335px] hover:bg-[#f0c404] transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed">
              {{ waitlistStatus === 'loading' ? 'Joining...' : waitlistStatus === 'success' ? 'Joined!' : waitlistStatus === 'error' ? 'Try again' : 'Join waitlist' }}
            </button>
          </div>
      </div>
      <div ref="heroFrame" class="md:px-[30px]">
        <div class="hidden md:block md:w-[70%] lg:w-[888px] mx-auto">
          <SkeletonLoader src="/largeframe.png" alt="Saver app preview" class="w-full rounded-[24px]" imgClass="w-full h-full object-cover" />
        </div>
        <div class="md:hidden w-full h-[269.665px]">
          <SkeletonLoader src="/smallframe.png" alt="Saver app preview" class="w-full h-full" imgClass="w-full h-full object-cover" />
        </div>
      </div>
    </div>
    <div class="w-full px-[20px] md:px-[60px] lg:px-[130px]">
      <AboutSaver />
      <FeaturesSaver />
      <WhySaver />
      <HowSaver />
      <FaqSaver />
    </div>
    <FooterPage />
  </main>
</template>

<style scoped>
.hero {
  background: url('/saverbg.png');
  background-repeat: no-repeat;
  background-position: 100% 100%;
  background-size: cover;
}
</style>
