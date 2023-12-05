<template>
    <div class="register">
        <div class="register-title">
            <div class="register-logo">
                <img :src="require('@/assets/img/logo_tntn.png')" />
            </div>
            <h3>Xác nhận tham gia</h3>
        </div>
        <div class="register-form">
            <div class="register-form-item row no-gutters">
                <b-input v-model="register.fullName" :errValue="errFullName" ref="refHoten" required idInput="hoten"
                    label="Họ tên" class="col l-3 m-6 c-10" placeholder="VD: Đặng Đình Huy"></b-input>
            </div>
            <div class="register-form-item row no-gutters">
                <b-input v-model="register.schoolYear" idInput="khoa" label="Khóa" class="col l-3 m-6 c-10"
                    placeholder="VD: K15"></b-input>
            </div>
            <div class="register-form-item row no-gutters">
                <b-input v-model="register.className" idInput="lop" label="Lớp" class="col l-3 m-6 c-10"
                    placeholder="VD: KTPM02"></b-input>
            </div>
            <div class="register-form-item row no-gutters">
                <b-input @keypress.enter="handleRegister" v-model="register.phoneNumber" :errValue="errPhoneNumber" required
                    idInput="sdt" label="Số điện thoại" class="col l-3 m-6 c-10" placeholder="VD: 0123456789"></b-input>
            </div>
            <div class="register-form-item row no-gutters">
                <b-button @click="handleRegister()" value="Xác nhận" />
            </div>
        </div>
    </div>
    <BaseDialog @closeDialog="closeDialog" v-if="showDialog" contentDialog="Xác nhận tham gia thành công." type="success"
        btnPrimary="Đóng">
    </BaseDialog>
</template>

<script>
import BaseDialog from '@/components/dialog/BaseDialog.vue';

export default {
    name: "RegisterPage",
    components: {
        BaseDialog
    },
    computed: {
        title() {
            return this.$route.name;
        },
    },
    data() {
        return {
            register: {
                fullName: '',
                schoolYear: '',
                className: '',
                phoneNumber: '',
            },
            isLoading: false,
            errFullName: null,
            errPhoneNumber: null,
            showDialog: false
        }
    },
    mounted() {
        this.$refs.refHoten.focus();
    },
    watch: {
        'register.fullName': function (newVal) {
            if (newVal) {
                this.errFullName = null;
            }
        },
        'register.phoneNumber': function (newVal) {
            if (newVal) {
                this.errPhoneNumber = null;
            }
        }
    },
    methods: {
        checkValid() {
            this.errFullName = !this.register.fullName || this.register.fullName.trim() === '' ? 'Họ tên không được bỏ trống.' : null;
            this.errPhoneNumber = !this.register.phoneNumber || this.register.phoneNumber.trim() === '' ? 'Số điện thoại không được bỏ trống.' : null;
            if ((!this.register.fullName || this.register.fullName.trim() === '')
                || (!this.register.phoneNumber || this.register.phoneNumber.trim() === '')) {
                return false;
            }
            return true;
        },
        async insertRegister() {
            try {
                const res = await this.$registerService.insertRegister(this.register);
                if (res) {
                    this.showDialog = true;
                    this.clearInput();
                }
            } catch (error) {
                console.error(error);
                this.$toastify(`${error.response.data.usermsg}`, 'ERROR');
            }
        },
        handleRegister() {
            if (this.checkValid() === true) {
                this.insertRegister();
            }
        },
        clearInput() {
            this.register = { ...null }
        },
        closeDialog() {
            this.showDialog = false;
        }
    },
}
</script>

<style scoped>
.register {
    padding: 40px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
}

.register-title h3 {
    font-family: Dancing_Script-Bold;
    font-size: 2.4rem;
    font-weight: 600;
    text-align: center;
}

.register-title .register-logo {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 20px;
}

.register-title .register-logo>img {
    width: 50%;
    object-fit: cover;
}

.register-form {
    width: 100%;
}

.register-form-item {
    display: flex;
    justify-content: center;
    margin: 15px 0;
}
</style>