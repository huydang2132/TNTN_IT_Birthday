<template>
    <div class="home-leader">
        <div class="about__members row">
            <div class="col l-8 m-10 c-12">
                <div class="component-title about--title">
                    <h3>Ban chấp hành khóa {{ members && members.years ? members.years : '' }}</h3>
                </div>
                <div class="about__members--content">
                    <div class="about__members-row row">
                        <div class="about__members-col col l-3 m-3 c-6">
                            <div class="image">
                                <img
                                    :src="members && members.leaderImg ? members.leaderImg : require('@/assets/img/logo_tntn.png')" />
                            </div>
                            <div class="leader-infor">
                                <h4>Đ/c: {{ members ? members.leaderFullName : '' }}</h4>
                                <p>Chức vụ: Chủ nhiệm</p>
                            </div>
                        </div>
                    </div>
                    <div class="about__members-row row">
                        <div v-for="(item, index) in (members && members.viceLeaders)" :key="index"
                            class="about__members-col col l-3 m-3 c-6">
                            <div class="image">
                                <img :src="item.img ? item.img : require('@/assets/img/logo_tntn.png')" />
                            </div>
                            <div class="about__members-infor">
                                <h4>Đ/c: {{ item ? item.fullName : '' }}</h4>
                                <p>Chức vụ: Phó chủ nhiệm</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeLeader",
    props: {
        members: {
            type: Object,
            default: null
        }
    },
}
</script>

<style scoped>
.home-leader {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    background-color: var(--color-white);
}

.home-leader:not(:last-child) {
    height: auto;
}

.about__members {
    width: 100%;
    display: flex;
    justify-content: center;
}

.about--title {
    text-align: center;
    padding: 10px 0;
}

.about--title h3 {
    line-height: 40px;
}

.about__members--content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 10px;
}

.about__members-row {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}

.about__members-col {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    width: 100%;
}

.leader-infor {
    text-wrap: nowrap;
    padding-bottom: 20px;
}

.about__members-infor {
    height: 100px;
    margin-bottom: 10px;
}

.about__members-col .image {
    width: 100%;
}

.about__members-col .image img {
    width: 100%;
    height: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    object-position: center 25%;
    border-radius: 50%;
    border: 3px solid var(--color-primary-opacity);
    box-sizing: border-box;
}
</style>