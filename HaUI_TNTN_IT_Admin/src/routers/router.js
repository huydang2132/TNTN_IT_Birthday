import { createRouter, createWebHistory } from "vue-router";
import TheContainer from '@/containers/layouts/TheContainer.vue';
import PageNotFound from '@/containers/pages/not-found/PageNotFound.vue';
import HomePage from '@/containers/pages/home/HomePage.vue';
import SystemRegister from '@/containers/pages/register/SystemRegister.vue';
import SystemPost from '@/containers/pages/post/SystemPost.vue';
import SystemLogin from '@/containers/pages/auth/SystemLogin.vue';

const routes = [
    {
        path: '/system', name: "Container", component: TheContainer,
        children: [
            {
                path: '', name: "HomePage", component: HomePage,
                meta: { title: "Trang quản trị", requiresAuth: true },
            },
            {
                path: 'register', name: "SystemRegister", component: SystemRegister,
                meta: { title: "Trang quản trị", requiresAuth: true },
            },
            {
                path: 'post', name: "SystemPost", component: SystemPost,
                meta: { title: "Trang quản trị", requiresAuth: true },
            },
        ],
    },
    {
        path: '/', name: "SystemLogin", component: SystemLogin,
        meta: { title: "Đăng nhập hệ thống" },
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
    if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn()) {
        next('/');
    } else {
        next();
    }
});

function loggedIn() {
    const user = localStorage.getItem('user');
    return user !== null;
}

export default router;