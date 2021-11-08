export default {
    
    // addToCart array
    // 接受object 將商品的object 塞入
    addItemToCart(state,payload){
        state.cartItems.unshift(payload)
    },

    // 刪除 array
    removeCartItem(state,payload){
        state.cartItems.splice(payload,1)
        // console.log(state.cartItems)
        // console.log(payload)
    }
}