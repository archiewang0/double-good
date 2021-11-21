import { createApp } from 'vue'
import MasonryWall from '@yeger/vue-masonry-wall'


import TestUi from './components/ui/TestUi';
import CustomSwiper from './components/ui/CustomSwiper';

import router from './router'
// import store from './store/index';
import store from './store/index';
import App from './App.vue'

const app = createApp(App)

app.component('test-ui',TestUi)
app.component('custom-swiper',CustomSwiper)
app.component('masonry-wall',MasonryWall)

app.use(router)
app.use(store)




app.mount('#app')