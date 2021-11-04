<template>
     <div class="navVisualInfo">
            <div class="mainContent">
                <div class="logo">
                    <img src="../../assets/img/double-good-top-logo.svg" alt="">
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
  
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import navMixins from '../../hooks/navMixins.js';

export default {
    setup(){
        const {closeMenu} = navMixins();

        return{
            closeMenu,
        }
    }

}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/components/navVisualInfo';
</style>