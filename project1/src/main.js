import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import TheFooter from './home-components/TheFooter'
import TheNavbar from './home-components/TheNavbar'



createApp(App).use(router).component('TheFooter', TheFooter).component('TheNavbar', TheNavbar).mount('#app')
