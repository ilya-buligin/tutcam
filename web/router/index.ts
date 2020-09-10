import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Gallery from '@/features/gallery/gallery-view.vue';
import PlaceCreation from '@/features/place-creation/place-creation-view.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/new',
    name: 'PlaceCreation',
    component: PlaceCreation
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
