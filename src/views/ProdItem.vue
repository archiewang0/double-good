<template>

    <div>
        <h1>hollo word - {{pid}}</h1>
        <div class="prodItem">
            <figure>
                <img src="../assets/img/1.jpg" alt="">
            </figure>
            <div class="content">
                <div class="name">
                    {{prodInfo.name}} 
                    <span>{{prodInfo.type}}</span>
                </div>
            </div>
        </div>

    </div>
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
        return{
            prodInfo
        }
    },
}
</script>