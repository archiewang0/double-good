import {ref} from 'vue';

export default function(){
    const test = ref('fdfdf')

    const changeTest = (val)=>{
        test.value = val
    }

    return{
        test,
        changeTest,
    }
}