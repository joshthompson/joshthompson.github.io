<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator'
	import ProjectBlock from '@/components/ProjectBlock.vue'
	import projects from '@/services/projects'
	import { Project } from '@/types'

	@Component({
		components: { ProjectBlock }
	})
	export default class Home extends Vue {
		public projects: Project[] = projects
	}
</script>

<template>
	<div class="home">

		<div style="background: #111111; color: #7CE450; border-radius: 1rem; padding: 1rem 2rem; margin-bottom: 2rem;">
			<h2>Hello!</h2>
			<p>Sorry, my portfolio is (probably) under construction! - 19/03/2020</p>
		</div>

		<h1>Hej! I'm <em>Josh Thompson</em></h1>
		<p>I am a Stockholm based frontend web developer.</p>
		<p>Unless you wanna skip to my <a>CV</a>, lets get straight to some of my work!</p>

		<div class="projects">
			<ProjectBlock
				v-for="project in projects"
				:key="project.id"
				:project="project"
			/>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	@import '@/style/theme.scss';

	em {
		font-style: normal;
		color: $main-colour;
	}

	h1 {
		margin: 0 0 3rem;
	}

	.home {
		margin: 3rem;
	}

	.projects {
		margin-top: 3rem;
	}
</style>
