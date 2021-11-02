<template>
    <!-- status -->
    <nav :class="status">
    <!-- <nav class="status"> -->
        <div>
            <a class="menuBtn" @click="openNav('active')" href="javascript:;" >
                <div></div>
                <div></div>
                <div></div>
            </a>

            <router-link to="/" class="logo">
                <div>
                    <!-- <img src="../assets/img/horizontal-logo-11.svg" alt=""> -->
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
                    <router-link to="/products" :class="setActive('PRODUCTS')"><div></div>PRODUCTS</router-link>
                    <router-link to="/designer" :class="setActive('DESIGNER')"><div></div>DESIGNER</router-link>
                    <router-link to="/about" :class="setActive('ABOUT')"><div></div>ABOUT</router-link>
                    <router-link to="/contact" :class="setActive('CONTACT')"><div></div>CONTACT</router-link>
                    <router-link to="/member" :class="setActive('MEMBER')"><div></div>MEMBER</router-link>
                </div>

            </div>

        </div>

        <!-- for cart--> 
        <!-- <div class="aside forCart">
            <div>
                <div class="top">
                    <p>
                        YOUR CART <span>(0)</span>
                    </p>
                    
                    <a class="closeBtn" href="javascript:;" @click="closeMenu"></a>
                </div>

                <div class="list">
                    <div class="cartItem">

                    </div>
                </div>
                <div class="payBtn">
                    <div class="subtotal">
                        <p>SUBTOTAL</p>
                        <p>200 NT$</p>
                    </div>
                    <div class="btn">
                        <a href="javascript:;">
                            CONTINUE TO PAYMENT
                        </a>
                    </div>
                </div>
            </div>
        </div> -->

        <cart-aside @close="closeMenu"></cart-aside>

        <!-- for member -->
        <member-aside @close="closeMenu"></member-aside>
    </nav>
</template>


<script>
import { useRoute } from 'vue-router';
import {ref} from 'vue';

import SearchBar from './SearchBar';
import MemberAside  from './MemberAside';
import CartAside from './CartAside';


export default {
    components:{
        SearchBar,
        MemberAside,
        CartAside
    },
    setup() {
        const route = useRoute();
        const status = ref('');
        const currentLink = ref('')

        const setActive = (val) =>{
            return {
                'active': currentLink.value === val
            }
        }
        const closeMenu = ()=>{
            status.value = "";
            let path = route.path
            path = path.replace('/',"").toUpperCase()
            currentLink.value = path
        }
        const openNav = (setVal)=>{
            status.value = setVal
        }


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