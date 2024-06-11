import { createRouter, createWebHistory } from 'vue-router';

// Importo le pagine
import HomePage from '../pages/HomePage.vue';
import PostDetail from '../pages/PostDetail.vue';

// Definisco le rotte
const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        component: HomePage,
        name: 'home'
    },
    {
        path: '/posts/:slug',
        component: PostDetail,
        name: 'post-detail'
    }]
});

export { router }