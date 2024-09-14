<script setup lang="ts">
import MarketPlace from './MarketPlace.vue';
import CampusSafety from './CampusSafety.vue';
import AcademicTool from './AcademicTool.vue';
import UniversityInsight from './UniversityInsight.vue';
import SocialInteraction from './SocialInteraction.vue';
</script>

<template>
 <div class="md:hidden">
  <!-- features -->
  <!-- 1 -->
  <div class="w-full flex items-center space-x-[8px] cursor-pointer mb-[20px]">
   <div><img src="/marketplace.svg" /></div>
   <div class="text-[#7d4ec6] text-[16px] md:text-[22px] font-[500] tracking-[-0.32px] md:tracking-[-0.44px]">
    Marketplace
   </div>
  </div>
  <div class="mb-[28px] w-full tab h-fit rounded-[24px] border-[2px] border-[#f1f1f3] bg-[#f8fafc] pt-[35px]">
   <MarketPlace />
  </div>
  <!-- end 1 -->
  <div class="w-full flex items-center space-x-[8px] cursor-pointer mb-[20px]">
   <div><img src="/campus.svg" /></div>
   <div class="text-[#7d4ec6] text-[16px] md:text-[22px] font-[500] tracking-[-0.32px] md:tracking-[-0.44px]">
    Campus Safety
   </div>
  </div>
  <div class="mb-[28px] w-full tab h-fit rounded-[24px] border-[2px] border-[#f1f1f3] bg-[#f8fafc] pt-[35px]">
   <CampusSafety />
  </div>
  <!-- end 2 -->
  <div class="w-full flex items-center space-x-[8px] cursor-pointer mb-[20px]">
   <div><img src="/book.svg" /></div>
   <div class="text-[#7d4ec6] text-[16px] md:text-[22px] font-[500] tracking-[-0.32px] md:tracking-[-0.44px]">
    Academic Tools
   </div>
  </div>
  <div class="mb-[28px] w-full tab h-fit rounded-[24px] border-[2px] border-[#f1f1f3] bg-[#f8fafc] pt-[35px]">
   <AcademicTool />
  </div>
  <!-- end 3 -->
  <div class="w-full flex items-center space-x-[8px] cursor-pointer mb-[20px]">
   <div><img src="/university.svg" /></div>
   <div class="text-[#7d4ec6] text-[16px] md:text-[22px] font-[500] tracking-[-0.32px] md:tracking-[-0.44px]">
    University Insights
   </div>
  </div>
  <div class="mb-[28px] w-full tab h-fit rounded-[24px] border-[2px] border-[#f1f1f3] bg-[#f8fafc] pt-[35px]">
   <UniversityInsight />
  </div>
  <!-- end 4 -->
  <div class="w-full flex items-center space-x-[8px] cursor-pointer mb-[20px]">
   <div><img src="/campus.svg" /></div>
   <div class="text-[#7d4ec6] text-[16px] md:text-[22px] font-[500] tracking-[-0.32px] md:tracking-[-0.44px]">
    Social Interaction
   </div>
  </div>
  <div class="w-full tab h-fit rounded-[24px] border-[2px] border-[#f1f1f3] bg-[#f8fafc] pt-[35px]">
   <SocialInteraction />
  </div>
  <!-- end 5 -->
  <!-- end fetaures -->
 </div>
</template>
