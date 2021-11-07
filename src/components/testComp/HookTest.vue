<template>
    <div>
        <input type="text" v-model="input">
        <a href="javascript:;" @click="changeVal">按我</a>
    </div>
</template>


<script>
import {ref} from 'vue';
import testHook from '@/hooks/testHook';

export default {
    setup() {
        const {changeTest} = testHook()
        const input = ref('')



        const changeVal = ()=>{
            changeTest(input.value)
        }

        return{
            input,
            changeVal,
        }
    },
}
</script>