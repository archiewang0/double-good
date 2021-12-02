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

                <div  class="designer">
                    <router-link :to="{name:'designerInfo',params:{did: prodInfo.did}}">
                        <img :src="designerInfo.portrait" alt="">
                        <div>
                            <p>Designer:</p>
                            <p class="name">{{designerInfo.name}}</p>
                        </div>
                    </router-link>
                </div>


                <div class="prodInfo">
                    <div class="description">
                        <p class="key"></p>
                        <p class="val">{{prodInfo.description}}</p>
                    </div>

                    <div class="quantity">
                        <p class="key">QUANTITY</p>
                        <div class="val">
                            <div class="quantityBox">
                                <a href="javascript:;" @click="changeQuanVal('-',prodInfo)">-</a>
                                <input type="number" value="1" min="1" max="99" ref="quantityVal">
                                <a href="javascript:;" @click="changeQuanVal('+',prodInfo)">+</a>
                            </div>
    
                        </div>
                    </div>

                    <div class="price">
                        <p class="key">PRICE</p>
                        <p class="val">{{prodInfo.price}}</p>
                    </div>

                    <div class="subtotal">
                        <p class="key">SUBTOTAL</p>
                        <p class="val">{{subtotal}} NT$</p>
                    </div>
                </div>


                <div class="btn">
                    <a href="javascript:;" @click="addCart(prodInfo,true)">
                        ADD TO CART
                    </a>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
import {ref , computed} from 'vue';
import {useStore} from 'vuex';
import storeJs from '../store/index';
import prodsMixins from '../hooks/prodsMixins'

export default {
    props:['pid'],
    setup(props) {
        const store = useStore();
        // console.log(props.pid)
        const quantityVal = ref(null)

        let prodInfo = ref({
            ...store.getters['prod/products'].find(i=>i.pid == props.pid),
            buyNum: 1,
        })

        let designerInfo = store.getters['design/designers'].find(i=>i.did == prodInfo.value.did )

        function changeQuanVal(state,el){
            if(state === '+' && el.buyNum < 99){
                quantityVal.value.stepUp(1)
                el.buyNum ++
            } else if(state === '-' && el.buyNum > 1){
                quantityVal.value.stepDown(1)
                el.buyNum --
            }
        }

        const subtotal = computed(()=>{
            let total = prodInfo.value.buyNum *  prodInfo.value.price
            return total
        })


        const {addCart} = prodsMixins();


        return{
            prodInfo,
            designerInfo,
            changeQuanVal,

            quantityVal,
            subtotal,
            addCart,
        }
    },
    beforeRouteEnter(to,_,next){
        const pagePid = to.params.pid
        // 無法使用 import {useStore} from 'vuex'
        // 要使用 vuex 的話 需要 import storeJs from '../store/index'; 可以避免命名相同 取不一樣的名稱
        if(!storeJs.getters['prod/products'].find(i=>i.pid == pagePid)){
            next({
                path: "/"
            })
        } else{
            next()
        }
    },
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/view/prodItem.scss';
</style>