<template>
    <div class="home-router">
        <div class="router-item">
            <a href="/#wished">
                <i class="fa-regular fa-comment"></i>
                Gửi lời chúc
            </a>
            <router-link to="/register">
                <i class="fa-regular fa-paper-plane"></i>
                Xác nhận tham gia
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeRouter"
}
</script>

<style scoped>
.home-router {
    background: url('../../../../assets/img/bg.png') center repeat;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 0;
    box-sizing: border-box;
}

.home-router .router-item {
    display: flex;
    flex-direction: row;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
}

.home-router .router-item a {
    text-decoration: none;
    color: var(--color-white);
    background-color: var(--color-button);
    padding: 15px 20px;
    border-radius: var(--border-radius);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    font-weight: 600;
}

.home-router .router-item a:focus,
.home-router .router-item a:active {
    background-color: var(--color-focus);
}

.home-router .router-item a:focus-visible {
    outline-offset: var(--outline-offset);
    outline-width: var(--outline-width);
    outline-color: var(--color-outline);
}

.home-router .router-item a:hover {
    background-color: var(--color-button-hover);
}

.home-router .router-item a i {
    color: var(--color-white);
}
</style>