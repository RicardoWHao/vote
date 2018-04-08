<template>
	<div id="app">
		<pageTitle></pageTitle>
	</div>

</template>

<script>
	//调用子组件对象      "./"表示同级目录
	import login from './vote/login.vue';
	import pageTitle from './vote/title.vue';
	export default {
		name: 'App',
		components: {
			login,
			pageTitle
		}
	}
</script>