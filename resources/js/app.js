import './bootstrap';

import { createApp } from 'vue';

import App from './App.vue';
import router from './router/router';
import axios from "axios";
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

axios.defaults.baseURL = "http://127.0.0.1:8000";

const app = createApp(App);
app.use(Toast);
app.use(router);
app.mount('#app');
