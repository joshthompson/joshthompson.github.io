<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator'
	import Home from '@/views/Home.vue'

	@Component({
		components: { Home }
	})
	export default class App extends Vue {}
</script>

<template>
	<div id="app">
		<div class="main">
			<Home />
		</div>
	</div>
</template>

<style lang="scss">
	@import '@/style/app.scss';
</style>
