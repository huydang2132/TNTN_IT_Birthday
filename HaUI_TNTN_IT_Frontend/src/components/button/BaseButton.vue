<template>
    <button ref="refButton">
        <i v-if="iconLeft" :class="[iconLeft, 'icon-left']"></i>
        {{ value }}
        <i v-if="iconRight" :class="[iconRight, 'icon-right']"></i>
    </button>
</template>

<script>
export default {
    name: "BaseButton",
    props: {
        value: {
            type: String,
            default: null
        },
        iconLeft: {
            type: String,
            default: null
        },
        iconRight: {
            type: String,
            default: null
        }
    },
    data() {
        return {

        }
    },
    methods: {
        focus() {
            this.$refs.refButton.focus();
        }
    }
}
</script>

<style scoped>
button {
    height: var(--height-button-default);
    padding: 12px 20px;
    z-index: 10;
    box-sizing: border-box;
    background-color: var(--color-button);
    border: none;
    border-radius: var(--border-radius);
    color: var(--color-white);
    font-weight: 600;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.5s ease;
}

button:hover {
    background-color: var(--color-button-hover);
}

button:active,
button:focus {
    background-color: var(--color-focus);
}

button:focus-visible {
    outline-offset: var(--outline-offset);
    outline-width: var(--outline-width);
    outline-color: var(--color-outline);
}

button i {
    color: var(--color-white);
}

button .icon-left {
    padding-right: 5px;
}

button .icon-right {
    padding-left: 5px;
}
</style>