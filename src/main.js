import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style.css'
import 'animate.css'
import QrcodeVue from 'qrcode.vue'

const app = createApp(App)
app.component('qrcode-vue', QrcodeVue)
app.use(router)
app.mount('#app')