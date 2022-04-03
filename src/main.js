import { createApp } from 'vue'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import router from './router'


export const app = createApp(App)

app.use(router)

app.AOS = new AOS.init();
app.use(AOS).mount('#app')
