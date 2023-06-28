<template>
  <NConfigProvider
    :theme="isDark ? darkTheme : undefined"
    :locale="zhCN"
    :date-locale="dateZhCN"
  >
    <app-provider>
      <router-view />
    </app-provider>
  </NConfigProvider>
</template>

<script setup lang="ts">
import { zhCN, dateZhCN, darkTheme } from 'naive-ui';

const isDark = useDark();
</script>

<style scoped>
@font-face {
  font-family: Emoji;
  src: local('Apple Color Emojiji'), local('Segoe UI Emoji'),
    local('Segoe UI Symbol'), local('Noto Color Emoji');
  unicode-range: U+1F000-1F644, U+203C-3299;
}

body {
  font-family: system-ui, —apple-system, Segoe UI, Rototo, Emoji, Helvetica,
    Arial, sans-serif;
  margin: 0;
  padding: 0;
}
</style>
