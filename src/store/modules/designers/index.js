import getters from './getters';

export default {
    namespaced: true,
    state(){
        return{
            designers:[
                {did: 1, name: 'Laurel Mosley', portrait: require('@/assets/img/designer_green.jpg'),intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis ornare lobortis. Donec eu placerat eros, et sagittis erat. Praesent quis lacinia mi, scelerisque lobortis diam. Proin molestie facilisis ante, quis suscipit metus cursus sed. Nam ac vehicula tortor. Sed non dignissim dolor. Sed lacinia velit at metus viverra, eget.',prodIds: [2,3,4,5,8,9], country: 'Taichung City, Taiwan Region',mail: 'Laurel_Mosley@gmail.com'},
                {did: 2, name: 'Archie', portrait: require('@/assets/img/designer3.jpg'),intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis ornare lobortis. Donec eu placerat eros, et sagittis erat. Praesent quis lacinia mi, scelerisque lobortis diam. Proin molestie facilisis ante, quis suscipit metus cursus sed. Nam ac vehicula tortor. Sed non dignissim dolor. Sed lacinia velit at metus viverra, eget.',prodIds: [2,3,4,7,8,9], country: 'São Paulo, Brazil',mail: 'Laurel_Mosley@gmail.com'},
                {did: 3, name: 'Una Dinwiddie', portrait: require('@/assets/img/designer4.jpg'),intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis ornare lobortis. Donec eu placerat eros, et sagittis erat. Praesent quis lacinia mi, scelerisque lobortis diam. Proin molestie facilisis ante, quis suscipit metus cursus sed. Nam ac vehicula tortor. Sed non dignissim dolor. Sed lacinia velit at metus viverra, eget.',prodIds: [2,3,6,5,8,9], country: 'Kharkiv, Ukraine',mail: 'Laurel_Mosley@gmail.com'},
                {did: 4, name: 'Ethan Nolan', portrait: require('@/assets/img/designer5.jpg'),intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis ornare lobortis. Donec eu placerat eros, et sagittis erat. Praesent quis lacinia mi, scelerisque lobortis diam. Proin molestie facilisis ante, quis suscipit metus cursus sed. Nam ac vehicula tortor. Sed non dignissim dolor. Sed lacinia velit at metus viverra, eget.',prodIds: [7,3,4,5,8,9], country: 'USA, New York',mail: 'Laurel_Mosley@gmail.com'},
                {did: 5, name: 'Chester', portrait: require('@/assets/img/designer2.jpg'),intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis ornare lobortis. Donec eu placerat eros, et sagittis erat. Praesent quis lacinia mi, scelerisque lobortis diam. Proin molestie facilisis ante, quis suscipit metus cursus sed. Nam ac vehicula tortor. Sed non dignissim dolor. Sed lacinia velit at metus viverra, eget.',prodIds: [1,3,4,5,8,9], country: 'Taichung City, Taiwan Region',mail: 'Laurel_Mosley@gmail.com'},
            ]
        }
    },
    getters,

}