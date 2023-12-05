<template>
    <div id="about" class="home-about">
        <div class="about__intro row ">
            <div class="col l-4 m-8 c-12">
                <div class="component-title about--title ">
                    <h3>Giới thiệu</h3>
                </div>
                <div class="about__intro--content">
                    <p class="founding">
                        Ngày thành lập: 05/12/2008
                    </p>
                    <p class="main__intro--content">
                        Đội TNTN khoa CNTT trực thuộc LCĐ - LCH sinh viên khoa CNTT Trường Đại học Công nghiệp Hà Nội. Được
                        lập từ năm 2008, Đội Thanh niên tình nguyện Khoa CNTT luôn là đơn vị năng động, nhiệt tình, sáng tạo
                        và luôn
                        đi đầu trong các công tác tình nguyện của Khoa cũng như nhà trường.
                    </p>
                </div>
            </div>
        </div>
        <CarouselLeader />
    </div>
</template>

<script>
import CarouselLeader from '../carousel/CarouselLeader.vue';

export default {
    name: "HomeAbout",
    components: {
        CarouselLeader
    }
}
</script>

<style scoped>
.home-about {
    width: 100%;
    line-height: 25px;
    padding: 20px 10px;
    box-sizing: border-box;
}

.about--title {
    display: flex;
    justify-content: center;
    padding: 20px 0;
}

.about__intro {
    display: flex;
    justify-content: center;
}

.about__intro--content {
    display: flex;
    justify-content: center;
    width: 100%;
    flex-direction: column;
    align-items: center;
}

.about__intro--content .main__intro--content {
    text-align: justify;
}
</style>