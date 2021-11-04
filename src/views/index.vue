<template>
    <div class="index">
        
        <custom-swiper
            :values="passSwiperVal"
            :slides="slides"
            >
            
            <template #default="{slide}">
                <!-- vue data傳入甚麼東西 記得都要呼叫出來並且使用 -->
                <figure>
                    <img :src="slide.img" alt="">
                </figure>
                <p >{{slide.content}}</p>
            </template>
        </custom-swiper>

        <!-- <img src="../assets/img/banner-two5.jpg" alt=""> -->

        <masonry-wall 
            :items="items" 
            :ssr-columns="1" 
            :column-width="300" 
            :gap="20">
            <template #default="slot" >
                <div >
                    <span>{{slot.index+1}}</span>
                    <h1 style="color: white;fontSize: 20px;">{{ slot.item.title }}</h1>
                    <span class="red">{{ slot.item.description }}</span>
                    <img src="../assets/img/cart_s_pic.jpg" alt="">
                </div>
            </template>
        </masonry-wall>

        <test-ui>
            <template #default="{passVal}">
                <h1 class="fontStyle">一些內容</h1>
                <p>{{passVal}}</p>  

            </template>

            <template #other="slot">
                <div class="ohter2">哈哈哈哈</div>
                <p>{{slot.otherVal}}</p>
            </template>
        </test-ui>


    </div>

</template>

<script>

import {ref} from 'vue';
import {onBeforeRouteLeave} from  'vue-router';


// import img12 from '../assets/img/banner-one.jpeg';
// const img12 = require('../assets/img/banner-two5');

export default {
    setup() {
        
        const items = ref([
            { title: 'First', description: 'The first item.' },
            { title: 'three', description: 'The three item.'},
            { title: 'three', description: 'The three item.'},
        ])

        const passSwiperVal = ref({
            createSwiperFun: ()=>{console.log('建立swiper')},
            // 如果需要帶入 function 不需要則帶入null
            swiperChangeFun: ()=>{console.log('swiperChange')},
            // 如果需要帶入 function 不需要則帶入null


            slideView: 1,
            // 傳入number 不須要帶入null
            spaceBetween: 0,
            // 傳入number 不須要帶入null
            navigation: false,
            // 傳入boolean 不須要帶入null
            autoplay: {delay:2000,disableOnInteraction: false},
            // 傳入object {delay:500,disableOnInteraction: false} 不須要帶入null
            pagination: {
                clickable: true, 
                renderBullet: (index, className )=>{
                    return `<span class="${className}">${index + 1}</span>`
                },
            },
            // 傳入 object {clickable: true, renderBullet: function(){...}}  不須要帶入null 
            loop: false,
            // 傳入boolean 不須要帶入null
            FreeMode: false,
            // 傳入boolean 不需帶入null
            speed: 1000,
            // 傳入number 不須要帶入null
        })


        const slides = ref([
            {
                img: require('../assets/img/banner-two5.jpg'),
                // img: getImgUrl('banner-one.jpeg'),
                subtitle: '新品上市',
                tilte: 'NEWEST!!',
                scondTitle: 'XXOO Brand from Alex Bagshawe start selling...',
                content: 'XXOO 獨立品牌,來自於 Designer Alex Bagshawe 親自操刀,運用幾何線條以及對比強烈的色彩、大膽的配色、已成為 Alex Bagshawe 獨有的視覺風格、使用義大利進口皮革 , 精緻的車工縫線、手指的碰觸都可以感受到細部的質感紋理、在台灣時間2021/1/1開始在...'},
            {
                img: require('../assets/img/banner-one.jpg'),
                // img: getImgUrl('banner-one.jpeg'),
                subtitle: '聖誕優惠',
                tilte: 'XMAS GIFTS',
                scondTitle: 'All testful gifts start selling in Dooble ...',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae veritatis itaque quisquam fuga repudiandae harum blanditiis delectus, eligendi a cum, dolor recusandae debitis laudantium explicabo tenetur sint quas.'},
            {
                img: require('../assets/img/banner-three.jpg'),
                subtitle: '最佳賣家',
                tilte: 'TOP SELLER',
                scondTitle: 'Discover popular proudct in  dooble good...',
                content: 'sapiente aspernatur qui consequatur maxime ad tempora laudantium blanditiis eligendi. Rem consequatur tenetur quos cupiditate eius provident voluptate quas atque? Doloribus dolorem ex, fuga porro nisi sit?'},
        ])


        onBeforeRouteLeave(()=>{
            passSwiperVal.value.autoplay = null
        })

        return {
            items,
            slides,

            passSwiperVal,
        }
    },
}
</script>

<style lang="scss">
.swiperContainer{
    .swiper{
        overflow: hidden;
        height: 85vh;

        .swiper-wrapper{
            height: 100%;
            .swiper-slide{
                height: 100%;
                background-color: green;
                figure{
                    width: 100%;
                    height: 100%;
                    img{
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        object-position: center;
                    }
                }
            }
        }

        .swiper-pagination{
            flex-direction: column;
            display: flex;
            width: unset;
            top: 50%;
            right: 20px;
            left: unset;
            bottom: unset;
            transform: translate(0,-50%);
            .swiper-pagination-bullet{
                font-size: 120px;
                line-height: 150px;
                font-weight: 900;
                width: 150px;
                height: 150px;
                -webkit-text-stroke: 1px white;
                background-color: transparent;
                border: 1px solid white;
                opacity: 1;
                color: transparent;
                transition: color ease .3s;
                margin: 10px;

                &:hover{
                    color: white;

                }
            }
            .swiper-pagination-bullet-active{
                color: white;
            }
        }

    }
}

.index{
    height: 2000px;
}


</style>