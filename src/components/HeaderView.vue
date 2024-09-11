<template>
 <div class="w-full mb-[40px] md:mb-[0px]">
  <div
   class="flex items-center justify-between w-full top-0 left-0 py-[20px] px-[20px] md:py-[49px] md:px-[60px] lg:px-[128px]">
   <div>
    <img src="/saverbiglogo.svg" class="md:cursor-pointer hidden md:block" />
    <img src="/saverlogo.svg" class="md:cursor-pointer md:hidden" />
   </div>
   <div
    class="flex py-[9.5px] px-[12px] space-x-[8px] items-center bg-[#fff] rounded-[100px] border border-[#fff] md:cursor-pointer download_shade">
    <div class="text-[#7d4ec6] text-[16px] font-[500] tracking-[-0.32px]">
     Download app
    </div>
    <div><img src="/playstore.svg" /></div>
    <div><img src="/appstore.svg" /></div>
   </div>
  </div>
 </div>
</template>

<style scoped>
.download_shade {
 box-shadow: 0px 1px 0.5px 0px rgba(24, 24, 27, 0.05);
}
</style>
