<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator'
	import { Project } from '@/types'

	@Component
	export default class ProjectBlock extends Vue {
		@Prop({ required: true }) public project: Project
	}
</script>

<template>
	<div class="project">
		<h2>{{ project.name }}</h2>
		<div class="content container">
			<div class="image">
				<img :src="`./${project.image}`" />
			</div>
			<div class="description" v-html="project.description"></div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	img {
		width: 50%;
		border-radius: 0.5rem;
		box-shadow: 0 0.2rem 0.2rem rgba(0, 0, 0, 0.25);
	}

	.content {
		display: flex;
		width: 100%;
		align-items: top;
		.image {
			padding-right: 1rem;
			img {
				height: 540px;
				max-height: 60vh;
				width: auto;
			}
		}
		.description {
			padding-left: 1rem;
			div {
				margin: 1rem 0;
			}
		}
	}
</style>

<style lang="scss">
	@import '@/style/theme.scss';

	.description div {
		margin-top: 2rem;
		text-align: left;
		&:nth-child(1) {
			margin-top: 0;
		}
		em {
			color: $main-colour;
			font-style: normal;
		}
	}
</style>
