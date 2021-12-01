<template>

    <div class="wrap">
        <!-- <h1>hollo word - {{pid}}</h1> -->
        <div class="prodItem">
            <figure>
                <img :src="prodInfo.coverImg" alt="">
            </figure>

            <div class="content">

                <div class="prodName">
                    {{prodInfo.name}} 
                    <span>( {{prodInfo.type}} )</span>
                </div>

                <router-link class="designer" :to="{name:'designerInfo',params:{did: prodInfo.did}}">
                    <img :src="designerInfo.portrait" alt="">
                    <div>
                        <p>Designer:</p>
                        <p class="name">{{designerInfo.name}}</p>
                    </div>
                </router-link>

                <div class="prodInfo">
                    <div class="description">
                        <p class="key"></p>
                        <p class="val">{{prodInfo.description}}</p>
                    </div>

                    <div class="price">
                        <p class="key">PRICE</p>
                        <p class="val">{{prodInfo.price}}</p>
                    </div>

                    <div class="quantity">
                        <p class="key">QUANTITY</p>
                        <div class="val">
                            <a href="javascript:;">-</a>
                            <input type="number" value="1" min="1">
                            <a href="javascript:;">+</a>
                        </div>
                    </div>

                    <div class="subtotal">
                        <p class="key">SUBTOTAL</p>
                        <p class="val">1000 NT$</p>
                    </div>
                </div>


                <div class="btn">
                    <a href="javascript:;">
                        ADD TO CART
                    </a>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
// import {onBeforeMount} from 'vue'
import {useStore} from 'vuex';
import {useRouter} from 'vue-router';

export default {
    props:['pid'],
    setup(props) {
        const store = useStore();
        const router = useRouter();
        console.log(props.pid)


        let prodInfo = store.getters['prod/products'].find(i=>i.pid == props.pid)


        if(!store.getters['prod/products'].find(i=>i.pid == props.pid)){
            alert('沒有該商品項目')
            router.replace({
                path: "/"
            })
        }

        // onBeforeMount(()=>{
 
        // })

        
        let designerInfo = store.getters['design/designers'].find(i=>i.did == prodInfo.did )

        console.log(prodInfo)
        console.log(designerInfo)
        return{
            prodInfo,
            designerInfo,
        }
    },
    beforeRouteEnter(to){
        const store = useStore();
        const router = useRouter();
        const pagePid = to.params.pid
        // let prodInfo = store.getters['prod/products'].find(i=>i.pid == to.params.pid)
        if(!to.params.pid){
            router.replace({
                path: "/"
            })
        }
        console.log(to)
    },
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/view/prodItem.scss';
</style>