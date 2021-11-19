<template>
    <main>
        <div class="filterSortBar">
            <div class="filter">
                <a href="javascript:;" class="active">
                    All
                </a>
                <a href="javascript:;">
                    BAG
                </a>
                <a href="javascript:;">
                    HAT
                </a>
                <a href="javascript:;">
                    CLOTHES
                </a>
                <a href="javascript:;">
                    PANTS
                </a>
                <a href="javascript:;">
                    SHOES
                </a>
            </div>

            <sort-select></sort-select>
        </div>


        <div class="searchInfo">
            <div>
                <div class="title">
                    <p>Bag</p>
                </div>
                <div class="info">
                    <p>針對你搜尋的內容</p>
                    <p>有 10 項符合產品</p>
                </div>
            </div>
        </div>

        <div class="prodItemsContainer" ref="prodContainer">
            <masonry-wall 
                :items="products" 
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

    </main>
</template>

<script>
import SortSelect from '../components/product/SortSelect'

import prodAnimate from '../hooks/productsAnimate'
import prodsMixins from '../hooks/prodsMixins'

import {useStore} from 'vuex';
import {computed,onMounted} from 'vue'

export default {
    components:{
        SortSelect
    },
    setup() {
        const store = useStore();
        const products =  computed(()=>store.getters['prod/products'])
        const {productFadeIn,prodContainer} = prodAnimate()
        const {addCart} = prodsMixins();

        onMounted(()=>{
            productFadeIn(prodContainer.value)
        })

        return{
            prodContainer,
            products,

            addCart,
        }
    },
    beforeRouteEnter(to,from,next){
        console.log('component beforeRouteEnter')
        console.log(to,from)
        next()
    },
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/view/products';
@import '../assets/scss/components/prodItemContainer';

</style>