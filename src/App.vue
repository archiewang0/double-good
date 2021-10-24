<template>
	<div class="wrap" :class="status">
		<nav-bar></nav-bar>

		<div class="body">
			<router-view/>
		</div>

	</div>
</template>

<script>
import {ref} from 'vue';
import NavBar from './components/NavBar.vue'

export default {
	name: 'App',
	components: {
		NavBar,
	},

	setup(){
		const status = ref('active')

		return {
			status,
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
		overflow: auto;
	}
	.body{
		padding-top: 60px;
	}
}
</style>
