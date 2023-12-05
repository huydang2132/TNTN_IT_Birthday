<template>
    <swiper :rewind="true" :spaceBetween="30" :loop="true" :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
    }" :pagination="{
    clickable: true,
}" :modules="modules" class="mySwiper">
        <swiper-slide v-for="i in 34" :key="i">
            <img :src="require(`@/assets/img/KhoanhKhac/KhoanhKhac (${i}).jpg`)" />
        </swiper-slide>
    </swiper>
</template>
  
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

export default {
    name: 'CarouselMoment',
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination, Autoplay],
        };
    },
}
</script> 
<style scoped>
img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center center;
}
</style>