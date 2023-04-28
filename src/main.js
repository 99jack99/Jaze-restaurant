import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import './style.css'

import App from './App.vue'
import router from './router/router.js'

const app = createApp(App)

app.use(createPinia())
app.use(router)


app.mount('#app')


