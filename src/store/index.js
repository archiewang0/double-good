import {createStore} from 'vuex';

import navModule from './modules/nav/index.js';

const store = createStore({
    modules:{
        nav: navModule,
    }
})

export default store; 