import 'normalize.css';
import './registerServiceWorker';

import { createApp } from 'vue';
import App from './app.vue';

import router from './router';

import ripple from '@/directives/ripple';

export const app = createApp(App);

app
  .use(router)
  .directive('ripple', ripple)
  .mount('#app');
