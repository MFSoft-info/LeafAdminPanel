import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

const app = createApp(App)

app.use(router)
app.use(BootstrapVue3)
app.use(store)
app.mount('#app')
// new Vue({
//     store,
//     // existing Vue settings here...
//   }).mount('#app') 