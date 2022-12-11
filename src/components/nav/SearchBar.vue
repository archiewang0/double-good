<template>
    <div class="search">
        <input v-if="isPc" type="button" @click="submit" ref="searchBtn">
        <input v-else  type="button" @click="openSearchInput" ref="searchBtn">
        

        <input type="text" 
            v-model.trim="searchVal" 
            :placeholder="'SEARCH  '+defaultSelectVal"
            @keydown.enter="submit"
            @input="typewriteHandler"
            @keyup="keyupHandler"
            ref="inputRef">

        <select-bar v-model:defaultSelectVal="defaultSelectVal"></select-bar>
        
        <div 
            class="recommedBar" 
            v-if="recommedResult.length>0?true:false"
            ref="recommedBarEl"
            tabindex="0"
            @keydown="recommedBarElKeydownHandler">
            <div v-for="item in recommedResult" :key="item.id">
                <a href="javascript:;"
                    @click="()=>{linkClickHandler(defaultSelectVal,item)}">
                    <span
                        :style="searchVal.toLocaleLowerCase().includes(str.toLocaleLowerCase())? {color: '#0b2659',fontWeight: '900'}: {}" 
                        v-for="str in item.name" 
                        :key="str+Math.random().toString()">
                        {{str}}
                    </span>
                </a>

            </div>
        </div>

    </div>
</template>

<script>
import {ref , computed ,watch } from 'vue';
import SelectBar from './SelectBar';
import {useRouter } from 'vue-router'
import {useStore} from 'vuex';
import searchCommonFun from '../../hooks/searchMixins';

// import SearchRecommedBarVue from './SearchRecommedBar.vue';

export default {
    components:{ 
        SelectBar,
    },
    setup(){
        const router = useRouter();
        // const route = useRoute()
        // const defaultSelectVal = ref('PRODUCT')
        // const searchVal = ref('')
        const searchBtn = ref(null)
        const store = useStore()
        const recommedBarEl = ref(null)
        const inputRef = ref(null)

        // const recommedBarElFocusHandler=()=>{
            
        // }



        let recommedBarElActiveIdx = ref(-1)
    
        
        const recommedBarElKeydownHandler = (e)=>{
            if (document.activeElement === recommedBarEl.value ){

                if (e.key === "ArrowDown"){

                    recommedBarElActiveIdx.value = recommedBarElActiveIdx.value+1

                    if(recommedResult.value.length - 1 >= recommedBarElActiveIdx.value){
                        console.log('arrowD idx: ',recommedBarElActiveIdx.value)
                        // 上個element 取消class
                        recommedBarElActiveIdx.value !== 0 && recommedBarEl.value.children[recommedBarElActiveIdx.value-1].classList.remove('active')

                        // 下個element 加上class
                        recommedBarEl.value.children[recommedBarElActiveIdx.value].classList.add('active')
                    } else{
                        recommedBarElActiveIdx.value = recommedBarElActiveIdx.value-1
                    }
                }

                if(e.key === "ArrowUp"){

                    recommedBarElActiveIdx.value = recommedBarElActiveIdx.value-1
                    if( 0 <= recommedBarElActiveIdx.value ){
                        console.log('arrowU idx: ',recommedBarElActiveIdx.value)

                        // 上個element 取消class
                        recommedBarElActiveIdx.value !== recommedResult.value.length - 1  && recommedBarEl.value.children[recommedBarElActiveIdx.value+1].classList.remove('active')
                        recommedBarEl.value.children[recommedBarElActiveIdx.value].classList.add('active')
                    } else{
                        recommedBarElActiveIdx.value = recommedBarElActiveIdx.value+1
                    }
                   
                }

                if(e.key === "Enter"){
                    // alert('bbb')
                    inputRef.value.focus()
                    searchVal.value = recommedBarEl.value.children[recommedBarElActiveIdx.value].textContent
                    typewriteShowRecommed("",defaultSelectVal,true)
                }
              
            }
        }

        const keyupHandler =(e)=>{
            console.log('e: ', e)
            if (e.key === "ArrowDown") {
                if (recommedResult.value.length > 0 ) {
                    if( recommedBarEl.value instanceof HTMLElement ){
                        // alert('test1111111')
                        recommedBarEl.value.focus()
                        // 第一次需要呼叫這個function
                        // 後續就不再focus在這個 input 了
                        recommedBarElKeydownHandler({key: 'ArrowDown'})
                    }
                    
                }
                
            }
        }

        const {typewriteShowRecommed,recommedResult, defaultSelectVal, searchVal, submit} = searchCommonFun()

        const openSearchInput=()=>{
            store.commit('nav/changeNavState','searchActive')
        }

        const isPc = computed(()=>store.getters['common/isPc'])

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

        const typewriteHandler=(e)=>{
            scaleBtn()
            // console.log(1,defaultSelectVal.value)
            typewriteShowRecommed(e,defaultSelectVal.value)
        }

        const linkClickHandler=(selectVal,item)=>{
            router.push({path: createRecommedLink(selectVal,item)})
            typewriteShowRecommed("",selectVal,true)
        }

        const createRecommedLink=(selectVal,item)=>{
            const firstPath = selectVal.toLocaleLowerCase()
            const idPath = firstPath === 'product' ? item.pid : item.did
            return `/${firstPath}s/${idPath}`
        }

        watch(defaultSelectVal, (val,preVal)=>{
            if (val !== preVal){
                searchVal.value = ""
                typewriteShowRecommed("",val,true)
            }
        })

        watch(recommedResult,(val,preVal)=>{
            if(val.length !== preVal.length){
                recommedBarElActiveIdx.value = -1
            }

        })

        return{
            defaultSelectVal,

            searchVal,
            recommedResult,

            // el
            searchBtn,
            isPc,
            inputRef,

            // openSearchInput,
            openSearchInput,
            submit,
            typewriteHandler,

            // createRecommedLink,
            linkClickHandler,

            keyupHandler,
            recommedBarEl,

            // recommedBarElFocusHandler,
            recommedBarElKeydownHandler,
        }
    },
}
</script>

<style lang="scss" scoped>
    @import '../../assets/scss/components/searchBar.scss';
</style>