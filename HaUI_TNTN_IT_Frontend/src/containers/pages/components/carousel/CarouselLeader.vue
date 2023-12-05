<template>
    <swiper v-if="BanChapHanh !== null" :loop="true" :navigation="true" :pagination="{
        clickable: true,
    }" :modules="modules" class="mySwiper">
        <swiper-slide class="slide" v-for="item in BanChapHanh" :key="item._id">
            <HomeLeader :members="item" />
        </swiper-slide>
    </swiper>
</template>
  
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
// import required modules
import { Navigation, Pagination } from 'swiper/modules';

import HomeLeader from '../about/HomeLeader.vue'

export default {
    name: 'CarouselLeader',
    components: {
        HomeLeader,
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Navigation, Pagination],
        };
    },
    data() {
        return {
            BanChapHanh: null
        }
    },
    created() {
        this.getMembers();
    },
    methods: {
        async getMembers() {
            try {
                let res = await this.$members.getMembers();
                if (res && res.data && res.data.length > 0) {
                    this.BanChapHanh = res.data;
                }
            } catch (error) {
                console.error(error);
                this.$toastify("Lỗi! Không lấy được danh sách Ban chấp hành.", 'ERROR');
            }
        }
    },
}
</script> 
<style scoped>
.mySwiper {
    padding: 30px 0;
    background-color: var(--color-white);
    height: 100%;
}

.slide {
    background-color: var(--color-white);
    height: 100%;
    position: relative;
}

.slide:not(:last-child) {
    height: auto;
}
</style>