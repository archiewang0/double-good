export default {
    
    // addToCart array
    // 接受object 將商品的object 塞入
    addItemToCart(state,payload){
        state.cartItems.unshift(payload)
    }
}