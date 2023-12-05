<template>
    <div class="page-not-found">
        <h1>404 NOT FOUND</h1>
        <p>Đường dẫn này đã hỏng hoặc không tồn tại.</p>
        <router-link to="/">Về trang chủ</router-link>
    </div>
</template>

<script>
export default {
    name: "PageNotFound"
}
</script>

<style scoped>
.page-not-found {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 406px;
    padding: 40px 10px;
    gap: 30px;
    text-align: center;
    line-height: 25px;
}

.page-not-found h1 {
    font-size: 2rem;
}

.page-not-found p {
    font-size: 1.2rem;
}

.page-not-found a {
    background-color: var(--color-primary);
    color: var(--color-white);
    text-decoration: none;
    padding: 15px 20px;
    border-radius: var(--border-radius);
    font-weight: 600;
}
</style>