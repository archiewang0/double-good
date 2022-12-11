import mutations from './mutations';
import getters from './getters';

export default {
    namespaced: true,
    // 之後要使用 完全的命名方式取得vuex內容

    state(){
        return{
            cartItems: [
                // 架構

                // { 
                //     pid:1,
                //     name:'良品好物',
                //     designer:'Archie',
                //     type:'bag',
                //     price:600,
                //     img: require('@/assets/img/knitwear_cardigan_cashmere_brown_1.jpg'),
                //     title: 'First', 
                //     description: 'The first item.',
                //     buyNum: 2,
                // },
            ],
        }
    },
    mutations,
    getters,
}