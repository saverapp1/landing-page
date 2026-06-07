<script setup lang="ts">
import { ref, onMounted } from 'vue'
import HeaderView from '@/components/HeaderView.vue'
import FooterPage from '@/components/FooterPage.vue'
import { useStaggerFade } from '@/composables/useAnimation'
import gsap from 'gsap'

const heroTitle = ref<HTMLElement | null>(null)
const heroSubtitle = ref<HTMLElement | null>(null)
const faqContainer = ref<HTMLElement | null>(null)

const faqs = ref([
  { q: 'What is Saver?', a: 'Saver is an all-in-one platform designed for Nigerian university students to connect, buy and sell items, schedule appointments, share campus news, and access academic resources.', open: false },
  { q: 'Is Saver free to use?', a: 'Yes, Saver is completely free to download and use. We believe every student should have access to tools that make campus life easier without financial barriers.', open: false },
  { q: 'Which universities are supported?', a: 'Saver supports students across all Nigerian tertiary institutions including universities, polytechnics, and colleges of education. We are continuously expanding to reach more campuses.', open: false },
  { q: 'How do I create an account?', a: 'Simply download the app and sign up using your student email address. You will need to verify your institution affiliation to access all features.', open: false },
  { q: 'Can I sell items on the marketplace?', a: 'Yes, the marketplace allows you to list items for sale, browse listings from other students, and communicate securely within the app.', open: false },
  { q: 'How do virtual appointments work?', a: 'You can book appointments with lecturers and university staff directly through the app. You will receive reminders and can join virtual meetings from your device.', open: false },
  { q: 'Is my data safe on Saver?', a: 'We take data security seriously. Your personal information is encrypted and we do not share your data with third parties without your consent. See our Privacy Policy for details.', open: false },
  { q: 'How can I report an issue?', a: 'You can report issues through the app, contact us via email at contact@universalsaver.com, or visit our Contact page for more options.', open: false },
])

function toggleFaq(index: number) {
  faqs.value[index].open = !faqs.value[index].open
}

useStaggerFade(faqContainer, { stagger: 0.08, y: 30, start: 'top 88%' })

onMounted(() => {
  gsap.fromTo(heroTitle.value,
    { y: 80, opacity: 0, scale: 0.9 },
    { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'power4.out', delay: 0.2 }
  )
  gsap.fromTo(heroSubtitle.value,
    { y: 40, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.5 }
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
          Frequently <span class="text-[#ffd214]">Asked Questions</span>
        </div>
        <div ref="heroSubtitle"
          class="w-full md:w-[50%] lg:w-[648px] mx-auto text-[#fff] text-center text-[14px] md:text-[28px] font-[300] md:tracking-[-0.56px] mb-[24px] md:mb-[32px]">
          Everything you need to know about Saver. Still have questions? Reach out to us.
        </div>
      </div>
    </div>

    <div class="w-full px-[20px] md:px-[60px] lg:px-[130px] pb-[80px] md:pb-[120px]">
      <div class="max-w-[768px] mx-auto">
        <div ref="faqContainer" class="space-y-[12px] md:space-y-[14px]">
          <div v-for="(faq, i) in faqs" :key="i"
            class="bg-[#f3efff] rounded-[12px] p-[16px] md:py-[18px] md:px-[24px] hover:shadow-md hover:shadow-[rgba(125,78,198,0.1)] transition-shadow duration-300">
            <div @click="toggleFaq(i)" class="flex items-center justify-between cursor-pointer">
              <div
                class="w-[85%] text-[#7d4ec6] text-[16px] md:text-[20px] font-[500] leading-[24px] md:leading-[30px] tracking-[-0.32px] md:tracking-[-0.4px]">
                {{ faq.q }}
              </div>
              <div class="flex-shrink-0">
                <svg :class="faq.open ? 'rotate-180' : ''" class="w-[20px] h-[20px] md:w-[24px] md:h-[24px] text-[#7d4ec6] transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            <Transition name="faq">
              <div v-show="faq.open"
                class="text-[#565656] text-[14px] md:text-[16px] font-[400] leading-[24px] md:leading-[28px] tracking-[-0.28px] md:tracking-[-0.32px] overflow-hidden pt-[12px] md:pt-[16px] border-t border-[rgba(125,78,198,0.15)] mt-[12px] md:mt-[14px]">
                {{ faq.a }}
              </div>
            </Transition>
          </div>
        </div>

        <div class="mt-[40px] md:mt-[56px] text-center">
          <div class="text-[#1e1f24] text-[18px] md:text-[22px] font-[600] mb-[8px]">Still have questions?</div>
          <div class="text-[#667085] text-[14px] md:text-[16px] font-[400] mb-[20px]">We are here to help. Reach out to our support team.</div>
          <RouterLink to="/contact"
            class="inline-block bg-[#7d4ec6] text-[#fff] text-[14px] md:text-[16px] font-[600] py-[12px] px-[28px] rounded-[8px] hover:bg-[#6a3db5] transition-colors duration-300">
            Contact Us
          </RouterLink>
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

.faq-enter-active,
.faq-leave-active {
  transition: all 0.35s ease;
}
.faq-enter-from,
.faq-leave-to {
  opacity: 0;
  max-height: 0;
}
.faq-enter-to,
.faq-leave-from {
  opacity: 1;
  max-height: 300px;
}
</style>
