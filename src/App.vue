<template>
	<div class="wrap" :class="status" @scroll.prevent="wrapSrollevent">
		<nav-bar></nav-bar>

		<div class="body">
			<router-view v-slot="{ Component }">
				<transition
					@enter="enter"
					@afterEnter="afterEnter">
					<component :is="Component" />
				</transition>
			</router-view>
		</div>

	</div>
</template>

<script>
import { useRoute } from 'vue-router';
import {useStore} from 'vuex';

import {ref} from 'vue';
import NavBar from './components/nav/NavBar'


// hooks
// import navMixins from './hooks/navMixins.js';

//套件
import gsap from 'gsap';

export default {
	name: 'App',
	components: {
		NavBar,
	},

	setup(){
		const status = ref('active')
		const route = useRoute();
		const store = useStore();

		const enter = (el,done)=>{
			gsap.from(el,{
				duration: .5,
				x: '20px',
				opacity: 0,
				// ease: 'bounce.out',
				onComplete: done
			})
		}

		// 將infoIndex 的value 帶入讓這裡事件發生改變數據, 在navVisual 使用computed 來偵測是否變化再帶入值
		// const {infoIndexStatus} = navMixins();

		const afterEnter = ()=>{
		}

		// 滾動事件
		const wrapSrollevent = (e) =>{
			if(route.path === '/'){
				// console.log(e.target.scrollTop)
				const scrollY = e.target.scrollTop

				if(scrollY === 0 ){
					store.commit('nav/toggleIndexScrollHiddenStatus',false)
					console.log('傳送false')
				} else{
					store.commit('nav/toggleIndexScrollHiddenStatus',true)
					console.log('傳送true')
				}
			}
		}


		return {
			status,
			enter,
			afterEnter,
			wrapSrollevent,
		};
	}
}
</script>

<style  lang="scss">
@import './assets/scss/common/_reset';

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	width: 100%;
	background-color: gray;
	min-height: 100vh;
	.wrap{
		overflow-x: hidden;
		height: 100vh;
	}
	.body{
		padding-top: 60px;
	}
}
</style>
