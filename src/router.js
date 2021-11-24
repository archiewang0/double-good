import { createRouter, createWebHistory} from 'vue-router';

import index from './views/index.vue';
import products from './views/products.vue';
import member from './views/member.vue';
import designer from './views/designer.vue';
import about from './views/about.vue';
import contact from './views/contact.vue';
import prodItem from './views/ProdItem';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", component:index },
        {path: "/products", name: 'prod',component: products },
        {path: '/products/:pid' ,component: prodItem, props: true},
        {path: "/member", component: member},
        {path: "/designer", component: designer},
        {path: "/about", component: about},
        {path: "/contact", component: contact},
        {path: '/:pathMatch(.*)*', redirect: '/'}
    ],
    scrollBehavior(_,_2,savePosition){
        if(savePosition){
            return savePosition
        } else{
            return {left: 0, top:0}
        }
    }
})

export default router;