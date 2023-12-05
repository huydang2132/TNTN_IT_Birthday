<template>
    <nav class="sidebar">
        <ul>
            <li><router-link :to="{ name: 'HomePage' }">Trang chủ</router-link></li>
            <li><router-link :to="{ name: 'SystemRegister' }">Quản lý đăng ký tham gia</router-link></li>
            <li><router-link :to="{ name: 'SystemPost' }">Quản lý lời chúc</router-link></li>
        </ul>
        <div class="logout">
            <b-button @click="handleLogout" value="Đăng xuất"></b-button>
        </div>
    </nav>
</template>

<script>
import router from '@/routers/router';

export default {
    name: "TheSidebar",
    methods: {
        handleLogout() {
            const user = localStorage.getItem('user');
            if (user) {
                localStorage.removeItem('user');
                router.replace('/')
            }
        }
    },
}
</script>

<style scoped>
.sidebar {
    width: var(--width-sidebar);
    height: 100%;
    background-color: var(--color-primary);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.sidebar ul li a {
    display: block;
    padding: 20px 10px;
    color: var(--color-white);
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 600;
}

.sidebar ul li:hover {
    background-color: var(--color-button-hover);
}

.router-link-exact-active {
    background-color: var(--color-focus);
}

.logout button {
    width: 100%;
    border: none;
    padding: 15px 5px;
    box-sizing: border-box;
    height: 100%;
}
</style>