<template>
    <div ref="snowFalke" class="snowFall" :style="{ top: this.top + 'px', left: this.left + 'px' }">
        <img :style="{ 'width': this.size + 'px' }" :src="require('@/assets/img/heart.png')" />
    </div>
</template>

<script>
export default {
    name: "SnowFall",
    data() {
        return {
            top: 0,
            left: Math.random() * (this.width - this.width * 0.1),
            speed: Math.random() * 2 + 3,
            size: 20,
        }
    },
    props: {
        height: null,
        width: null
    },
    methods: {
        snowSize() {
            let size = Math.random() * 40;
            if (size < 16 || size > 30) {
                size = Math.random() * 40;
            }
            else {
                this.size = Math.floor(size);
            }
        },
        fall() {

            this.snowSize();
            setInterval(() => {
                this.top += this.speed;
                if (this.top >= (this.height - 150)) {
                    this.top = 0;
                    do {
                        this.left = Math.random() * (this.width - this.width * 0.1);
                    } while (this.left >= (this.width - this.width * 0.1)) {
                        this.left = Math.random() * (this.width - this.width * 0.1);
                    }
                    this.snowSize();
                }
            }, 50);
        },
        widthHeight() {
            this.$emit('widthHeight');
        },
    },
    mounted() {
        this.$nextTick(() => {
            this.fall();
            this.widthHeight();
        })
    },
}
</script>

<style scoped>
.snowFall {
    position: absolute;
    box-sizing: border-box;
    z-index: 99999;
    transform: translateX(-30px);
    rotate: 10deg;
    animation: snowFall 8s linear infinite;
}

@keyframes snowFall {
    0% {
        transform: translateX(-30px);
        rotate: 10deg;
    }

    25% {
        transform: translateX(30px);
        rotate: -10deg;
    }

    50% {
        transform: translateX(-30px);
        rotate: 10deg;
    }

    75% {
        transform: translateX(30px);
        rotate: -10deg;
    }

    100% {
        transform: translateX(-30px);
        rotate: 10deg;
    }
}
</style>