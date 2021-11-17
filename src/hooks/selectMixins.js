import {ref} from 'vue';

export default function(defaultVal){
    const open = ref(false)
    const currentVal = ref(defaultVal)

    const toggleSelect = ()=>{
        open.value = !open.value
    }

    const changeVal = (e) => {
        currentVal.value = e.target.innerText
        open.value = false
    }

    return{
        toggleSelect,
        changeVal,
        open,
        currentVal,
    }
}