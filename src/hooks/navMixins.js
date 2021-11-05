import {ref,computed} from 'vue';
// import { useRoute } from 'vue-router';


export default function navCommonFun(){

 
    const status = ref('');
    
    //false 代表滾動了 true 代表在最上面 
    const infoIndexStatus = ref(false)

    const infoIndexStatusComputed = computed(()=>{
        let val = infoIndexStatus.value
        console.log('test')
        return val
    })


    const closeMenu = ()=>{
        status.value = "";
    }

    const openNav = (setVal)=>{
        status.value = setVal
    }


    return {
        status,
        infoIndexStatus,
        infoIndexStatusComputed,

        closeMenu,
        openNav,
    }
}