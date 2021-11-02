<template>
    <div class="search">
        <input type="button">
        <input type="text" placeholder="SEARCH">
        <select-bar></select-bar>
        <div class="recommedBar">

        </div>
    </div>
</template>

<script>
import SelectBar from './SelectBar';
export default {
    components:{
        SelectBar,
    }
}
</script>

<style lang="scss" scoped>
    @import '../../assets/scss/components/searchBar';
</style>