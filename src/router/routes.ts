import { lazy } from 'react';
import { IRoute } from '@/typings';

// 页面路由配置
export default [
  {
    path: '/home',
    name: 'home',
    title: '首页',
    component: lazy(() => import('@/pages/home')),
    meta: {}
  },
  {
    path: '/about',
    name: 'about',
    title: '关于',
    component: lazy(() => import('@/pages/about')),
    meta: {}
  }
] as IRoute[];
