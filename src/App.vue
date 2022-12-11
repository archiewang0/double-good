<template>
		<nav-bar></nav-bar>

		<main>
			
			<ani-cover ></ani-cover>

			<router-view v-slot="{ Component }" ref="aniEl">
				<transition
					@enter="enter"
					@afterEnter="afterEnter">
					<component :is="Component" />
				</transition>
			</router-view>
		</main>

		<footer>
			<div>
				<div class="logo">
					<router-link to="/">
						<img src="./assets/img/footer-logo-20.svg" alt="">
					</router-link>
				</div>
				<p class="copyRgiht">
					Copyright © 2021 DOUBLE GOOD.
				</p>
			</div>
		</footer>

</template>

<script>
import { useRoute } from 'vue-router';
import {useStore} from 'vuex';

import {ref,onMounted} from 'vue';
import NavBar from './components/nav/NavBar.vue'
import AniCover from './components/animation/aniCover.vue';

//套件
import gsap from 'gsap';

export default {
	name: 'App',
	components: {
		NavBar,
		AniCover,
	},

	setup(){
		const status = ref('active')
		const route = useRoute();
		const store = useStore();

		const aniEl = ref(null);

		const enter = (el,done)=>{
			gsap.from(el,{
				duration: .5,
				x: '20px',
				opacity: 0,
				// ease: 'bounce.out',
				onComplete: ()=>{
					// 在 transition 裡面使用ref 會抓取第一個element
					console.log(aniEl.value.$el)
					aniEl.value.$el.removeAttribute('style')
					done()
				}
			})
		}

		// 將infoIndex 的value 帶入讓這裡事件發生改變數據, 在navVisual 使用computed 來偵測是否變化再帶入值
		// const {infoIndexStatus} = navMixins();

		const afterEnter = ()=>{
		}

		// 滾動事件
		const scrollFunc = () =>{
			if(route.path === '/'){
				// scrollY = window.scrollY window 可以省略
				if(scrollY === 0 ){
					store.commit('nav/toggleIndexScrollHiddenStatus',false)
				} else{
					store.commit('nav/toggleIndexScrollHiddenStatus',true)
				}
			}
		}

		window.addEventListener('scroll',scrollFunc)


		const isPcCheckHandler=(e)=>{
			// if(e) isPc.value = false
			// alert('change Media')
			// console.log(e)
			if(e.matches) store.commit('common/setIsPcVal',false)
			// else isPc.value = true
			else store.commit('common/setIsPcVal',true)

		}

		onMounted(()=>{
			if(route.path === '/' ){
				console.log("route",route)

				window.scrollY !== 0 && (window.scrollY = 0)
			}

			window.addEventListener("keydown", function(e) {
				if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
					e.preventDefault();
				}
			}, false);

			let mql = window.matchMedia('(max-width: 980px)');
			mql.addEventListener('change', isPcCheckHandler )

		})
		

		return {
			status,
			aniEl,
			enter,
			afterEnter,
			// wrapSrollevent,

			route,
		};
	}
}
</script>

<style  lang="scss">
@import './assets/scss/common/_reset';


	/* width */
	::-webkit-scrollbar {
		width: 10px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		background: #e4e4e4; 
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: rgb(170, 170, 170); 
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: #0b2659;; 
	}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	width: 100%;
	background-color: gray;
	>main{
		// padding: 1px;
		padding-top: 60px;
		min-height: 70vh;
	}

	footer{
		background-color: white;
		margin-top: 125px;
		width: 100%;
		padding: 50px 15px;
		>div{
			width: 90%;
			margin: auto;
			display: flex;
			align-items: flex-end;
			justify-content: space-between;
			.logo{
				height: 50px;
				>a{
					display: inline-block;
					margin-right: auto;
					height: 100%;
					img{
						height: 100%;
					}
				}
			}
			.copyRight{
				font-size: 12px;
				opacity: .5;

			}
		}
	}




	@media screen and (max-width:980px) {
		>main{
			padding-top: 40px;
		}
		footer{
			margin-top: 60px;
			padding: 30px 15px;
			>div{
				width: 100%;
				flex-wrap: wrap;
				justify-content: center;
				>p{
					width: 100%;
					margin-top: 45px;
				}
			}
		}
		
	}
}
</style>
