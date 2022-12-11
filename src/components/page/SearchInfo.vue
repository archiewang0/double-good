<template>
    <div class="searchInfo" v-if="searchContent">
        <div>
            <div class="title">
                <p>{{searchContent}}</p>
            </div>
            <div class="info">
                <p>針對你搜尋的內容</p>
                <p>有 {{searchTarget.length}} 項符合{{setString}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { useRoute } from 'vue-router'

export default {
    props:['searchContent','searchTarget'],
    setup() {
        const route = useRoute();

        const setString = computed(()=>{
            return route.name == 'design'? '設計師': '產品'
        })

        return{
            setString
        }
    },
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/components/searchInfo.scss';
</style>