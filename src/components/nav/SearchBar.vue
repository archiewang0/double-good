<template>
    <div class="search">
        <input type="button" @click="submit" ref="searchBtn">
        <input type="text" 
            v-model.trim="searchVal" 
            :placeholder="'SEARCH  '+defaultSelectVal"
            @keydown.enter="submit"
            @input="scaleBtn">
        <select-bar v-model:defaultSelectVal="defaultSelectVal"></select-bar>
        <div class="recommedBar">

        </div>
    </div>
</template>

<script>
import {ref} from 'vue';
import SelectBar from './SelectBar';
import {useRouter} from 'vue-router'
export default {
    components:{
        SelectBar,
    },
    setup(){
        const router = useRouter();
        const defaultSelectVal = ref('PRODUCT')
        const searchVal = ref('')
        const searchBtn = ref(null)

        function submit(){
            console.log(defaultSelectVal)
            if(searchVal.value){
                // alert(searchVal.value)
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

        let time
        function scaleBtn(){
            clearTimeout(time)

            if(searchVal.value){
                time = setTimeout(()=>{
                    searchBtn.value.style.transform = "scale(1.3) translate(0,-1px)"
                },500)
            } else {
                time = setTimeout(()=>{
                    searchBtn.value.removeAttribute('style')
                },500)
            }

        }

        

        return{
            defaultSelectVal,
            searchVal,

            // el
            searchBtn,

            submit,
            scaleBtn
        }
    },
}
</script>

<style lang="scss" scoped>
    @import '../../assets/scss/components/searchBar';
</style>