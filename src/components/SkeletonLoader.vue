<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  src: string
  alt?: string
  class?: string
  imgClass?: string
}>()

const loaded = ref(false)

function onImgLoad() {
  loaded.value = true
}
</script>

<template>
  <div :class="props.class || ''" class="relative overflow-hidden">
    <div v-if="!loaded"
      class="absolute inset-0 bg-gradient-to-r from-[#e8e0f5] via-[#d4c8ed] to-[#e8e0f5] animate-pulse rounded-[inherit]">
    </div>
    <img :src="props.src" :alt="props.alt || ''" @load="onImgLoad"
      :class="[props.imgClass || '', loaded ? 'opacity-100' : 'opacity-0']"
      class="transition-opacity duration-500" />
  </div>
</template>
