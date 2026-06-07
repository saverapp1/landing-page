<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useParallax } from '@/composables/useAnimation'
import StoreModal from './StoreModal.vue'

const date = new Date()
const year = date.getFullYear()

const footerRef = ref<HTMLElement | null>(null)
const showStore = ref(false)

useParallax(footerRef, { y: -20, start: 'top bottom', end: 'bottom top' })
</script>

<template>
  <div ref="footerRef" class="bg-[#7d4ec6] w-full pt-[40px] pb-[24px] px-[20px] md:pt-[72px] md:pb-[28px] md:px-[60px] lg:px-[130px]">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-[40px] md:gap-[24px] mb-[36px] md:mb-[48px]">
      <div class="md:col-span-4">
        <RouterLink to="/"><img src="/footerbig.svg" class="hidden md:block" /></RouterLink>
        <RouterLink to="/"><img src="/footersmall.svg" class="md:hidden mb-[16px]" /></RouterLink>
        <div class="text-[#fff] text-[14px] md:text-[16px] font-[300] leading-[24px] md:leading-[28px] mt-[16px] md:mt-[24px] max-w-[320px]">
          The all-in-one platform designed for Nigerian university students to connect, learn, and thrive.
        </div>
      </div>

      <div class="md:col-span-2 md:col-start-6">
        <div class="text-[#ffce35] text-[12px] md:text-[13px] font-[600] uppercase tracking-[1px] mb-[16px] md:mb-[20px]">Pages</div>
        <div class="space-y-[12px] md:space-y-[14px]">
          <RouterLink to="/"
            class="block text-[#fff] text-[14px] md:text-[15px] font-[400] leading-[20px] hover:text-[#ffce35] transition-colors duration-200">
            Home</RouterLink>
          <RouterLink to="/about"
            class="block text-[#fff] text-[14px] md:text-[15px] font-[400] leading-[20px] hover:text-[#ffce35] transition-colors duration-200">
            About</RouterLink>
          <RouterLink to="/faq"
            class="block text-[#fff] text-[14px] md:text-[15px] font-[400] leading-[20px] hover:text-[#ffce35] transition-colors duration-200">
            FAQ</RouterLink>
          <RouterLink to="/contact"
            class="block text-[#fff] text-[14px] md:text-[15px] font-[400] leading-[20px] hover:text-[#ffce35] transition-colors duration-200">
            Contact</RouterLink>
        </div>
      </div>

      <div class="md:col-span-2">
        <div class="text-[#ffce35] text-[12px] md:text-[13px] font-[600] uppercase tracking-[1px] mb-[16px] md:mb-[20px]">Legal</div>
        <div class="space-y-[12px] md:space-y-[14px]">
          <RouterLink to="/terms"
            class="block text-[#fff] text-[14px] md:text-[15px] font-[400] leading-[20px] hover:text-[#ffce35] transition-colors duration-200">
            Terms of Service</RouterLink>
          <RouterLink to="/privacy"
            class="block text-[#fff] text-[14px] md:text-[15px] font-[400] leading-[20px] hover:text-[#ffce35] transition-colors duration-200">
            Privacy Policy</RouterLink>
        </div>
      </div>

      <div class="md:col-span-3">
        <div class="text-[#ffce35] text-[12px] md:text-[13px] font-[600] uppercase tracking-[1px] mb-[16px] md:mb-[20px]">Get the App</div>
        <div class="text-[#fff] text-[14px] md:text-[15px] font-[300] leading-[24px] md:leading-[26px] mb-[20px]">
          Download Saver on iOS and Android.
        </div>
        <button @click="showStore = true"
          class="flex items-center space-x-[10px] bg-[#fff] rounded-[100px] py-[11px] px-[20px] hover:bg-[#f3efff] transition-colors duration-200 group cursor-pointer">
          <svg class="w-[18px] h-[18px] text-[#7d4ec6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          <span class="text-[#7d4ec6] text-[14px] md:text-[15px] font-[600]">Download app</span>
        </button>
      </div>
    </div>

    <div class="border-t border-[rgba(255,255,255,0.15)] pt-[20px] md:pt-[24px] flex flex-col md:flex-row md:items-center md:justify-between space-y-[12px] md:space-y-[0px]">
      <div class="text-[#fff] text-[13px] md:text-[14px] font-[300] opacity-[0.7]">
        &copy; {{ year }} Saver. All rights reserved.
      </div>
      <div class="flex items-center space-x-[20px]">
        <a href="#" class="text-[#fff] text-[13px] md:text-[14px] font-[300] opacity-[0.7] hover:opacity-[1] hover:text-[#ffce35] transition-all duration-200">Privacy</a>
        <a href="#" class="text-[#fff] text-[13px] md:text-[14px] font-[300] opacity-[0.7] hover:opacity-[1] hover:text-[#ffce35] transition-all duration-200">Terms</a>
      </div>
    </div>
    <StoreModal :show="showStore" @close="showStore = false" />
  </div>
</template>
