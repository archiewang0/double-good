<template>
    <main>
        <div class="recommendSortBar">
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