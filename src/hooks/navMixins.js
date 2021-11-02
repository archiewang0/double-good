import {ref} from 'vue';
import { useRoute } from 'vue-router';


export default function navCommonFun(){
    const route = useRoute();
    const status = ref('');
    const currentLink = ref('')

    const setActive = (val) =>{
        return {
            'active': currentLink.value === val
        }
    }
    const closeMenu = ()=>{
        status.value = "";
        let path = route.path
        path = path.replace('/',"").toUpperCase()
        currentLink.value = path
    }
    const openNav = (setVal)=>{
        status.value = setVal
    }


    return {
        status,

        setActive,
        closeMenu,
        openNav,
    }
}