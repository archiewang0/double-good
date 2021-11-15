<template>
    <main>
        <div class="searchInfo">
            <div class="recommend">
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
    </main>
</template>

<script>
import SortSelect from '../components/product/SortSelect'


export default {
    components:{
        SortSelect
    },
    setup() {
        
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
</style>