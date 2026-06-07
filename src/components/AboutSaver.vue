<script setup lang="ts">
import { ref } from 'vue'
import { useSlideIn, useScaleOnScroll, useMagneticHover, useFloating } from '@/composables/useAnimation'
import SkeletonLoader from './SkeletonLoader.vue'

const textRef = ref<HTMLElement | null>(null)
const imageRef = ref<HTMLElement | null>(null)
const tagRef = ref<HTMLElement | null>(null)
const ctaRef = ref<HTMLElement | null>(null)

useSlideIn(textRef, { x: 60, start: 'top 80%' })
useScaleOnScroll(imageRef, { fromScale: 0.5, toScale: 1, start: 'top 85%', end: 'top 40%' })
useMagneticHover(imageRef, 0.1)
useFloating(imageRef, { y: 8, duration: 3 })
</script>

<template>
 <div class="flex flex-col-reverse md:flex-row md:items-beaseline md:space-x-[29px] pb-[45px] md:pb-[127px]">
  <div ref="imageRef" class="saverbg_shade bg-[#fff] w-full h-[362px] md:w-[560px] md:h-[373px] rounded-[24px] overflow-hidden cursor-pointer">
   <SkeletonLoader src="/aboutbg.png" alt="About Saver" class="w-full h-full" imgClass="w-full h-full object-cover" />
  </div>
  <div ref="textRef" class="w-full md:w-[calc(100%-560px)] mb-[34px] md:mb-[0px]">
   <div ref="tagRef"
    class="about_tag w-fit rounded-[100px] py-[12px] px-[14px] text-[#7d4ec6] text-[10px] md:text-[16px] font-[500] md:tracking-[-0.32px] uppercase mb-[12px] md:mb-[20px]">
    About savers
   </div>
   <div
    class="text-[#1e1f24] md:text-[#101828] text-[22px] md:text-[44px] font-[600] tracking-[-0.44px] md:tracking-[-0.8px] mb-[18px] md:mb-[34px] md:leading-[52px]">
    Streamlining Your <span class="text-[#ffd214]">College Experience</span>.
   </div>
   <div class="text-[#565656] text-[16px] md:text-[19px] font-[400] tracking-[-0.32px] md:tracking-[-0.4px]">
    Are you a Nigerian student looking for a one-stop solution to manage your academic
    and social life? Saver is here to enhance your university experience by making it easier to
    access educational resources, connect with peers, and stay updated on campus news—
    all in one app!
   </div>
  </div>
 </div>
</template>

<style scoped>
.saverbg_shade {
 box-shadow: 0px 0px 4px -1px rgba(0, 0, 0, 0.247);
}

.about_tag {
 border: 1px solid rgba(24, 24, 27, 0.06);
 background: rgba(250, 250, 250, 0.98);
 box-shadow: 0px 1px 0.5px 0px rgba(24, 24, 27, 0.05);
}
</style>
