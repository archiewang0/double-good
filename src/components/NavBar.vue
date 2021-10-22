<template>
    <nav :class="stauts">
        <div>
            <a class="menuBtn" href="javascript:;">
                <div></div>
                <div></div>
                <div></div>
            </a>

            <a class="logo" href="javascript:;">
                <div>
                    <img src="../assets/img/horizontal-logo-11.svg" alt="">
                </div>
            </a>
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
        const stauts = ref('active')


        return {
            stauts,
        }
    },
}
</script>

<style lang="scss" scoped>
    @import '../assets/scss/components/navBar';
</style>