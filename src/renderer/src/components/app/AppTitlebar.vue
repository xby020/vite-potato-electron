<template>
  <div
    class="w-full h-32px flex justify-between items-center bg-stone-600 dragable"
    style="-webkit-app-region: drag"
  >
    <!-- left -->
    <div class="flex-auto h-full flex items-center gap-2 px-2">
      <!-- logo -->
      <div class="h-full aspect-ratio-square flex items-center">
        <img :src="icons" class="w-20px h-20px object-contain" />
      </div>
      <!-- title -->
      <n-text class="font-semibold">Vite Potato Electron</n-text>
    </div>

    <!-- middle -->
    <div class="flex-auto"></div>

    <!-- right -->
    <div class="flex-auto h-full flex justify-end items-center">
      <!-- actions -->
      <div></div>
      <!-- system titlebar -->
      <div class="h-full flex items-center" style="-webkit-app-region: no-drag">
        <!-- 最小化 -->
        <n-popover placement="bottom">
          <template #trigger>
            <div
              class="h-full flex justify-center items-center px-2 transition-all duration-100 ease-in-out hover:bg-light-50/20 cursor-pointer"
              @click="onControl('minimize')"
            >
              <div class="text-lg i-mdi-window-minimize text-light-50"></div>
            </div>
          </template>
          <n-text>最小化</n-text>
        </n-popover>
        <!-- 最大化 -->
        <n-popover placement="bottom">
          <template #trigger>
            <div
              class="h-full flex justify-center items-center px-2 transition-all duration-100 ease-in-out hover:bg-light-50/20 cursor-pointer"
              @click="toggleMaximize"
            >
              <div class="text-lg i-mdi-window-maximize text-light-50"></div>
            </div>
          </template>
          <n-text>最大化</n-text>
        </n-popover>
        <!-- 关闭 -->
        <n-popover placement="bottom">
          <template #trigger>
            <div
              class="h-full flex justify-center items-center px-2 transition-all duration-100 ease-in-out hover:bg-red-800 cursor-pointer"
              @click="onControl('close')"
            >
              <div class="text-lg i-mdi-close text-light-50"></div>
            </div>
          </template>
          <n-text>关闭</n-text>
        </n-popover>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import icons from '@assest/icon.png';

function onControl(str: Parameters<typeof window.api.control>[0]): void {
  window.api.control(str);
}

async function toggleMaximize() {
  const isMaximized = await window.api.isMaximized();
  console.log(isMaximized);
}
</script>

<style scoped></style>
