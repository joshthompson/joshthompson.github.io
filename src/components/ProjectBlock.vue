<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator'
	import { Project } from '@/types'

	@Component
	export default class ProjectBlock extends Vue {
		@Prop({ required: true }) public project: Project

		public selectImage(project: Project, i: number) {
			project.currentImage = i
		}
	}
</script>

<template>
	<div class="project">
		<h2>{{ project.name }}</h2>
		<div class="when">{{ project.when }}</div>
		<div class="website" v-if="project.website">
			<a class="link" :href="project.website" target="_blank">{{ project.website }}</a>
		</div>
		<div class="content container">
			<div class="image">
				<div class="main">
					<img :src="`./${project.images[project.currentImage]}`" />
				</div>
				<div v-if="project.images.length > 1" class="thumbs">
					<img
						v-for="(image, i) in project.images"
						:key="i"
						:src="image"
						:class="{ selected: i === project.currentImage }"
						@click="selectImage(project, i)"
					/>
					<div class="description">(Click thumbnails to switch image)</div>
				</div>
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
		margin-bottom: 0.5rem;
	}

	.company {
		margin-bottom: 0.5rem;
	}

	.website {
		margin-bottom: 0.5rem;
	}

	.content {
		display: flex;
		width: 100%;
		align-items: top;
		margin-top: 1.5rem;

		.image {
			padding-right: 1rem;

			.main img {
				width: 500px;
				max-width: 45vw;

				@include small {
					max-width: 100%;
					height: auto;
					max-height: none;
				}
			}

			.thumbs {
				img {
					width: 100px;
					margin: 0.5rem 0.5rem 0;
					// border: 3px solid transparent;
					cursor: pointer;
					filter: saturate(0.5) brightness(0.7);
					transition: transform ease-in-out 0.2s;
					max-width: 25%;

					&.selected {
						// border-color: #FFFFFF;
						transform: scale(1.1);
					}

					&.selected,
					&:hover,
					&:focus {
						filter: saturate(1) brightness(1);
					}
				}

				.description {
					color: rgba(255, 255, 255, 0.5);
					margin-top: 1rem;
					font-size: 0.75rem;
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
