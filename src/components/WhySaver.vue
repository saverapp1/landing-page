<script setup lang="ts">
import { ref } from 'vue'
import { useSlideIn, useScaleOnScroll, useStaggerFade, useMagneticHover, useFloating } from '@/composables/useAnimation'
import SkeletonLoader from './SkeletonLoader.vue'

const textRef = ref<HTMLElement | null>(null)
const imageRef = ref<HTMLElement | null>(null)
const listRef = ref<HTMLElement | null>(null)
const ctaRef = ref<HTMLElement | null>(null)

useSlideIn(textRef, { x: -60, start: 'top 80%' })
useScaleOnScroll(imageRef, { fromScale: 0.5, toScale: 1, start: 'top 85%', end: 'top 40%' })
useStaggerFade(listRef, { stagger: 0.15, y: 30, start: 'top 85%' })
useMagneticHover(imageRef, 0.1)
useFloating(imageRef, { y: 8, duration: 3 })
</script>

<template>
 <div class="flex flex-col-reverse md:flex-row md:items-beaseline md:space-x-[29px] pb-[45px] md:pb-[100px]">
  <div ref="imageRef"
   class="saverbg_shade bg-[#fff] w-full h-[362px] md:w-[560px] md:h-[444px] rounded-[16px] md:rounded-[24px] overflow-hidden cursor-pointer">
   <SkeletonLoader src="/whybg.png" alt="Why Saver" class="w-full h-full" imgClass="w-full h-full object-cover" />
  </div>
  <div ref="textRef" class="w-full md:w-[calc(100%-560px)] mb-[34px] md:mb-[0px]">
   <div
    class="about_tag w-fit rounded-[100px] py-[12px] px-[14px] text-[#7d4ec6] text-[10px] md:text-[16px] font-[500] md:tracking-[-0.32px] uppercase mb-[12px] md:mb-[20px]">
    Why choose Savera ?
   </div>
   <div
    class="text-[#1e1f24] md:text-[#101828] text-[22px] md:text-[44px] font-[600] tracking-[-0.44px] md:tracking-[-0.8px] mb-[18px] md:mb-[34px] capitalize md:leading-[52px]">
    Discover the <span class="text-[#ffd214]">smartest way</span> to <span class="text-[#ffd214]">easy campus
     life</span> .
   </div>
   <div ref="listRef">
    <div class="space-x-[8px] flex items-center mb-[18px]">
     <div><img src="/greentick.svg" /></div>
     <div class="text-[#039855] text-[16px] font-[400] leading-[26px] tracking-[-0.32px]">
      All -in- one Solutions
     </div>
    </div>
    <div class="space-x-[8px] flex items-center mb-[18px]">
     <div><img src="/seamless.svg" /></div>
     <div class="text-[#c4320a] text-[16px] font-[400] leading-[26px] tracking-[-0.32px]">
      Seamless Experience
     </div>
    </div>
    <div class="space-x-[8px] flex items-center mb-[18px]">
     <div><img src="/bfe.svg" /></div>
     <div class="text-[#1570ef] text-[16px] font-[400] leading-[26px] tracking-[-0.32px]">
      Built for Everyone
     </div>
    </div>
    <div class="space-x-[8px] flex items-center mb-[18px]">
     <div><img src="/group.svg" /></div>
     <div class="text-[#977200] text-[16px] font-[400] leading-[26px] tracking-[-0.32px]">
      Stay connected with peers, faculty e.t.c
     </div>
    </div>
   </div>
   <div ref="ctaRef"
    class="w-fit text-[#fff] text-[14px] md:text-[16px] font-[500] md:tracking-[-0.32px] text-center py-[12px] px-[32px] rounded-[100px] bg-[#7d4ec6] border border-[#c4c4c4] md:cursor-pointer hover:bg-[#6a3db5] hover:shadow-lg hover:shadow-[rgba(125,78,198,0.3)] transition-all duration-300">
    Explore Savera
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
