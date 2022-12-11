<template>
    <div class="aniCover" ref="aniCoverEl">
        <div class="topBlock" ref="topBlockRef">
            <div class="imgContainer" ref="imgContainerEl">
                <div>
                    <img src="../../assets/img/slogan-30.svg" ref="img1">
                </div>
                <div>
                    <img src="../../assets/img/slogan-31.svg" ref="img2">
                </div>
                <img class="main" src="../../assets/img/slogan.svg" ref="mainImg">
            </div>
        </div>

        <div class="bottomBlock" ref="btmBlockRef"></div>
    </div>
</template>

<script>
import gsap,{Power2,Back} from 'gsap';
import { ref, onMounted } from 'vue';
// import { useRoute } from 'vue-router';

export default {
    // props:['curRoute'],
    setup(){

        const topBlockRef = ref(null)
        const btmBlockRef = ref(null)
        const img1 = ref(null)
        const img2 = ref(null)
        const mainImg = ref(null)
        const aniCoverEl = ref(null)

        const bodyEl = ref(null)
        const imgContainerEl = ref(null)

        onMounted(() => {
         

            bodyEl.value = document.querySelector('body')
            bodyEl.value.style = "overflow:hidden"
            document.querySelector('html').style = "overflow:hidden"

            // document.querySelector('body').style="position: fixed"
            // console.log(document.querySelector('body'))
            
            // document.querySelector('html').style="overflow: hidden"
            // alert('tes')
            // console.log('check prop:',prop.curRoute)

            let tl = gsap.timeline();
            tl
            .add(gsap.to(img1.value,{ 
                transform:' rotateX(0deg)', 
                ease: Back.easeOut(10.7),
                yoyo: true,
                repeat: 1,
                duration: .3,
                delay:.2,
                onComplete:()=>{
                    const curImgContainerElHeight = imgContainerEl.value.offsetTop
                    imgContainerEl.value.style= `position: absolute; top: ${curImgContainerElHeight}px`
                   
                }
            }))
            .add(gsap.to(img2.value,{ 
                transform:' rotateX(0deg)', 
                ease: Back.easeOut(100.7),
                yoyo: true,
                repeat: 1,
                duration: .3,
            }))
            .add(gsap.to(mainImg.value,{ 
                transform:' rotateX(0deg)', 
                ease: Back.easeOut(100.7),
                duration: .3,
            }))
            .add([
                gsap.to(topBlockRef.value,{height:0,duration:.3,ease:Power2}),
                gsap.to(btmBlockRef.value,{
                    height:0,
                    duration:.3, 
                    ease:Power2,
                    onComplete:()=>{
                        aniCoverEl.value.style="display: none"
                        bodyEl.value.removeAttribute('style')
                        // alert('sa')
                        document.querySelector('html').removeAttribute('style')
                        
                    }
                })
            ])
            
        
        });





        return {

            // el
            topBlockRef,
            btmBlockRef,
            img1,
            img2,
            mainImg,
            aniCoverEl,
            imgContainerEl,
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/components/aniCover.scss';
</style>
