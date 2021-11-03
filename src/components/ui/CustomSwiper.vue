<template>
    <div class="swiperContainer">
        <swiper
            :slides-per-view="'auto'"
            :space-between="setSpace"
            :navigation="setNavi"

            @swiper="onSwiper"
            @slideChange="slideChange"
            :freeMode="setFreeMode"

            :modules="modules"
            :pagination="setPagin"
            :autoplay="setAuto"
            :loop ="setLoop"
            :speed="setSpeed"
            >

            <swiper-slide v-for="slide in slides" :key="slide">
                <slot :slide="slide"></slot>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import  SwiperCore,{ Navigation, Pagination, Scrollbar, A11y ,Autoplay,FreeMode} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue.js';
import 'swiper/swiper-bundle.min.css';


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y,Autoplay,FreeMode])

import {computed} from 'vue';

export default {
    props: ['values','slides'],
    components:{
        Swiper,
        SwiperSlide,
    },
    setup(prop) {
        const onSwiper = () => {
            // 判斷是否有 onSwiper的prop近來
            let fun = prop.values.createSwiperFun
            fun? fun() : null
            
        };
        const slideChange = (e) => {
            let fun = prop.values.swiperChangeFun
            // fun?  fun(): null
            fun(e)
        };
        

        const setView = computed(()=> {
            let view = prop.values.slideView
            return view? view: 1
        })

        const setSpace = computed(()=>{
            let space = prop.values.spaceBetween
            return space? space: 0
        })

        const setNavi = computed(()=>{
            let navi = prop.values.navigation
            return navi? navi : false
        })

        const setAuto = computed(()=>{
            let auto = prop.values.autoplay
            let mode = prop.values.FreeMode
            if(mode) {
                // 如果 有freeMode 就禁用autoPlay
                return false
            }
            return auto? auto: false
        })

        const setPagin = computed(()=>{
            let Pagin = prop.values.pagination
            return Pagin? Pagin: false
        })

        const setLoop = computed(()=>{
            let loop = prop.values.loop
            let mode = prop.values.FreeMode
            if(mode) {
                // 如果 有freeMode 就禁用loop
                return false
            }
            return loop? loop: false
        })

        const setSpeed = computed(()=>{
            let speed = prop.values.speed
            return speed ? speed: 1000
        })
        const setFreeMode = computed(()=>{
            let mode = prop.values.FreeMode
            return mode? mode: false
        })


        return{
            setView,
            setSpace,
            setNavi,
            setAuto,
            setPagin,
            setLoop,
            setSpeed,
            setFreeMode,

            onSwiper,
            slideChange,
            modules: [Navigation, Pagination, Scrollbar, A11y,Autoplay,FreeMode],
        }
    },
}
</script>
