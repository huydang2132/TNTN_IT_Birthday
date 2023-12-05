<template>
    <div class="bg-music">
        <audio ref="audio" :src="require('@/assets/audio/ThanhXuanCuaChungTa.mp3')" preload="auto" volume="0.8" loop hidden>
        </audio>
        <button class="btn-volume" @click="playOrStop()" @mouseover="showToolTip = true"
            @mouseleave="showToolTip = false"><i :class="['fa-solid', classVolume]"></i></button>
        <div v-show="showToolTip" class="tool-tip-volume">{{ toolTip }}</div>
    </div>
</template>

<script>
export default {
    name: "BgMusic",
    methods: {
        playOrStop() {
            if (this.satusMusic === false) {
                this.$refs.audio.play();
                this.classVolume = 'fa-volume-high';
                this.satusMusic = true;
                this.toolTip = 'Dừng nhạc';
            }
            else {
                this.$refs.audio.pause();
                this.classVolume = 'fa-volume-xmark';
                this.satusMusic = false;
                this.toolTip = 'Phát nhạc';
            }
        },
        toolTipAudio() {
            this.showToolTip = true;
            this.toolTip = 'Bấm để phát nhạc';
            setTimeout(() => {
                this.showToolTip = false;
            }, 4500);
        }
    },
    mounted() {
        this.toolTipAudio();
    },
    data() {
        return {
            satusMusic: false,
            classVolume: 'fa-volume-xmark',
            showToolTip: false,
            toolTip: 'Phát nhạc'
        }
    },
}
</script>

<style scoped>
.bg-music {
    position: fixed;
    left: 5%;
    z-index: 100;
    bottom: 8%;
    display: flex;
    align-items: center;
}

.bg-music .tool-tip-volume {
    background-color: var(--color-white);
    border-radius: var(--border-radius);
    position: absolute;
    bottom: calc(100% + 10px);
    width: fit-content;
    text-wrap: nowrap;
    left: -3px;
    padding: 10px;
    box-shadow: 0px 20px 40px var(--color-shadow-opacity);
    color: var(--color-text-default);
    border: 1px solid var(--color-primary);
}

.bg-music .tool-tip-volume::before {
    content: "";
    position: absolute;
    left: 12px;
    bottom: -15px;
    border-top: 10px solid var(--color-white);
    border-bottom: 10px solid transparent;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
}

.bg-music .btn-volume {
    width: 38px;
    height: 38px;
    border: none;
    background-color: #3519d1;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.bg-music .btn-volume::after {
    content: "";
    position: absolute;
    width: 125%;
    height: 125%;
    top: -12%;
    left: -12%;
    border-radius: 50%;
    background-color: rgba(67, 42, 211, 0.3);
    animation: zoom-out 1.5s infinite;
    z-index: -1;
    box-sizing: border-box;
}

@keyframes zoom-out {
    0% {
        transform: scale3d(1, 1, 1);
    }

    50% {
        transform: scale3d(0.9, 0.9, 0.9);
    }

    100% {
        transform: scale3d(1, 1, 1);
    }
}

.bg-music .btn-volume:focus-visible {
    outline-offset: var(--outline-offset);
    outline-color: var(--color-outline);
    outline-width: var(--outline-width);
}

.bg-music .btn-volume i {
    font-size: 18px;
    color: var(--color-white);
}
</style>