<template>
  <NConfigProvider :theme="isDark ? darkTheme : undefined">
    <div
      class="h-screen w-screen bg-dark-400/60 blur-lg filter backdrop-filter"
      style="-webkit-app-region: drag"
    ></div>
  </NConfigProvider>
</template>

<script setup lang="ts">
import { darkTheme } from 'naive-ui';

const isDark = useDark();
</script>

<style scoped>
@font-face {
  font-family: Emoji;
  src: local('Apple Color Emojiji'), local('Segoe UI Emoji'), local('Segoe UI Symbol'),
    local('Noto Color Emoji');
  unicode-range: U+1F000-1F644, U+203C-3299;
}

body {
  font-family: system-ui, —apple-system, Segoe UI, Rototo, Emoji, Helvetica, Arial, sans-serif;
}
</style>
