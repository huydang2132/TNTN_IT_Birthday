<template>
    <div class="register">
        <div class="register-header">
            <p>Tổng số: {{ this.registers.length }}</p>
            <input type="search" @keydown.enter="this.filterItem()" v-model="this.searchTerm"
                placeholder="Tìm kiếm theo tên" />
            <button @click="this.getRegister()" title="Làm mới dữ liệu"><i class="fa-solid fa-arrows-rotate"></i></button>
            <vue-excel-xlsx :data="registers" :columns="columns" :file-name="'DuLieuDangKy'" :file-type="'xlsx'"
                :sheet-name="'Dữ liệu'">
                <i class="fa-solid fa-file-export"></i>
            </vue-excel-xlsx>
        </div>
        <div class="register-table">
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Họ và tên</th>
                        <th>Khóa</th>
                        <th>Tên lớp</th>
                        <th>Số điện thoại</th>
                        <th>Ngày đăng ký</th>
                        <th>Đóng tiền</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in registers" :key="item._id" :class="[{ 'other-color': item.order % 2 == 0 }]">
                        <td>{{ item.order }}</td>
                        <td>{{ item.fullName }}</td>
                        <td>{{ item.schoolYear }}</td>
                        <td>{{ item.className }}</td>
                        <td>{{ item.phoneNumber }}</td>
                        <td>{{ item.createdAt }}</td>
                        <td>{{ item.statusPayment }}</td>
                        <td class="option">
                            <button @click="setIsPay(item.id, item.fullName, item.isPay)" title="Xác nhận đóng tiền"
                                :class="[item.isPay === false ? 'orange' : 'green']"><i
                                    :class="[item.isPay === false ? 'fa-regular' : 'fa-solid', 'fa-square-check']"></i></button>
                            <button @click="deleteRegister(item.id, item.fullName)" title="Xóa" class="remove"><i
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
    name: "SystemRegister",
    data() {
        return {
            registers: [],
            searchTerm: '',
            loadData: null,
            statusInput: false,
            columns: [
                {
                    label: "STT",
                    field: "order",
                },
                {
                    label: "Họ và tên",
                    field: "fullName",
                },
                {
                    label: "Khóa",
                    field: "schoolYear",
                },
                {
                    label: "Lớp",
                    field: "className",
                },
                {
                    label: "Số điện thoại",
                    field: "phoneNumber",
                },
                {
                    label: "Ngày đăng ký",
                    field: "createdAt",
                },
                {
                    label: "Đóng tiền",
                    field: "statusPayment",
                }
            ]
        }
    },
    created() {
        this.getRegister();
    },
    mounted() {
        this.loadData = setInterval(() => {
            if (this.statusInput === false) {
                this.getRegister();
            }
        }, 5000);
    },
    beforeUnmount() {
        clearInterval(this.loadData)
    },
    watch: {
        searchTerm: function (newVal) {
            if (!newVal) {
                this.getRegister();
                this.statusInput = false;
            }
        }
    },
    methods: {
        async getRegister() {
            try {
                const res = await this.$registerService.getRegister();
                if (res) {
                    this.registers = [];
                    res.data.forEach((element, index) => {
                        let data = {
                            id: element._id,
                            order: index + 1,
                            fullName: element.fullName,
                            schoolYear: element.schoolYear,
                            className: element.className,
                            phoneNumber: element.phoneNumber,
                            createdAt: this.$formatDate(element.createdAt),
                            statusPayment: element.isPay === false ? 'Chưa đóng' : 'Đã đóng',
                            isPay: element.isPay
                        };
                        this.registers.push(data);
                    });
                }
            } catch (error) {
                console.error(error);
                this.$toastify(error.response ? error.response.data.usermsg : 'Không thể lấy danh sách đăng ký', 'ERROR');
            }
        },
        async deleteRegister(id, fullName) {
            try {
                const token = JSON.parse(localStorage.getItem('user')).token;
                if (confirm(`Bạn có chắc muốn xóa '${fullName}'?`) === true) {
                    await this.$registerService.deleteRegister(id, token);
                    this.$toastify('Xóa thành công!', 'SUCCESS');
                    this.getRegister();
                    this.searchTerm = '';
                }
            } catch (error) {
                console.error(error);
                this.$toastify(error.response ? error.response.data.usermsg : 'Có lỗi xảy ra', 'ERROR');
            }
        },
        async setIsPay(id, fullName, isPay) {
            try {
                const token = JSON.parse(localStorage.getItem('user')).token;
                await this.$registerService.setIsPay(id, token);
                this.getRegister();
                this.$toastify(`${fullName} ${isPay === false ? 'đã đóng tiền' : 'chưa đóng tiền'}!`, `${isPay == false ? 'SUCCESS' : 'WARNING'}`);
                this.searchTerm = '';
            } catch (error) {
                console.error(error);
                this.$toastify(error.response ? error.response.data.usermsg : 'Có lỗi xảy ra', 'ERROR');
            }
        },
        filterItem() {
            this.registers = this.registers.filter(item => item.fullName.toLowerCase().includes(this.searchTerm.toLowerCase()));
            this.statusInput = true;
        },
    },
}
</script>

<style scoped>
.register {
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    padding-top: 50px;
}

.register .register-header {
    display: flex;
    justify-content: flex-end;
    box-sizing: border-box;
    padding: 10px 0;
    gap: 20px;
    align-items: center;
}

.register .register-header button {
    padding: 10px;
    border: none;
    border-radius: var(--border-radius);
    cursor: pointer;
    background-color: var(--color-green);
}

.register .register-header button:hover {
    opacity: 0.6;
}

.register .register-header button i {
    font-size: 1.4rem;
    color: var(--color-white);
}

.register .register-header input {
    padding: 10px;
    border: 1px solid var(--color-border);
    border-radius: var(--border-radius);
}

.register .register-table {
    width: 100%;
    height: 85%;
    overflow-y: auto;
}

.register .register-table table {
    border-collapse: collapse;
    width: 100%;
}

.register .register-table table tr td {
    width: fit-content;
}

.register .register-table table tr td,
.register .register-table table tr th {
    border: 1px solid var(--color-border);
    padding: 10px;
    text-align: left;
}

.register .register-table table tr td:first-child {
    width: 50px;
}

.register .register-table table .option {
    width: 120px;

}

.register .register-table table .option button {
    margin: 0 5px;
    padding: 5px;
    border: none;
    background-color: transparent;
    cursor: pointer;
}

.register .register-table table .option button i {
    font-size: 1.1rem;
}

.register .register-table table .option .orange i {
    color: var(--color-orange);
}

.register .register-table table .option .green i {
    color: var(--color-green);
}

.register .register-table table .option .remove i {
    color: var(--color-red);
}

.register .register-table table .other-color {
    background-color: #f1f1f1;
}
</style>