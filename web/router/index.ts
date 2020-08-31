import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Gallery from '@/features/gallery/gallery-view.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Gallery
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
