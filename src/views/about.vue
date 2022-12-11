<template>
    <div class="wrap">
        <div class="about_parallax">

            <img 
                class="contextImg" 
                src="../assets/img/about-25.svg" 
                alt=""
                :style="isPc?{transform: `translate(0,${curY/1.5}px)`}:{}">
            <img 
                class="contextImg_m" 
                src="../assets/img/sm-goodgoods-26.svg" 
                alt=""
                ref="contextImg_mEl">

            <img 
                class="bg" 
                src="../assets/img/586_shop1_202351.jpg">

            <div class="about_content" 
                :style="isPc?{transform: `translate(0,${curY/-5}px)`}: {}">
                <p class="title">ABOUT</p>
                <img src="../assets/img/about_logo-30.svg" alt="">
                <p>
                    Double Good - 立志於提供客戶具美感,實用性等產品,所有產品來自於不同的設計師來打造,可以透過產品的外觀質感來感受到設計師獨特的風格品味,與專業的堅持, 如何選擇生活方式呢？快來Double Good 來尋找最符合你的品味的產品，無論是衣服、鞋子、褲子、裙子、包包、品味生活用品等任你挑選...
                    <br>
                    在 Double Good 可以很容易找到最對味的商品、大膽地展現自己獨特的風格品味,支持設計師的獨立品牌。
                </p>
            </div>

        </div>

        <div class="navBtn">
            <div>
                <router-link to="/products">&lt;  PRODUCTS </router-link>
            </div>

            <div>
                <router-link to="/contact">CONTACT  &gt;</router-link>
            </div>
        </div>

        
    </div>
</template>

<script>
import { ref, onMounted , onUnmounted, computed} from 'vue';
import {useStore} from 'vuex';

export default {
    setup(){
        const curY = ref(scrollY);

        const store = useStore();
        const isPc = computed(()=>store.getters['common/isPc'])

        const scrollHandler=()=>{
            curY.value = scrollY
        }

        onMounted(()=>{
            window.addEventListener('scroll',scrollHandler)
        })

        onUnmounted(()=>{
            window.removeEventListener('scroll',scrollHandler)
        })
        return {
            curY,
            isPc
        }
    }
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/view/about.scss';
</style>