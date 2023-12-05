<template>
    <div id="moment" class="row">
        <div class="component-logo">
            <img :src="require('@/assets/img/birthday-party.png')" />
        </div>
        <div class="component-title moment-title">
            <h3>Khoảnh khắc</h3>
        </div>
        <div class="sliding-carousel col l-6 m-8 c-12">
            <CarouselMoment />
        </div>
    </div>
</template>

<script>
import CarouselMoment from '../carousel/CarouselMoment.vue';

export default {
    name: "HomeMoment",
    components: {
        CarouselMoment
    }
}
</script>

<style scoped>
#moment {
    padding: 40px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.moment-title {
    padding-bottom: 20px;
}
</style>