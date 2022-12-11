<template>
    <main>

        <filter-sort-bar :filter="true" :sort="true"></filter-sort-bar>

        <search-info :search-content="searchContent" :search-target="products"></search-info>

        <div class="prodItemsContainer" ref="prodContainer">
            <masonry-wall 
                :items="products" 
                :column-width="isPc? 300: 150"
                >

                <template #default="slot"  >

                    <router-link :to="{name:'prodItem', params:{pid: slot.item.pid}}">
                        <figure>
                            <img :src="slot.item.coverImg" alt="">
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
                    </router-link>
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

import SearchInfo from '../components/page/SearchInfo';
import FilterSortBar from '../components/page/FilterSortBar';


// import prodAnimate from '../hooks/productsAnimate'
import prodsMixins from '../hooks/prodsMixins'

import {useStore} from 'vuex';
import {computed} from 'vue'
import {useRoute} from 'vue-router';

export default {
    components:{
        SearchInfo,
        FilterSortBar
    },
    setup() {
        const store = useStore();
        const route = useRoute();

        const products = computed(()=>{
            let prods = store.getters['prod/products'];

            // sort by
            if(route.query.sort){
                switch(route.query.sort){
                    case "1":
                        prods.sort(function(a,b){
                            let nameA = a.name.toUpperCase();
                            let nameB = b.name.toUpperCase();
                            if (nameA < nameB) {
                                return -1;
                            }
                            if (nameA > nameB) {
                                return 1;
                            }
                            return 0;
                        })
                        break;
                    case "2":
                        prods.sort(function(a,b){
                            return  b.price - a.price  
                        })
                        break;
                    case "3":
                        prods.sort(function(a,b){
                            return a.price - b.price
                        })
                        break;
                }
            }

            // search
            if(route.query.q){
                prods = prods.filter(prod =>{
                    return prod.name.toUpperCase().includes(route.query.q.toUpperCase())
                })
            }

            // filter
            if(route.query.filter && route.query.filter !== "ALL"){
                prods = prods.filter(prod =>{
                    return prod.type.toUpperCase() == route.query.filter
                })
            } 

            return prods
        })

        const isPc = computed(()=>store.getters['common/isPc'])

        // array.sort 無法被computed給偵測
        // const finalProds = computed(()=>products)
        // const {productFadeIn,prodContainer} = prodAnimate()
        const {addCart} = prodsMixins();

        const searchContent = computed(()=> route.query.q)

        // onMounted(()=>{
        //     productFadeIn(prodContainer.value)
        // })

        return{
            // prodContainer,
            // finalProds,
            products,
            searchContent,
            isPc,

            addCart,
        }   
    },
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/components/prodItemContainer';
</style>