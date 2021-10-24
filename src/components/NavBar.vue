<template>
    <nav :class="stauts">
        <div>
            <a class="menuBtn" @click="openMenu" href="javascript:;" >
                <div></div>
                <div></div>
                <div></div>
            </a>

            <router-link to="/" class="logo">
                <div>
                    <img src="../assets/img/horizontal-logo-11.svg" alt="">
                </div>
            </router-link>
        </div>


        <div>
            <search-bar></search-bar>

            <a class="cart" href="javascript:;">
                <div>
                    <img src="../assets/img/cart-icon.svg" alt="">
                </div>
            </a>

            <a class="member" href="javascript:;">
                <div>
                    <img src="../assets/img/member-icon.svg" alt="">
                </div>
            </a>
        </div>

        <!-- for menu -->
        <div class="aside">

            <div>
                <div class="top">
                    <router-link to="/" class="logo" @click="closeMenu">
                        <img src="../assets/img/horizontal-logo-11.svg" alt="">
                    </router-link>

                    <a class="closeBtn" href="javascript:;" @click="closeMenu"></a>
                </div>

                <div class="links" @click="closeMenu">
                    <!-- <a href="javascript:;"><div></div> PRODUCTS</a> -->
                    <router-link to="/product"><div></div>PRODUCTS</router-link>
                    <router-link to="/designer"><div></div>DESIGNER</router-link>
                    <router-link to="/about"><div></div>ABOUT</router-link>
                    <router-link to="/contact"><div></div>CONTACT</router-link>
                    <router-link to="/member"><div></div>MEMBER</router-link>

                    <!-- <a href="javascript:;"><div></div>  DESIGNER</a> -->
                    <!-- <a href="javascript:;"><div></div>  ABOUT</a> -->
                    <!-- <a href="javascript:;"><div></div>  CONTACT</a> -->
                    <!-- <a href="javascript:;"><div></div>  MEMBER</a> -->
                </div>

            </div>

        </div>

        <!-- for cart--> 
        <!-- <div class="aside">

        </div> -->

        <!-- for member -->
        <!-- <div class="aside">

        </div> -->
    </nav>
</template>


<script>
import SearchBar from './SearchBar';
import {ref} from 'vue';

export default {
    components:{
        SearchBar,
    },
    setup() {
        const stauts = ref('')
        const closeMenu = ()=>{
            stauts.value = ""
        }
        const openMenu = ()=>{
            stauts.value = "active"
        }

        return {
            stauts,
            closeMenu,
            openMenu,
        }
    },
}
</script>

<style lang="scss" scoped>
    @import '../assets/scss/components/navBar';
</style>