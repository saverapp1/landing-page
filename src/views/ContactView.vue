<script setup lang="ts">
import { ref, onMounted } from 'vue'
import HeaderView from '@/components/HeaderView.vue'
import FooterPage from '@/components/FooterPage.vue'
import { useStaggerFade, useMagneticHover } from '@/composables/useAnimation'
import gsap from 'gsap'

const heroTitle = ref<HTMLElement | null>(null)
const heroSubtitle = ref<HTMLElement | null>(null)
const formRef = ref<HTMLElement | null>(null)
const infoCards = ref<HTMLElement | null>(null)
const submitBtn = ref<HTMLElement | null>(null)

interface ContactItem {
  label: string
  value: string
  icon: string
}

const contactInfo: ContactItem[] = [
  { label: 'Email', value: 'contact@universalsaver.com', icon: 'email' },
  { label: 'Phone', value: '+234 800 SAVER', icon: 'phone' },
  { label: 'Location', value: 'Lagos, Nigeria', icon: 'location' },
  { label: 'Social', value: '@saver_app', icon: 'social' },
]

useStaggerFade(infoCards, { stagger: 0.1, y: 30, start: 'top 88%' })
useMagneticHover(submitBtn, 0.2)

onMounted(() => {
  gsap.fromTo(heroTitle.value,
    { y: 80, opacity: 0, scale: 0.9 },
    { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'power4.out', delay: 0.2 }
  )
  gsap.fromTo(heroSubtitle.value,
    { y: 40, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.5 }
  )
  gsap.fromTo(formRef.value,
    { y: 60, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.4 }
  )
})
</script>

<template>
  <main>
    <div class="hero w-full h-full mb-[68px] md:mb-[116px]">
      <HeaderView />
      <div class="px-[20px] md:px-[0px]">
        <div ref="heroTitle"
          class="w-full mx-auto md:w-[60%] lg:w-[676px] text-center text-[#fff] text-[24px] md:text-[54px] font-[800] tracking-[-0.48px] md:tracking-[-1.08px] mb-[20px] md:mb-[24px] md:leading-[58px]">
          Get in <span class="text-[#ffd214]">Touch</span>
        </div>
        <div ref="heroSubtitle"
          class="w-full md:w-[50%] lg:w-[648px] mx-auto text-[#fff] text-center text-[14px] md:text-[28px] font-[300] md:tracking-[-0.56px] mb-[24px] md:mb-[32px]">
          Have a question, feedback, or want to partner with us? We'd love to hear from you.
        </div>
      </div>
    </div>

    <div class="w-full px-[20px] md:px-[60px] lg:px-[130px] pb-[80px] md:pb-[120px]">
      <div class="max-w-[960px] mx-auto">
        <div ref="formRef" class="bg-[#fff] rounded-[16px] p-[24px] md:p-[40px] border border-[#f1f1f3] mb-[32px] shadow-sm">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-[20px] mb-[20px]">
            <div>
              <label class="block text-[#1e1f24] text-[14px] md:text-[16px] font-[500] mb-[8px]">Full Name</label>
              <input type="text" placeholder="Your name"
                class="w-full border border-[#e4e4e7] rounded-[8px] py-[12px] px-[16px] text-[14px] md:text-[16px] text-[#667085] focus:outline-none focus:border-[#7d4ec6] transition-colors duration-200" />
            </div>
            <div>
              <label class="block text-[#1e1f24] text-[14px] md:text-[16px] font-[500] mb-[8px]">Email</label>
              <input type="email" placeholder="you@university.edu.ng"
                class="w-full border border-[#e4e4e7] rounded-[8px] py-[12px] px-[16px] text-[14px] md:text-[16px] text-[#667085] focus:outline-none focus:border-[#7d4ec6] transition-colors duration-200" />
            </div>
          </div>
          <div class="mb-[20px]">
            <label class="block text-[#1e1f24] text-[14px] md:text-[16px] font-[500] mb-[8px]">Subject</label>
            <input type="text" placeholder="How can we help?"
              class="w-full border border-[#e4e4e7] rounded-[8px] py-[12px] px-[16px] text-[14px] md:text-[16px] text-[#667085] focus:outline-none focus:border-[#7d4ec6] transition-colors duration-200" />
          </div>
          <div class="mb-[24px]">
            <label class="block text-[#1e1f24] text-[14px] md:text-[16px] font-[500] mb-[8px]">Message</label>
            <textarea rows="5" placeholder="Write your message..."
              class="w-full border border-[#e4e4e7] rounded-[8px] py-[12px] px-[16px] text-[14px] md:text-[16px] text-[#667085] focus:outline-none focus:border-[#7d4ec6] transition-colors duration-200 resize-none"></textarea>
          </div>
          <button ref="submitBtn"
            class="w-full bg-[#7d4ec6] text-[#fff] text-[16px] font-[600] py-[14px] rounded-[8px] hover:bg-[#6a3db5] transition-colors duration-300 cursor-pointer">
            Send Message
          </button>
        </div>

        <div ref="infoCards" class="grid grid-cols-1 md:grid-cols-4 gap-[16px]">
          <div v-for="(item, i) in contactInfo" :key="i"
            class="bg-[#fff] rounded-[12px] p-[20px] md:p-[24px] border border-[#f1f1f3] text-center hover:border-[#7d4ec6] hover:shadow-lg hover:shadow-[rgba(125,78,198,0.08)] transition-all duration-300 group">
            <div
              class="w-[48px] h-[48px] mx-auto mb-[12px] rounded-full bg-gradient-to-br from-[#7d4ec6] to-[#a77ee0] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md shadow-[rgba(125,78,198,0.2)]">
              <svg v-if="item.icon === 'email'" class="w-[22px] h-[22px] text-[#fff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <svg v-else-if="item.icon === 'phone'" class="w-[22px] h-[22px] text-[#fff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <svg v-else-if="item.icon === 'location'" class="w-[22px] h-[22px] text-[#fff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <svg v-else-if="item.icon === 'social'" class="w-[22px] h-[22px] text-[#fff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
              </svg>
            </div>
            <div class="text-[#1e1f24] text-[14px] md:text-[16px] font-[600] mb-[4px]">{{ item.label }}</div>
            <div class="text-[#667085] text-[13px] md:text-[14px] font-[400]">{{ item.value }}</div>
          </div>
        </div>
      </div>
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
