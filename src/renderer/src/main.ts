import { createApp } from 'vue';
import App from './App.vue';
import 'virtual:uno.css';
import { setupStore } from './store/index';
import { setupRouter } from './router';

const app = createApp(App);

function setupApp() {
  setupStore(app);

  setupRouter(app);

  app.mount('#app');
}

setupApp();
