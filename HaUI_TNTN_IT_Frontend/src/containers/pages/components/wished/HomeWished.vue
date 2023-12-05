<template>
    <div id="wished">
        <div class="component-logo">
            <img :src="require('@/assets/img/sec-title-flower.png')" />
        </div>
        <div class="component-title">
            <h3>Sổ Lưu Bút</h3>
        </div>
        <div class="wished-thanks">
            <p>Cảm ơn bạn rất nhiều vì đã gửi những lời chúc mừng tốt đẹp nhất đến sinh nhật của chúng tôi!</p>
        </div>
        <div class="wished-container row">
            <div class="wished-form col l-5 m-6 c-12">
                <div class="wished-box">
                    <div class="infor-wisher row">
                        <b-input :errValue="errFullName" v-model="post.fullName" class="infor-wisher-item col l-6 m-6 c-12"
                            placeholder="Nhập họ tên *"></b-input>
                        <b-input :errValue="errEmail" v-model="post.email" class="infor-wisher-item col l-6 m-6 c-12"
                            placeholder="Nhập email"></b-input>
                    </div>
                    <div class="content-wisher">
                        <textarea :class="[{ 'border-err': errContent !== null }]" v-model="post.content"
                            placeholder="Nhập lời chúc của bạn *"></textarea>
                        <span>{{ errContent }}</span>
                    </div>
                    <div class="btn-wished">
                        <b-button @click="handleCraetePost" iconRight="fa-solid fa-arrow-right"
                            value="Gửi lời chúc"></b-button>
                    </div>
                </div>
            </div>
            <div class="wished-list col l-5 m-6 c-12">
                <div class="wished-list-box">
                    <sp-loading v-if="isLoading"></sp-loading>
                    <div v-if="!isLoading">
                        <div v-for="(item, index) in this.posts" :key="item._id"
                            :class="['wished-list-item', index % 2 !== 0 ? 'bg' : '']">
                            <h3>{{ item.fullName }}</h3>
                            <pre>{{ item.content }}</pre>
                            <div @mouseover="showTooltip[item._id] = true" @mouseleave="showTooltip[item._id] = false"
                                v-if="item.isLike" class="list-item-love">
                                <img :src="require('@/assets/img/logo_tntn.png')" />
                                <i class="fa-solid fa-heart"></i>
                                <div v-show="showTooltip[item._id]" class="tool-tip">
                                    <p>Tác giả đã thích</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeWished",
    data() {
        return {
            post: {
                fullName: '',
                email: '',
                content: '',
            },
            posts: [],
            showTooltip: [],
            isLoading: false,
            errFullName: null,
            errContent: null,
            errEmail: null
        }
    },
    mounted() {
        this.getPosts();
    },
    watch: {
        'post.fullName': function (newVal) {
            if (newVal) {
                this.errFullName = null
            }
        },
        'post.content': function (newVal) {
            if (newVal) {
                this.errContent = null
            }
        },
        'post.email': function (newVal) {
            if (this.validateEmail(newVal) === true) {
                this.errEmail = null
            }
        }
    },
    methods: {
        validateEmail(email) {
            if (email !== '') {
                let regexEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
                return regexEmail.test(email)
            }
        },
        checkValid() {
            this.errFullName = !this.post.fullName || this.post.fullName.trim() === '' ? 'Tên không được bỏ trống.' : null;
            this.errContent = !this.post.content || this.post.content.trim() === '' ? 'Lời chúc không được bỏ trống.' : null;
            if (this.validateEmail(this.post.email) === false) {
                this.errEmail = 'Không đúng định dạng email.';
                return;
            }
            if ((!this.post.fullName || this.post.fullName.trim() === '') || (!this.post.content || this.post.content.trim() === '')) {
                return false;
            }
            else {
                return true;
            }
        },
        async getPosts() {
            try {
                this.isLoading = true;
                let res = await this.$postsService.getPosts();
                if (res) {
                    this.isLoading = false;
                    this.posts = res.data;
                }
            } catch (error) {
                this.isLoading = false;
                this.$toastify("Lỗi! Không lấy được danh sách Lời chúc.", 'ERROR');
                console.error(error);
            }
        },
        async createPost() {
            try {
                let postValue = { ...this.post };
                await this.$postsService.createPost(postValue);
                this.getPosts();
            } catch (error) {
                this.$toastify("Lỗi! Không thêm được Lời chúc.", 'ERROR');
                console.error(error);
            }
        },
        handleCraetePost() {
            if (this.checkValid() === true) {
                this.createPost();
                this.post = { ...null }
            }
        },
    },
}
</script>

<style scoped>
#wished {
    background: url(../../../../assets/img/bg.png) center center repeat local;
    padding: 100px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.wished-thanks {
    padding: 15px 0;
}

.wished-container {
    width: 100%;
    gap: 10px;
    justify-content: center;
    margin-top: 40px;
    position: relative;
}

.wished-box,
.wished-list-box {
    background-color: var(--color-white);
    width: 100%;
    border: 5px double var(--color-primary);
    box-shadow: 0px 20px 40px var(--color-shadow-opacity);
    min-height: 450px;
    box-sizing: border-box;
    z-index: 10;
    position: relative;
}

.wished-box {
    padding: 30px 40px;
}

.wished-form {
    z-index: 10;
    position: relative;
}

.wished-form::before {
    content: "";
    width: 982px;
    height: 405px;
    position: absolute;
    bottom: -120px;
    left: -30%;
    background: url(../../../../assets/img/rsvp-flower.png) center center/cover no-repeat local;
    z-index: -1;
    opacity: 0.6;
}

.wished-form::after {
    content: "";
    background: url(../../../../assets/img/invitation-right-image.png) center center/cover no-repeat local;
    position: absolute;
    bottom: -80px;
    right: -120%;
    width: 495px;
    height: 629px;
    opacity: 0.6;
    z-index: -1;
}

.infor-wisher-item {
    margin: 10px 0;
}

.content-wisher textarea {
    border: 1px solid var(--color-border);
    border-radius: var(--border-radius);
    min-width: 100%;
    max-width: 100%;
    min-height: 200px;
    max-height: 200px;
    outline: none;
    padding: 10px;
    margin: 10px 0;
    background-color: var(--color-bg-input);
}

.content-wisher textarea:focus {
    border-color: var(--color-focus);
}

.content-wisher span {
    display: block;
    color: var(--color-red);
}

.btn-wished {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.wished-list {
    position: relative;
    z-index: 10;
}


.wished-list-box {
    overflow-y: auto;
    max-height: 450px;
}

.wished-list-item {
    width: 100%;
    padding: 10px 15px;
    padding-right: 50px;
    position: relative;
}

.wished-list-item h3 {
    font-size: 1.1rem;
    line-height: 30px;
}

.wished-list-item pre {
    line-height: 25px;
    text-wrap: wrap;
}

.wished-list-item.bg {
    background-color: var(--color-primary-opacity);
}

.list-item-love {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
}

.tool-tip {
    position: absolute;
    background-color: var(--color-white);
    z-index: 2;
    left: -140px;
    width: 130px;
    bottom: 0;
    text-align: center;
    padding: 10px 5px;
    box-sizing: border-box;
    border-radius: var(--border-radius);
    box-shadow: 0px 5px 10px var(--color-shadow-opacity);
}

.tool-tip::after {
    content: "";
    border-top: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 10px solid var(--color-white);
    position: absolute;
    right: -15px;
    top: 50%;
    transform: translateY(-50%);
}

.list-item-love img {
    width: 25px;
}

.list-item-love>i {
    color: red;
    position: absolute;
    font-size: 1rem;
    bottom: 0px;
    right: -4px;
}
</style>