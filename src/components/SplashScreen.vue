<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'

const splashRef = ref<HTMLElement | null>(null)
const logoRef = ref<HTMLElement | null>(null)
const barRef = ref<HTMLElement | null>(null)

const emit = defineEmits<{
  finished: []
}>()

onMounted(() => {
  const tl = gsap.timeline()
  tl.fromTo(logoRef.value, { scale: 0.3, opacity: 0, rotation: -15 }, { scale: 1, opacity: 1, rotation: 0, duration: 0.8, ease: 'back.out(1.7)' })
    .to(barRef.value, { width: '100%', duration: 1.2, ease: 'power2.inOut' }, '-=0.3')
    .to(splashRef.value, { opacity: 0, duration: 0.5, ease: 'power2.in' })
    .call(() => emit('finished'))
})
</script>

<template>
  <div ref="splashRef"
    class="fixed inset-0 z-[9999] bg-[#7d4ec6] flex flex-col items-center justify-center">
    <div ref="logoRef" class="mb-[20px] md:mb-[28px]">
      <span class="relative overflow-hidden block w-[166px] h-[47px] md:w-[237px] md:h-[67px]">
        <img
          src="/savera.png"
          class="absolute max-w-none"
          style="width: 142.35%; height: 502.5%; left: -24.63%; top: -185.2%"
        />
      </span>
    </div>
    <div class="w-[160px] md:w-[200px] h-[3px] bg-[rgba(255,255,255,0.2)] rounded-full overflow-hidden">
      <div ref="barRef" class="h-full bg-[#ffd214] rounded-full" style="width: 0%"></div>
    </div>
  </div>
</template>
