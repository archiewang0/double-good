import {createStore} from 'vuex';

import navModule from './modules/nav/index.js';
import cartModule from './modules/cart/index.js';
import productsModule from './modules/products/index.js';
import designersModule from './modules/designers/index.js';


const store = createStore({
    modules:{
        nav: navModule,
        cart: cartModule,
        prod: productsModule,
        design: designersModule,
    }
})

export default store; 