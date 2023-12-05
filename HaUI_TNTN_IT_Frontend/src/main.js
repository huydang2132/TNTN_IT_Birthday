import { createApp } from 'vue'
import App from './App.vue'
import router from './routers/router';

// import component sử dụng chung
import BgMusic from './containers/pages/components/audio/BgMusic.vue';
import BaseButton from './components/button/BaseButton.vue';
import BaseInput from './components/input/BaseInput.vue';
import SpinnerLoading from './components/loading/SpinnerLoading.vue';
import BaseDialog from './components/dialog/BaseDialog.vue';

import postsService from './services/posts-service.js';
import registerService from './services/register-service';
import membersService from './services/members-service';
import moment from 'moment/moment';

import { toastify } from './helpers/toastify';

const app = createApp(App)

// Khai báo các component sử dụng chung
app.component("bg-music", BgMusic);
app.component("b-button", BaseButton);
app.component("b-input", BaseInput);
app.component("sp-loading", SpinnerLoading);
app.component("b-dialog", BaseDialog);

app.config.globalProperties.$postsService = postsService;
app.config.globalProperties.$registerService = registerService;
app.config.globalProperties.$toastify = toastify;
app.config.globalProperties.$members = membersService;
app.config.globalProperties.$moment = moment;

app.use(router);
app.mount('#app');
