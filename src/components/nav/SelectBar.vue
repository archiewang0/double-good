<template>
    <div class="selectBar">
        <a class="main" @click="toggleSelect" href="javascript:;">
            <p>{{defaultSelectVal}}</p>
        </a>
        <div class="list" v-if="open">
            <a href="javascript:;" @click="changeVal">PRODUCT</a>
            <a href="javascript:;" @click="changeVal">DESIGNER</a>
        </div>
    </div>
</template>

<script>
import selectMixins from '../../hooks/selectMixins';
// import {ref} from 'vue';
export default {
    props:['defaultSelectVal'],
    setup(_,context){
        
        // defaultVal 給予初始直
        const {toggleSelect,open} = selectMixins('PRODUCT')

        function changeVal(e){
            context.emit('update:defaultSelectVal',e.target.textContent)
            toggleSelect()
        }

        return{
            toggleSelect,
            open,
            changeVal
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/components/selectBar';
</style>

