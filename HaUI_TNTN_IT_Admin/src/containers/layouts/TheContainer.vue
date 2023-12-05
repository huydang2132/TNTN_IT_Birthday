<template>
    <div class="container">
        <TheHeader></TheHeader>
        <div class="section">
            <TheSidebar></TheSidebar>
            <div class="main">
                <RouterView></RouterView>
            </div>
        </div>
    </div>
</template>

<script>
import TheHeader from './TheHeader.vue';
import TheSidebar from './TheSidebar.vue';

export default {
    name: "TheContainer",
    component: {
        TheHeader, TheSidebar
    },
    components: { TheHeader, TheSidebar },
}
</script>

<style scoped>
.container {
    width: 100%;
}

.section {
    display: flex;
    width: 100%;
    height: calc(100vh - var(--height-header));
}

.main {
    width: calc(100% - var(--width-sidebar));
    height: 100%;
}
</style>