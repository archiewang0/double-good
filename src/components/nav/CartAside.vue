<template>
    <div class="aside forCart">
        <div>
            <div class="top">
                <p>
                    YOUR CART <span>({{cartProdsQuan}})</span>
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
                        <a href="javascript:;" class="deleteBtn" @click="changeQuanVal('-',idx,item)"></a>
                        <input type="number" min="1" max="99" :value="item.buyNum" :ref="setItemRef">
                        <a href="javascript:;" class="addBtn" @click="changeQuanVal('+',idx,item)"></a>
                    </div>

                    
                    <p class="price" :data-price="item.price"> {{item.buyNum*item.price}} NT$</p>
        
                    <div class="delBtn">
                        <a href="javascript:;" @click="deleteProd(item)">DELETE</a>
                    </div>
                </div>


            </div>
            <div class="payBtn">
                <div class="subtotal">
                    <p>SUBTOTAL</p>
                    <p>{{cartTotalPrice}} NT$</p>
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
        const cartTotalPrice = computed(()=> store.getters['cart/cartTotal'])
        const cartProdsQuan = computed(()=> store.getters['cart/cartProdsQuan'] )


        function changeQuanVal(state,index,el){
            const taInput = itemsRefs[index]

            if(state === '+' && el.buyNum < 99){
                taInput.stepUp(1)
                el.buyNum ++
            } else if(state === '-' && el.buyNum > 1){
                taInput.stepDown(1)
                el.buyNum --
            }
        }


        function deleteProd(el){
            const idx = cartItems.value.findIndex(item =>{  
                // console.log(item.pid) 
                return  item.pid === el.pid
            })
            
            store.commit('cart/removeCartItem',idx)
            // console.log(el.pid)
        }


        let itemsRefs = [];

        const setItemRef = el =>{
            if(el){
                itemsRefs.push(el)
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
            cartTotalPrice,
            cartProdsQuan,

            setItemRef,

            deleteProd,
            changeQuanVal,
            closeCart,
        }
    },
}
</script>