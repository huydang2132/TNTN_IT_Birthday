<template>
    <div id="event">

        <div class="event-container">
            <div class="event-navbar">
                <h3>Sự Kiện Sinh Nhật</h3>
                <p>~ Muốn đi nhanh thì đi một mình, muốn đi xa thì đi cùng Đội TNTN khoa CNTT ~</p>
            </div>
            <div class="event-content row ">
                <div class="event-box col l-3 m-4 c-10">
                    <div class="event-box-content">
                        <h3>Kiện toàn</h3>
                        <div class="event-box-img">
                            <img :src="require('@/assets/img/KhoanhKhac/KhoanhKhac (4).jpg')" alt="" />
                        </div>
                        <div class="event-box-time">
                            <h4>14:30 02/12/2023</h4>
                            <p>Tầng 6 - A1, Trường Đại học Công nghiệp Hà Nội cơ sở 1 - Số 298 đường Cầu Diễn, quận Bắc Từ
                                Liêm,
                                Hà
                                Nội</p>
                        </div>
                        <div class="event-box-router">
                            <a target="_blank" href="https://maps.app.goo.gl/A7SJjrQnowjRifge7">Xem bản đồ</a>
                        </div>
                    </div>
                </div>
                <div class="event-box col l-3 m-4 c-10">
                    <div class="event-box-content">
                        <h3>Tiệc sinh nhật</h3>
                        <div class="event-box-img">
                            <img :src="require('@/assets/img/anh sn.jpg')" alt="" />
                        </div>
                        <div class="event-box-time">
                            <h4>18:00 02/12/2023</h4>
                            <p>Nhà Hàng Thu Hằng - Số 163 đường Cầu Diễn, phường Phúc Diễn, quận Bắc Từ Liêm, Hà Nội</p>
                        </div>
                        <div class="event-box-router">
                            <a target="_blank" href="https://maps.app.goo.gl/geEYHM8GZ8oxTvKz5">Xem bản đồ</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeEvent",
}
</script>

<style scoped>
#event {
    background-color: var(--color-bg-white);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    position: relative;
    padding-bottom: 40px;
    display: block;
}

.event-navbar {
    background: url('../../../../assets/img/KhoanhKhac/KhoanhKhac (2).jpg') center bottom no-repeat local;
    background-size: cover;
    width: 100%;
    height: 60%;
    text-align: center;
    padding: 120px 10px;
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
}

.event-navbar::before {
    background-color: var(--color-bg-opacity);
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}

.event-navbar h3,
.event-navbar p {
    position: relative;
    color: var(--color-white);
    z-index: 3;
    line-height: 50px;
    text-align: center;
}

.event-navbar h3 {
    font-family: Dancing_Script-Bold;
    font-size: 45px;
}

.event-navbar p {
    font-size: 16px;
}

.event-container {
    width: 100%;
    height: 100%;
    position: relative;
    top: 0;
    left: 0;
    padding: 250px 0 80px;
    box-sizing: border-box;
}

.event-content {
    z-index: 10;
    display: flex;
    gap: 20px;
    width: 100%;
    height: 100%;
    justify-content: center;
    position: relative;
}

.event-box {
    background: url(../../../../assets/img/bg.png) center center repeat;
    border-radius: var(--border-radius);
    box-shadow: 0px 10px 20px var(--color-shadow-opacity);
    margin-top: 80px;
    padding: 20px 0;
}

.event-box-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 40px;
    box-sizing: border-box;
}

.event-box-content h3 {
    font-size: 1.8rem;
    font-weight: 500;
    padding-bottom: 40px;
    position: relative;
    text-align: center;
}

.event-box-content h3::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: var(--color-primary);
    left: 0;
    bottom: 20px;
}

.event-box-img {
    width: 100%;
}

.event-box-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.event-box-time {
    text-align: center;
}

.event-box-time p,
.event-box-time h4 {
    line-height: 28px;
}

.event-box-time p {
    font-size: 1.1rem;
}

.event-box-time h4 {
    font-size: 1.3rem;
    padding: 15px 0;
}

.event-box-router a {
    background-color: var(--color-white);
    text-decoration: none;
    color: var(--color-text-default);
    font-weight: 600;
    padding: 10px 20px;
    margin-top: 20px;
    display: block;
    border-radius: var(--border-radius);
    border: 2px solid var(--color-primary);
    text-align: center;
    transition: background-color 0.5s ease;
}

.event-box-router a:focus-visible {
    outline-offset: var(--outline-offset);
    outline-color: var(--color-outline);
    outline-width: var(--outline-width);
}

.event-box-router a:hover {
    background-color: var(--color-primary);
    color: var(--color-white);
}
</style>