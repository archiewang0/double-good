<template>
    <main>
        <div class="searchInfo">
            <div class="searchInput">
                <input type="text" value="bag" placeholder="請輸入商品名稱,或是商品的類別">
                <a href="javascript:;">
                    <img src="../assets/img/search-icon.svg" alt="">
                </a>
            </div>

            <p>約有10項,搜尋結果</p>
        </div>
    </main>
</template>

<script>
export default {
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