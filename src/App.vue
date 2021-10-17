<template>
	<nav-bar></nav-bar>


</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
	name: 'App',
	components: {
		NavBar,
	}
}
</script>

<style  lang="scss">
@import './common/scss/_reset';

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	width: 100%;
	background-color: gray;
	min-height: 100vh;

}
</style>
