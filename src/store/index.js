import {createStore} from 'vuex';

import navModule from './modules/nav/index.js';
import cartModule from './modules/cart/index.js';


const store = createStore({
    modules:{
        nav: navModule,
        cart: cartModule,
    }
})

export default store; 