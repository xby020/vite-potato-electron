import { RouteRecordRaw } from 'vue-router';
import MainLayout from '@renderer/layout/MainLayout.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'Home',
    component: MainLayout,
    redirect: '/home/index',
    meta: {
      title: '主页',
    },
    children: [
      {
        path: 'index',
        name: 'HomeIndex',
        component: () => import('@pages/home/Home.vue'),
        meta: {
          title: '数据看板',
        },
      },
    ],
  },
];

export default routes;
