<script setup lang="ts">
import BigScreenFeatures from './BigScreenFeatures.vue';
import SmallScreenFeatures from './SmallScreenFeatures.vue';
</script>

<template>
 <div class="w-full pb-[50px] md:pb-[100px]">
  <div
   class="features_tag w-fit rounded-[100px] py-[12px] px-[14px] text-[#977200] text-[10px] md:text-[16px] font-[500] md:tracking-[-0.32px] uppercase mb-[12px] md:mb-[20px]">
   Features
  </div>
  <div
   class="text-[#1e1f24] md:w-[496px] text-[22px] md:text-[40px] font-[600] tracking-[-0.44px] md:tracking-[-0.8px] mb-[28px] md:leading-[52px]">
   Unlock the Full
   <span class="text-[#ffd214]">
    Potential of Saver&apos;s Experience
   </span>
  </div>
  <BigScreenFeatures />
  <SmallScreenFeatures />
 </div>
</template>

<style scoped>
.features_tag {
 border: 1px rgba(24, 24, 27, 0.06);
 background: rgba(250, 250, 250, 0.98);
 box-shadow: 0px 1px 0.5px 0px rgba(24, 24, 27, 0.05);
}
</style>
