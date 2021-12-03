<template>
    <div class="filterSortBar">
        <div class="filter" v-if="filter">
            <a href="javascript:;" :class="setActive.all" @click="changeFilter">
                ALL
            </a>
            <a href="javascript:;" :class="setActive.bag" @click="changeFilter">
                BAG
            </a>
            <a href="javascript:;" :class="setActive.hat" @click="changeFilter">
                HAT
            </a>
            <a href="javascript:;" :class="setActive.clothes" @click="changeFilter">
                CLOTHES
            </a>
            <a href="javascript:;" :class="setActive.pants" @click="changeFilter">
                PANTS
            </a>
            <a href="javascript:;" :class="setActive.shoes" @click="changeFilter">
                SHOE
            </a>
        </div>

        <div class="sort" v-if="sort">
            <a href="javascript:;" @click="toggleSelect">
                <p>{{currentSelected}}</p>
            </a>
            <div class="list" v-if="open">
                <a href="javascript:;" @click="changeSortVal" data-val="1" :class="setStyle.name">Name A-Z</a>
                <a href="javascript:;" @click="changeSortVal" data-val="2" :class="setStyle.high">$ High to Low</a>
                <a href="javascript:;" @click="changeSortVal" data-val="3" :class="setStyle.low">$ Low to High</a>
            </div>
        </div>

    </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue';
import selectMixins from '../../hooks/selectMixins';
export default {
    props:['filter','sort'],
    setup() {
        const route = useRoute();
        const router = useRouter();
        const {toggleSelect,open} = selectMixins('SORT BY')


        function changeFilter(e){
            router.push({
                query: {
                    ...route.query,
                    filter: e.target.textContent.trim()
                }
            })
        }

        function changeSortVal(e){
            open.value = false
            router.push({
                query:{
                    ...route.query,
                    sort: e.target.dataset.val
                }
            })
        }

        
        const currentSelected = computed(()=>{
            if(route.query.sort ==="1"){
                return "Name A-Z"
            } else if(route.query.sort ==="2"){
                return "$ High to Low"
            } else if(route.query.sort ==="3"){
                return "$ Low to High"
            } else{
                return "SORT BY"
            }
        })

        const setStyle = computed(()=>{
            return {
                name: {'active': currentSelected.value == 'Name A-Z' },
                high: {'active': currentSelected.value == '$ High to Low' },
                low: {'active': currentSelected.value == '$ Low to High' },
            }
        })




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

        return{
            setActive,
            changeFilter,

            toggleSelect,
            changeSortVal,
            open,
            currentSelected,
            setStyle,
        }
    },
}
</script>


<style lang="scss" scoped>
@import '../../assets/scss/components/filterSortBar.scss';
</style>