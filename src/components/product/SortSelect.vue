<template>
    <div class="sort">
        <a href="javascript:;" @click="toggleSelect">
            <p>{{currentVal}}</p>
        </a>
        <div class="list" v-if="open">
            <a href="javascript:;" @click="changeVal">Name A-Z</a>
            <a href="javascript:;" @click="changeVal">$ High to Low</a>
            <a href="javascript:;" @click="changeVal">$ Low to High</a>
        </div>
    </div>
</template>

<script>
import selectMixins from '../../hooks/selectMixins';
// import {ref} from 'vue';
export default {
    setup() {
        // const open = ref(false)
        const {toggleSelect,changeVal,open,currentVal} = selectMixins('SORT BY')

        return{
            toggleSelect,
            changeVal,
            open,
            currentVal,
        }
    },
}
</script>


<style lang="scss" scoped>
@import '../../assets/scss/view/products';
</style>