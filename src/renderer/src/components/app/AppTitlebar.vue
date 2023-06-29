<template>
  <div
    class="w-full h-32px flex justify-between items-center bg-stone-600 anime"
    :class="isFocus ? '' : 'filter backdrop-filter brightness-50 grayscale-50'"
    style="-webkit-app-region: drag"
  >
    <!-- left -->
    <div class="flex-auto h-full flex items-center gap-2 px-2">
      <!-- logo -->
      <div class="h-full overflow-hidden flex items-center">
        <img v-if="logo" :src="icons" class="w-20px h-20px object-contain" />
      </div>
    </div>

    <!-- middle -->
    <div :class="titlePlacement">
      <!-- title -->
      <n-text class="font-semibold text-lg">Vite Potato Electron</n-text>
    </div>

    <!-- right -->
    <div class="flex-auto h-full flex justify-end items-center">
      <!-- actions -->
      <div></div>
      <!-- system titlebar -->
      <div class="h-full flex items-center" style="-webkit-app-region: no-drag">
        <!-- 窗口置顶 -->
        <n-popover placement="bottom">
          <template #trigger>
            <div
              class="h-full flex justify-center items-center px-2 transition-all duration-100 ease-in-out hover:bg-light-50/20 cursor-pointer"
              @click="toggleWindowTop"
            >
              <div
                class="text-lg i-mdi-pin"
                :class="isTop ? 'text-sky-400' : 'text-light-50'"
              ></div>
            </div>
          </template>
          <n-text>窗口置顶</n-text>
        </n-popover>
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
              <div
                class="text-lg text-light-50"
                :class="
                  isMaximized ? 'i-mdi-window-restore' : 'i-mdi-window-maximize'
                "
              ></div>
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

// logo fixed
const logo = ref(false);
onMounted(() => {
  setTimeout(() => {
    logo.value = true;
  }, 300);
});

// title
const isFocus = useWindowFocus();
const { width } = useWindowSize();
const titlePlacement = computed(() => {
  if (width.value < 768) {
    return 'flex-auto flex justify-start items-center truncate';
  }
  return 'absolute w-full flex justify-center items-center';
});

// system titlebar control
function onControl(str: Parameters<typeof window.api.control>[0]): void {
  window.api.control(str);
}

// isMaximized
const isMaximized = ref(false);
async function toggleMaximize() {
  if (isMaximized.value) {
    window.api.control('unmaximize');
  } else {
    window.api.control('maximize');
  }
  isMaximized.value = await window.api.isMaximized();
}

// isTop
const isTop = ref(false);
async function toggleWindowTop() {
  if (isTop.value) {
    onControl('untop');
  } else {
    onControl('top');
  }
  isTop.value = await window.api.isTop();
}
</script>

<style lang="pcss" scoped></style>
