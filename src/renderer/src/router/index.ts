/* eslint-disable @typescript-eslint/no-explicit-any */
import { App } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { ErrorPageRoute } from './constantRoutes';

// Async routes
const modules: any = import.meta.glob('./modules/**/*.ts', { eager: true });

const routeModuleList: RouteRecordRaw[] = [];

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

function sortRoute(a: any, b: any) {
  return (a.meta?.sort || 0) - (b.meta?.sort || 0);
}
routeModuleList.sort(sortRoute);

export const asyncRouteList: RouteRecordRaw[] = [...routeModuleList];

// constant routes
const constantRouteList: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Root',
    redirect: '/home',
    meta: {
      title: '首页',
    },
  },
];

// route
const routes = [...constantRouteList, ...asyncRouteList, ErrorPageRoute];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export function setupRouter(app: App): void {
  app.use(router);
}

export default router;
