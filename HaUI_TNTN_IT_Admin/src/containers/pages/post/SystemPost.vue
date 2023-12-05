<template>
    <div class="post">
        <div class="post-table">
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Họ và tên</th>
                        <th>Email</th>
                        <th>Nội dung</th>
                        <th>Ngày gửi</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in posts" :key="item._id">
                        <td>{{ index + 1 }}</td>
                        <td>{{ item.fullName }}</td>
                        <td>{{ item.email }}</td>
                        <td>{{ item.content }}</td>
                        <td>{{ this.$formatDate(item.createdAt) }}</td>
                        <td class="option">
                            <button @click="likePost(item._id, item)" title="Thích" class="like">
                                <i :class="[item.isLike ? 'fa-solid' : 'fa-regular', 'fa-heart']"></i>
                            </button>
                            <button @click="deletePost(item._id)" title="Xóa" class="remove"><i
                                    class="fa-solid fa-trash-can"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: "SystemPost",
    data() {
        return {
            posts: null,
            loadData: null
        }
    },
    updated() {

    },
    created() {
        this.getPosts();
    },
    mounted() {
        this.loadData = setInterval(() => {
            this.getPosts();
        }, 5000);
    },
    beforeMount() {
        clearInterval(this.loadData);
    },
    methods: {
        async getPosts() {
            try {
                const res = await this.$postService.getPosts();
                if (res) {
                    this.posts = res.data;
                }
            } catch (error) {
                console.error(error);
                this.$toastify(error.response && error.response.data ? error.response.data.usermsg : 'Không thể lấy danh sách lời chúc', 'ERROR')
            }
        },
        async deletePost(id) {
            try {
                if (window.confirm('Bạn có chắc muôn xóa lời chúc?') === true) {
                    await this.$postService.deletePost(id);
                    this.$toastify('Xóa thành công', 'SUCCESS');
                    this.getPosts();
                }
            } catch (error) {
                console.error(error);
                this.$toastify(error.response && error.response.data ? error.response.data.usermsg : 'Đã xảy ra lỗi', 'ERROR');
            }
        },
        async likePost(id, item) {
            try {
                await this.$postService.likePost(id);
                item.isLike = !item.isLike;
            } catch (error) {
                console.error(error);
                this.$toastify(error.response && error.response.data ? error.response.data.usermsg : 'Đã xảy ra lỗi', 'ERROR');
            }
        }
    },
}
</script>

<style scoped>
.post {
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    padding-top: 50px;
}

.post .post-table {
    width: 100%;
    height: 85%;
    overflow-y: auto;
}

.post .post-table table {
    border-collapse: collapse;
    width: 100%;
}

.post .post-table table tr td {
    width: fit-content;
}

.post .post-table table tr td,
.post .post-table table tr th {
    border: 1px solid var(--color-border);
    padding: 10px 20px;
    text-align: left;
}

.post .post-table table tr td:first-child {
    width: 50px;
}

.post .post-table table .option {
    width: 120px;

}

.post .post-table table .option button {
    margin: 0 5px;
    padding: 5px;
    border: none;
    background-color: transparent;
    cursor: pointer;
}

.post .post-table table .option button i {
    font-size: 1.1rem;
}

.post .post-table table .option .like i {
    color: var(--color-red);
}

.post .post-table table .option .remove i {
    color: var(--color-red);
}
</style>