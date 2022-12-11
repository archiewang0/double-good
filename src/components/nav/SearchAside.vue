<template>

        <div class="aside forSearch">
            <div>
                <div class="top">
                    <p>
                        SEARCH
                    </p>
                    
                    <a class="closeBtn" href="javascript:;" @click="closeAside"></a>
                </div>
                <div class="mainBlock">
                    <div>
                        <input type="text" 
                            v-model.trim="searchVal" 
                            :placeholder="'SEARCH  '+defaultSelectVal"
                            @keydown.enter="inputHandler"
                            @input="typewriteHandler"
                            >

                        <div class="group">
                            <select-bar v-model:defaultSelectVal="defaultSelectVal"></select-bar>
                            <input type="button" @click="inputHandler" ref="searchBtn">
                        </div>

                        
                        <div class="recommedBar" v-if="recommedResult.length>0?true:false">
                            <p>以下收尋相關內容</p>
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
                </div>
            </div>
        </div>

</template>

<style lang="scss" >
@import '../../assets/scss/components/navBar.scss';
</style>

<script>
import { useStore} from 'vuex'
import { useRouter } from 'vue-router';
import searchCommonFun from '../../hooks/searchMixins';
import SelectBar from './SelectBar.vue';

export default {
    components: {
        SelectBar
    },  
    setup() {
        const store = useStore();
        const router = useRouter();

        function closeAside(){
            store.commit('nav/changeNavState',"")
        }

        const {typewriteShowRecommed,recommedResult, defaultSelectVal,searchVal,submit} = searchCommonFun()

        const typewriteHandler=(e)=>{
            // console.log(1,defaultSelectVal.value)
            typewriteShowRecommed(e,defaultSelectVal.value)
        }
    
        const inputHandler=()=>{
            submit()
            closeAside()
        }

        const linkClickHandler=(selectVal,item)=>{
            router.push({path: createRecommedLink(selectVal,item)})
            // typewriteShowRecommed("",selectVal,true)
            closeAside()
        }

        const createRecommedLink=(selectVal,item)=>{
            const firstPath = selectVal.toLocaleLowerCase()
            const idPath = firstPath === 'product' ? item.pid : item.did
            return `/${firstPath}s/${idPath}`
        }

        return{
            closeAside,

            defaultSelectVal,
            searchVal,
            submit,
            inputHandler,

            recommedResult,
            linkClickHandler,
            typewriteHandler,
        }
    },
}
</script>