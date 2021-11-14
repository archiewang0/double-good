export default {
    cartItems(state){
        return state.cartItems
    },

    cartTotal(state){
        let total = 0
        state.cartItems.forEach((item)=>{
            total = total + item.price * item.buyNum
        })
        return total;
    },


    cartProdsQuan(state){
        let prodsQuan = 0;
        state.cartItems.forEach((item)=>{
            prodsQuan = prodsQuan + item.buyNum
        })
        return prodsQuan;
    }

}