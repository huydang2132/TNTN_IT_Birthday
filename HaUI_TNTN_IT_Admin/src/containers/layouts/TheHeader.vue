<template>
    <header class="header">
        <h3>Hệ thống quản trị</h3>
        <div class="fullNameAdmin">
            <p>Xin chào, <strong>{{ this.fullName }}</strong></p>
        </div>
    </header>
</template>

<script>
export default {
    name: "TheHeader",

    computed: {
        fullName: () => {
            const user = JSON.parse(localStorage.getItem('user'));
            return user.fullName;
        }
    },
}
</script>

<style scoped>
.header {
    height: var(--height-header);
    background-color: var(--color-header);
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 10px 20px var(--color-shadow-opacity);
    padding: 0 10px;
}

.header h3 {
    font-size: 1.6rem;
}

.fullNameAdmin p,
.fullNameAdmin strong {
    font-size: 1.1rem;
}
</style>