import { RouteRecordRaw } from 'vue-router';
import MainLayout from '@renderer/layout/MainLayout.vue';

export const ErrorPageRoute: RouteRecordRaw = {
  name: 'ErrorPage',
  path: '/:path(.*)*',
  component: MainLayout,
  meta: {
    title: '错误页面',
  },
  children: [
    {
      path: '/:path(.*)*',
      name: 'Error404',
      component: () => import('@pages/error/Error404.vue'),
      meta: {
        title: '404',
      },
    },
  ],
};
