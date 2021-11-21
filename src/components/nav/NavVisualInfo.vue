<template>
     <div class="navVisualInfo" :class="infoIndexShow" >
            <div class="mainContent">
                <div class="logo">
                    <router-link to="/" >
                        <img src="../../assets/img/double-good-top-logo.svg" alt="">
                    </router-link>
                </div>


                <div class="aboutInfo">
                    <div class="subtitle">
                        品味生活
                    </div>

                    <p>Double Good - 立志於提供客戶具美感,實用性等產品,所有產品來自於不同的設計師來打造,可以透過產品的外觀質感來感受到設計師獨特的風格品味,與專業的堅持,如何選擇生活方式呢？快來Double Good來尋找最符合你的品味的產品，無論是衣服、鞋子、褲子、裙子、包包、品味生活用品等任你挑選...</p>
                   
                    <div class="btns">
                        <div>
                            <router-link to="/about" class="more">+ MORE</router-link>
                        </div>

                        <div> 
                            <router-link to="/contact" class="contact"> CONTACT ></router-link>
                        </div>
  
                        <div class="icons">
                            <div>
                                <a href="javascript:;"><img src="../../assets/img/fb.svg" alt=""></a>
                            </div>

                            <div>
                                <a href="javascript:;"><img src="../../assets/img/ig.svg" alt=""></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <img src="../../assets/img/slogan.svg" alt="">
            </div>
        </div>
</template>

<script>
import {useRoute} from 'vue-router';
import {computed} from 'vue';
import {useStore} from 'vuex';

import navMixins from '../../hooks/navMixins.js';

export default {
    setup(){
        const {closeMenu} = navMixins();
        const store = useStore()

        // const checkSroll = computed(()=>{
        //     return store.getters['indexScrollHidden']
        // })


        // computed 無法綁定兩次 
        // 如果希望他直接反應 就必須第一個computed 
        const infoIndexShow = computed(()=>{
            let path = useRoute().path
            // console.log('滑動是否觸發')
            return {indexShow:  path == '/' && !store.getters['nav/indexScrollHidden'] }
        })




        return{
            closeMenu,

            // checkSroll,
            infoIndexShow,
        }
    }

}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/components/navVisualInfo';
</style>