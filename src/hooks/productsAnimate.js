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
            }).from('.masonry-column',{
                y: 100,
                stagger: 0.2,
                ease: "power4.out",
                duration: 2,
                opacity: 0,
            })

            clearTimeout(time)
        },500)
    }


    return{
        productFadeIn,
        prodContainer,
    }
}