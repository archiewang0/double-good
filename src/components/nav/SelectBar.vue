<template>
    <div class="selectBar">
        <a class="main" @click="toggleSelect" href="javascript:;">
            <p>{{currentVal}}</p>
        </a>
        <div class="list" v-if="open">
            <a href="javascript:;" @click="changeVal">PRODOUCT</a>
            <a href="javascript:;" @click="changeVal">DESIGNER</a>
        </div>
    </div>
</template>

<script>
import selectMixins from '../../hooks/selectMixins';
// import {ref} from 'vue';
export default {
    setup(){
        
        // defaultVal 給予初始直
        const {toggleSelect,changeVal,open,currentVal} = selectMixins('PRODOUCT')

        return{
            toggleSelect,
            changeVal,
            open,
            currentVal,
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/components/selectBar';
</style>

