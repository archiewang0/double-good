<template>
    <!-- status -->
    <nav :class="navState" >
    <!-- <nav class="status"> -->

        <div class="navWrap">
            <div>
                <a class="menuBtn" @click="changeNavState('active')" href="javascript:;" >
                    <div></div>
                    <div></div>
                    <div></div>
                </a>

                <router-link to="/" class="logo" :style="navLogoSetWidth">
                    <div>
                        <img src="../../assets/img/horizontal-logo-11.svg" alt="">
                    </div>
                </router-link>
            </div>


            <div>
                <search-bar></search-bar>

                <a class="cart" href="javascript:;" @click="changeNavState('cartActive')">
                    <div>
                        <img src="../../assets/img/cart-icon.svg" alt="">
                        <div class="prodsQuan" v-if="cartProdsQuan">
                            <p>{{cartProdsQuan}}</p>
                        </div>
                    </div>
                </a>

                <a class="member" href="javascript:;" @click="changeNavState('memberActive')">
                    <div>
                        <img src="../../assets/img/member-icon.svg" alt="">
                    </div>
                </a>
            </div>
        </div>


        <!-- for menu -->
        <div class="aside forMenu">
            <div>
                <div class="top">
                    <router-link to="/" class="logo" @click="changeNavState('')">
                        <img src="../../assets/img/horizontal-logo-11.svg" alt="">
                    </router-link>

                    <a class="closeBtn" href="javascript:;" @click="changeNavState('')"></a>
                </div>

                <div class="links" @click="changeNavState('')">

                    <router-link to="/products" :class="setActive.prod"><div></div>PRODUCTS</router-link>
                    <router-link to="/designer" :class="setActive.designer"><div></div>DESIGNER</router-link>
                    <router-link to="/about" :class="setActive.about"><div></div>ABOUT</router-link>
                    <router-link to="/contact" :class="setActive.contact"><div></div>CONTACT</router-link>
                    <router-link to="/member" :class="setActive.member"><div></div>MEMBER</router-link>

                </div>

            </div>

        </div>

        <!-- for cart--> 
        <cart-aside></cart-aside>

        <!-- for member -->
        <member-aside></member-aside>


        <nav-visual-info></nav-visual-info>

    </nav>
</template>


<script>
import { useRoute } from 'vue-router';
import {computed } from 'vue';
import {useStore} from 'vuex';


import SearchBar from './SearchBar';
import MemberAside  from './MemberAside';
import CartAside from './CartAside';
import NavVisualInfo from './NavVisualInfo'




export default {
    components:{
        SearchBar,
        MemberAside,
        CartAside,
        NavVisualInfo
    },
    setup() {

        const route = useRoute();
        const store = useStore();

        const navState = computed(()=>store.getters['nav/navState'])
        const cartProdsQuan = computed(()=>{
            let prodsQuan = store.getters['cart/cartProdsQuan']
            if(prodsQuan === 0){
                return false
            } else if (prodsQuan >= 99){
                return '99+'
            } else{
                return prodsQuan
            }
        })
        const navLogoSetWidth = computed(()=>{
            let isSet = store.getters['nav/indexScrollHidden']
            if(!isSet && route.path === "/"){
                return {width: '0px'}
            } else{
                return {}
            }
        })
        
        

        function changeNavState (val){
            store.commit('nav/changeNavState',val)
        }


        const setActive = computed(()=>{
            const curLink = route.path.replace('/',"").toUpperCase()

            return{
                prod: {'active': curLink === 'PRODUCTS'},
                about: {'active': curLink === 'ABOUT'},
                contact: {'active': curLink === 'CONTACT'},
                designer: {'active': curLink === 'DESIGNER'},
                member: {'active': curLink === 'MEMBER'},
            }
        })



        return {
            navState,
            setActive,
            cartProdsQuan,
            navLogoSetWidth,

            changeNavState,

        }
    },
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/components/navBar';
</style>