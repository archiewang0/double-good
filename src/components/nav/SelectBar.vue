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
import {ref} from 'vue';
export default {
    setup(){
        const open = ref(false)
        const currentVal = ref('PRODOUCT')

        const toggleSelect = ()=>{
            open.value = !open.value
        }

        const changeVal = (e) => {
            currentVal.value = e.target.innerText
            open.value = false
        }

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

