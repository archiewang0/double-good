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
    },

    //變更cartItem的內容
    updateCartItem(state,payload){
        let updateItem = state.cartItems[payload.idx] 

        // 這個也是object
        let updateContent = payload.updateInfo

        state.cartItems.splice(payload.idx,1,{
            ...updateItem,
            ...updateContent
        })
    }

}