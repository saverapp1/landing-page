<script setup lang="ts">
import { ref } from 'vue'
import MarketPlace from './MarketPlace.vue';
import CampusSafety from './CampusSafety.vue';
import AcademicTool from './AcademicTool.vue';
import UniversityInsight from './UniversityInsight.vue';
import SocialInteraction from './SocialInteraction.vue';

const tabName = ref("MarketPlace")

//views
const MarketPlaceView = ref(true)
const CampusSafetyView = ref(false)
const AcademicToolsView = ref(false)
const UniversityInsightsView = ref(false)
const SocialInteractionView = ref(false)

const changeTab = (tab: string) => {
 tabName.value = tab
}

const openMarketPlace = (tab: string) => {
 changeTab(tab)
 MarketPlaceView.value = true
 CampusSafetyView.value = false
 AcademicToolsView.value = false
 UniversityInsightsView.value = false
 SocialInteractionView.value = false
}

const openCampusSafety = (tab: string) => {
 changeTab(tab)
 MarketPlaceView.value = false
 CampusSafetyView.value = true
 AcademicToolsView.value = false
 UniversityInsightsView.value = false
 SocialInteractionView.value = false
}

const openAcademicTool = (tab: string) => {
 changeTab(tab)
 MarketPlaceView.value = false
 CampusSafetyView.value = false
 AcademicToolsView.value = true
 UniversityInsightsView.value = false
 SocialInteractionView.value = false
}

const openUniversityInsight = (tab: string) => {
 changeTab(tab)
 MarketPlaceView.value = false
 CampusSafetyView.value = false
 AcademicToolsView.value = false
 UniversityInsightsView.value = true
 SocialInteractionView.value = false
}

const openSocial = (tab: string) => {
 changeTab(tab)
 MarketPlaceView.value = false
 CampusSafetyView.value = false
 AcademicToolsView.value = false
 UniversityInsightsView.value = false
 SocialInteractionView.value = true
}
</script>

<template>
 <div class="block w-full">
  <!-- tab selector -->
  <div class="w-full tab overflow-x-scroll mb-[20px]">
   <div class="flex w-fit items-center space-x-[10px] md:space-x-[21px]">
    <div @click="openMarketPlace('MarketPlace')" class="w-[159px] flex items-center space-x-[8px] cursor-pointer">
     <div><img src="/marketplace.svg" /></div>
     <div
      :class='tabName === "MarketPlace" ? "text-[#7d4ec6] text-[16px] md:text-[22px] font-[500] tracking-[-0.32px] md:tracking-[-0.44px]" : "text-[#667085] text-[16px] md:text-[22px] font-[500] tracking-[-0.32px] md:tracking-[-0.44px]"'>
      Marketplace
     </div>
    </div>
    <div @click="openCampusSafety('CampusSafety')" class="w-[187px] flex items-center space-x-[8px] cursor-pointer">
     <div><img src="/campus.svg" /></div>
     <div
      :class='tabName === "CampusSafety" ? "text-[#7d4ec6] text-[16px] md:text-[22px] font-[500] tracking-[-0.32px] md:tracking-[-0.44px]" : "text-[#667085] text-[16px] md:text-[22px] font-[500] tracking-[-0.32px] md:tracking-[-0.44px]"'>
      Campus Safety
     </div>
    </div>
    <div @click="openAcademicTool('AcademicTool')" class="w-[192px] flex items-center space-x-[8px] cursor-pointer">
     <div><img src="/book.svg" /></div>
     <div
      :class='tabName === "AcademicTool" ? "text-[#7d4ec6] text-[16px] md:text-[22px] font-[500] tracking-[-0.32px] md:tracking-[-0.44px]" : "text-[#667085] text-[16px] md:text-[22px] font-[500] tracking-[-0.32px] md:tracking-[-0.44px]"'>
      Academic Tools
     </div>
    </div>
    <div @click="openUniversityInsight('UniversityInsight')"
     class="w-[219px] flex items-center space-x-[8px] cursor-pointer">
     <div><img src="/university.svg" /></div>
     <div
      :class='tabName === "UniversityInsight" ? "text-[#7d4ec6] text-[16px] md:text-[22px] font-[500] tracking-[-0.32px] md:tracking-[-0.44px]" : "text-[#667085] text-[16px] md:text-[22px] font-[500] tracking-[-0.32px] md:tracking-[-0.44px]"'>
      University Insights
     </div>
    </div>
    <div @click="openSocial('SocialInteraction')" class="w-[207px] flex items-center space-x-[8px] cursor-pointer">
     <div><img src="/campus.svg" /></div>
     <div
      :class='tabName === "SocialInteraction" ? "text-[#7d4ec6] text-[16px] md:text-[22px] font-[500] tracking-[-0.32px] md:tracking-[-0.44px]" : "text-[#667085] text-[16px] md:text-[22px] font-[500] tracking-[-0.32px] md:tracking-[-0.44px]"'>
      Social Interaction
     </div>
    </div>
   </div>
  </div>
  <!-- end tab selector -->
  <!-- tab view -->
  <div class="w-full tab h-fit rounded-[24px] border-[2px] border-[#f1f1f3] bg-[#f8fafc] pt-[35px]">
   <MarketPlace v-show="MarketPlaceView" />
   <CampusSafety v-show="CampusSafetyView" />
   <AcademicTool v-show="AcademicToolsView" />
   <UniversityInsight v-show="UniversityInsightsView" />
   <SocialInteraction v-show="SocialInteractionView" />
  </div>
  <!-- end tab view -->
 </div>
</template>

<style>
.tab::-webkit-scrollbar {
 display: none;
}
</style>
