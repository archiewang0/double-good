<template>
    <div class="aside forCart">
        <div>
            <div class="top">
                <p>
                    YOUR CART <span>(0)</span>
                </p>
                
                <a class="closeBtn" href="javascript:;" @click="closeCart"></a>
            </div>

            <div class="list">

                <div class="cartItem" v-for="(item, idx) in cartItems" :key="item.id">
                    <div class="prodInfo">
                        <img :src="item.img" alt="">
                        
                        <div>
                            <p>{{item.designer}}</p>
                            <p class="name">{{item.name}}</p>
                            <p>{{item.price}} NT$</p>
                        </div>
                    </div>

                    <div class="quantityBox" >
                        <a href="javascript:;" class="deleteBtn" @click="changeQuanVal('-',idx)"></a>
                        <input type="number" min="1" max="99" :value="item.buyNum" :ref="setItemRef">
                        <a href="javascript:;" class="addBtn" @click="changeQuanVal('+',idx)"></a>
                    </div>

                    
                    <p class="price" :data-price="item.price" :ref="setPricesRef"> {{item.price}} NT$</p>
        
                    <div class="delBtn">
                        <a href="javascript:;">DELETE</a>
                    </div>
                </div>


            </div>
            <div class="payBtn">
                <div class="subtotal">
                    <p>SUBTOTAL</p>
                    <p>200 NT$</p>
                </div>
                <div class="btn">
                    <a href="javascript:;">
                        CONTINUE TO PAYMENT
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/components/navBar';
</style>

<script>

import { computed, onBeforeUpdate, onUpdated ,onMounted} from 'vue'
import { useStore} from 'vuex';
export default {
    setup() {
        const store = useStore();

        const cartItems = computed(()=> store.getters['cart/cartItems'])


        function changeQuanVal(state,index){
            const taInput = itemsRefs[index]
            const taPrice = pricesRefs[index]
            if(state === '+'){
                taInput.stepUp(1)
                console.log(taInput.value)
                console.log(taPrice.dataset.price)
            } else{
                taInput.stepDown(1)
                console.log(taInput.value)
                console.log(taPrice.dataset.price)

            }
        }





        let itemsRefs = [];
        let pricesRefs = [];

        const setItemRef = el =>{
            if(el){
                itemsRefs.push(el)
            }
        }

        const setPricesRef = el=>{
            if(el){
                pricesRefs.push(el)
            }
        }


        onBeforeUpdate(() => {
            itemsRefs = []
        })
        onUpdated(() => {
            console.log(itemsRefs)
            // console.log(itemsRefs.value[0].value)
        })

        onMounted(()=>{
            // console.log(itemsRefs.value[0].value)
        })

        function closeCart (){
            store.commit('nav/changeNavState',"")
        }


        return{
            cartItems,

            setItemRef,
            setPricesRef,

            changeQuanVal,
            closeCart,
        }
    },
}
</script>