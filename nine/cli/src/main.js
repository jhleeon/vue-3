import { createApp } from 'vue'
import App from './App.vue'
import AboutUs from './components/AboutUs.vue'

let app = createApp(App);
app.mount("#app");
app.component('about-us', AboutUs);