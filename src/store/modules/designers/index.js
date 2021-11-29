import getters from './getters';

export default {
    namespaced: true,
    state(){
        return{
            designers:[
                {did: 1, name: 'Laurel Mosley', portrait: require('@/assets/img/designer_green.jpg'),prodIds: [2,3,4,5,8,9], country: 'Taichung City, Taiwan Region'},
                {did: 2, name: 'Archie', portrait: require('@/assets/img/designer3.jpg'),prodIds: [2,3,4,7,8,9], country: 'São Paulo, Brazil'},
                {did: 3, name: 'Una Dinwiddie', portrait: require('@/assets/img/designer4.jpg'),prodIds: [2,3,6,5,8,9], country: 'Kharkiv, Ukraine'},
                {did: 4, name: 'Ethan Nolan', portrait: require('@/assets/img/designer5.jpg'),prodIds: [7,3,4,5,8,9], country: 'USA, New York'},
                {did: 5, name: 'Chester', portrait: require('@/assets/img/designer2.jpg'),prodIds: [1,3,4,5,8,9], country: 'Taichung City, Taiwan Region'},
            ]
        }
    },
    getters,

}