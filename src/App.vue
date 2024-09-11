<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
@font-face {
  font-family: "BricolageGrotesque";
  src: local("satoshi"), url("./fonts/BricolageGrotesque.ttf");
}

* {
  box-sizing: border-box;
}

html {
  height: 100%;
}

body,
main {
  min-height: 100%;
  font-family: BricolageGrotesque;
  user-select: none;
  -webkit-user-drag: none;
}

body::-webkit-scrollbar {
  width: 3px;
  background: transparent;
}

body::-webkit-scrollbar-track {
  width: fit-content;
  background: transparent;
}

body::-webkit-scrollbar-thumb {
  width: fit-content;
  background: #7D4EC6;
}
</style>
