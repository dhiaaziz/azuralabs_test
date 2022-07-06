import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './index.css';
import axios from 'axios';

axios.interceptors.request.use((config) => {
    config.baseURL = 'http://localhost:5000/api'
        // config.withCredentials = true
    return config
})


createApp(App)
    .use(store)
    .use(router)
    .mount('#app');

