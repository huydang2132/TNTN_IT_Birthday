import { createRouter, createWebHistory } from "vue-router";
import HomePage from '../containers/pages/home/HomePage.vue';
import RegisterPage from '../containers/pages/register/RegisterPage.vue';
import PageNotFound from '../containers/pages/not-found/PageNotFound.vue';

const routes = [
    {
        path: '/', name: "HomePage", component: HomePage,
        meta: { title: "15 năm - Dấu ấn thanh xuân" },

    },
    {
        path: '/register', name: "RegisterPage", component: RegisterPage,
        meta: { title: "Xác nhận tham gia" },

    },
    {
        path: '/:catchAll(.*)', name: 'NotFound', component: PageNotFound,
        meta: { title: "404 NOT FOUND" },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
});

export default router;