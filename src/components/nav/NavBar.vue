<template>
    <!-- status -->
    <nav :class="status">
    <!-- <nav class="status"> -->

        <div class="navWrap">
            <div>
                <a class="menuBtn" @click="openNav('active')" href="javascript:;" >
                    <div></div>
                    <div></div>
                    <div></div>
                </a>

                <router-link to="/" class="logo">
                    <div>
                        <img src="../../assets/img/horizontal-logo-11.svg" alt="">
                    </div>
                </router-link>
            </div>


            <div>
                <search-bar></search-bar>

                <a class="cart" href="javascript:;" @click="openNav('cartActive')">
                    <div>
                        <img src="../../assets/img/cart-icon.svg" alt="">
                    </div>
                </a>

                <a class="member" href="javascript:;" @click="openNav('memberActive')">
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
                    <router-link to="/" class="logo" @click="closeMenu">
                        <img src="../../assets/img/horizontal-logo-11.svg" alt="">
                    </router-link>

                    <a class="closeBtn" href="javascript:;" @click="closeMenu"></a>
                </div>

                <div class="links" @click="closeMenu">

                    <router-link to="/products" :class="setActive.prod"><div></div>PRODUCTS</router-link>
                    <router-link to="/designer" :class="setActive.designer"><div></div>DESIGNER</router-link>
                    <router-link to="/about" :class="setActive.about"><div></div>ABOUT</router-link>
                    <router-link to="/contact" :class="setActive.contact"><div></div>CONTACT</router-link>
                    <router-link to="/member" :class="setActive.member"><div></div>MEMBER</router-link>

                </div>

            </div>

        </div>

        <!-- for cart--> 
        <cart-aside @close="closeMenu"></cart-aside>

        <!-- for member -->
        <member-aside @close="closeMenu"></member-aside>


        <nav-visual-info></nav-visual-info>

    </nav>
</template>


<script>
import { useRoute } from 'vue-router';
import {computed  } from 'vue';


import SearchBar from './SearchBar';
import MemberAside  from './MemberAside';
import CartAside from './CartAside';
import NavVisualInfo from './NavVisualInfo'



import navMixins from '../../hooks/navMixins.js';



export default {
    components:{
        SearchBar,
        MemberAside,
        CartAside,
        NavVisualInfo
    },
    setup() {
        const {status, closeMenu,openNav} = navMixins()

        const route = useRoute()


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
            status,

            setActive,
            closeMenu,
            openNav,

        }
    },
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/components/navBar';
</style>