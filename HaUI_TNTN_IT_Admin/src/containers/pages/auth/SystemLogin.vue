<template>
    <div class="login-page">
        <div class="form">
            <h3>Đăng nhập hệ thống</h3>
            <div class="login-form">
                <div class="login-form-input">
                    <input ref="refEmail" v-model="account.email" type="text" placeholder="Email" />
                    <p v-show="errEmail" class="text-err">Email không được để trống</p>
                </div>
                <div class="login-form-input">
                    <input @keydown.enter="handleLogin" v-model="account.password" type="password" placeholder="Mật khẩu" />
                    <p v-show="errPassword" class="text-err">Mật khẩu không được để trống</p>
                </div>
                <button @click="handleLogin">login</button>
            </div>
        </div>
    </div>
</template>

<script>
import router from '@/routers/router';

export default {
    name: "SystemLogin",
    data() {
        return {
            account: {
                email: '',
                password: ''
            },
            errEmail: false,
            errPassword: false
        }
    },
    created() {
        this.pushSystem();
    },
    mounted() {
        this.$nextTick(() => {
            this.$refs.refEmail.focus();
        })
    },
    methods: {
        async handleLogin() {
            try {
                if (this.checkValid() === true) {
                    const res = await this.$authService.authUser(this.account);
                    const user = {
                        fullName: res.data.fullName,
                        token: res.data.token
                    };
                    localStorage.setItem('user', JSON.stringify(user));
                    router.push('system');
                }
            } catch (error) {
                console.error(error);
                this.$toastify(error.response.data.usermsg, 'ERROR');
            }
        },
        checkValid() {
            this.errEmail = this.account.email === '' ? true : false;
            this.errPassword = this.account.password === '' ? true : false;
            if (this.account.email === '' || this.account.password === '') {
                return false;
            }
            return true;
        },
        pushSystem() {
            const user = localStorage.getItem('user')
            if (user) {
                router.push('system');
            }
        }
    },
}
</script>

<style scoped>
.login-page {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
}

.form {
    position: relative;
    z-index: 1;
    background: var(--color-white);
    max-width: 400px;
    margin: 0 auto 100px;
    padding: 45px;
    text-align: center;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
    border-radius: var(--border-radius);
}

.form h3 {
    padding-bottom: 30px;
    font-size: 1.4rem;
}

.form .login-form-input {
    width: 300px;
    padding: 15px 0;
}

.form .login-form-input .text-err {
    color: var(--color-red);
    padding-top: 5px;
    text-align: left;
}

.form input {
    font-family: "Roboto", sans-serif;
    outline: 0;
    background: #f2f2f2;
    width: 100%;
    border: 1px solid var(--color-border);
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
    border-radius: var(--border-radius);
}

.form input:focus {
    border: 1px solid var(--color-focus);
}

.form button {
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    outline: 0;
    background: #4CAF50;
    width: 100%;
    border: 0;
    padding: 15px;
    color: #FFFFFF;
    font-size: 14px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;
    border-radius: var(--border-radius);
    margin-top: 15px;
}

.form button:hover,
.form button:active,
.form button:focus {
    background: #43A047;
}

.form .message {
    margin: 15px 0 0;
    color: #b3b3b3;
    font-size: 12px;
}

.form .message a {
    color: #4CAF50;
    text-decoration: none;
}

.form .register-form {
    display: none;
}
</style>