<script setup lang="ts">
import { ref } from 'vue'
import SkeletonLoader from './SkeletonLoader.vue'
import { useStaggerFade, useMagneticHover } from '@/composables/useAnimation'

const cardContainer = ref<HTMLElement | null>(null)

useStaggerFade(cardContainer, { stagger: 0.18, y: 60, start: 'top 85%' })
</script>

<template>
 <div class="w-full pb-[45px] md:pb-[105px]">
  <div
   class="about_tag w-fit rounded-[100px] py-[12px] px-[14px] text-[#7d4ec6] text-[10px] md:text-[16px] font-[500] md:tracking-[-0.32px] uppercase mb-[13px] md:mb-[12px]">
   get familiar
  </div>
  <div
   class="text-[#1e1f24] md:text-[#101828] text-[22px] md:text-[44px] font-[600] tracking-[-0.44px] md:tracking-[-0.8px] mb-[17px] md:leading-[52px]">
   How does <span class="text-[#ffd214]">Savera Work ?</span>
  </div>
  <div ref="cardContainer" class="md:flex space-y-[20px] md:space-y-[0px] md:space-x-[20px]">
   <div class="w-full md:w-[25%] bg-[#f3efff] rounded-[12px] border border-[#f1f1f3] p-[10px] hover:shadow-xl hover:shadow-[rgba(125,78,198,0.15)] hover:-translate-y-[4px] transition-all duration-300">
    <div
     class="text-[#7d4ec6] text-[13px] md:text-[16px] font-[500] leading-[20px] tracking-[-0.26px] md:leading-[26px] md:tracking-[-0.32px] mb-[12px] md:mb-[7px]">
     1. Download the Savera app
    </div>
    <div class="w-full box flex justify-center items-center bg-[#fff] rounded-[12px] h-[170px]">
     <img loading="lazy" src="/saverstore.svg" />
    </div>
   </div>
   <div class="w-full md:w-[25%] bg-[#f3efff] rounded-[12px] border border-[#f1f1f3] p-[10px] hover:shadow-xl hover:shadow-[rgba(125,78,198,0.15)] hover:-translate-y-[4px] transition-all duration-300">
    <div
     class="text-[#7d4ec6] text-[13px] md:text-[16px] font-[500] leading-[20px] tracking-[-0.26px] md:leading-[26px] md:tracking-[-0.32px] mb-[12px] md:mb-[7px]">
     2. Create your account
    </div>
    <div class="w-full box pt-[28px] md:pt-[17px] bg-[#fff] rounded-[12px] h-[170px] overflow-hidden">
     <SkeletonLoader src="/createphone.png" alt="Create account" class="w-[55%] md:w-[70%] h-full mx-auto" imgClass="w-full h-full object-contain" />
    </div>
   </div>
   <div class="w-full md:w-[25%] bg-[#f3efff] rounded-[12px] border border-[#f1f1f3] p-[10px] hover:shadow-xl hover:shadow-[rgba(125,78,198,0.15)] hover:-translate-y-[4px] transition-all duration-300">
    <div
     class="text-[#7d4ec6] text-[13px] md:text-[16px] font-[500] leading-[20px] tracking-[-0.26px] md:leading-[26px] md:tracking-[-0.32px] mb-[12px] md:mb-[7px]">
     3. Choose your profile
    </div>
    <div class="w-full box pt-[28px] md:pt-[17px] bg-[#fff] rounded-[12px] h-[170px] overflow-hidden">
     <SkeletonLoader src="/chooseprofile.png" alt="Choose profile" class="w-[55%] md:w-[70%] h-full mx-auto" imgClass="w-full h-full object-contain" />
    </div>
   </div>
   <div class="w-full md:w-[25%] bg-[#f3efff] rounded-[12px] border border-[#f1f1f3] p-[10px] hover:shadow-xl hover:shadow-[rgba(125,78,198,0.15)] hover:-translate-y-[4px] transition-all duration-300">
    <div
     class="text-[#7d4ec6] text-[13px] md:text-[16px] font-[500] leading-[20px] tracking-[-0.26px] md:leading-[26px] md:tracking-[-0.32px] mb-[12px] md:mb-[7px]">
     4. Get familiar with the app
    </div>
    <div class="w-full box flex justify-center items-center bg-[#fff] rounded-[12px] h-[170px]">
     <img loading="lazy" src="/setgo.svg" />
    </div>
   </div>
  </div>
 </div>
</template>

<style scoped>
.about_tag {
 border: 1px solid rgba(24, 24, 27, 0.06);
 background: rgba(250, 250, 250, 0.98);
 box-shadow: 0px 1px 0.5px 0px rgba(24, 24, 27, 0.05);
}

.box {
 box-shadow: 0px 0px 4px -1px rgba(0, 0, 0, 0.10);
}
</style>
