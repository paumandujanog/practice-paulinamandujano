import { createApp } from 'vue'
import App from './App.vue';
import router from './router';
import { connect } from '../database/database';

createApp(App).use(router).mount('#app')

async function start() {
    await connect();

    const app = createApp(App);
    app.use(router);
    app.mount('#app');
}

start();