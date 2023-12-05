<template>
    <div @mouseover="showInfor = true" @mouseleave="showInfor = false" class="register-icon">
        <router-link to="/register">
            <div class="icon">
                <img :src="require('@/assets/img/logo_tntn.png')" alt="Xác nhận tham gia" />
            </div>
            <div v-if="showInfor" class="infor">
                <p>Xác nhận tham gia</p>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "RegisterIcon",
    data() {
        return {
            showInfor: false
        }
    },
    mounted() {
        this.showInforSetTime();
    },
    methods: {
        showInforSetTime() {
            this.showInfor = true;
            setTimeout(() => {
                this.showInfor = false
            }, 6500);
        }
    },
}
</script>

<style scoped>
.register-icon {
    position: fixed;
    bottom: 8%;
    right: 5%;
    box-shadow: 0px 20px 40px var(--color-shadow-opacity);
    border-radius: 50%;
    width: fit-content;
    aspect-ratio: 1/1;
    display: flex;
    justify-content: center;
    align-content: center;
    z-index: 100;
    background-color: var(--color-white);
}

.register-icon a {
    color: var(--color-text-default);
    border-radius: 50%;
}

.register-icon a:focus-visible {
    outline-offset: var(--outline-offset);
    outline-width: var(--outline-width);
    outline-color: var(--outline-color);
}

.register-icon .icon img {
    width: 50px;
    object-fit: cover;
    background-color: var(--color-white);
    border-radius: 50%;
    box-shadow: 0px 20px 40px var(--color-shadow-opacity);
}

.register-icon .infor {
    width: fit-content;
    text-wrap: nowrap;
    padding: 10px;
    position: absolute;
    background-color: var(--color-white);
    right: 60px;
    top: 50%;
    transform: translateY(-50%);
    box-shadow: 0px 20px 40px var(--color-shadow-opacity);
    border-radius: var(--border-radius);
    border: 1px solid var(--color-primary);
}

.register-icon .infor::after {
    display: block;
    content: "";
    position: absolute;
    border-top: 10px solid transparent;
    border-left: 10px solid var(--color-white);
    border-bottom: 10px solid transparent;
    border-right: 10px solid transparent;
    right: -16px;
    top: 50%;
    transform: translateY(-50%);
}
</style>