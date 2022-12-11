<template>
    <div>
        <h1 style="color: white">
            會員中心
        </h1>

        <h1 style="color: red;">{{test}}</h1>
        <hook-test2></hook-test2>
    </div>

</template>


<script>



import testHook from '../hooks/testHook';

import HookTest2 from '../components/testComp/HookTest';

// import {computed} from 'vue'

export default {
    components:{
        // HookTestComponent,
        HookTest2,
    },
    setup() {
        const {test} = testHook();

 

        return{
            test,
        }
    },
}
</script>