import mutations from './mutations';
import getters from './getters';

export default {
    namespaced: true,
    // 之後要使用 完全的命名方式取得vuex內容

    state(){
        return{
            cartItems: [
                { 
                    pid:1,
                    name:'良品好物',
                    designer:'Archie',
                    type:'bag',
                    price:600,
                    img: require('@/assets/img/knitwear_cardigan_cashmere_brown_1.jpg'),
                    title: 'First', 
                    description: 'The first item.',
                    buyNum: 2,
                },
                { 
                    pid:2,
                    name:'好視良物',
                    designer:'Una',
                    type:'shoe',
                    price:500,
                    img: require('@/assets/img/5f00209a79f96.jpg'),
                    title: 'three', 
                    description: 'The three item.',
                    buyNum: 1,

                },
            ],
        }
    },
    mutations,
    getters,
}