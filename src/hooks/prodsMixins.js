import {useStore} from 'vuex'

export default function(){
    const store = useStore();

    function addCart(prod, hasQuan=false){
        store.commit('nav/changeNavState','cartActive')
        let cartProds = store.getters['cart/cartItems'];
        let isDuplicate = false;
        cartProds.forEach((item,index)=>{
            if(item.pid === prod.pid){
                isDuplicate =true;
                if(hasQuan){
                    store.commit('cart/updateCartItem',{
                        idx: index,
                        updateInfo: {
                            buyNum: item.buyNum + prod.buyNum
                        },
                    })
                }else{
                    store.commit('cart/updateCartItem',{
                        idx: index,
                        updateInfo: {
                            buyNum: item.buyNum + 1
                        },
                    })
                }
            }
        })

        if(!isDuplicate){
            if(hasQuan){
                store.commit('cart/addItemToCart',{
                    ...prod,
                    buyNum: prod.buyNum,
                })
            } else{
                store.commit('cart/addItemToCart',{
                    ...prod,
                    buyNum: 1,
                })
            }
        }
    }
    
    return{
        addCart,
    }
}