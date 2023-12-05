<template>
    <header>
        <div class="top-heading">
            <div class="title-heading">
                <h2>Đội TNTN khoa CNTT - HaUI</h2>
                <p>15 năm - Dấu ấn thanh xuân</p>
            </div>
            <div :class="['navbar row', { 'scrolled': this.isScrolled }]">
                <div class="navbar-content col l-12 m-12 c-0">
                    <ul>
                        <li><router-link to="/">Trang chủ</router-link></li>
                        <li><a href="/#about">Giới thiệu</a></li>
                        <li><a href="/#moment">Khoảnh khắc</a></li>
                        <li><a href="/#event">Sự kiện</a></li>
                        <li><a href="/#wished">Lời chúc</a></li>
                        <li><router-link to="/register">Xác nhận tham gia</router-link></li>
                    </ul>
                </div>
                <div class="navbar-mobile-home col l-0 m-0 c-6">
                    <router-link to="/"><i class="fa-solid fa-house"></i></router-link>
                </div>
                <div class="menu-mobile col l-0 m-0 c-6">
                    <div @click.stop="this.handleClickOutSide($event)" @click="this.funcShowMenu()"
                        class="menu-mobile-icon">
                        <i class="fa-solid fa-bars"></i>
                    </div>
                    <ul ref="refMenu" @click="this.funcHideMenu(), this.handleClickOutSide($event)" v-if="showMenu">
                        <li><a href="/#about">Giới thiệu</a></li>
                        <li><a href="/#moment">Khoảnh khắc</a></li>
                        <li><a href="/#event">Sự kiện</a></li>
                        <li><a href="/#wished">Lời chúc</a></li>
                        <li><router-link to="/register">Xác nhận tham gia</router-link></li>
                    </ul>
                </div>
            </div>
        </div>

    </header>
</template>

<script>
export default {
    name: "TheHeader",
    data() {
        return {
            showMenu: false,
            isScrolled: false,
        }
    },
    mounted() {
        document.addEventListener('click', this.handleClickOutSide);
        window.addEventListener("scroll", this.handleScroll);
    },
    beforeMount() {
        document.removeEventListener('click', this.handleClickOutSide);
        window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
        funcShowMenu() {
            this.showMenu = true;
        },
        funcHideMenu() {
            this.showMenu = false;
        },
        handleClickOutSide(event) {
            if (this.$refs.refMenu && !this.$refs.refMenu.contains(event.target)) {
                this.showMenu = false;
            }
        },
        handleScroll() {
            this.isScrolled = window.scrollY > window.screen.height * 0.2;
        }
    },
}
</script>

<style scoped>
header {
    width: 100%;
}

header .top-heading {
    width: 100%;
}

header .top-heading .title-heading {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid var(--color-border);
    padding: 10px 0;
}

header .top-heading .title-heading h2 {
    font-family: Dancing_Script-Bold;
    font-size: 2.2rem;
    padding: 5px;
    font-weight: 500;
    text-align: center;
    text-wrap: wrap;
}

header .top-heading .title-heading p {
    position: relative;
    color: #a5a5a5;
    font-family: Comfortaa-Medium;
    font-size: 1.1rem;
    line-height: 30px;
}

header .top-heading .title-heading p::after,
header .top-heading .title-heading p::before {
    content: "";
    display: block;
    position: absolute;
    background-color: var(--color-border);
    height: 1px;
    width: 30px;
    top: 50%;
    transform: translateY(-50%);
}

header .top-heading .title-heading p::after {
    left: -18%;
}

header .top-heading .title-heading p::before {
    right: -18%;
}

header .top-heading .navbar {
    width: 100%;
    margin: 0;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
    z-index: 100;
}

header .top-heading .navbar.scrolled {
    position: fixed;
    top: 0;
    animation: fadeInDown 0.5s linear;
}

@keyframes fadeInDown {
    from {
        transform: translateY(-50px);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
}

header .top-heading .navbar ul {
    display: flex;
    justify-content: center;
    align-items: center;
}

header .top-heading .navbar ul li {
    list-style-type: none;
}

header .top-heading .navbar ul li a {
    text-decoration: none;
    color: var(--color-text-default);
    font-family: Comfortaa-Bold;
    font-size: 16px;
    display: block;
    padding: 20px 15px;
}

header .top-heading .navbar ul li a:hover {
    color: var(--color-primary);
}

/* Tablet */
@media (min-width: 740px) and (max-width: 1023px) {}

/* Mobile */
@media (max-width: 740px) {
    header .top-heading .navbar {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    header .top-heading .navbar .navbar-mobile-home {
        display: flex;
        padding-left: 15px;
        justify-content: flex-start;
    }

    header .top-heading .navbar .navbar-mobile-home a {
        text-decoration: none;
    }

    header .top-heading .navbar .navbar-mobile-home a i {
        font-size: 1.2rem;
        color: var(--color-white);
    }

    header .top-heading .menu-mobile {
        position: relative;
        padding-right: 10px;
        display: flex;
        justify-content: flex-end;
    }

    header .top-heading .menu-mobile-icon,
    header .top-heading .navbar .navbar-mobile-home a {
        background-color: var(--color-primary);
        width: 35px;
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        border-radius: var(--border-radius);
    }

    header .top-heading .menu-mobile i {
        font-size: 1.2rem;
        color: var(--color-white);
    }

    header .top-heading .menu-mobile ul {
        display: flex;
        flex-direction: column;
        background-color: var(--color-white);
        position: absolute;
        right: -5px;
        top: -12px;
        z-index: 10;
        align-items: flex-start;
        box-shadow: 0px 10px 20px var(--color-shadow-opacity);
        width: 100%;
    }

    header .top-heading .menu-mobile ul li {
        width: 100%;
    }

    header .top-heading .menu-mobile ul li a {
        font-size: 1rem;
        display: block;
        width: 100%;
        padding-right: 30px;
    }
}
</style>