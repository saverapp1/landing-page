<script setup lang="ts">
import { ref, onMounted } from 'vue'
import HeaderView from '@/components/HeaderView.vue';
import FooterPage from '@/components/FooterPage.vue';
import SkeletonLoader from '@/components/SkeletonLoader.vue'
import { useStaggerFade, useScaleOnScroll, useFloating } from '@/composables/useAnimation'
import gsap from 'gsap'

const heroTitle = ref<HTMLElement | null>(null)
const heroSubtitle = ref<HTMLElement | null>(null)
const missionRef = ref<HTMLElement | null>(null)
const valuesRef = ref<HTMLElement | null>(null)
const teamRef = ref<HTMLElement | null>(null)
const valuesCard = ref<HTMLElement | null>(null)

useStaggerFade(missionRef, { stagger: 0.15, y: 40, start: 'top 85%' })
useScaleOnScroll(valuesCard, { fromScale: 0.5, toScale: 1, start: 'top 85%', end: 'top 40%' })
useFloating(valuesCard, { y: 8, duration: 3 })

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
  tl.fromTo(heroTitle.value, { y: 80, opacity: 0, scale: 0.9 }, { y: 0, opacity: 1, scale: 1, duration: 1.2 })
    .fromTo(heroSubtitle.value, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, '-=0.6')
})
</script>

<template>
  <main>
    <div class="hero w-full h-full mb-[68px] md:mb-[116px]">
      <HeaderView />
      <div class="px-[20px] md:px-[0px]">
        <div ref="heroTitle"
          class="w-full mx-auto md:w-[60%] lg:w-[676px] text-center text-[#fff] text-[24px] md:text-[54px] font-[800] tracking-[-0.48px] md:tracking-[-1.08px] mb-[20px] md:mb-[24px] md:leading-[58px]">
          About <span class="text-[#ffd214]">Saver</span>
        </div>
        <div ref="heroSubtitle"
          class="w-full md:w-[50%] lg:w-[648px] mx-auto text-[#fff] text-center text-[14px] md:text-[28px] font-[300] md:tracking-[-0.56px] mb-[24px] md:mb-[32px]">
          Learn more about the mission behind Saver and how we're transforming the university experience.
        </div>
      </div>
    </div>

    <div class="w-full px-[20px] md:px-[60px] lg:px-[130px] pb-[80px] md:pb-[120px]">
      <div class="max-w-[860px] mx-auto space-y-[40px] md:space-y-[60px]">
        <div ref="missionRef" class="flex flex-col md:flex-row md:items-center md:space-x-[40px]">
          <div class="w-full md:w-[45%] mb-[24px] md:mb-[0px]">
            <div
              class="about_tag w-fit rounded-[100px] py-[8px] px-[14px] text-[#7d4ec6] text-[10px] md:text-[13px] font-[500] uppercase mb-[12px]">
              Our Mission
            </div>
            <div
              class="text-[#1e1f24] md:text-[#101828] text-[22px] md:text-[36px] font-[600] tracking-[-0.44px] md:tracking-[-0.8px] mb-[18px] md:leading-[46px]">
              Empowering Nigerian Students Across <span class="text-[#ffd214]">Every Campus</span>
            </div>
          </div>
          <div class="w-full md:w-[55%] text-[#565656] text-[16px] md:text-[19px] font-[400] tracking-[-0.32px] md:tracking-[-0.4px] leading-[28px] md:leading-[34px]">
            <p class="mb-[16px]">Saver was born out of a simple but powerful idea: Nigerian students deserve a platform that brings everything they need into one seamless experience. From buying and selling textbooks to scheduling appointments with lecturers, we saw a gap and decided to fill it.</p>
            <p>Today, Saver is growing into a vibrant ecosystem where students connect, learn, share resources, and navigate campus life with confidence. We're not just building an app — we're building a community.</p>
          </div>
        </div>

        <div ref="valuesCard" class="bg-[#f3efff] rounded-[16px] p-[24px] md:p-[40px] cursor-pointer">
          <div class="flex flex-col md:flex-row md:items-center md:space-x-[40px]">
            <div class="w-full md:w-[50%] mb-[24px] md:mb-[0px]">
              <SkeletonLoader src="/aboutbg.png" alt="About Saver" class="w-full rounded-[12px]" imgClass="w-full rounded-[12px]" />
            </div>
            <div class="w-full md:w-[50%]">
              <div
                class="about_tag w-fit rounded-[100px] py-[8px] px-[14px] text-[#7d4ec6] text-[10px] md:text-[13px] font-[500] uppercase mb-[12px]">
                What We Stand For
              </div>
              <div class="space-y-[16px]">
                <div class="flex items-start space-x-[12px] group">
                  <div class="w-[24px] h-[24px] mt-[2px] rounded-full bg-[#7d4ec6] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <span class="text-[#fff] text-[12px] font-[700]">1</span>
                  </div>
                  <div>
                    <div class="text-[#1e1f24] text-[16px] md:text-[18px] font-[600]">Connection</div>
                    <div class="text-[#565656] text-[14px] md:text-[16px] font-[400]">Bringing students together across universities.</div>
                  </div>
                </div>
                <div class="flex items-start space-x-[12px] group">
                  <div class="w-[24px] h-[24px] mt-[2px] rounded-full bg-[#ffd214] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <span class="text-[#1e1f24] text-[12px] font-[700]">2</span>
                  </div>
                  <div>
                    <div class="text-[#1e1f24] text-[16px] md:text-[18px] font-[600]">Convenience</div>
                    <div class="text-[#565656] text-[14px] md:text-[16px] font-[400]">Everything you need, all in one place.</div>
                  </div>
                </div>
                <div class="flex items-start space-x-[12px] group">
                  <div class="w-[24px] h-[24px] mt-[2px] rounded-full bg-[#7d4ec6] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <span class="text-[#fff] text-[12px] font-[700]">3</span>
                  </div>
                  <div>
                    <div class="text-[#1e1f24] text-[16px] md:text-[18px] font-[600]">Growth</div>
                    <div class="text-[#565656] text-[14px] md:text-[16px] font-[400]">Empowering students academically and socially.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div ref="teamRef" class="text-center">
          <div
            class="about_tag w-fit rounded-[100px] py-[8px] px-[14px] text-[#7d4ec6] text-[10px] md:text-[13px] font-[500] uppercase mb-[12px] mx-auto">
            The Team
          </div>
          <div
            class="text-[#1e1f24] md:text-[#101828] text-[22px] md:text-[36px] font-[600] tracking-[-0.44px] md:tracking-[-0.8px] mb-[16px] md:leading-[46px]">
            Built by Students, <span class="text-[#ffd214]">For Students</span>
          </div>
          <p class="max-w-[700px] mx-auto text-[#565656] text-[16px] md:text-[19px] font-[400] tracking-[-0.32px] md:tracking-[-0.4px] leading-[28px] md:leading-[34px]">
            Our team understands the challenges of campus life firsthand. We're passionate about creating tools that make the university experience smoother, more connected, and more rewarding for every Nigerian student.
          </p>
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
</style>
