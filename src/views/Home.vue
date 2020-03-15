<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator'

	@Component
	export default class Home extends Vue {}
</script>

<template>
	<div class="home">
		<h1>Hire me</h1>
		<p>josh3276 at gmail dot com</p>
	</div>
</template>

<style lang="scss" scoped>
	h1 {
		margin-top: 0;
	}
	.home {
		padding: 1rem;
	}
</style>
