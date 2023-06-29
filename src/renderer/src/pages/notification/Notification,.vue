<template>
  <div class="w-full h-full flex flex-col gap-8">
    <div class="w-full px-12">
      <n-h2 prefix="primary">
        <n-text>系统级通知</n-text>
      </n-h2>

      <n-space>
        <n-button type="primary" @click="testSystemNotice">系统消息</n-button>
        <n-button type="primary" @click="testWebNotice">web消息</n-button>
      </n-space>
    </div>

    <div class="w-full px-12">
      <n-h2 prefix="primary">
        <n-text>应用级通知</n-text>
      </n-h2>

      <n-space>
        <n-button type="primary" @click="testAppNotice">Notification</n-button>
        <n-button type="info" @click="testDialog">Dialog</n-button>
        <n-button type="success" @click="testMessage">Message</n-button>
        <n-button type="primary" @click="testLoadingStart"
          >loading start</n-button
        >
        <n-button type="warning" @click="testLoadingEnd">loading end</n-button>
        <n-button type="error" @click="testLoadingError"
          >loading error</n-button
        >
      </n-space>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NAvatar, NButton } from 'naive-ui';

function testSystemNotice() {
  window.api.systemNotice({
    title: '测试系统消息',
    body: '这是一条测试系统消息',
  });
}

function testWebNotice() {
  window.api.webNotice({
    title: '测试web消息',
    body: '这是一条测试web消息',
  });
}

function testAppNotice() {
  window.$notification.create({
    title: '测试Notification',
    description: '这里是应用级别的通知',
    content: () => {
      return h('div', [
        h('p', '这里是应用级别的通知,详细配置参考：'),
        h(
          NButton,
          {
            type: 'primary',
            text: true,
            tag: 'a',
            href: 'https://www.naiveui.com/zh-CN/os-theme/components/notification#notification-Injection-Methods',
          },
          'Navie UI Notification',
        ),
      ]);
    },
    meta: '2019-5-27 15:11',
    avatar: () =>
      h(NAvatar, {
        size: 'small',
        round: true,
        src: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
      }),
    onAfterLeave: () => {
      window.$message.success("Wouldn't it be Nice");
    },
  });
}

function testDialog() {
  window.$dialog.info({
    title: '测试Dialog',
    content: '这是一条测试Dialog',
  });
}

function testMessage() {
  window.$message.success('这是一条测试Message');
}

function testLoadingStart() {
  window.$loading.start();
}

function testLoadingEnd() {
  window.$loading.finish();
}

function testLoadingError() {
  window.$loading.error();
}
</script>

<style scoped></style>
