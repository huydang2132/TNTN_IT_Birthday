<template>
    <div class="home-birthdate-container ">
        <div class="home-birthdate row">
            <div class="birthdate-box birthdate__intro col l-4 m-6 c-12">
                <div class="birthdate--content">
                    <div class="timeline">
                        <div class="timeline-title">
                            <h4>15 NĂM - DẤU ẤN THANH XUÂN</h4>
                            <div class="timeline-note">
                                <p>Timeline</p>
                            </div>
                        </div>
                        <div v-for="(item, index) in this.timeline" :key="index" class="timeline-content">
                            <div :class="['timeline-item', (index % 2 === 0) ? 'left-item' : 'right-item']">
                                <div class="timeline-infor">
                                    <p>{{ item.time }}</p>
                                    <p>{{ item.content }}</p>
                                </div>
                                <img :src="require(`@/assets/img/timeline/${item.img}.png`)" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="birthdate-box birthdate__calender col l-4 m-6 c-12">
                <div class="decorate-item deco-right">
                    <img :src="require('@/assets/img/gift.png')" />
                </div>
                <div class="birthdate--content">
                    <div class="mini-calender">
                        <table>
                            <caption>Tháng 12 / 2023</caption>
                            <tr class="date">
                                <td>Mon</td>
                                <td>Tue</td>
                                <td>Wed</td>
                                <td>Thu</td>
                                <td>Fri</td>
                                <td>Sat</td>
                                <td>Sun</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>1</td>
                                <td><span class="birthday">2</span></td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td v-for="i in [4, 5, 6, 7, 8, 9, 10]" :key="i">{{ i }}</td>
                            </tr>
                            <tr>
                                <td v-for="i in [11, 12, 13, 14, 15, 16, 17]" :key="i">{{ i }}</td>
                            </tr>
                            <tr>
                                <td v-for="i in [18, 19, 20, 21, 22, 23, 24]" :key="i">{{ i }}</td>
                            </tr>
                            <tr>
                                <td v-for="i in [25, 26, 27, 28, 29, 30, 31]" :key="i">{{ i }}</td>
                            </tr>
                        </table>
                    </div>
                    <div class="countdown">
                        <div class="countdown-time">
                            <div class="countdown-time-item">
                                <p>{{ this.day }} </p>
                                <p>Ngày</p>
                            </div>
                            <div class="countdown-time-item">
                                <p>{{ this.hour }} </p>
                                <p>Giờ</p>
                            </div>
                            <div class="countdown-time-item">
                                <p>{{ this.minute }} </p>
                                <p>Phút</p>
                            </div>
                            <div class="countdown-time-item">
                                <p>{{ this.second }}</p>
                                <p>Giây</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import vi from "moment/locale/vi";

export default {
    name: "HomeBirthDate",
    data() {
        return {
            time: new Date("2023-12-02 18:00:00 GMT+07:00").getTime(),
            second: 0,
            minute: 0,
            hour: 0,
            day: 0,
            timeline: [
                { time: '14:30', content: 'Kiện toàn ban phụ trách khóa 14', img: 'vote' },
                { time: '16:00', content: 'Chụp ảnh kỷ niệm', img: 'camera' },
                { time: '17:00', content: 'Check in sinh nhật', img: 'check-list' },
                { time: '18:00', content: 'Sinh nhật', img: 'cake' },
                { time: '20:00', content: 'Nhập tiệc', img: 'glass' },
                { time: '22:30', content: 'Kết thúc', img: 'home' },
            ]
        }
    },
    created() {
        this.timer = setInterval(() => {
            let now = this.$moment().locale("vi", vi);
            const countdown = Math.abs(new Date((this.time - Date.parse(now))));
            const days = Math.floor(countdown / (1000 * 60 * 60 * 24));
            const hours = Math.floor((countdown / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((countdown / 1000 / 60) % 60);
            const seconds = Math.floor((countdown / 1000) % 60);
            this.second = seconds < 10 ? `0${seconds}` : seconds;
            this.minute = minutes < 10 ? `0${minutes}` : minutes;
            this.hour = hours < 10 ? `0${hours}` : hours;
            this.day = days < 10 ? `0${days}` : days;
        }, 1000);
    },
    beforeUnmount() {
        clearInterval(this.timer);
    },
}
</script>

<style scoped>
.home-birthdate-container {
    width: 100%;
    background: url('../../../../assets/img/bg.png') center repeat;
    background-size: contain;
}

.home-birthdate {
    width: 100%;
    background: url('../../../../assets/img/bg.png') center repeat;
    background-size: contain;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
    padding: 50px 20px;
    box-sizing: border-box;

}

.decorate-item {
    position: absolute;
    width: 300px;
    z-index: 1;
}

.decorate-item img {
    width: 100%;
    opacity: 0.15;
}

.deco-right {
    left: 50%;
    transform: translateX(-50%);
    bottom: 0px;
}

.birthdate-title {
    padding: 20px 0;
}

.birthdate-title h3 {
    font-family: Dancing_Script-Regular;
    font-size: var(--font-size-title);
}

.birthdate-box {
    background-color: var(--color-white);
    box-shadow: 0px 10px 20px var(--color-shadow-opacity);
    border-radius: var(--border-radius);
    height: 560px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.birthdate-box .birthdate--content {
    width: calc(100% - 90px);
    height: calc(100% - 80px);
    border: 5px solid var(--color-primary-opacity);
    box-sizing: border-box;
}

.timeline {
    width: 100%;
    height: 100%;
}

.timeline-title {
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 20px 5px;
    flex-direction: column;
    line-height: 30px;
}

.timeline-title h4 {
    font-family: Dancing_Script-Bold;
    font-weight: 800;
    font-size: 1.4rem;
}

.timeline-note {
    width: 100%;
    display: flex;
    justify-content: center;
}

.timeline-title p {
    width: fit-content;
    font-size: 0.9rem;
    opacity: 0.6;
    display: block;
    position: relative;
    padding: 0 25px;
}

.timeline-title p::before,
.timeline-title p::after {
    content: "";
    position: absolute;
    height: 1px;
    width: 20px;
    background-color: var(--color-text-default);
    top: 50%;
    transform: translateY(-50%);
    opacity: 0.6;
}

.timeline-title p::before {
    left: 0;
}

.timeline-title p::after {
    right: 0;
}

.timeline-content {
    width: 100%;
    position: relative;
    min-height: 55px;
}

.timeline-content::after {
    content: "";
    position: absolute;
    height: 100%;
    border: 2px solid var(--color-primary);
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    border-radius: var(--border-radius);
}

.timeline-content::before {
    content: "";
    position: absolute;
    border: 5px solid var(--color-primary);
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    border-radius: 50%;
}

.timeline-item {
    width: 100%;
    display: flex;
    align-items: center;
    position: absolute;
    bottom: -5%;
    right: 0;
}

.timeline-infor {
    width: 30%;
    position: absolute;
}

.timeline-infor>p:first-child {
    font-weight: 600;
    padding-bottom: 5px;
}

.timeline-item img {
    width: 10%;
    position: absolute;
    bottom: 0;
}

.right-item .timeline-infor {
    right: 5%;
    text-align: left;
}

.right-item img {
    right: 37%;
}

.left-item .timeline-infor {
    left: 5%;
    text-align: right;
}

.left-item img {
    left: 37%;
}

.mini-calender {
    border-bottom: 1px solid var(--color-border);
    padding: 30px 10px;
}

.mini-calender table {
    width: 100%;
    text-align: center;
}

.mini-calender table {
    border-spacing: 0;
}

.mini-calender table caption {
    font-weight: 600;
    padding-bottom: 20px;
    font-size: 1.1rem;
}

.mini-calender table .date td {
    border-top: 1px solid var(--color-border) !important;
    border-bottom: 1px solid var(--color-border);
}

.mini-calender table tr td {
    padding: 10px 0;
}

.birthday {
    padding: 6px 9.5px;
    background-color: var(--color-primary);
    border-radius: 50%;
    color: var(--color-white);
}

.countdown {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 10px;
}

.countdown .countdown-time {
    text-align: center;
    display: flex;
    box-sizing: border-box;
}

.countdown .countdown-time .countdown-time-item {
    box-sizing: border-box;
    width: 65px;
}

.countdown .countdown-time .countdown-time-item p {
    color: var(--color-primary);
    padding: 5px 0;
}

.countdown .countdown-time .countdown-time-item p:first-child {
    font-family: Dancing_Script-Bold;
    font-size: 2.6rem;
}

.countdown .countdown-time .countdown-time-item p:last-child {
    font-size: 1.1rem;
}

/* Tablet */
@media (min-width: 740px) and (max-width: 1023px) {
    .birthdate-box .birthdate--content {
        width: calc(100% - 20px);
        height: calc(100% - 60px);
    }
}

/* Mobile */
@media (max-width: 740px) {
    .birthdate-box .birthdate--content {
        width: calc(100% - 10px);
        height: calc(100% - 40px);
    }
}
</style>