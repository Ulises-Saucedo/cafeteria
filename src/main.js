import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/router.js'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { OhVueIcon, addIcons } from "oh-vue-icons"
import { MdDarkmodeRound, MdLightmodeRound } from "oh-vue-icons/icons"
addIcons(MdDarkmodeRound, MdLightmodeRound)

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(router).use(pinia).component("v-icon", OhVueIcon).mount('#app')