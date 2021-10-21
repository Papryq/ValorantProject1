import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueScreen from 'vue-screen';
import TheFooter from './components/TheFooter'
import TheNavbar from './components/TheNavbar'



createApp(App).use(router, VueScreen).component('TheFooter', TheFooter).component('TheNavbar', TheNavbar).mount('#app')
