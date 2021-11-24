<template>
    <h1>hollo word - {{pid}}</h1>
</template>

<script>
import {useStore} from 'vuex'

export default {
    props:['pid'],
    setup(props) {
        const store = useStore();
        // console.log(props.pid)

        let prodInfo = store.getters['prod/products'].find(i=>i.pid == props.pid)



        console.log(prodInfo)

    },
}
</script>