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
		<div class="when">{{ project.when }}</div>
		<div class="content container">
			<div class="image">
				<img :src="`./${project.image}`" />
			</div>
			<div class="body">
				<div class="description" v-html="project.description"></div>
				<div class="technologies" v-if="project.technologies">
					<span>Technologies used:</span>
					<div>
						<div v-for="(tech, i) in project.technologies" :key="i" class="tag">
							{{ tech }}
						</div>
					</div>
				</div>
			</div>
		</div>
		<hr />
	</div>
</template>

<style lang="scss" scoped>
	@import '@/style/theme.scss';
	@import '@/style/responsive.scss';

	h2 {
		margin-bottom: 0.5rem;
	}

	.when {
		color: rgba(255, 255, 255, 0.5);
		font-size: 1.25rem;
		margin-bottom: 2rem;
	}

	.content {
		display: flex;
		width: 100%;
		align-items: top;

		.image {
			padding-right: 1rem;

			img {
				width: 500px;
				max-width: 30vw;

				@include small {
					max-width: 100%;
					height: auto;
					max-height: none;
				}
			}

			@include small {
				padding: 0;
			}
		}

		.body {
			padding-left: 1rem;

			@include small {
				padding: 1rem 0 0;
			}
		}
		
		@include small {
			flex-direction: column;
		}
	}

	.technologies {
		text-align: left;

		@include small {
			text-align: center;
		}

		span {
			line-height: 3rem;
			margin-right: 0.5rem;
		}

		.tag {
			display: inline-block;
			text-align: center;
			background: $main-colour;
			color: $dark-colour;
			padding: 0.25rem 0.5rem;
			border-radius: 0.25rem;
			margin: 0.5rem 0.5rem 0 0;
		}
	}
</style>

<style lang="scss">
	@import '@/style/responsive.scss';

	.description div {
		margin-bottom: 1rem;
		text-align: left;

		@include small {
			text-align: center;
		}

		&:nth-child(1) {
			margin-top: 0;
		}
	}

	.project img {
		width: 50%;
		max-width: 100%;
		border-radius: 0.5rem;
		box-shadow: 0 0.2rem 0.2rem rgba(0, 0, 0, 0.25);
	}
</style>
