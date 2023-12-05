<template>
    <div class="dialog" @click.self="this.beforeCloseDialog">
        <div class="dialog__container " :class="hideEffect ? 'hide-dialog' : 'show-dialog'">
            <div :class="['dialog__header', type]">
                <h3>{{ titleDialog }}</h3>
            </div>
            <div :class="['dialog__body', type]">
                <i :class="iconDialog"></i>
                <p>{{ contentDialog }}</p>
            </div>
            <div class="dialog__footer">
                <b-button ref="refBtnPrimary" v-if="btnPrimary !== null" :value="btnPrimary"
                    @click="this.beforeCloseDialog(); this.handleBtnPrimary()"></b-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BaseDialog",
    props: {
        // Nội dung Dialog
        contentDialog: String,
        // kiểu Dialog (error, warning, confirm)
        type: {
            type: String,
            default: null
        },
        // tên nút bấm chính
        btnPrimary: {
            type: String,
            default: null
        },
    },
    created() {
        this.setTitleDialog(this.type);
    },
    mounted() {
        /**
         * Tự động focus vào nút chính khi mở Dialog
         * Created by: DDHUY (16/09/2023)
         */
        this.$nextTick(() => {
            if (this.$refs.refBtnPrimary) {
                this.$refs.refBtnPrimary.focus();
            }
        })
    },
    methods: {
        /**
         * Hàm xử lý sự kiện nút chính
         * Created by: DDHUY (06/09/2023)
         */
        handleBtnPrimary() {
            this.$emit("clickBtnPrimary");
        },
        /**
         * Hàm đặt tên Dialog theo type
         * Created by: DDHUY (06/09/2023)
         * @param {string} type
         */
        setTitleDialog(type) {
            switch (type) {
                case 'error':
                    this.titleDialog = "Lỗi!";
                    this.iconDialog = "fa-solid fa-circle-exclamation";
                    break;
                case 'warning':
                    this.titleDialog = "Cảnh báo!";
                    this.iconDialog = "fa-solid fa-triangle-exclamation";
                    break;
                case 'confirm':
                    this.titleDialog = "Xác nhận!";
                    this.iconDialog = "fa-solid fa-circle-question";
                    break;
                case 'success':
                    this.titleDialog = "Thành công!"
                    this.iconDialog = "fa-solid fa-circle-check";
                    break;
                default:
                    break;
            }
        },
        /**
         * Tạo hiệu ứng khi đóng thông báo Dialog
         * Created by: DDHUY
         */
        beforeCloseDialog() {
            this.hideEffect = true;
            setTimeout(() => {
                this.$emit("closeDialog");
            }, 300);
        },
    },
    data() {
        return {
            hideEffect: false,
            titleDialog: '',
            iconDialog: '',
        }
    },
}
</script>

<style scoped src="./dialog.css"></style>