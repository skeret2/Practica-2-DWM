import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'boostrap'
import 'boostrap/dist/css/boostrap.min.css'

const app = createApp(App)

app.use(router)

app.mount('#app')