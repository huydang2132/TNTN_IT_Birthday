<template>
    <div ref="refHome">
        <div class="banner">
            <img class="img-cover" :src="require('@/assets/img/cover.png')" />
        </div>
        <div class="main">
            <HomeAbout />
            <HomeBirthDate />
            <HomeMoment />
            <HomeRouter />
            <HomeEvent />
            <HomeWished />
            <HomeFooter />
        </div>
        <bg-music></bg-music>
        <RegisterIcon />
    </div>
    <SnowFall :height="height" :width="width" @widthHeight="widthHeight" v-for="index in itemSnows" :key="index" />
</template>

<script>
import HomeAbout from '../components/about/HomeAbout.vue';
import HomeBirthDate from '../components/event/HomeBirthDate.vue';
import HomeMoment from '../components/moment/HomeMoment.vue';
import HomeRouter from '../components/home-router/HomeRouter.vue';
import HomeEvent from '../components/event/HomeEvent.vue';
import HomeWished from '../components/wished/HomeWished.vue';
import HomeFooter from '../components/footer/HomeFooter.vue';
import RegisterIcon from '../register/RegisterIcon.vue';

import SnowFall from '@/components/snowfall-flake/SnowFall.vue';

export default {
    name: "HomePage",
    components: {
        HomeAbout, HomeBirthDate,
        HomeMoment, HomeEvent,
        HomeRouter, HomeWished,
        HomeFooter, SnowFall,
        RegisterIcon
    },
    data() {
        return {
            currentIndex: 1,
            snowCount: 20,
            itemSnows: [],
            el: null,
            height: 0,
            width: 0
        }
    },
    computed: {
        title() {
            return this.$route.name;
        },
    },
    mounted() {
        this.delayedLoop();
    },
    methods: {
        delayedLoop() {
            let delay = 2000; // milliseconds
            this.intervalId = setInterval(() => {
                if (this.currentIndex <= this.snowCount) {
                    this.itemSnows.push(this.currentIndex);
                    this.currentIndex++;
                } else {
                    clearInterval(this.intervalId);
                }
            }, delay);
        },
        widthHeight() {
            this.el = this.$refs.refHome.getBoundingClientRect();
            this.height = this.el.height;
            this.width = this.el.width;
        }
    }
}
</script>

<style>
.main {
    height: 100%;
    width: 100%;
}

.banner {
    width: 100%;
    position: relative;
    transform-style: preserve-3d;
}

.banner .img-cover {
    width: 100%;
    display: flex;
    object-fit: cover;
}

.component-title h3 {
    font-size: var(--font-size-title);
    font-family: Dancing_Script-Regular;
}

.component-logo img {
    width: 120px;
}
</style>