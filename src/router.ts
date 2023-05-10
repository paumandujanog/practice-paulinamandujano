import {createRouter, createWebHistory} from 'vue-router';

import Home from './components/Home.vue';
import Login from './components/Login.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'login',
            component: Login
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        }
    ]
})