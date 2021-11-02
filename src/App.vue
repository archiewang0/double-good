<template>
	<div class="wrap" :class="status">
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
import {ref} from 'vue';
import NavBar from './components/nav/NavBar'

import gsap from 'gsap';

export default {
	name: 'App',
	components: {
		NavBar,
	},

	setup(){
		const status = ref('active')

		const enter = (el,done)=>{
			gsap.from(el,{
				duration: .5,
				x: '20px',
				opacity: 0,
				// ease: 'bounce.out',
				onComplete: done
			})
		}

		const afterEnter = ()=>{
			console.log('after enter')
		}

		return {
			status,
			enter,
			afterEnter,
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
