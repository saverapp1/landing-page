<script setup lang="ts">
const date = new Date()
const year = date.getFullYear()
</script>

<template>
 <div class="bg-[#7d4ec6] w-full pt-[32px] pb-[20px] px-[20px] md:pt-[70px] md:pb-[25px] md:px-[60px] lg:px-[130px]">
  <!--  -->
  <div class="w-full space-y-[60px] md:space-y-[0px] md:flex md:items-start md:space-x-[10px] mb-[32px] md:mb-[17px]">
   <div class="w-full md:w-[33%]">
    <img src="/footerbig.svg" class="md:block hidden" />
    <img src="/footersmall.svg" class="md:hidden" />
   </div>
   <div class="w-full md:w-[20%] space-y-[16px] md:space-y-[20px]">
    <div
     class="text-[#fff] text-[13px] md:text-[16px] font-[400] leading-[20px] md:leading-[16px] tracking-[-0.26px] md:tracking-[-0.32px] md:cursor-pointer">
     Home</div>
    <div
     class="text-[#fff] text-[13px] md:text-[16px] font-[400] leading-[20px] md:leading-[16px] tracking-[-0.26px] md:tracking-[-0.32px] md:cursor-pointer">
     Features</div>
    <div
     class="text-[#fff] text-[13px] md:text-[16px] font-[400] leading-[20px] md:leading-[16px] tracking-[-0.26px] md:tracking-[-0.32px] md:cursor-pointer">
     Download app</div>
   </div>
   <div class="w-full md:w-[43%] space-y-[16px] md:space-y-[17px]">
    <div
     class="text-[#fff] text-[23px] md:text-[28px] font-[600] leading-[35px] md:leading-[39px] tracking-[-0.46px] md:tracking-[-0.56px]">
     Ready to Enhance Your <span class="text-[#ffce35]">Campus Experience?</span>
    </div>
    <div
     class="text-[#fff] text-[16px] md:text-[19px] font-[400] leading-[26px] md:leading-[30px] tracking-[-0.32px] md:tracking-[-0.38px]">
     Get early access and see how Saver makes life easier and more connected.
    </div>
    <div
     class="w-full lg:w-full bg-[#fff] rounded-[100px] md:rounded-[119px] py-[5px] pl-[13.5px] pr-[5px] flex items-center justify-between space-x-[9px]">
     <div><img src="/mail.svg" /></div>
     <div class="w-[50%] md:w-fit lg:pr-[50px]">
      <input placeholder="ojaprincewill@gmail.com" type="email"
       class="text-[#667085] md:w-[100%] text-[14px] md:text-[18px] md:tracking-[-0.36px] font-[400] leading-[24px] focus:outline-none" />
     </div>
     <div
      class="w-fit bg-[#ffd214] rounded-[100px] md:rounded-[119px] py-[11.5px] px-[14px] md:py-[13.96px] md:px-[16.9px] md:cursor-pointer text-[#7d4ec6] text-[14px] md:text-[16px] font-[500] tracking-[-0.28px] md:tracking-[-0.3335px]">
      Join waitlist
     </div>
    </div>
   </div>
  </div>
  <!--  -->
  <div class="w-full border-b border-[#f1f1f3] mb-[12px] md:mb-[16px]"></div>
  <div
   class="text-center text-[#fff] text-[13px] md:text-[16px] font-[400] md:font-[500] leading-[20px] md:leading-[23px] tracking-[-0.26px] md:tracking-[-0.32px]">
   &copy; {{ year }} — All Rights Reserved
  </div>
  <!--  -->
 </div>
</template>
