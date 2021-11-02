import { createApp } from 'vue'
import MasonryWall from '@yeger/vue-masonry-wall'

import TestUi from './components/ui/TestUi';
import CustomSwiper from './components/ui/CustomSwiper';

import router from './router'
import App from './App.vue'

const app = createApp(App)

app.component('test-ui',TestUi)
app.component('custom-swiper',CustomSwiper)

app.use(router)
app.use(MasonryWall)


app.mount('#app')