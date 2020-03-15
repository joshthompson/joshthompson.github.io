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
		<footer>
			<menu>
				Josh Thompson
			</menu>
		</footer>
	</div>
</template>

<style lang="scss">
	body {
		font-family: 'Inter', sans-serif;
		margin: 0;
	}

	#app {
		display: flex;
		flex-direction: column;
		height: 100vh;
	}

	.main {
		flex-grow: 1;
		background: #262933;
		color: #FFFFFF;
	}

	footer {
		background: #363944;
		color: #FFFFFF;

		menu {
			margin: 0;
			padding: 1rem;
		}
	}
</style>
