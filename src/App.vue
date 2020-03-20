<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator'

	@Component
	export default class App extends Vue {}
</script>

<template>
	<div id="app">
		<div class="main">
			<router-view />
		</div>
	</div>
</template>

<style lang="scss">
	@import '@/style/app.scss';
</style>
