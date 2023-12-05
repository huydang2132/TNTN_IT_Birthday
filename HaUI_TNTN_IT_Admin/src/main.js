import { createApp } from 'vue'
import App from './App.vue'
import router from './routers/router';
import BaseInput from '@/components/input/BaseInput.vue';
import BaseButton from '@/components/button/BaseButton.vue';
import SpinnerLoading from '@/components/loading/SpinnerLoading.vue';

import { toastify } from './helpers/toastify';
import VueExcelXlsx from "vue-excel-xlsx";
import authService from './services/authService';
import registerService from './services/registerService';
import postService from './services/postService';
import formatDate from './helpers/formatDate';

const app = createApp(App);

app.component("b-input", BaseInput);
app.component("b-button", BaseButton);
app.component("sp-loading", SpinnerLoading);

app.config.globalProperties.$authService = authService;
app.config.globalProperties.$toastify = toastify;
app.config.globalProperties.$registerService = registerService;
app.config.globalProperties.$postService = postService;
app.config.globalProperties.$formatDate = formatDate;

app.use(VueExcelXlsx);
app.use(router);
app.mount('#app');
