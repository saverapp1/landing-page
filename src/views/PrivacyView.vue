<script setup lang="ts">
import { ref, onMounted } from 'vue'
import HeaderView from '@/components/HeaderView.vue'
import FooterPage from '@/components/FooterPage.vue'
import { useStaggerFade, useMagneticHover } from '@/composables/useAnimation'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sections = [
  { title: 'Information We Collect', content: 'We collect information you provide directly, such as your name, email address, institution details, and profile information. We also collect usage data to improve your experience.', icon: 'clipboard' },
  { title: 'How We Use Your Information', content: 'Your information is used to provide, maintain, and improve Saver\'s services—including marketplace listings, virtual appointments, social features, and campus news updates.', icon: 'settings' },
  { title: 'Data Sharing', content: 'We do not sell your personal data. We may share anonymized data with partner institutions and service providers who help operate the App under strict confidentiality agreements.', icon: 'share' },
  { title: 'Data Security', content: 'We implement industry-standard security measures to protect your data. However, no method of transmission over the internet is 100% secure.', icon: 'shield' },
  { title: 'Your Rights', content: 'You have the right to access, update, or delete your personal information at any time through your account settings. You may also contact us to exercise these rights.', icon: 'hand' },
  { title: 'Cookies', content: 'We use cookies and similar tracking technologies to enhance your experience. You can manage cookie preferences in your browser settings.', icon: 'cookie' },
  { title: 'Third-Party Links', content: 'The App may contain links to third-party websites. We are not responsible for their privacy practices and encourage you to review their policies.', icon: 'link' },
  { title: 'Updates to This Policy', content: 'We may update this policy periodically. Changes will be posted in the App, and continued use after updates signifies your acceptance.', icon: 'megaphone' },
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
          Privacy <span class="text-[#ffd214]">Policy</span>
        </div>
        <div ref="heroSubtitle"
          class="w-full md:w-[50%] lg:w-[648px] mx-auto text-[#fff] text-center text-[14px] md:text-[28px] font-[300] md:tracking-[-0.56px] mb-[24px] md:mb-[32px]">
          How we collect, use, and protect your information.
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
            class="privacy-card bg-[#fff] rounded-[16px] p-[24px] md:p-[32px] border border-[#f1f1f3] hover:border-[#7d4ec6] transition-colors duration-300 group">
            <div class="flex items-start space-x-[16px]">
              <div
                class="w-[44px] h-[44px] md:w-[52px] md:h-[52px] rounded-full bg-gradient-to-br from-[#7d4ec6] to-[#a77ee0] flex items-center justify-center flex-shrink-0 mt-[2px] group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[rgba(125,78,198,0.25)]">
                <svg v-if="section.icon === 'clipboard'" class="w-[22px] h-[22px] md:w-[26px] md:h-[26px] text-[#fff]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
                <svg v-else-if="section.icon === 'settings'" class="w-[22px] h-[22px] md:w-[26px] md:h-[26px] text-[#fff]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <svg v-else-if="section.icon === 'share'" class="w-[22px] h-[22px] md:w-[26px] md:h-[26px] text-[#fff]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
                <svg v-else-if="section.icon === 'shield'" class="w-[22px] h-[22px] md:w-[26px] md:h-[26px] text-[#fff]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                <svg v-else-if="section.icon === 'hand'" class="w-[22px] h-[22px] md:w-[26px] md:h-[26px] text-[#fff]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" /></svg>
                <svg v-else-if="section.icon === 'cookie'" class="w-[22px] h-[22px] md:w-[26px] md:h-[26px] text-[#fff]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2a10 10 0 1010 10M12 2a10 10 0 019.95 9M12 2c.2 0 .39.008.58.023M12 12l.01.01M16 8l.01.01M8 16l.01.01M16 14l.01.01M10 18l.01.01" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2c2.5 0 4.5 2 4.5 4.5S16.5 11 19 11s4.5 2 4.5 4.5" /></svg>
                <svg v-else-if="section.icon === 'link'" class="w-[22px] h-[22px] md:w-[26px] md:h-[26px] text-[#fff]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                <svg v-else-if="section.icon === 'megaphone'" class="w-[22px] h-[22px] md:w-[26px] md:h-[26px] text-[#fff]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>
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
            Have questions about your privacy? Reach out to us at
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

.privacy-card {
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.04);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.privacy-card:hover {
  box-shadow: 0px 8px 32px rgba(125, 78, 198, 0.12);
  transform: translateY(-4px);
}
</style>
