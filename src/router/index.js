
import { createWebHistory, createRouter } from 'vue-router';

import Base from '@/views/base.vue';
import List from '@/views/list.vue';

const routes = [
  { path: '/', redirect: '/base' },
  { path: '/base', component: Base },
  { path: '/list', component: List },
  { path: '/list', component: List },
  {
    path: '/user/:id',
    name: 'user',
    meta: {
      title: '用户详情'
    },
    //component: () => import('@/views/user.vue')
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
