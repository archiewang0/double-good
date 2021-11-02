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
                    <div class="cartItem">

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
export default {
    setup(_,context) {
        const closeCart =()=>{
            context.emit('close')
        }

        return{
            closeCart
        }
    },
}
</script>