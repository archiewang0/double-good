<template>
    <main>
        <div class="filterSortBar">
            <div class="filter">
                <a href="javascript:;" :class="setActive.all" @click="addFilter">
                    ALL
                </a>
                <a href="javascript:;" :class="setActive.bag" @click="addFilter">
                    BAG
                </a>
                <a href="javascript:;" :class="setActive.hat" @click="addFilter">
                    HAT
                </a>
                <a href="javascript:;" :class="setActive.clothes" @click="addFilter">
                    CLOTHES
                </a>
                <a href="javascript:;" :class="setActive.pants" @click="addFilter">
                    PANTS
                </a>
                <a href="javascript:;" :class="setActive.shoes" @click="addFilter">
                    SHOE
                </a>
            </div>

            <sort-select></sort-select>
        </div>


        <div class="searchInfo" v-if="searchContent">
            <div>
                <div class="title">
                    <p>{{searchContent}}</p>
                </div>
                <div class="info">
                    <p>針對你搜尋的內容</p>
                    <p>有 {{products.length}} 項符合產品</p>
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
import {useRoute,useRouter} from 'vue-router';


export default {
    components:{
        SortSelect
    },
    setup() {
        const store = useStore();
        const route = useRoute();
        const router = useRouter();


        const products =  computed(()=>{
            // 拷貝一個array 用來針對排序 或是篩選用的
            let prods = Array.from(store.getters['prod/products'])
            

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
            } else {
                prods = store.getters['prod/products']
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
        const {productFadeIn,prodContainer} = prodAnimate()
        const {addCart} = prodsMixins();

        const searchContent = computed(()=> route.query.q)

        function addFilter(e){
            router.push({
                name:'prod',
                query: {
                    ...route.query,
                    filter: e.target.textContent.trim()
                }
            })
        }

        const setActive = computed(()=>{
            const curLink = route.query.filter

            return{
                all: {'active': curLink === 'ALL' || !curLink },
                bag: {'active': curLink === 'BAG'},
                hat: {'active': curLink === 'HAT'},
                clothes: {'active': curLink === 'CLOTHES'},
                pants: {'active': curLink === 'PANTS'},
                shoes: {'active': curLink === 'SHOE'},
            }
        })

        onMounted(()=>{
            productFadeIn(prodContainer.value)
        })

        return{
            prodContainer,
            products,
            searchContent,

            setActive,

            addCart,
            addFilter,
        }
    },
    // beforeRouteUpdate(_,_2,next){
    //     console.log('在該component 修改id 或是 query meta')
    //     next()
    // },
    // beforeRouteEnter(to){
    //     console.log(to)
    //     console.log('從別的地方進入該conpoonent')
    // }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/view/products';
@import '../assets/scss/components/prodItemContainer';

</style>