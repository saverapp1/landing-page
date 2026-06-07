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
          Terms of <span class="text-[#ffd214]">Service</span>
        </div>
        <div
          class="w-full md:w-[50%] lg:w-[648px] mx-auto text-[#fff] text-center text-[14px] md:text-[28px] font-[300] md:tracking-[-0.56px] mb-[24px] md:mb-[32px]">
          Please read these terms carefully before using Saver.
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
        <div class="bg-[#f3efff] rounded-[12px] p-[20px] md:p-[28px] border border-[#f1f1f3]"
          v-for="(section, i) in sections" :key="i">
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
            Questions about these terms? Contact us at
            <span class="text-[#7d4ec6] font-[600]">support@saverapp.com</span>
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
          title: "Acceptance of Terms",
          content: "By accessing or using Saver (\"the App\"), you agree to be bound by these Terms of Service. If you do not agree, please do not use the App."
        },
        {
          title: "Eligibility",
          content: "You must be a student of a Nigerian tertiary institution to use Saver. By using the App, you represent that you meet this eligibility requirement."
        },
        {
          title: "Account Registration",
          content: "You are responsible for maintaining the confidentiality of your account credentials. All activities under your account are your responsibility. You agree to provide accurate and complete information during registration."
        },
        {
          title: "Marketplace Conduct",
          content: "When buying or selling items on the marketplace, you agree to abide by all applicable laws. Saver is not liable for any transactions between users but will assist in resolving disputes in good faith."
        },
        {
          title: "Virtual Appointments",
          content: "Saver provides a platform for scheduling appointments with lecturers and staff. We are not responsible for cancellations or rescheduling by either party."
        },
        {
          title: "Prohibited Activities",
          content: "You may not use Saver for any unlawful purpose, to harass others, to post false or misleading information, or to engage in any activity that disrupts the App's functionality."
        },
        {
          title: "Intellectual Property",
          content: "All content, features, and functionality of Saver are owned by Saver and protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without permission."
        },
        {
          title: "Limitation of Liability",
          content: "Saver is provided \"as is\" without warranties of any kind. We are not liable for any damages arising from your use of the App."
        },
        {
          title: "Changes to Terms",
          content: "We reserve the right to modify these terms at any time. Continued use of the App after changes constitutes acceptance of the new terms."
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
