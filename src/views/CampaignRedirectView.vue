<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const slug = ref<string>((route.params.slug as string) || '')
const status = ref<'loading' | 'redirecting' | 'desktop' | 'inactive'>('loading')

const influencerName = ref('Savera Partner')
const campaignName = ref('Campus Ambassador')
const deepLinkUrl = ref('')
const iosStoreUrl = ref('https://apps.apple.com/app/savera/id6738981267')
const androidStoreUrl = ref(
  'https://play.google.com/store/apps/details?id=com.universalsaver.app'
)

const ua = typeof navigator !== 'undefined' ? navigator.userAgent || '' : ''
const isIOS = /iPhone|iPad|iPod/i.test(ua)
const isAndroid = /Android/i.test(ua)
const isMobile = isIOS || isAndroid

const redirectCountdown = ref(2)
const showDirectButton = ref(false)

function openStore() {
  if (isIOS) {
    window.location.href = iosStoreUrl.value
  } else if (isAndroid) {
    window.location.href = androidStoreUrl.value
  }
}

async function handleAttribution() {
  if (!slug.value) {
    status.value = 'inactive'
    return
  }

  try {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 3500)

    const res = await fetch(`https://savers-admin.vercel.app/c/${encodeURIComponent(slug.value)}?format=json`, {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      },
      signal: controller.signal
    })

    clearTimeout(timeoutId)

    if (res.status === 404) {
      status.value = 'inactive'
      return
    }

    if (!res.ok) {
      throw new Error(`Tracking API error: ${res.status}`)
    }

    const payload = await res.json()
    if (payload.success && payload.data) {
      influencerName.value = payload.data.influencerName || influencerName.value
      campaignName.value = payload.data.campaignName || campaignName.value
      deepLinkUrl.value = payload.data.deepLinkUrl || ''
      iosStoreUrl.value = payload.data.iosStoreUrl || iosStoreUrl.value
      androidStoreUrl.value = payload.data.androidStoreUrl || androidStoreUrl.value

      if (isMobile) {
        status.value = 'redirecting'
        // Attempt deep link claim first
        if (deepLinkUrl.value) {
          window.location.href = deepLinkUrl.value
        }
        // Fallback to store
        setTimeout(() => {
          showDirectButton.value = true
          openStore()
        }, 1200)
      } else {
        status.value = 'desktop'
      }
    } else {
      status.value = 'inactive'
    }
  } catch (err) {
    console.warn('[Tracking] Tracking fetch fallback:', err)
    if (isMobile) {
      status.value = 'redirecting'
      showDirectButton.value = true
      openStore()
    } else {
      status.value = 'desktop'
    }
  }
}

onMounted(() => {
  handleAttribution()
})
</script>

<template>
  <div class="min-h-screen bg-[#0d0918] text-[#ffffff] flex flex-col justify-between items-center relative overflow-hidden px-[20px] py-[32px] selection:bg-[#7d4ec6]">
    <!-- Ambient Background Glows -->
    <div class="absolute -top-[120px] -left-[120px] w-[340px] h-[340px] bg-[#7d4ec6]/25 rounded-full blur-[100px] pointer-events-none"></div>
    <div class="absolute -bottom-[120px] -right-[120px] w-[340px] h-[340px] bg-[#ffd214]/15 rounded-full blur-[100px] pointer-events-none"></div>

    <!-- Header Logo -->
    <header class="w-full max-w-[560px] flex items-center justify-between z-10">
      <router-link to="/" class="flex items-center space-x-[10px] group transition-opacity hover:opacity-85">
        <span class="relative overflow-hidden block w-[130px] h-[36px]">
          <img
            src="/savera.png"
            alt="Savera"
            class="absolute max-w-none"
            style="width: 142.35%; height: 502.5%; left: -24.63%; top: -185.2%"
          />
        </span>
      </router-link>

      <router-link
        to="/"
        class="text-[13px] text-[#cbd5e1] hover:text-[#ffd214] font-[500] transition-colors"
      >
        Visit Home &rarr;
      </router-link>
    </header>

    <!-- Content Card -->
    <main class="w-full max-w-[480px] my-auto z-10">
      <!-- State 1: Mobile Redirecting / Loading -->
      <div
        v-if="status === 'loading' || status === 'redirecting'"
        class="bg-[#171227]/90 border border-[rgba(255,255,255,0.08)] rounded-[28px] p-[36px] md:p-[44px] text-center shadow-2xl backdrop-blur-xl"
      >
        <div class="relative w-[72px] h-[72px] mx-auto mb-[28px]">
          <div class="absolute inset-0 rounded-full border-4 border-[#7d4ec6]/20"></div>
          <div class="absolute inset-0 rounded-full border-4 border-[#ffd214] border-t-transparent animate-spin"></div>
          <div class="w-full h-full rounded-full flex items-center justify-center">
            <span class="text-[#ffd214] text-[20px] font-bold">S</span>
          </div>
        </div>

        <h1 class="text-[22px] md:text-[26px] font-[800] tracking-[-0.4px] mb-[10px]">
          Opening Savera...
        </h1>
        <p class="text-[#94a3b8] text-[15px] leading-[1.6] mb-[28px]">
          Connecting you to {{ influencerName }}'s invitation on the {{ isIOS ? 'App Store' : isAndroid ? 'Google Play' : 'app' }}.
        </p>

        <div v-if="showDirectButton" class="pt-[4px]">
          <button
            @click="openStore"
            class="w-full py-[14px] px-[20px] bg-gradient-to-r from-[#7d4ec6] to-[#6032a8] hover:from-[#8d5ed6] hover:to-[#7042b8] text-[#ffffff] font-[700] text-[15px] rounded-[16px] shadow-lg shadow-[#7d4ec6]/30 transition-all cursor-pointer"
          >
            Open {{ isIOS ? 'App Store' : 'Google Play' }} Directly
          </button>
        </div>
      </div>

      <!-- State 2: Desktop Invite Landing View -->
      <div
        v-else-if="status === 'desktop'"
        class="bg-[#171227]/90 border border-[rgba(255,255,255,0.08)] rounded-[28px] p-[32px] md:p-[40px] shadow-2xl backdrop-blur-xl text-center"
      >
        <!-- Campaign Badge -->
        <div class="inline-flex items-center gap-[6px] px-[14px] py-[6px] rounded-full bg-[#7d4ec6]/20 border border-[#7d4ec6]/40 text-[#ffd214] text-[12px] font-[700] uppercase tracking-wider mb-[20px]">
          <span class="w-[6px] h-[6px] rounded-full bg-[#ffd214] animate-pulse"></span>
          {{ campaignName }}
        </div>

        <h1 class="text-[26px] md:text-[32px] font-[800] tracking-[-0.5px] leading-[1.25] mb-[12px]">
          {{ influencerName }} invites you to <span class="text-[#ffd214]">Savera</span>
        </h1>

        <p class="text-[#94a3b8] text-[15px] leading-[1.6] mb-[32px]">
          The all-in-one university super app. Buy, sell, study, and connect with your campus community.
        </p>

        <!-- Store Buttons -->
        <div class="space-y-[12px] mb-[24px]">
          <!-- App Store -->
          <a
            :href="iosStoreUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="w-full flex items-center space-x-[14px] py-[14px] px-[18px] rounded-[16px] bg-[#241c3b] hover:bg-[#2e234c] border border-[rgba(255,255,255,0.06)] hover:border-[#7d4ec6]/50 transition-all duration-200 group text-left cursor-pointer"
          >
            <div class="w-[42px] h-[42px] rounded-[12px] bg-[#7d4ec6] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
              <img src="/appstore.svg" alt="App Store" class="w-[20px] h-[20px] filter brightness-0 invert" />
            </div>
            <div class="flex-1">
              <div class="text-[#94a3b8] text-[11px] font-[400] leading-[14px]">Download on the</div>
              <div class="text-[#ffffff] text-[16px] font-[700] group-hover:text-[#ffd214] transition-colors">App Store</div>
            </div>
            <svg class="w-[18px] h-[18px] text-[#7d4ec6] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          <!-- Google Play -->
          <a
            :href="androidStoreUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="w-full flex items-center space-x-[14px] py-[14px] px-[18px] rounded-[16px] bg-[#241c3b] hover:bg-[#2e234c] border border-[rgba(255,255,255,0.06)] hover:border-[#7d4ec6]/50 transition-all duration-200 group text-left cursor-pointer"
          >
            <div class="w-[42px] h-[42px] rounded-[12px] bg-[#7d4ec6] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
              <img src="/playstore.svg" alt="Google Play" class="w-[20px] h-[20px] filter brightness-0 invert" />
            </div>
            <div class="flex-1">
              <div class="text-[#94a3b8] text-[11px] font-[400] leading-[14px]">Get it on</div>
              <div class="text-[#ffffff] text-[16px] font-[700] group-hover:text-[#ffd214] transition-colors">Google Play</div>
            </div>
            <svg class="w-[18px] h-[18px] text-[#7d4ec6] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        <p class="text-[13px] text-[#64748b]">
          Scan or open this link on your phone to install directly with attribution.
        </p>
      </div>

      <!-- State 3: Inactive / Expired Link -->
      <div
        v-else-if="status === 'inactive'"
        class="bg-[#171227]/90 border border-[rgba(255,255,255,0.08)] rounded-[28px] p-[36px] md:p-[44px] shadow-2xl backdrop-blur-xl text-center"
      >
        <div class="w-[64px] h-[64px] mx-auto mb-[20px] rounded-full bg-[#f43f5e]/15 border border-[#f43f5e]/30 flex items-center justify-center text-[#f43f5e]">
          <svg class="w-[30px] h-[30px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>

        <h1 class="text-[22px] md:text-[26px] font-[800] tracking-[-0.4px] mb-[10px]">
          Campaign Link Inactive
        </h1>

        <p class="text-[#94a3b8] text-[15px] leading-[1.6] mb-[28px]">
          This promotional tracking link is currently paused or expired. You can still download Savera directly or explore our campus platform.
        </p>

        <div class="space-y-[10px]">
          <router-link
            to="/"
            class="block w-full py-[14px] px-[20px] bg-gradient-to-r from-[#7d4ec6] to-[#6032a8] hover:from-[#8d5ed6] hover:to-[#7042b8] text-[#ffffff] font-[700] text-[15px] rounded-[16px] shadow-lg shadow-[#7d4ec6]/30 transition-all"
          >
            Visit Savera Home
          </router-link>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="w-full max-w-[560px] text-center text-[#64748b] text-[12px] z-10">
      Universal Saver Inc. &copy; {{ new Date().getFullYear() }} &bull; All Rights Reserved
    </footer>
  </div>
</template>

<style scoped>
/* Scoped styles inherit global typography and tailwind classes */
</style>
