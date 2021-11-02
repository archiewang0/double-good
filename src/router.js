import { createRouter, createWebHistory} from 'vue-router';

import index from './views/index.vue';
import products from './views/products.vue';
import member from './views/member.vue';
import designer from './views/designer.vue';
import about from './views/about.vue';
import contact from './views/contact.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", component:index },
        {path: "/products", component: products},
        {path: "/member", component: member},
        {path: "/designer", component: designer},
        {path: "/about", component: about},
        {path: "/contact", component: contact},
        {path: '/:pathMatch(.*)*', redirect: '/'}
    ],
})

export default router;