<template>
  <n-loading-bar-provider :container-style="providerStyle">
    <n-dialog-provider>
      <DialogContent />
      <n-notification-provider :container-style="providerStyle">
        <NotificationContent />
        <n-message-provider :container-style="providerStyle">
          <MsgContent />
          <slot name="default"></slot>
        </n-message-provider>
      </n-notification-provider>
    </n-dialog-provider>
    <LoadingBarContent />
  </n-loading-bar-provider>
</template>

<script lang="ts" setup>
import MsgContent from './MsgContent.vue';
import DialogContent from './DialogContent.vue';
import LoadingBarContent from './LoadingBarContent.vue';
import NotificationContent from './NotificationContent.vue';

const providerStyle = 'padding-top:32px';
</script>
