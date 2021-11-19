import mutations from './mutations';
import getters from './getters';

export default {
    namespaced: true,
    state(){
        return{
            products: [
                { pid:1,name:'良品好物',designer:'Archie',type:'bag',price:600,
                img: require('@/assets/img/knitwear_cardigan_cashmere_brown_1.jpg'),
                title: 'First', description: 'The first item.'},
                { pid:2,name:'好視良物',designer:'Una',type:'shoe',price:500,
                    img: require('@/assets/img/5f00209a79f96.jpg'),
                    title: 'three', description: 'The three item.'},
                { pid:3,name:'Mac Pro',designer:'Chester',type:'clothes',price:1000,
                    img: require('@/assets/img/8850539_Afteroom_Lounge_Chair_Afteroom_Black_03.jpg'),
                    title: 'three', description: 'The three item.'},
                { pid:4,name:'Pikachu',designer:'Chester',type:'clothes',price:1600,
                    img: require('@/assets/img/8e80e7_96e2abc235c541cc813b704e1.jpg'),
                    title: 'three', description: 'The three item.'},
                { pid:5,name:'Audi AG',designer:'Archie',type:'clothes',price:1600,
                    img: require('@/assets/img/a-cold-wall_focus_leather_trio-3.jpg'),
                    title: 'three', description: 'The three item.'},
                { pid:6,name:'IKEA',designer:'Archie',type:'clothes',price:1600,
                    img: require('@/assets/img/app001prod (3).jpg'),
                    title: 'three', description: 'The three item.'},
                { pid:7,name:'Banner Bar',designer:'Archie',type:'clothes',price:200,
                    img: require('@/assets/img/a_cold_wall-acw-converse-onyx-fo2.jpg'),
                    title: 'three', description: 'The three item.'},
                { pid:8,name:'Charizard',designer:'Archie',type:'clothes',price:200,
                    img: require('@/assets/img/a7e7cae3-6f49-49f2-b9c5-0242b882d870_LARGE.jpg'),
                    title: 'three', description: 'The three item.'},
                { pid:9,name:'Peppa Pig',designer:'Archie',type:'clothes',price:200,
                    img: require('@/assets/img/a_cold_wall-acw-converse-onyx-foe.jpg'),
                    title: 'three', description: 'The three item.'},
            ]
        }
    },
    mutations,
    getters,
}