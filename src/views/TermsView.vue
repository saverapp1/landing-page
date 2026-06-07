<script setup lang="ts">
import { ref, onMounted } from 'vue'
import HeaderView from '@/components/HeaderView.vue'
import FooterPage from '@/components/FooterPage.vue'
import { useStaggerFade, useMagneticHover } from '@/composables/useAnimation'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sections = [
  { title: 'Acceptance of Terms', content: 'By accessing or using Saver ("the App"), you agree to be bound by these Terms of Service. If you do not agree, please do not use the App.', icon: 'handshake' },
  { title: 'Eligibility', content: 'You must be a student of a Nigerian tertiary institution to use Saver. By using the App, you represent that you meet this eligibility requirement.', icon: 'graduation' },
  { title: 'Account Registration', content: 'You are responsible for maintaining the confidentiality of your account credentials. All activities under your account are your responsibility. You agree to provide accurate and complete information during registration.', icon: 'lock' },
  { title: 'Marketplace Conduct', content: 'When buying or selling items on the marketplace, you agree to abide by all applicable laws. Saver is not liable for any transactions between users but will assist in resolving disputes in good faith.', icon: 'cart' },
  { title: 'Virtual Appointments', content: 'Saver provides a platform for scheduling appointments with lecturers and staff. We are not responsible for cancellations or rescheduling by either party.', icon: 'calendar' },
  { title: 'Prohibited Activities', content: 'You may not use Saver for any unlawful purpose, to harass others, to post false or misleading information, or to engage in any activity that disrupts the App\'s functionality.', icon: 'ban' },
  { title: 'Intellectual Property', content: 'All content, features, and functionality of Saver are owned by Saver and protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without permission.', icon: 'copyright' },
  { title: 'Limitation of Liability', content: 'Saver is provided "as is" without warranties of any kind. We are not liable for any damages arising from your use of the App.', icon: 'scale' },
  { title: 'Changes to Terms', content: 'We reserve the right to modify these terms at any time. Continued use of the App after changes constitutes acceptance of the new terms.', icon: 'edit' },
]

const cardContainer = ref<HTMLElement | null>(null)
const heroTitle = ref<HTMLElement | null>(null)
const heroSubtitle = ref<HTMLElement | null>(null)
const badgeRef = ref<HTMLElement | null>(null)
const contactCard = ref<HTMLElement | null>(null)
const heroImage = ref<HTMLElement | null>(null)

useStaggerFade(cardContainer, { stagger: 0.12, y: 50, start: 'top 88%' })
useMagneticHover(contactCard, 0.15)

onMounted(() => {
  gsap.fromTo(heroTitle.value,
    { y: 80, opacity: 0, scale: 0.9 },
    { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'power4.out', delay: 0.2 }
  )
  gsap.fromTo(heroSubtitle.value,
    { y: 40, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.5 }
  )
  gsap.fromTo(badgeRef.value,
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.8 }
  )

  ScrollTrigger.create({
    trigger: heroImage.value,
    start: 'top 85%',
    end: 'top 40%',
    scrub: 1.2,
    onUpdate: (self) => {
      if (heroImage.value) {
        heroImage.value.style.opacity = String(0.3 + self.progress * 0.7)
      }
    }
  })
})
</script>

<template>
  <main>
    <div ref="heroImage" class="hero w-full h-full mb-[68px] md:mb-[116px]">
      <HeaderView />
      <div class="px-[20px] md:px-[0px]">
        <div ref="heroTitle"
          class="w-full mx-auto md:w-[60%] lg:w-[676px] text-center text-[#fff] text-[24px] md:text-[54px] font-[800] tracking-[-0.48px] md:tracking-[-1.08px] mb-[20px] md:mb-[24px] md:leading-[58px]">
          Terms of <span class="text-[#ffd214]">Service</span>
        </div>
        <div ref="heroSubtitle"
          class="w-full md:w-[50%] lg:w-[648px] mx-auto text-[#fff] text-center text-[14px] md:text-[28px] font-[300] md:tracking-[-0.56px] mb-[24px] md:mb-[32px]">
          Please read these terms carefully before using Saver.
        </div>
        <div ref="badgeRef" class="flex justify-center">
          <div
            class="about_tag w-fit rounded-[100px] py-[8px] px-[16px] text-[#7d4ec6] text-[12px] md:text-[14px] font-[500] backdrop-blur-sm bg-[rgba(250,250,250,0.85)]">
            Last updated: June 2026
          </div>
        </div>
      </div>
    </div>

    <div class="w-full px-[20px] md:px-[60px] lg:px-[130px] pb-[80px] md:pb-[120px]">
      <div class="max-w-[960px] mx-auto">
        <div ref="cardContainer" class="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
          <div v-for="(section, i) in sections" :key="i"
            class="term-card bg-[#fff] rounded-[16px] p-[24px] md:p-[32px] border border-[#f1f1f3] hover:border-[#7d4ec6] transition-colors duration-300 group">
            <div class="flex items-start space-x-[16px]">
              <div
                class="w-[44px] h-[44px] md:w-[52px] md:h-[52px] rounded-full bg-gradient-to-br from-[#7d4ec6] to-[#a77ee0] flex items-center justify-center flex-shrink-0 mt-[2px] group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[rgba(125,78,198,0.25)]">
                <svg v-if="section.icon === 'handshake'" class="w-[22px] h-[22px] md:w-[26px] md:h-[26px] text-[#fff]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                <svg v-else-if="section.icon === 'graduation'" class="w-[22px] h-[22px] md:w-[26px] md:h-[26px] text-[#fff]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm-4.5 2.5v-4.5l4.5-2.5" /></svg>
                <svg v-else-if="section.icon === 'lock'" class="w-[22px] h-[22px] md:w-[26px] md:h-[26px] text-[#fff]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                <svg v-else-if="section.icon === 'cart'" class="w-[22px] h-[22px] md:w-[26px] md:h-[26px] text-[#fff]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" /></svg>
                <svg v-else-if="section.icon === 'calendar'" class="w-[22px] h-[22px] md:w-[26px] md:h-[26px] text-[#fff]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                <svg v-else-if="section.icon === 'ban'" class="w-[22px] h-[22px] md:w-[26px] md:h-[26px] text-[#fff]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>
                <svg v-else-if="section.icon === 'copyright'" class="w-[22px] h-[22px] md:w-[26px] md:h-[26px] text-[#fff]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <svg v-else-if="section.icon === 'scale'" class="w-[22px] h-[22px] md:w-[26px] md:h-[26px] text-[#fff]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>
                <svg v-else-if="section.icon === 'edit'" class="w-[22px] h-[22px] md:w-[26px] md:h-[26px] text-[#fff]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
              </div>
              <div class="flex-1">
                <h2
                  class="text-[#1e1f24] md:text-[#101828] text-[16px] md:text-[20px] font-[600] tracking-[-0.32px] md:tracking-[-0.4px] mb-[8px] group-hover:text-[#7d4ec6] transition-colors duration-300">
                  {{ section.title }}
                </h2>
                <p class="text-[#667085] text-[14px] md:text-[16px] font-[400] tracking-[-0.28px] md:tracking-[-0.32px] leading-[24px] md:leading-[28px]">
                  {{ section.content }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div ref="contactCard"
          class="mt-[32px] bg-gradient-to-r from-[#7d4ec6] to-[#a77ee0] rounded-[16px] p-[28px] md:p-[36px] text-center cursor-pointer">
          <div class="text-[#fff] text-[16px] md:text-[20px] font-[400] leading-[28px] md:leading-[34px]">
            Questions about these terms? Contact us at
            <span class="text-[#ffd214] font-[600]">contact@universalsaver.com</span>
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

.about_tag {
  border: 1px solid rgba(24, 24, 27, 0.06);
  background: rgba(250, 250, 250, 0.98);
  box-shadow: 0px 1px 0.5px 0px rgba(24, 24, 27, 0.05);
}

.term-card {
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.04);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.term-card:hover {
  box-shadow: 0px 8px 32px rgba(125, 78, 198, 0.12);
  transform: translateY(-4px);
}
</style>
