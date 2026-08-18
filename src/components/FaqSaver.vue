<script setup lang="ts">
import { ref } from 'vue'
import gsap from 'gsap'
import { useStaggerFade } from '@/composables/useAnimation'

const faqone = ref(true)
const faqtwo = ref(false)
const faqthree = ref(false)
const faqfour = ref(false)

const faqContainer = ref<HTMLElement | null>(null)

useStaggerFade(faqContainer, { stagger: 0.12, y: 40, start: 'top 85%' })

const toggleOne = () => {
 faqone.value = !faqone.value
}
const toggleTwo = () => {
 faqtwo.value = !faqtwo.value
}
const toggleThree = () => {
 faqthree.value = !faqthree.value
}
const toggleFour = () => {
 faqfour.value = !faqfour.value
}

const animateAnswer = (el: HTMLElement | null, open: boolean) => {
  if (!el) return
  gsap.to(el, {
    height: open ? 'auto' : 0,
    opacity: open ? 1 : 0,
    duration: 0.4,
    ease: 'power2.inOut'
  })
}
</script>

<template>
 <div class="w-full pb-[44px] md:pb-[74px]">
  <div
   class="about_tag w-fit rounded-[100px] py-[12px] px-[14px] text-[#7d4ec6] text-[10px] md:text-[16px] font-[500] md:tracking-[-0.32px] uppercase mb-[13px] md:mb-[12px]">
   know more about savera
  </div>
  <div
   class="text-[#1e1f24] md:text-[#101828] text-[22px] md:text-[44px] font-[600] tracking-[-0.44px] md:tracking-[-0.8px] mb-[24px] md:mb-[44px] md:leading-[52px]">
   Frequently <span class="text-[#ffd214]">Asked Questions</span>
  </div>
  <div ref="faqContainer">
   <div class="w-full bg-[#f3efff] rounded-[8px] p-[12px] md:py-[14px] md:px-[25px] mb-[17px] md:mb-[14px] hover:shadow-md hover:shadow-[rgba(125,78,198,0.1)] transition-shadow duration-300">
    <div @click="toggleOne" class="flex items-center justify-between mb-[12px] md:mb-[8px] cursor-pointer">
     <div
      class="w-[80%] text-[#7d4ec6] text-[18px] md:text-[23px] font-[500] md:leading-[35px] md:tracking-[-0.46px] tracking-[-0.36px]">
      What is Savera about?
     </div>
     <div>
      <img src="/arrowdown.svg" :class="faqone ? 'rotate-180' : ''" class="transition-transform duration-300" />
     </div>
    </div>
    <Transition name="faq">
     <div v-show="faqone"
      class="text-[#7d4ec6] text-[16px] md:text-[19px] font-[400] tracking-[-0.32px] md:tracking-[-0.38px] md:leading-[30px] overflow-hidden">
      Savera is an all-in-one app designed for Nigerian university students. It helps you
      buy and sell items, connect with peers, schedule appointments with lecturers,
      and much more.
     </div>
    </Transition>
   </div>
   <div class="w-full bg-[#f3efff] rounded-[8px] p-[12px] md:py-[14px] md:px-[25px] mb-[17px] md:mb-[14px] hover:shadow-md hover:shadow-[rgba(125,78,198,0.1)] transition-shadow duration-300">
    <div @click="toggleTwo" class="flex items-center justify-between mb-[12px] md:mb-[8px] cursor-pointer">
     <div
      class="w-[80%] text-[#7d4ec6] text-[18px] md:text-[23px] font-[500] md:leading-[35px] md:tracking-[-0.46px] tracking-[-0.36px]">
      How do I buy or sell items on Savera?
     </div>
     <div>
      <img src="/arrowdown.svg" :class="faqtwo ? 'rotate-180' : ''" class="transition-transform duration-300" />
     </div>
    </div>
    <Transition name="faq">
     <div v-show="faqtwo"
      class="text-[#7d4ec6] text-[16px] md:text-[19px] font-[400] tracking-[-0.32px] md:tracking-[-0.38px] md:leading-[30px] overflow-hidden">
      Simply create a listing in the marketplace section of the app or browse items for sale by other students. All
      transactions are secure to ensure safe exchanges.
     </div>
    </Transition>
   </div>
   <div class="w-full bg-[#f3efff] rounded-[8px] p-[12px] md:py-[14px] md:px-[25px] mb-[17px] md:mb-[14px] hover:shadow-md hover:shadow-[rgba(125,78,198,0.1)] transition-shadow duration-300">
    <div @click="toggleThree" class="flex items-center justify-between mb-[12px] md:mb-[8px] cursor-pointer">
     <div
      class="w-[80%] text-[#7d4ec6] text-[18px] md:text-[23px] font-[500] md:leading-[35px] md:tracking-[-0.46px] tracking-[-0.36px]">
      How do virtual appointments work?
     </div>
     <div>
      <img src="/arrowdown.svg" :class="faqthree ? 'rotate-180' : ''" class="transition-transform duration-300" />
     </div>
    </div>
    <Transition name="faq">
     <div v-show="faqthree"
      class="text-[#7d4ec6] text-[16px] md:text-[19px] font-[400] tracking-[-0.32px] md:tracking-[-0.38px] md:leading-[30px] overflow-hidden">
      You can easily schedule virtual appointments with your lecturers or university staff through the app, helping you
      manage your academic life.
     </div>
    </Transition>
   </div>
   <div class="w-full bg-[#f3efff] rounded-[8px] p-[12px] md:py-[14px] md:px-[25px] mb-[17px] md:mb-[14px] hover:shadow-md hover:shadow-[rgba(125,78,198,0.1)] transition-shadow duration-300">
    <div @click="toggleFour" class="flex items-center justify-between mb-[12px] md:mb-[8px] cursor-pointer">
     <div
      class="w-[80%] text-[#7d4ec6] text-[18px] md:text-[23px] font-[500] md:leading-[35px] md:tracking-[-0.46px] tracking-[-0.36px]">
      How can I connect with students from other universities?
     </div>
     <div>
      <img src="/arrowdown.svg" :class="faqfour ? 'rotate-180' : ''" class="transition-transform duration-300" />
     </div>
    </div>
    <Transition name="faq">
     <div v-show="faqfour"
      class="text-[#7d4ec6] text-[16px] md:text-[19px] font-[400] tracking-[-0.32px] md:tracking-[-0.38px] md:leading-[30px] overflow-hidden">
      The Inter-University Platform allows you to interact, share resources, and network with students from different
      universities across Nigeria.
     </div>
    </Transition>
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

.faq-enter-active,
.faq-leave-active {
 transition: all 0.35s ease;
}
.faq-enter-from,
.faq-leave-to {
 opacity: 0;
 max-height: 0;
}
.faq-enter-to,
.faq-leave-from {
 opacity: 1;
 max-height: 300px;
}
</style>
