<script setup lang="ts">
import { ref, watch } from 'vue'
import gsap from 'gsap'

const props = defineProps<{ show: boolean }>()
const emit = defineEmits<{ close: [] }>()

const backdrop = ref<HTMLElement | null>(null)
const panel = ref<HTMLElement | null>(null)

watch(() => props.show, (val) => {
  if (val) {
    document.body.style.overflow = 'hidden'
    gsap.fromTo(backdrop.value, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: 'power2.out' })
    gsap.fromTo(panel.value, { y: 50, opacity: 0, scale: 0.92 }, { y: 0, opacity: 1, scale: 1, duration: 0.45, ease: 'back.out(1.7)' })
  } else {
    document.body.style.overflow = ''
  }
})

function close() {
  document.body.style.overflow = ''
  gsap.to(backdrop.value, { opacity: 0, duration: 0.2 })
  gsap.to(panel.value, { y: 30, opacity: 0, scale: 0.95, duration: 0.25, ease: 'power2.in', onComplete: () => emit('close') })
}

function goAppStore() {
  window.open('https://apps.apple.com', '_blank')
  close()
}

function goPlayStore() {
  window.open('https://play.google.com/store', '_blank')
  close()
}
</script>

<template>
  <Teleport to="body">
    <div v-if="show" ref="backdrop" @click.self="close"
      class="fixed inset-0 z-[9999] flex items-center justify-center bg-[rgba(30,31,36,0.6)] backdrop-blur-sm px-[20px] py-[40px]">
      <div ref="panel" class="bg-[#fff] rounded-[24px] w-full max-w-[400px] shadow-2xl overflow-hidden relative">
        <div class="bg-gradient-to-br from-[#7d4ec6] to-[#5a2d9e] px-[32px] md:px-[40px] pt-[36px] md:pt-[44px] pb-[48px] md:pb-[56px] text-center relative">
          <button @click="close"
            class="absolute top-[16px] right-[16px] w-[32px] h-[32px] rounded-full bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.35)] flex items-center justify-center transition-all duration-200 cursor-pointer backdrop-blur-sm">
            <svg class="w-[16px] h-[16px] text-[#fff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div class="w-[60px] h-[60px] mx-auto mb-[16px] rounded-full bg-[rgba(255,255,255,0.15)] flex items-center justify-center backdrop-blur-sm">
            <svg class="w-[28px] h-[28px] text-[#fff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div class="text-[#fff] text-[22px] md:text-[26px] font-[700] tracking-[-0.44px] md:tracking-[-0.52px] mb-[6px]">Download Saver</div>
          <div class="text-[rgba(255,255,255,0.75)] text-[14px] md:text-[15px] font-[400]">Choose your platform to get started</div>
        </div>

        <div class="px-[24px] md:px-[32px] pb-[32px] md:pb-[40px] -mt-[24px] relative z-10">
          <div class="bg-[#fff] rounded-[16px] shadow-lg shadow-[rgba(125,78,198,0.1)] p-[16px] space-y-[12px]">
            <button @click="goAppStore"
              class="w-full flex items-center space-x-[14px] py-[14px] px-[16px] rounded-[12px] bg-[#f8f6ff] hover:bg-[#f0ebff] border border-[rgba(125,78,198,0.08)] hover:border-[rgba(125,78,198,0.25)] transition-all duration-200 group cursor-pointer">
              <div class="w-[44px] h-[44px] rounded-[10px] bg-[#7d4ec6] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                <img src="/appstore.svg" class="w-[22px] h-[22px]" style="filter: brightness(0) invert(1);" />
              </div>
              <div class="text-left flex-1">
                <div class="text-[#667085] text-[11px] font-[400] leading-[14px]">Download on the</div>
                <div class="text-[#1e1f24] text-[16px] font-[600] group-hover:text-[#7d4ec6] transition-colors">App Store</div>
              </div>
              <svg class="w-[18px] h-[18px] text-[#7d4ec6] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </button>

            <button @click="goPlayStore"
              class="w-full flex items-center space-x-[14px] py-[14px] px-[16px] rounded-[12px] bg-[#f8f6ff] hover:bg-[#f0ebff] border border-[rgba(125,78,198,0.08)] hover:border-[rgba(125,78,198,0.25)] transition-all duration-200 group cursor-pointer">
              <div class="w-[44px] h-[44px] rounded-[10px] bg-[#7d4ec6] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                <img src="/playstore.svg" class="w-[22px] h-[22px]" style="filter: brightness(0) invert(1);" />
              </div>
              <div class="text-left flex-1">
                <div class="text-[#667085] text-[11px] font-[400] leading-[14px]">Get it on</div>
                <div class="text-[#1e1f24] text-[16px] font-[600] group-hover:text-[#7d4ec6] transition-colors">Google Play</div>
              </div>
              <svg class="w-[18px] h-[18px] text-[#7d4ec6] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </button>
          </div>

          <div class="text-center mt-[16px]">
            <button @click="close" class="text-[#667085] text-[13px] font-[400] hover:text-[#7d4ec6] transition-colors cursor-pointer">Maybe later</button>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>
