<template>
    <div>
        <h1 style="color: white">
            設計師頁面
        </h1>

        <div class="designers">
            <div v-for="designer in designers" :key="designer.did">
                <a href="javascript:;">
                    <p class="name">{{designer.name}}</p>
                    <p class="country">{{designer.country}}</p>
                    <img :src="designer.portrait" alt="">
                    <p class="prodsType">
                        <span v-for="type in designer.prodsType" :key="type">
                            {{type.toUpperCase()}}
                        </span>
                    </p>
                </a>
            </div>
        </div>
    </div>

</template>

<script>
import {useStore} from 'vuex'
export default {
    setup() {
        const store = useStore();

        const designers = store.getters['design/designers']

        // console.log(store.getters['design/designers'])
        console.log(designers)
        return{
            designers
        }
    },
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/view/designers';
</style>