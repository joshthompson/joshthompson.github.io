<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator'
	import { Project } from '@/types'
	import ProjectBlock from './ProjectBlock.vue'
	import projects from '@/services/projects'

	@Component({
		components: { ProjectBlock }
	})
	export default class ProjectBlocks extends Vue {
		public projects: Project[] = projects
	}
</script>

<template>
	<div>
		<main id="projects">
			<ProjectBlock
				class="container"
				v-for="project in projects"
				:key="project.id"
				:project="project"
			/>
		</main>
</div>
</template>
