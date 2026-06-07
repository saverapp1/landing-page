<script setup lang="ts">
import { ref } from 'vue'

const menuOpen = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
 <div class="w-full mb-[40px] md:mb-[0px]">
  <div
   class="flex items-center justify-between w-full top-0 left-0 py-[20px] px-[20px] md:py-[49px] md:px-[60px] lg:px-[128px]">
   <div class="flex items-center space-x-[32px]">
    <RouterLink to="/">
     <img src="/saverbiglogo.svg" class="md:cursor-pointer hidden md:block" />
     <img src="/saverlogo.svg" class="md:cursor-pointer md:hidden" />
    </RouterLink>
    <div class="hidden md:flex items-center space-x-[24px]">
     <RouterLink to="/"
      class="text-[#fff] text-[16px] font-[400] leading-[26px] tracking-[-0.32px] md:cursor-pointer">Home</RouterLink>
     <RouterLink to="/about"
      class="text-[#fff] text-[16px] font-[400] leading-[26px] tracking-[-0.32px] md:cursor-pointer">About</RouterLink>
     <RouterLink to="/terms"
      class="text-[#fff] text-[16px] font-[400] leading-[26px] tracking-[-0.32px] md:cursor-pointer">Terms</RouterLink>
     <RouterLink to="/privacy"
      class="text-[#fff] text-[16px] font-[400] leading-[26px] tracking-[-0.32px] md:cursor-pointer">Privacy</RouterLink>
    </div>
   </div>
   <div class="flex items-center space-x-[12px]">
    <div
     class="hidden md:flex py-[9.5px] px-[12px] space-x-[8px] items-center bg-[#fff] rounded-[100px] border border-[#fff] md:cursor-pointer download_shade">
     <div class="text-[#7d4ec6] text-[16px] md:leading-[26px] font-[500] tracking-[-0.32px]">
      Download app
     </div>
     <div><img src="/download.svg" /></div>
    </div>
    <button @click="toggleMenu" class="md:hidden flex flex-col items-center justify-center w-[40px] h-[40px] relative z-[60]">
     <span
      class="block w-[24px] h-[2.5px] bg-[#fff] rounded-[2px] transition-all duration-300"
      :class="menuOpen ? 'rotate-45 translate-y-[4.5px]' : '-translate-y-[4px]'">
     </span>
     <span
      class="block w-[24px] h-[2.5px] bg-[#fff] rounded-[2px] transition-all duration-300"
      :class="menuOpen ? 'opacity-0' : 'opacity-100'">
     </span>
     <span
      class="block w-[24px] h-[2.5px] bg-[#fff] rounded-[2px] transition-all duration-300"
      :class="menuOpen ? '-rotate-45 -translate-y-[4.5px]' : 'translate-y-[4px]'">
     </span>
    </button>
   </div>
  </div>

  <Transition name="menu">
   <div v-if="menuOpen"
    class="fixed inset-0 z-50 bg-[#7d4ec6] flex flex-col items-center justify-start pt-[80px] px-[20px] md:hidden">
    <div class="w-full mb-[48px]">
     <img src="/footerbig.svg" class="mx-auto" />
    </div>
    <nav class="flex flex-col items-center space-y-[32px] w-full">
     <RouterLink @click="closeMenu" to="/"
      class="text-[#fff] text-[24px] font-[500] tracking-[-0.48px] py-[12px] w-full text-center border-b border-[rgba(255,255,255,0.15)]">Home</RouterLink>
     <RouterLink @click="closeMenu" to="/about"
      class="text-[#fff] text-[24px] font-[500] tracking-[-0.48px] py-[12px] w-full text-center border-b border-[rgba(255,255,255,0.15)]">About</RouterLink>
     <RouterLink @click="closeMenu" to="/terms"
      class="text-[#fff] text-[24px] font-[500] tracking-[-0.48px] py-[12px] w-full text-center border-b border-[rgba(255,255,255,0.15)]">Terms</RouterLink>
     <RouterLink @click="closeMenu" to="/privacy"
      class="text-[#fff] text-[24px] font-[500] tracking-[-0.48px] py-[12px] w-full text-center border-b border-[rgba(255,255,255,0.15)]">Privacy</RouterLink>
     </nav>
     <div @click="closeMenu"
      class="mt-[40px] flex py-[14px] px-[28px] space-x-[10px] items-center bg-[#fff] rounded-[100px] md:cursor-pointer download_shade">
      <div class="text-[#7d4ec6] text-[18px] font-[500] tracking-[-0.36px]">Download app</div>
      <div><img src="/download.svg" /></div>
     </div>
    </div>
  </Transition>
 </div>
</template>

<style scoped>
.download_shade {
 box-shadow: 0px 1px 0.5px 0px rgba(24, 24, 27, 0.05);
}

.menu-enter-active {
 transition: all 0.3s ease-out;
}
.menu-leave-active {
 transition: all 0.25s ease-in;
}
.menu-enter-from {
 opacity: 0;
 transform: translateY(-12px);
}
.menu-leave-to {
 opacity: 0;
 transform: translateY(-12px);
}
</style>
