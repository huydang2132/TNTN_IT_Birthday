<template>
    <div ref="refContainer" class="container grid">
        <TheHeader />
        <div class="section">
            <router-view></router-view>
        </div>
        <TheFooter />
    </div>
</template>

<script>
import TheHeader from './TheHeader.vue';
import TheFooter from './TheFooter.vue';

export default {
    name: "TheContainer",
    components: {
        TheHeader, TheFooter
    },
}
</script>

<style scoped>
.container {
    height: 100%;
    position: relative;
    overflow: hidden;
}

.section {
    width: 100%;
}
</style>