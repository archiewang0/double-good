import {ref,computed} from 'vue';
import {useRouter} from 'vue-router'
import { useStore } from 'vuex';

export default function searchCommonFun(){
    const router = useRouter();
    const defaultSelectVal = ref('PRODUCT')
    const searchVal = ref('')
    const store = useStore()
    const recommedResult = ref([])
    

    function submit(){
        // console.log(defaultSelectVal)
        if(searchVal.value){
            // alert(searchVal.value)
            console.log("searchVal.value: ",searchVal.value)
            //

            if(defaultSelectVal.value == 'PRODUCT'){
                router.push({name: 'prod',query:{q:searchVal.value}})
            } else{
                router.push({name: 'design',query:{q:searchVal.value}})
            }
        } else{
            if(defaultSelectVal.value == 'PRODUCT'){
                router.push({name:'prod'})
            } else{
                router.push({name:'design'})
            }
        }
    }

    const products = computed(()=>store.getters['prod/products'])
    const desigers = computed(()=>store.getters['design/designers'])
    let time
    function typewriteShowRecommed(e,selectVal,immediately = false){
        clearTimeout(time)

        const mainFunc = ()=>{
            let inputVal;
            if( typeof e === "object"){
                inputVal = e.target.value.toLowerCase()
            } else if ( !e ){
                inputVal = ""
            }   
            

            // const prodArr = [...products.value]
            // console.log(desigers)    
            
            if( !inputVal ) {
                recommedResult.value = []
            } else if( selectVal==="DESIGNER") {
                recommedResult.value = desigers.value.filter((prod)=>prod.name.toLowerCase().includes(inputVal)).slice(0,5)
            }else if( selectVal==="PRODUCT" || !selectVal){
                recommedResult.value = products.value.filter((guy)=>guy.name.toLowerCase().includes(inputVal)).slice(0,5)
            }
            // console.log(recommedResult.value)
        }

        time =setTimeout(()=>{
            mainFunc()
        }, immediately ? 1 : 500)


    }

    return {
        defaultSelectVal,
        searchVal,
        recommedResult,

        submit,
        typewriteShowRecommed,
    }
}