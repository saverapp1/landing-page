<script setup lang="ts">
import HeaderView from '@/components/HeaderView.vue';
import FooterPage from '@/components/FooterPage.vue';
</script>

<template>
  <main>
    <div class="hero w-full h-full mb-[68px] md:mb-[116px]">
      <HeaderView />
      <div class="px-[20px] md:px-[0px]">
        <div
          class="w-full mx-auto md:w-[60%] lg:w-[676px] text-center text-[#fff] text-[24px] md:text-[54px] font-[800] tracking-[-0.48px] md:tracking-[-1.08px] mb-[20px] md:mb-[24px] md:leading-[58px]">
          Privacy <span class="text-[#ffd214]">Policy</span>
        </div>
        <div
          class="w-full md:w-[50%] lg:w-[648px] mx-auto text-[#fff] text-center text-[14px] md:text-[28px] font-[300] md:tracking-[-0.56px] mb-[24px] md:mb-[32px]">
          How we collect, use, and protect your information.
        </div>
        <div class="flex justify-center">
          <div
            class="about_tag w-fit rounded-[100px] py-[8px] px-[16px] text-[#7d4ec6] text-[12px] md:text-[14px] font-[500]">
            Last updated: June 2026
          </div>
        </div>
      </div>
    </div>

    <div class="w-full px-[20px] md:px-[60px] lg:px-[130px] pb-[80px] md:pb-[120px]">
      <div class="max-w-[860px] mx-auto space-y-[20px]">
        <div v-for="(section, i) in sections" :key="i"
          class="bg-[#f3efff] rounded-[12px] p-[20px] md:p-[28px] border border-[#f1f1f3]">
          <div class="flex items-start space-x-[16px]">
            <div
              class="w-[32px] h-[32px] md:w-[40px] md:h-[40px] rounded-full bg-[#7d4ec6] flex items-center justify-center flex-shrink-0 mt-[2px]">
              <span class="text-[#fff] text-[14px] md:text-[18px] font-[700]">{{ i + 1 }}</span>
            </div>
            <div class="flex-1">
              <h2
                class="text-[#1e1f24] md:text-[#101828] text-[18px] md:text-[24px] font-[600] tracking-[-0.36px] md:tracking-[-0.48px] mb-[8px]">
                {{ section.title }}
              </h2>
              <p class="text-[#565656] text-[15px] md:text-[18px] font-[400] tracking-[-0.3px] md:tracking-[-0.36px] leading-[26px] md:leading-[32px]">
                {{ section.content }}
              </p>
            </div>
          </div>
        </div>

        <div
          class="bg-[#fff] rounded-[12px] p-[20px] md:p-[28px] border border-[#f1f1f3] text-center">
          <div
            class="text-[#565656] text-[15px] md:text-[18px] font-[400] tracking-[-0.3px] md:tracking-[-0.36px] leading-[26px] md:leading-[32px]">
            Have questions about your privacy? Reach out to us at
            <span class="text-[#7d4ec6] font-[600]">privacy@saverapp.com</span>
          </div>
        </div>
      </div>
    </div>

    <FooterPage />
  </main>
</template>

<script lang="ts">
export default {
  data() {
    return {
      sections: [
        {
          title: "Information We Collect",
          content: "We collect information you provide directly, such as your name, email address, institution details, and profile information. We also collect usage data to improve your experience."
        },
        {
          title: "How We Use Your Information",
          content: "Your information is used to provide, maintain, and improve Saver's services—including marketplace listings, virtual appointments, social features, and campus news updates."
        },
        {
          title: "Data Sharing",
          content: "We do not sell your personal data. We may share anonymized data with partner institutions and service providers who help operate the App under strict confidentiality agreements."
        },
        {
          title: "Data Security",
          content: "We implement industry-standard security measures to protect your data. However, no method of transmission over the internet is 100% secure."
        },
        {
          title: "Your Rights",
          content: "You have the right to access, update, or delete your personal information at any time through your account settings. You may also contact us to exercise these rights."
        },
        {
          title: "Cookies",
          content: "We use cookies and similar tracking technologies to enhance your experience. You can manage cookie preferences in your browser settings."
        },
        {
          title: "Third-Party Links",
          content: "The App may contain links to third-party websites. We are not responsible for their privacy practices and encourage you to review their policies."
        },
        {
          title: "Updates to This Policy",
          content: "We may update this policy periodically. Changes will be posted in the App, and continued use after updates signifies your acceptance."
        }
      ]
    }
  }
}
</script>

<style scoped>
.hero {
  background: url('/saverbg.png');
  background-repeat: no-repeat;
  background-position: 100% 100%;
  background-size: cover;
}

.about_tag {
  border: 1px solid rgba(24, 24, 27, 0.06);
  background: rgba(250, 250, 250, 0.98);
  box-shadow: 0px 1px 0.5px 0px rgba(24, 24, 27, 0.05);
}
</style>
