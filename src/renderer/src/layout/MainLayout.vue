<template>
  <div
    class="w-screen h-screen bg-stone-800 flex flex-col rounded-xl shadow-2xl shadow-dark-400 overflow-hidden"
  >
    <app-titlebar></app-titlebar>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
