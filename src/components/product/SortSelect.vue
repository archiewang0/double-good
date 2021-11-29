<template>
    <div class="sort">
        <a href="javascript:;" @click="toggleSelect">
            <p>{{currentSelected}}</p>
        </a>
        <div class="list" v-if="open">
            <a href="javascript:;" @click="changeVal" data-val="1" :class="setStyle.name">Name A-Z</a>
            <a href="javascript:;" @click="changeVal" data-val="2" :class="setStyle.high">$ High to Low</a>
            <a href="javascript:;" @click="changeVal" data-val="3" :class="setStyle.low">$ Low to High</a>
        </div>
    </div>
</template>

<script>
import {useRouter,useRoute} from 'vue-router'
import selectMixins from '../../hooks/selectMixins';
import {computed} from 'vue';
export default {
    setup() {
        // const open = ref(false)
        const router = useRouter();
        const route = useRoute();
        const {toggleSelect,open} = selectMixins('SORT BY')

        function changeVal(e){
            open.value = false
            router.push({
                name: 'prod',
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

        return{
            toggleSelect,
            changeVal,
            open,
            currentSelected,
            setStyle,
        }
    },
}
</script>


<style lang="scss" scoped>
@import '../../assets/scss/view/products';
</style>