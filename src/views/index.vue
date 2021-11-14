<template>
    <div>
        
        <custom-swiper
            :values="passSwiperVal"
            :slides="slides"
            class="banner"
            >
            
            <template #default="{slide}">
                <!-- vue data傳入甚麼東西 記得都要呼叫出來並且使用 -->
                <figure>
                    <img :src="slide.img" alt="">
                </figure>

            </template>
        </custom-swiper>

        <div class="bannerContent">
            <div>
                <div class="title" ref="bannerTitle">
                    <p class="subTitle">最新商品</p>
                    <p>NEWEST!!</p>
                </div>
            
                <div class="content">
                    <div ref="bannerInfo">
                        <p class="main">Discover popular proudct in dooble good....</p>
                        <p>XXOO 獨立品牌,來自於 Designer Alex Bagshawe 親自操刀,運用幾何線條以及對比強烈的色彩、大膽的配色、已成為 Alex Bagshawe 獨有的視覺風格、使用義大利進口皮革 , 精緻的車工縫線、手指的碰觸都可以感受到細部的質感紋理、在台灣時間2021/1/1開始在...</p>
                    </div>
                </div>

                <a href="javascript:;" class="scrollDown" @click="srollTo">
                    <img src="../assets/img/scroll.svg" alt="">
                </a>
            </div>

            <div class="deco"></div>
        </div>


        <div class="prodBlock" ref="prodBlock">
            <div>
                <div class="title">
                    <p>Find things you'll love. Support independent brand.</p>
                </div>
                <div class="paragraph">
                    在 Double Good 可以很容易找到最對味的商品、大膽地展現自己獨特的風格品味,支持設計師的獨立品牌。
                </div>
            </div>
        </div>

        <div class="prodItemsContainer" ref="prodContainer">
            <masonry-wall 
                :items="items" 
                :column-width="350"
                >

                <!-- :gap="20" :column-width="300" :ssr-columns="1"   -->
                <template #default="slot"  >

                    <a href="javascript:;">

                        <figure>
                            <img :src="slot.item.img" alt="">
                        </figure>

                        <div class="info">
                            <div>
                                <span>D - {{slot.item.designer}}</span>
                                <h1>
                                    {{ slot.item.name }}  
                                    <span class="type">({{slot.item.type}})</span>
                                </h1>
                            </div>

                            <p>{{slot.item.price}} NT$</p>
                        </div>
                    </a>
                    <div class="shopBtn">
                        <a href="javascript:;" :date-id="slot.item.id" @click="addCart(slot.item)">
                            <p>
                                ADD TO CART
                            </p>
                        </a>
                    </div>

                </template>
            </masonry-wall>
        </div>


        <div class="loadMoreBlock">
            <div class="loadBtn">
                <router-link to="/products">
                    LOAD MORE
                </router-link>
            </div>
        </div>

    </div>
</template>

<script>

import {onMounted,onUnmounted, ref} from 'vue';
import {onBeforeRouteLeave} from  'vue-router';
import {useStore} from 'vuex';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

export default {
    setup() {
        const prodBlock = ref(null)
        const prodContainer = ref(null)

        const bannerTitle = ref(null)
        const bannerInfo = ref(null)
        let bannerImgs = null

        const store = useStore();


        let titleTl = gsap.timeline();
        // 將動畫寫入 gsapSet 讓他在mounted 的時候寫入

        const items = ref([
            { pid:1,name:'良品好物',designer:'Archie',type:'bag',price:600,
                img: require('../assets/img/knitwear_cardigan_cashmere_brown_1.jpg'),
                title: 'First', description: 'The first item.'},
            { pid:2,name:'好視良物',designer:'Una',type:'shoe',price:500,
                img: require('../assets/img/5f00209a79f96.jpg'),
                title: 'three', description: 'The three item.'},
            { pid:3,name:'Mac Pro',designer:'Chester',type:'clothes',price:1000,
                img: require('../assets/img/8850539_Afteroom_Lounge_Chair_Afteroom_Black_03.jpg'),
                title: 'three', description: 'The three item.'},
            { pid:4,name:'Pikachu',designer:'Chester',type:'clothes',price:1600,
                img: require('../assets/img/8e80e7_96e2abc235c541cc813b704e1.jpg'),
                title: 'three', description: 'The three item.'},
            { pid:5,name:'Audi AG',designer:'Archie',type:'clothes',price:1600,
                img: require('../assets/img/a-cold-wall_focus_leather_trio-3.jpg'),
                title: 'three', description: 'The three item.'},
            { pid:6,name:'IKEA',designer:'Archie',type:'clothes',price:1600,
                img: require('../assets/img/app001prod (3).jpg'),
                title: 'three', description: 'The three item.'},
            { pid:7,name:'Banner Bar',designer:'Archie',type:'clothes',price:200,
                img: require('../assets/img/a_cold_wall-acw-converse-onyx-fo2.jpg'),
                title: 'three', description: 'The three item.'},
            { pid:8,name:'Charizard',designer:'Archie',type:'clothes',price:200,
                img: require('../assets/img/a7e7cae3-6f49-49f2-b9c5-0242b882d870_LARGE.jpg'),
                title: 'three', description: 'The three item.'},
            { pid:9,name:'Peppa Pig',designer:'Archie',type:'clothes',price:200,
                img: require('../assets/img/a_cold_wall-acw-converse-onyx-foe.jpg'),
                title: 'three', description: 'The three item.'},
        ])

        const passSwiperVal = ref({
            createSwiperFun: ()=>{console.log('建立swiper')},
            // 如果需要帶入 function 不需要則帶入null
            swiperChangeFun: (e)=>{
                // console.log(bannerImgs)
                let subtitle = bannerTitle.value.children[0]
                let title = bannerTitle.value.children[1]
                let contentTitle = bannerInfo.value.children[0]
                let contentPara = bannerInfo.value.children[1]

                let time = setTimeout(()=>{
                    subtitle.textContent = slides.value[e.realIndex].subtitle
                    title.textContent = slides.value[e.realIndex].tilte
                    contentTitle.textContent = slides.value[e.realIndex].scondTitle
                    contentPara.textContent = slides.value[e.realIndex].content

                    clearTimeout(time)                
                },300)



                titleTl.restart()
                // titleTl.play()
            },
            // 如果需要帶入 function 不需要則帶入null


            slideView: 1,
            // 傳入number 不須要帶入null
            spaceBetween: 0,
            // 傳入number 不須要帶入null
            navigation: false,
            // 傳入boolean 不須要帶入null
            autoplay: {delay:3000,disableOnInteraction: false},
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

        // banner 的頁面 
        const slides = ref([
            {
                img: require('../assets/img/banner-one.jpg'),
                subtitle: '新品上市',
                tilte: 'NEWEST!!',
                scondTitle: 'XXOO Brand from Alex Bagshawe start selling...',
                content: 'XXOO 獨立品牌,來自於 Designer Alex Bagshawe 親自操刀,運用幾何線條以及對比強烈的色彩、大膽的配色、已成為 Alex Bagshawe 獨有的視覺風格、使用義大利進口皮革 , 精緻的車工縫線、手指的碰觸都可以感受到細部的質感紋理、在台灣時間2021/1/1開始在...'},
            {
                img: require('../assets/img/banner-two5.jpg'),
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

        function addCart(prod){
            store.commit('nav/changeNavState','cartActive')

            let cartProds = store.getters['cart/cartItems'];

            let isDuplicate = false;
            cartProds.forEach((item,index)=>{
                if(item.pid === prod.pid){
                    console.log('重複了購物車內容')
                    isDuplicate =true;
                    store.commit('cart/updateCartItem',{
                        idx: index,
                        updateInfo: {
                            buyNum: item.buyNum + 1
                        },
                    })
                }
            })

            if(!isDuplicate){
                store.commit('cart/addItemToCart',{
                    ...prod,
                    buyNum: 1,
                })
            }
            // console.log(prod)

        }

        const srollTo = ()=>{
            // console.log(prodBlock.value)
            prodBlock.value.scrollIntoView({behavior: "smooth"});
        }

        onBeforeRouteLeave(()=>{
            passSwiperVal.value.autoplay = null
        })



        function gsapSet(){
            titleTl.add([
                gsap.to(bannerTitle.value,{x:50,opacity:0,duration: .3}),
                gsap.to(bannerInfo.value,{x:50,opacity:0,duration: .3}),
                gsap.to(bannerImgs,{scale:.8,duration: .5})
            ]).add([
                gsap.to(bannerTitle.value,{x:0,opacity:1,duration: .3}),
                gsap.to(bannerInfo.value,{x:0,opacity:1,duration: .3,delay: .2}),
                gsap.to(bannerImgs,{scale:1,duration: .5})
            ])
            
                


            const time =  setTimeout(()=>{
                // console.log(document.querySelectorAll('.masonry-column'))
                gsap.timeline({
                    scrollTrigger: {
                    trigger: prodContainer.value,
                    scroller: ".wrap",
                    }
                }).from('.masonry-column',{
                    y:100,
                    stagger: 0.2,
                    ease: "power4.out",
                    duration: 2,
                    opacity: 0,
                })

                clearTimeout(time)
            },500)
        }



        onMounted(() => {
            bannerImgs = document.querySelectorAll('.swiper-slide figure')
            
            gsapSet();

            ScrollTrigger.refresh();
        });
        onUnmounted(() => {
            ScrollTrigger.getAll().forEach((trigger) => {
                trigger.kill();
            });
        });



        return {
            items,
            slides,

            // 抓取element
            prodBlock,
            prodContainer,
            bannerTitle,
            bannerInfo,
            // 抓取element

            addCart,
            passSwiperVal,
            srollTo,
        }
    },
}
</script>

<style lang="scss">
@import '../assets/scss/view/index';

</style>