import mutations from './mutations';
import getters from './getters';

export default {
    namespaced: true,
    state(){
        return{
            products: [
                { pid:1,name:'良品好物',did:1,type:'bag',price:600,
                coverImg: require('@/assets/img/knitwear_cardigan_cashmere_brown_1.jpg'),
                title: 'First', description: 'The first item.'},
                { pid:2,name:'好視良物',did:2 ,type:'shoe',price:500,
                coverImg: require('@/assets/img/5f00209a79f96.jpg'),
                    title: 'three', description: 'The three item.'},
                { pid:3,name:'Mac Pro',did:4 ,type:'clothes',price:1000,
                coverImg: require('@/assets/img/8850539_Afteroom_Lounge_Chair_Afteroom_Black_03.jpg'),
                    title: 'three', description: 'The three item.'},
                { pid:4,name:'Pikachu',did:3 ,type:'clothes',price:1600,
                coverImg: require('@/assets/img/8e80e7_96e2abc235c541cc813b704e1.jpg'),
                    title: 'three', description: 'The three item.'},
                { pid:5,name:'Audi AG',did:5 ,type:'clothes',price:1600,
                coverImg: require('@/assets/img/a-cold-wall_focus_leather_trio-3.jpg'),
                    title: 'three', description: 'The three item.'},
                { pid:6,name:'IKEA',did: 1,type:'clothes',price:1600,
                coverImg: require('@/assets/img/app001prod (3).jpg'),
                    title: 'three', description: 'The three item.'},
                { pid:7,name:'Banner Bar',did:2,type:'clothes',price:200,
                coverImg: require('@/assets/img/a_cold_wall-acw-converse-onyx-fo2.jpg'),
                    title: 'three', description: 'The three item.'},
                { pid:8,name:'Charizard',did: 3,type:'clothes',price:200,
                coverImg: require('@/assets/img/a7e7cae3-6f49-49f2-b9c5-0242b882d870_LARGE.jpg'),
                    title: 'three', description: 'The three item.'},
                { pid:9,name:'Peppa Pig',did: 4,type:'clothes',price:200,
                coverImg: require('@/assets/img/a_cold_wall-acw-converse-onyx-foe.jpg'),
                    title: 'three', description: 'The three item.'},
            ]
        }
    },
    mutations,
    getters,
}