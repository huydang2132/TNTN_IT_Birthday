<template>
    <div class="baseInput">
        <label :class="{ 'required': required }" v-if="label" :for="idInput">{{ label }}</label>
        <input :class="[{ 'border-err': errValue !== null }]" ref="refInput" :id="idInput" :placeholder="placeholder"
            v-model="valueInput" />
        <span v-if="errValue !== null" class="input-err">{{ errValue }}</span>
    </div>
</template>

<script>
export default {
    name: "BaseInput",
    props: {
        label: {
            type: String,
            default: null
        },
        idInput: {
            type: String,
            default: null
        },
        placeholder: {
            type: String,
            default: null
        },
        modelValue: {
            type: String,
            default: ''
        },
        required: {
            type: Boolean,
            default: null
        },
        errValue: {
            type: String,
            default: null
        }
    },
    data() {
        return {
            valueInput: '',
        }
    },
    created() {
        this.valueInput = this.modelValue;
    },
    methods: {
        focus() {
            this.$refs.refInput.focus();
        }
    },
    watch: {
        valueInput: function (val) {
            this.$emit("update:modelValue", val);
        },
        modelValue: function (val) {
            this.valueInput = val;
        }
    },
}
</script>

<style scoped>
input {
    border: 1px solid var(--color-border);
    border-radius: 3px;
    outline: none;
    padding: 10px;
    height: var(--height-button-default);
    box-sizing: border-box;
    width: 100%;
    background-color: var(--color-bg-input);
}

input:focus {
    border: 1px solid var(--color-focus);
}

.baseInput {
    width: inherit;
}

.baseInput label {
    padding-bottom: 10px;
    display: block;
}

.baseInput .required::after {
    content: "*";
    color: red;
    font-size: 1.2rem;
}

.baseInput .input-err {
    padding-top: 10px;
    display: block;
    color: var(--color-red);
}
</style>