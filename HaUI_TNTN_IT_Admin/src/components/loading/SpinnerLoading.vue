<template>
    <div class="loader-container">
        <span class="loader"></span>
    </div>
</template>

<script>
export default {
    name: "SpinnerLoading",
}
</script>

<style scoped>
.loader-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 100;
    padding: 20px;
    box-sizing: border-box;
}

.loader {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    position: relative;
    animation: rotate 1s linear infinite
}

.loader::before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    inset: 0px;
    border-radius: 50%;
    border: 5px solid var(--color-primary);
    animation: prixClipFix 2s linear infinite;
}

@keyframes rotate {
    100% {
        transform: rotate(360deg)
    }
}

@keyframes prixClipFix {
    0% {
        clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0)
    }

    25% {
        clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0)
    }

    50% {
        clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%)
    }

    75% {
        clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%)
    }

    100% {
        clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0)
    }
}
</style>