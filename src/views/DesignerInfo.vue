<template>
    <div class="wrap">
        <div>

            <div class="IntroContainer" ref="stickyEl">
                <figure>
                    <img :src="designIntro.portrait" alt="">
                </figure>
                <div class="main">

                    <p class="name">
                        {{designIntro.name}} 
                        <span 
                            v-for="type in designIntro.prodsType" 
                            :key="type"
                            >#{{type}}
                        </span>
                    </p>

                    <p class="country">{{designIntro.country}}</p>
                    <p class="email">{{designIntro.mail}}</p>
                    <hr>

                    <p class="introDuce">
                        {{designIntro.intro}}
                    </p>
                </div>
            </div>

            <div class="prodItemsContainer">
                <masonry-wall
                    :items="designerProds"
                    :column-width="isPc ? 300: 150">

                    <template #default="slot">
                        <router-link :to="{name:'prodItem', params:{pid: slot.item.pid}}">
                            <figure>
                                <img :src="slot.item.coverImg">
                            </figure>

                            <div class="info">
                                <div>
                                    <span>D - {{slot.item.designer}}</span>
                                    <h1>
                                        {{ slot.item.name }}  
                                        <span class="type">({{slot.item.type}})</span>
                                    </h1>
                                </div>

                                <p>{{slot.item.price}} NT$</p>
                            </div>
                        </router-link>
                        <div class="shopBtn">
                            <a href="javascript:;" :date-id="slot.item.id" @click="addCart(slot.item)">
                                <p>
                                    ADD TO CART
                                </p>
                            </a>
                        </div>
                    </template>

                </masonry-wall>
            </div>
        </div>


    </div>
</template>

<script>
import { computed, onMounted, ref } from '@vue/runtime-core';
import { useStore } from 'vuex'
import prodsMixins from '../hooks/prodsMixins'




export default {
    props:['did'],
    setup(props) {
        const store = useStore();

        const designIntro = computed(()=>{
            return store.getters['design/designers'].find((i=>i.did == props.did))
        })
        
        console.log(designIntro)
        const stickyEl = ref(null)

        const isPc = computed(()=>store.getters['common/isPc'])

        // 將 prodsId 變成字串 方便搜尋, 如果依舊array 的話就會使用到雙迴圈
        let idString = designIntro.value.prodIds.join(' ').toUpperCase()

        const designerProds = store.getters['prod/products'].filter(i => idString.search(i.pid) !== -1)

        const {addCart} = prodsMixins();

        
        onMounted(()=>{
            // document.querySelector('body').style.overflow="unset"
            // let el = stickyEl.value
            // console.log(el.getBoundingClientRect().top)
            // window.addEventListener('scroll',()=>{
            //     if(scrollY > el.getBoundingClientRect().top){
            //         el.style.position="fixed";
            //         el.style.top="120px";
            //     } else{
            //         el.removeAttribute('style')
            //     }
            // })
        })
        return{
            designIntro,
            designerProds,
            stickyEl,
            isPc,

            addCart,
        }
    },
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/view/designerInfo.scss';
</style>