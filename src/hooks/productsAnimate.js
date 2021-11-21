import gsap from 'gsap';
import {ref} from 'vue'

export default function(){
    const prodContainer = ref(null)


    function productFadeIn(target){
        const time =  setTimeout(()=>{
            // console.log(document.querySelectorAll('.masonry-column'))
            gsap.timeline({
                scrollTrigger: {
                trigger: target,
                }
            }).to('.masonry-column',{
                y:0,
                stagger: 0.2,
                ease: "power4.out",
                duration: 2,
                opacity: 1,
            })

            clearTimeout(time)
        },500)
    }


    return{
        productFadeIn,
        prodContainer,
    }
}