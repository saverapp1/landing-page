<script setup lang="ts">
import HeaderView from '@/components/HeaderView.vue';
import AboutSaver from '@/components/AboutSaver.vue';
import FeaturesSaver from '@/components/FeaturesSaver.vue';
import WhySaver from '@/components/WhySaver.vue';
import HowSaver from '@/components/HowSaver.vue';
import FaqSaver from '@/components/FaqSaver.vue';

//footer comp
import FooterPage from '@/components/FooterPage.vue';
</script>

<template>
  <main>
    <div class="hero w-full h-full mb-[68px] md:mb-[116px]">
      <HeaderView />
      <div class="px-[20px] md:px-[0px]">
        <div
          class="w-full mx-auto md:w-[60%] lg:w-[676px] text-center text-[#fff] text-[24px] md:text-[54px] font-[800] tracking-[-0.48px] md:tracking-[-1.08px] mb-[20px] md:mb-[24px] md:leading-[58px]">
          Transform your <span class="text-[#ffd214]">university Experience</span> with Saver
        </div>
        <div
          class="w-full md:w-[50%] lg:w-[648px] mx-auto text-[#fff] text-center text-[14px] md:text-[28px] font-[300] md:tracking-[-0.56px] mb-[24px] md:mb-[32px]">
          The ultimate app for Nigerian students— connect, learn, and thrive all in one place.
        </div>
        <div
          class="w-fit lg:w-[416px] mx-auto bg-[#fff] rounded-[100px] md:rounded-[119px] py-[5px] pl-[13.5px] pr-[5px] flex items-center space-x-[9px] mb-[48px] md:mb-[45px]">
          <div><img src="/mail.svg" /></div>
          <div class="w-fit lg:pr-[36px]">
            <input placeholder="ojaprincewill@gmail.com" type="email"
              class="text-[#667085] text-[14px] md:text-[18px] md:tracking-[-0.36px] font-[400] leading-[24px] focus:outline-none lg:w-[202px]" />
          </div>
          <div
            class="w-fit bg-[#ffd214] rounded-[100px] md:rounded-[119px] py-[11.5px] px-[14px] md:py-[13.96px] md:px-[16.9px] md:cursor-pointer text-[#7d4ec6] text-[14px] md:text-[16px] font-[500] tracking-[-0.28px] md:tracking-[-0.3335px]">
            Join waitlist
          </div>
        </div>
      </div>
      <!-- picture frame in hero section -->
      <div class="md:px-[30px]">
        <div class="hidden md:block md:w-[70%] lg:w-[888px] mx-auto">
          <img src="/largeframe.png" class="w-full h-full object-cover" />
        </div>
        <div class="md:hidden w-full h-[269.665px]">
          <img src="/smallframe.png" class="w-full h-full object-cover" />
        </div>
      </div>
      <!-- end picture frame in hero section -->
    </div>
    <!-- end hero section -->
    <div class="w-full px-[20px] md:px-[60px] lg:px-[130px]">
      <AboutSaver />
      <FeaturesSaver />
      <WhySaver />
      <HowSaver />
      <FaqSaver />
    </div>
    <!-- end about saver -->
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
</style>
