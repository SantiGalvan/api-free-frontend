import { createRouter, createWebHistory } from 'vue-router';

// Importo le pagine
import HomePage from '../pages/HomePage.vue';

// Definisco le rotte
const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        component: HomePage,
        name: 'home'
    }]
});

export { router }