<template>
    <div class="wrap">
        <filter-sort-bar :filter="true" ></filter-sort-bar>

        <search-info :search-content="searchContent" :search-target="designers"></search-info>

        <div class="designers">
            <div v-for="designer in designers" :key="designer.did">
                <a href="javascript:;" class="designerInfo">

                    <figure class="prodContainer">
                        <span v-for="(prod,idx) in designer.designerProdInfo" :key="idx">
                            <img :src="prod.coverImg">
                        </span>
                    </figure>

                    <img class="portrait" :src="designer.portrait" >


                    <div class="infoContainer">
                        <p class="name">{{designer.name}}</p>
                        <p class="country">{{designer.country}}</p>
                        <p class="prodsType">
                            <span v-for="type in designer.prodsType" :key="type">
                                {{type.toUpperCase()}}
                            </span>
                        </p>
                    </div>


                </a>
            </div>
        </div>
    </div>

</template>

<script>
import SearchInfo from '../components/page/SearchInfo';
import FilterSortBar from '../components/page/FilterSortBar';

import { computed } from 'vue';
import {useStore} from 'vuex'
import { useRoute } from 'vue-router';

export default {
    components:{SearchInfo,FilterSortBar},

    setup() {
        const store = useStore();
        const route = useRoute();

        const designers = computed(()=>{
            let data = store.getters['design/designers']
            let prods = store.state.prod.products

            data.forEach(item=>{
                let prodInfo = []
                let prodIds = item.prodIds.slice(0,4)

                prodIds.forEach((id)=>{
                    let value = prods.find(pi=>pi.pid == id)
                    if(value) prodInfo.push(value)
                })
                item.designerProdInfo = prodInfo
            })


            if(route.query.q){
                data = data.filter(d =>{
                    return d.name.toUpperCase().includes(route.query.q.toUpperCase())
                })
            }
            return data
        })


        console.log(designers)


        const searchContent = computed(()=> route.query.q)

        return{
            designers,
            searchContent
        }
    },
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/view/designers';
</style>