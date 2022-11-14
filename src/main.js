import { createApp } from 'vue'
import MasonryWall from '@yeger/vue-masonry-wall'


import TestUi from './components/ui/TestUi.vue';
import CustomSwiper from './components/ui/CustomSwiper.vue';

import router from './router'
// import store from './store/index';
import store from './store/index';
import App from './App.vue'

const app = createApp(App)

// 這裡註冊 app compoent可都以隨意使用 下列呼叫的conponent 不需再引入
app.component('test-ui',TestUi)
app.component('custom-swiper',CustomSwiper)
app.component('masonry-wall',MasonryWall)

app.use(router)
app.use(store)




app.mount('#app')