import {ref} from 'vue';
import { useRoute } from 'vue-router';


export default function navCommonFun(){
    const route = useRoute();
    // 用來關掉 menu
    const status = ref('');

    // 只要變更currentLink 就會自動 改變menu的狀態
    const currentLink = ref('')

    // 只能使用 router-link 的value 
    const setActive = (val) =>{
        return {
            'active': currentLink.value === val
        }
    }

    const setCurrentLink= ()=>{
        let path = route.path
        path = path.replace('/',"").toUpperCase()
        currentLink.value = path
        console.log(`hooks ${currentLink.value}`)
    }

    const closeMenu = ()=>{
        status.value = "";
        setCurrentLink();
    }
    const openNav = (setVal)=>{
        status.value = setVal
    }


    return {
        status,
        currentLink,

        setCurrentLink,
        setActive,
        closeMenu,
        openNav,
    }
}