import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import TheFooter from './components/TheFooter'
import TheNavbar from './components/TheNavbar'



createApp(App).use(router).component('TheFooter', TheFooter).component('TheNavbar', TheNavbar).mount('#app')
